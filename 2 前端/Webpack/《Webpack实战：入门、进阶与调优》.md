# 前言

有时能听到一种戏称——Webpack配置工程师，从这里面大概能体会到Webpack的使用并不简单。而这本书的作用之一大概就是把里面比较晦涩的部分解释清楚，让大家了解Webpack是怎么工作的，它其实并不神秘。

# 第1章 Webpack简介

## 1 何为Webpack

何为Webpack？核心功能是解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起。

## 2 为什么需要Webpack

通过script标签引入文件的缺点

- 需要手动维护JavaScript的加载顺序；
- 每个script标签都需要向服务器请求一次静态资源；
- 每个script标签中，顶层作用域即全局作用域。

从2009年开始，JavaScript社区开始对模块化进行不断的尝试，并依次出现AMD、CommonJS、CMD等解决方案。

### 何为模块

### JavaScript中的模块

在大多数程序语言中（如C、C++、Java），开发者都可以直接使用模块化进行开发。工程中的各个模块在经过编译、链接等过程后会被整合成单一的可执行文件并交由系统运行。

对于JavaScript来说，情况则有所不同。在过去的很长一段时间里，JavaScript这门语言并没有模块这一概念。如果工程中有多个JS文件，我们只能通过script标签将它们一个个插入页面中。

### 模块打包工具

### 为什么选择Webpack

- Webpack默认支持多种模块标准，包括AMD、CommonJS，以及最新的ES6模块，而其他工具大多只能支持一到两种。
- Webpack有完备的代码分割（code splitting）解决方案。
- Webpack可以处理各种类型的资源。
- Webpack拥有庞大的社区支持。



## 3 安装

## 4 打包第一个应用

### Hello World

### 使用npm scripts

### 使用默认目录配置

### 使用配置文件

### webpack-dev-server

Webpack-dev-server还有一项很便捷的特性就是live-reloading（自动刷新）。在后面我们还会讲到更先进的hot-module-replacement（模块热替换），我们甚至不需要刷新浏览器就能获取更新之后的内容。

## 5 本章小结



# 第2章 模块打包

## 1 CommonJS 

CommonJS最初只为服务端而设计，直到有了Browserify——一个运行在Node.js环境下的模块打包工具，它可以将CommonJS模块打包为浏览器可以运行的单个文件。

CommonJS中规定每个文件是一个模块。将一个JavaScript文件直接通过script标签插入页面中与封装成CommonJS模块最大的不同在于，前者的顶层作用域是全局作用域，在进行变量及函数声明时会污染全局环境；而后者会形成一个属于模块自身的作用域，所有的变量及函数只有自己能访问，对外是不可见的。

当我们require一个模块时会有两种情况：

- 模块是第一次被加载。这时会首先执行该模块，然后导出内容。
- 模块曾被加载过。这时该模块的代码不会再次执行，而是直接导出上次执行后得到的结果 。

**注：执行该模块是什么？**

2.1.1　模块18
2.1.2　导出18
2.1.3　导入20

## 2 ES6 Module

export有两种形式

- 命名导出
- 默认导出

```js
import React, { Component } from 'react';
```

2.2.1　模块22
2.2.2　导出23
2.2.3　导入24
2.2.4　复合写法26

## 3 CommonJS与ES6 Module的区别

- 动态与静态
- 值拷贝与动态映射
- 循环依赖

## 4 加载其他类型模块

AMD、UMD等标准目前使用的场景已经不多，但当遇到这类模块时仍然需要知道如何去处理。

2.4.1　非模块化文件34
2.4.2　AMD34
2.4.3　UMD35
2.4.4　加载npm模块37

## 5　模块打包原理

## 6　本章小结



# 第3章 资源输入输出

3.1　资源处理流程42
3.2　配置资源入口44
3.2.1　context44
3.2.2　entry45
3.2.3　实例47
3.3　配置资源出口50
3.3.1　filename50
3.3.2　path53
3.3.3　publicPath54
3.3.4　实例56
3.4　本章小结57

# 第4章 预处理器

预处理器（loader），它赋予了Webpack可处理不同资源类型的能力，极大丰富了其可扩展性。

## 1 一切皆模块

## 2 loader概述

每个loader本质是都是一个函数。

