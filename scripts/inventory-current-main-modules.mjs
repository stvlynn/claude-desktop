import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const referencePath = path.join(root, "ref", ".vite", "build", "index.js");
const sourceText = fs.readFileSync(referencePath, "utf8");
const sourceFile = ts.createSourceFile(
  referencePath,
  sourceText,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.JS,
);

function propertyName(node) {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return node.text;
  return null;
}

function namespaceObject(initializer) {
  let result = null;
  function visit(node) {
    if (result) return;
    if (
      ts.isObjectLiteralExpression(node) &&
      node.properties.some(
        (property) =>
          ts.isPropertyAssignment(property) &&
          propertyName(property.name) === "__proto__",
      )
    ) {
      result = node;
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(initializer);
  return result;
}

const modules = [];
function visit(node) {
  if (
    ts.isVariableDeclaration(node) &&
    ts.isIdentifier(node.name) &&
    node.initializer
  ) {
    const object = namespaceObject(node.initializer);
    if (object) {
      const exports = object.properties
        .map((property) => {
          if (ts.isShorthandPropertyAssignment(property)) {
            return property.name.text;
          }
          if (
            ts.isPropertyAssignment(property) ||
            ts.isMethodDeclaration(property) ||
            ts.isGetAccessorDeclaration(property) ||
            ts.isSetAccessorDeclaration(property)
          ) {
            return propertyName(property.name);
          }
          return null;
        })
        .filter((name) => name && name !== "__proto__");
      if (exports.length > 0) {
        modules.push({
          binding: node.name.text,
          exports: [...new Set(exports)].sort(),
          line:
            sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1,
        });
      }
    }
  }
  ts.forEachChild(node, visit);
}
visit(sourceFile);

if (process.argv.includes("--json")) {
  console.log(
    JSON.stringify(
      { reference: path.relative(root, referencePath), modules },
      null,
      2,
    ),
  );
} else {
  console.log(`Current Claude main namespace modules: ${modules.length}`);
  for (const module of modules) {
    console.log(
      `${module.line}\t${module.binding}\t${module.exports.join(",")}`,
    );
  }
}
