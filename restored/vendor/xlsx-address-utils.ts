// Restored from ref/webview/assets/address-utils-CS84EMiz.js
// AddressUtils chunk restored from the Codex webview bundle.
var addressUtilsValue1 = 7,
  addressUtilsValue2 = 0.1,
  addressUtilsValue3 = 0,
  addressUtilsValue4 = 2,
  addressUtilsValue5 = 4 / 3;
export const addressUtilsC = 8.43;
export function initXlsxAddressUtilsConstantsChunk() {}
export function initXlsxAddressUtilsChunk() {
  initXlsxAddressUtilsConstantsChunk();
}
function addressUtilsHelper1(_addressUtilsC) {
  return _addressUtilsC && _addressUtilsC > 0
    ? _addressUtilsC
    : addressUtilsValue1;
}
function addressUtilsHelper2(_addressUtilsC) {
  return Math.ceil(addressUtilsHelper1(_addressUtilsC));
}
export function addressUtilsU(_addressUtilsC, addressUtilsParam3) {
  return _addressUtilsC == null || _addressUtilsC <= 0
    ? 64
    : _addressUtilsC * addressUtilsHelper2(addressUtilsParam3);
}
export function addressUtilsH(_addressUtilsC, addressUtilsParam2) {
  if (!Number.isFinite(_addressUtilsC) || _addressUtilsC <= 0) return 0;
  let addressUtilsValue24 =
    _addressUtilsC / addressUtilsHelper2(addressUtilsParam2);
  return Math.round(addressUtilsValue24 * 100) / 100;
}
export function addressUtilsM(_addressUtilsC) {
  return (
    ((_addressUtilsC == null || _addressUtilsC === 0 ? 15 : _addressUtilsC) *
      96) /
    72
  );
}
export function addressUtilsG(_addressUtilsC) {
  return Number.isFinite(_addressUtilsC ?? 0)
    ? ((_addressUtilsC ?? 0) * 72) / 96
    : 15;
}
export function addressUtilsUnderscore(_addressUtilsC) {
  let addressUtilsValue23 = _addressUtilsC > 0 ? _addressUtilsC : 11;
  return {
    padLr: Math.max(
      addressUtilsValue4,
      Math.floor(addressUtilsValue23 * addressUtilsValue2),
    ),
    padTb: Math.max(
      addressUtilsValue5,
      Math.floor(addressUtilsValue23 * addressUtilsValue3),
    ),
  };
}
function addressUtilsF(_addressUtilsC) {
  let addressUtilsValue19 = ``;
  for (_addressUtilsC += 1; _addressUtilsC; ) {
    let addressUtilsValue27 = (_addressUtilsC - 1) % 26;
    ((addressUtilsValue19 =
      String.fromCharCode(65 + addressUtilsValue27) + addressUtilsValue19),
      (_addressUtilsC = Math.floor(
        (_addressUtilsC - addressUtilsValue27) / 26,
      )));
  }
  return addressUtilsValue19;
}
function addressUtilsD(_addressUtilsC) {
  let addressUtilsValue21 = _addressUtilsC.match(/[A-Z]+/);
  if (!addressUtilsValue21) return 0;
  let addressUtilsValue22 = 0;
  for (let __addressUtilsC of addressUtilsValue21[0])
    addressUtilsValue22 =
      addressUtilsValue22 * 26 + (__addressUtilsC.charCodeAt(0) - 64);
  return addressUtilsValue22 - 1;
}
function addressUtilsV(_addressUtilsC) {
  let addressUtilsValue28 = _addressUtilsC.match(/\d+/);
  return addressUtilsValue28 ? parseInt(addressUtilsValue28[0], 10) - 1 : 0;
}
export function addressUtilsL(_addressUtilsC) {
  let addressUtilsValue13 = _addressUtilsC.replace(/^0x/i, ``);
  return addressUtilsValue13.length === 8
    ? `rgba(${parseInt(addressUtilsValue13.slice(2, 4), 16)}, ${parseInt(addressUtilsValue13.slice(4, 6), 16)}, ${parseInt(addressUtilsValue13.slice(6, 8), 16)}, ${(1).toFixed(3)})`
    : addressUtilsValue13.length === 6
      ? `#${addressUtilsValue13}`
      : `#ffffff`;
}
export function addressUtilsP(_addressUtilsC) {
  if (_addressUtilsC != null)
    return _addressUtilsC === 64
      ? `#000000`
      : `#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#800000.#008000.#000080.#808000.#800080.#008080.#C0C0C0.#808080.#9999FF.#993366.#FFFFCC.#CCFFFF.#660066.#FF8080.#0066CC.#CCCCFF.#000080.#FF00FF.#FFFF00.#00FFFF.#800080.#800000.#008080.#0000FF.#00CCFF.#CCFFFF.#CCFFCC.#FFFF99.#99CCFF.#FF99CC.#CC99FF.#FFCC99.#3366FF.#33CCCC.#99CC00.#FFCC00.#FF9900.#FF6600.#666699.#969696.#003366.#339966.#003300.#333300.#993300.#993366.#333399.#333333`.split(
          `.`,
        )[_addressUtilsC];
}
function addressUtilsA(_addressUtilsC) {
  let addressUtilsValue6 = addressUtilsI(_addressUtilsC);
  if (!addressUtilsValue6) return null;
  let addressUtilsValue7 = addressUtilsValue6.split(`:`),
    addressUtilsValue8 = addressUtilsValue7[0];
  if (!addressUtilsValue8) return null;
  let addressUtilsValue9 = addressUtilsValue7[1] ?? addressUtilsValue8,
    addressUtilsValue10 = addressUtilsV(addressUtilsValue8),
    addressUtilsValue11 = addressUtilsD(addressUtilsValue8),
    addressUtilsValue12 = addressUtilsV(addressUtilsValue9),
    _addressUtilsU = addressUtilsD(addressUtilsValue9),
    _addressUtilsH = {
      startRow: Math.min(addressUtilsValue10, addressUtilsValue12),
      startCol: Math.min(addressUtilsValue11, _addressUtilsU),
      endRow: Math.max(addressUtilsValue10, addressUtilsValue12),
      endCol: Math.max(addressUtilsValue11, _addressUtilsU),
    };
  return {
    ref: addressUtilsN(_addressUtilsH),
    bounds: _addressUtilsH,
  };
}
function addressUtilsN(_addressUtilsC) {
  let addressUtilsValue25 = addressUtilsR(
      _addressUtilsC.startRow,
      _addressUtilsC.startCol,
    ),
    addressUtilsValue26 = addressUtilsR(
      _addressUtilsC.endRow,
      _addressUtilsC.endCol,
    );
  return addressUtilsValue25 === addressUtilsValue26
    ? addressUtilsValue25
    : `${addressUtilsValue25}:${addressUtilsValue26}`;
}
function addressUtilsR(_addressUtilsC, addressUtilsParam4) {
  return `${addressUtilsF(addressUtilsParam4)}${_addressUtilsC + 1}`;
}
function addressUtilsI(_addressUtilsC) {
  let addressUtilsValue20 = _addressUtilsC.trim();
  return addressUtilsValue20
    ? (addressUtilsValue20.includes(`!`)
        ? addressUtilsValue20.slice(addressUtilsValue20.indexOf(`!`) + 1)
        : addressUtilsValue20
      )
        .replace(/\$/g, ``)
        .toUpperCase()
    : null;
}
export function addressUtilsT(_addressUtilsC) {
  return {
    rows: _addressUtilsC.endRow - _addressUtilsC.startRow + 1,
    cols: _addressUtilsC.endCol - _addressUtilsC.startCol + 1,
  };
}
export function addressUtilsO(_addressUtilsC, addressUtilsParam1) {
  return (
    _addressUtilsC.startRow <= addressUtilsParam1.endRow &&
    _addressUtilsC.endRow >= addressUtilsParam1.startRow &&
    _addressUtilsC.startCol <= addressUtilsParam1.endCol &&
    _addressUtilsC.endCol >= addressUtilsParam1.startCol
  );
}
export function addressUtilsS(_addressUtilsC) {
  let addressUtilsValue14 = _addressUtilsC.startsWith(`=`)
      ? _addressUtilsC.slice(1)
      : _addressUtilsC,
    addressUtilsValue15 = addressUtilsValue14.indexOf(`!`);
  if (addressUtilsValue15 === -1)
    return {
      ref: addressUtilsA(addressUtilsValue14)?.ref ?? addressUtilsValue14,
    };
  let addressUtilsValue16 = addressUtilsValue14.slice(0, addressUtilsValue15),
    addressUtilsValue17 = addressUtilsValue14.slice(addressUtilsValue15 + 1),
    addressUtilsValue18 = addressUtilsA(addressUtilsValue17);
  return {
    sheetName: addressUtilsHelper3(addressUtilsValue16),
    ref: addressUtilsValue18?.ref ?? addressUtilsValue17,
  };
}
function addressUtilsHelper3(_addressUtilsC) {
  return _addressUtilsC.startsWith(`'`) &&
    _addressUtilsC.endsWith(`'`) &&
    _addressUtilsC.length >= 2
    ? _addressUtilsC.slice(1, -1).replace(/''/g, `'`)
    : _addressUtilsC;
}
export {
  addressUtilsA,
  addressUtilsD,
  addressUtilsF,
  addressUtilsI,
  addressUtilsN,
  addressUtilsR,
  addressUtilsV,
};