## 3 loader的配置

loader的字面意思是装载器，在Webpack中它的实际功能则理像是预处理器。Webpack本身只认识JavaScript，对于其他类型的资源必须预先定义一个或多个loader对其进行转译，输出为Webpack能够接收的形式再继续进行，因此loader做的实际上是一个预处理的工作。

### loader的引入

### 链式loader

### loader options

### 更多配置

## 4 常用loader介绍 

- babel-loader
- ts-loader
- handlebars-loader
- html-loader：将HTML文件转化为字符串并进行格式化，这使得我们可以把一个HTML片段通过JS加载进来。
- file-loader：用于打包文件类型的资源，并返回其publicPath。
- url-loader：与file-loader作用类似，唯一的不同在于用户可以设置一个文件大小的阈值，当大于该阈值时与file-loader一样返回publicPath，而小于该阈值时则返回文件base64形式编码。
- vue-loader

## 4.5　自定义loader78

## 4.6　本章小结82

# 第5章 样式处理

5.1　分离样式文件84
5.1.1　extract-text-webpack-plugin85
5.1.2　多样式文件的处理87
5.1.3　mini-css-extract-plugin89
5.2　样式预处理91
5.2.1　Sass与SCSS91
5.2.2　Less93
5.3　PostCSS94
5.3.1　PostCSS与Webpack94
5.3.2　自动前缀95
5.3.3　stylelint96
5.3.4　CSSNext98
5.4　CSS Modules99
5.5　本章小结100

# 第6章 代码分片

6.1　通过入口划分代码101
6.2　CommonsChunkPlugin102
6.2.1　提取vendor105
6.2.2　设置提取范围106
6.2.3　设置提取规则107
6.2.4　hash与长效缓存109
6.2.5　CommonsChunkPlugin的不足111
6.3　optimization.SplitChunks112
6.3.1　从命令式到声明式114
6.3.2　默认的异步提取115
6.3.3　配置116
6.4　资源异步加载117
6.4.1　import()118
6.4.2　异步chunk的配置120
6.5　本章小结121

# 第7章 生产环境配置

7.1　环境配置的封装122
7.2　开启production模式124
7.3　环境变量125
7.4　source map126
7.4.1　原理126
7.4.2　source map配置127
7.4.3　安全129
7.5　资源压缩130
7.5.1　压缩JavaScript130
7.5.2　压缩CSS132
7.6　缓存133
7.6.1　资源hash133
7.6.2　输出动态HTML134
7.6.3　使chunk id更稳定136
7.7　bundle体积监控和分析138
7.8　本章小结140

# 第8章 打包优化

8.1　HappyPack141
8.1.1　工作原理142
8.1.2　单个loader的优化142
8.1.3　多个loader的优化144
8.2　缩小打包作用域145
8.2.1　exclude和include145
8.2.2　noParse146
8.2.3　IgnorePlugin146
8.2.4　Cache147
8.3　动态链接库与DllPlugin147
8.3.1　vendor配置148
8.3.2　vendor打包149
8.3.3　链接到业务代码150
8.3.4　潜在问题151
8.4　tree shaking152
8.4.1　ES6 Module153
8.4.2　使用Webpack进行依赖关系构建153
8.4.3　使用压缩工具去除死代码154
8.5　本章小结154

# 第9章 开发环境调优

9.1　Webpack开发效率插件155
9.1.1　webpack-dashboard155
9.1.2　webpack-merge157
9.1.3　speed-measure-webpack-plugin160
9.1.4　size-plugin160
9.2　模块热替换162
9.2.1　开启HMR162
9.2.2　HMR原理164
9.2.3　HMR API示例166
9.3　本章小结168

# 第10章 更多JavaScript打包工具

## 1 Rollup

### 配置

如果用webpack与Rollup进行比较的话，那么Webpack的优势在于它更全面，基于“一切皆模块”的思想而衍生出丰富的loader和plugin可以满足各种使用场景；；而Rollup则更像一把手术刀，它更专注于JavaScript的打包。如果当前的项目需求仅仅是打包JavaScript，比如一个JavaScript库，那么JavsScript很多时候会是我们的第一选择。

### tree shaking

在前面webpack的章节中已经介绍过tree shaking，而实际上tree shaking这个特性最开始是由Rollup实现的，而后被Webpack借鉴了过去。

