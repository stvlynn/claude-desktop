# Claude Desktop

> [English](README.md) · **中文**

<p align="center">
  <strong>Claude Desktop macOS 客户端的非官方 TypeScript 重建工程。</strong>
</p>

<p align="center">
  <a href="docs/architecture.md">架构说明</a>
  ·
  <a href="docs/restoration-status.md">当前状态</a>
  ·
  <a href="docs/runtime-export-map.md">运行时映射</a>
</p>

<p align="center">
  <img alt="Platform" src="https://img.shields.io/badge/platform-macOS-black">
  <img alt="Runtime" src="https://img.shields.io/badge/runtime-Electron-47848F">
  <img alt="Language" src="https://img.shields.io/badge/language-TypeScript-3178C6">
  <img alt="UI" src="https://img.shields.io/badge/ui-React-61DAFB">
  <img alt="Package manager" src="https://img.shields.io/badge/package%20manager-Bun-f9f1e1">
</p>

## 项目简介

这个仓库将 Claude Desktop 的应用外壳重建为可读的 TypeScript 和 React 源码。
项目关注的是 `claude.ai` 外围的桌面端能力：Electron 窗口、preload API、原生菜单、
托盘、设置、Quick Window、Find in Page、Buddy，以及主窗口 overlay。

项目以本机安装的 Claude Desktop 作为参考来源，再把代码整理进 `src/` 下的可维护
源码结构。当前代码树可以进行 TypeScript 检查、质量门检查和 Vite 构建。

## 已包含能力

- Electron 主进程 bootstrap 和应用生命周期 wiring。
- 主窗口 shell：标题栏状态、加载错误 overlay、webview 健康状态处理。
- About、Buddy、Find in Page、Quick Window 的 renderer 入口。
- `window.claude`、Buddy、菜单 API、overlay visibility、quick-window 事件的
  preload/renderer 契约。
- 原生应用菜单和上下文菜单服务。
- 托盘控制器、更新辅助、桌面设置、日志和状态持久化边界。
- 大量 renderer shared 基础库：图标、UI primitives、hooks、parser、快捷键 helper、
  thread/review 工具、动画数据，以及 feature/entity slices。

## 快速开始

```bash
bun install
bun run typecheck
make quality
bun run build
```

启动开发 shell：

```bash
bun run dev
```

构建并启动 app shell：

```bash
bun run start
```

刷新本地 Claude Desktop 参考包：

```bash
make refresh-ref
```

## 项目结构

```text
claude-desktop/
├─ src/
│  ├─ main/                     # Electron 主进程
│  │  ├─ domain/                # 状态、常量、schema、契约
│  │  ├─ application/           # 应用服务和 IPC 编排
│  │  ├─ infrastructure/        # Electron、文件系统、git、托盘、更新 IO
│  │  ├─ interfaces/            # 边界契约
│  │  └─ preload/               # Preload/runtime 代码
│  ├─ renderer/                 # React renderer，按 FSD 组织
│  │  ├─ app/
│  │  ├─ pages/
│  │  ├─ widgets/
│  │  ├─ features/
│  │  ├─ entities/
│  │  └─ shared/
│  └─ shared/contracts/         # 跨进程契约
├─ ref/                         # 本地 Claude.app 参考解包
├─ restored/                    # 候选模块迁移池
├─ docs/                        # 架构和状态说明
├─ vite.*.config.ts             # main/preload/renderer 构建配置
└─ Makefile                     # 常用开发命令
```

## 当前状态

当前源码树可以构建，并通过现有检查：

```bash
bun run typecheck
make quality
bun run build
```

详细进度记录在 [docs/restoration-status.md](docs/restoration-status.md)。当前概要：

- Claude Desktop 参考版本：`@ant/desktop` `1.18286.0`。
- 已提升窗口入口：main、about、buddy、find-in-page、quick。
- 主进程已具备 lifecycle、menu、tray、settings、updates、plugin marketplace、
  workers、preload state 和 IPC 等服务边界。
- Renderer shared 基础层已经大规模提升。
- 大体量 main-window runtime 仍在推进中，完成前还不能认为行为完全闭合。

## 开发说明

`ref/` 由本机安装的 Claude Desktop 生成，应视为参考材料，不是源码真相。
`src/` 才是维护目标。

部分模块仍处在中间工作区中，用于恢复命名和模块边界。这些 checkpoint 对开发有用，
但不是项目的公开 API。

常用命令：

```bash
make inspect       # 检查当前主 renderer 参考入口
make deobf-plan    # 准备主 renderer runtime 的重命名计划
make runtime-map   # 应用已确认的 runtime export alias
make quality       # 运行可读性和还原质量门
```

## Roadmap

- 完成 main-window runtime 重建。
- 用真实平台行为替换 Buddy BLE stub。
- 补齐 renderer 侧 find-in-page 的 focus、blur、step、result 流程。
- 还原 OS 级 Quick Window 快捷键和 dictation lifecycle 集成。
- 将剩余 lifecycle、IPC 和平台模块提升到 `src/`。
- 增加可分发构建所需的 packaging 和 code-signing 目标。

## Star History

<a href="https://www.star-history.com/#stvlynn/claude-desktop&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=stvlynn/claude-desktop&type=Date" />
  </picture>
</a>

## 免责声明

这是一个非官方研究项目，与 Anthropic 无关。

Claude Desktop 以及解包出的参考材料可能受 Anthropic 的许可协议、服务条款和版权
约束。除非你拥有相应权利，否则不要再分发专有应用代码。
