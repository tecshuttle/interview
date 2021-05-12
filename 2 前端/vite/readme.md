https://vitejs.cn



# 为什么选 Vite

## 现实问题

在浏览器支持 ES 模块之前，开发者没有以模块化的方式开发 JavaScript 的原生机制。这也是 “打包” 这个概念出现的原因：使用工具抓取、处理和链接我们的源码模块到文件中，使其可以运行在浏览器中。

时过境迁，我们见证了许多诸如 [webpack](https://webpack.js.org/)、[Rollup](https://rollupjs.org/) 和 [Parcel](https://parceljs.org/) 等工具的诞生，这些工具极大地改善了前端开发者的开发体验。

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。大型项目包含数千个模块的情况并不少见。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，越来越多 JavaScript 工具使用编译型语言编写。

# 比较

## Snowpack

[Snowpack](https://www.snowpack.dev/) 也是一个与 Vite 十分类似的非构建式原生 ESM 开发服务器。除了不同的实现细节外，这两个项目在技术上比传统工具有很多共同优势。Vite 的依赖预绑定也受到了 Snowpack v1（现在是 [`esinstall`](https://github.com/snowpackjs/snowpack/tree/main/esinstall)）的启发。这两个项目之间的一些主要区别是：

**生产构建**

Snowpack 的默认构建输出是未打包的：它将每个文件转换为单独的构建模块，然后将这些模块提供给执行实际绑定的不同“优化器”。这么做的好处是，你可以选择不同终端打包器，以适应不同需求（例如 webpack, Rollup，甚至是 ESbuild），缺点是体验有些支离破碎 —— 例如，`esbuild` 优化器仍然是不稳定的，Rollup 优化器也不是官方维护，而不同的优化器又有不同的输出和配置。

为了提供更流畅的体验，Vite 选择了与单个打包器（Rollup）进行更深入的集成。Vite 还支持一套 [通用插件 API](https://vitejs.cn/guide/api-plugin.html) 扩展了 Rollup 的插件接口，开发和构建两种模式都适用。

Vite 支持广泛的功能，构建过程也集成度更高，以下功能目前在 Snowpack 构建优化器中不可用：

- [多页面应用支持](https://vitejs.cn/guide/build.html#多页面应用模式)
- [库模式](https://vitejs.cn/guide/build.html#库模式)
- [自动分割 CSS 代码](https://vitejs.cn/guide/features.html#CSS-代码分割)
- [预优化的异步 chunk 加载](https://vitejs.cn/guide/features.html#异步-Chunk-加载优化)
- [自动动态导入 polyfill](https://vitejs.cn/guide/features.html#动态导入-Polyfill)
- 官方 [兼容模式插件](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 打包为现代/传统两种产物，并根据浏览器支持自动交付正确的版本。

# vite 快速搭建 Vue3 + TypeScript 项目

https://zhuanlan.zhihu.com/p/354373454