Rollup的tree shaking也是基于对ES6 Module的静态分析，找出没有被引用过的模块，将其从最后生成的bundle中排除。

### 可选的输出格式

### 使用Rollup构建JavaScript库

Rollup在设计之初就主要偏向于JavaScript库的构建，以至于它没有Webpack对于应用开发那样强大的支持（各种loader和plugin、HMR等），所以我们在使用Rollup进行这类项目开发前还是要进行仔细斟酌。

## 2 Parcel

Parcel在JavaScript打包工具中属于相对后来者（根据npm上的数据，Parcel最早的版本上传于2017年8月，Webpack和Rollup则分别是2012年3月和2015年5月）。在Parcel官网的Benchmark测试中，在有缓存的情况下其打包速度要比webpack快将近8倍，且宣称自己是零配置的。它的出现正好契合了当时开发者们对于webpack打包速度慢和配置复杂的抱怨，从而吸引了众多用户。

### 打包速度

Parcel在打包速度的优化上主要做了3件事：

- 利用worker来并行执行任务
- 文件系统缓存
- 资源编译处理流程优化

### 零配置

Parcel相比Webpack的优势在于快和灵巧。假如我们需要在很短的时间内搭建一人原型，或者不需要进行深度定制的工程，那么使用Parcel的话前期开发速度会很快。以前即使做一个小工程使用Webpack也要先写一堆配置，现在我们多了另外一种选择。

## 3 打包工具的发展趋势

### 性能与通用性

### 配置极小化与工程标准化

### WebAssembly

## 4 本章小结



# 参考资料

- 是否了解开源的工具 bower、npm、yeoman、grunt、gulp，一个 npm 的包里的 package.json 具备的必要的字段都有哪些？（名称、版本号，依赖）

## 前端模块化（CommonJs,AMD和CMD）

[前端模块化（CommonJs,AMD和CMD）](https://www.jianshu.com/p/d67bc79976e6)

[AMD、CMD、CommonJs、ES6的对比](https://blog.csdn.net/tangxiujiang/article/details/81104174)

[AMD, CMD, CommonJS和UMD](https://segmentfault.com/a/1190000004873947)

[关于webpack，babel，以及es6和commonJS之间的联系](https://blog.csdn.net/a250758092/article/details/78543440)

## 什么是WebPack，为什么要使用它？

[什么是WebPack，为什么要使用它？](https://www.cnblogs.com/-walker/p/6056529.html)

[gulp与webpack的区别](https://www.cnblogs.com/lovesong/p/6413546.html)

[Gulp和Webpack对比](https://www.cnblogs.com/RuMengkai/p/6667321.html)

[JavaScript自动化构建工具入门----grunt、gulp、webpack](https://www.cnblogs.com/weven/p/7544606.html)

[Webpack vs Gulp](https://www.cnblogs.com/Leo_wl/p/8031238.html)

[前端团队 Gulp & Webpack 工作流 迁移记](https://zhuanlan.zhihu.com/p/27355765)

[Webpack、Browserify和Gulp三者之间到底是怎样的关系？](https://www.zhihu.com/question/37020798)

[Gulp和webpack的区别，是一种工具吗？](https://blog.csdn.net/xllily_11/article/details/51782005)

[如何看待 Grunt、Gulp 和 Webpack](https://www.jianshu.com/p/fe96491ccf56)



常有人拿gulp与webpack来比较，知道这两个构建工具功能上有重叠的地方，可单用，也可一起用，但本质的区别就没有那么清晰。

### gulp

gulp强调的是前端开发的工作流程，我们可以通过配置一系列的task，定义task处理的事务（例如文件压缩合并、雪碧图、启动server、版本控制等），然后定义执行顺序，来让gulp执行这些task，从而构建项目的整个前端开发流程。

PS：简单说就一个Task Runner

### webpack

webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。

### 折腾

从 2015 到现在，短短的三年内，几乎每年折腾一下工作流的 “ 更新换代 ”。从最早开始使用 Grunt 到 Gulp 再到 Webpack，再到 Rollup，再到 Webpack@2.x ......

[Polyfill简介](https://blog.csdn.net/E_li_na/article/details/79925094)