# 《Webpack实战：入门、进阶与调优》

### 第1章 Webpack简介

何为Webpack
为什么需要Webpack
安装
打包第一个应用

### 第2章 模块打包

CommonJS
ES6 Module
CommonJS与ES6 Module的区别
加载其他类型模块
模块打包原理

### 第3章 资源输入输出

资源处理流程
配置资源入口
配置资源出口

### 第4章 预处理器

一切皆模块
loader概述
loader的配置
常用loader介绍
自定义loader

### 第5章 样式处理

分离样式文件
样式预处理
PostCSS
CSS Modules

### 第6章 代码分片

通过入口划分代码
CommonsChunkPlugin
optimization.SplitChunks
资源异步加载

### 第7章 生产环境配置

环境配置的封装
开启production模式
环境变量
source map
资源压缩
缓存
bundle体积监控和分析

### 第8章 打包优化

HappyPack
缩小打包作用域
动态链接库与DllPlugin
tree shaking

### 第9章 开发环境调优

Webpack开发效率插件
模块热替换

### 第10章 更多JavaScript打包工具

Rollup
Parcel
打包工具的发展趋势

# 附录

- 是否了解开源的工具 bower、npm、yeoman、grunt、gulp，一个 npm 的包里的 package.json 具备的必要的字段都有哪些？（名称、版本号，依赖）

## 前端模块化（CommonJs,AMD和CMD）

https://www.jianshu.com/p/d67bc79976e6

https://blog.csdn.net/tangxiujiang/article/details/81104174

https://segmentfault.com/a/1190000004873947#articleHeader7

https://blog.csdn.net/a250758092/article/details/78543440

## 什么是WebPack，为什么要使用它？

https://www.cnblogs.com/-walker/p/6056529.html

https://www.jianshu.com/p/42e11515c10f

https://www.cnblogs.com/lovesong/p/6413546.html

https://zhuanlan.zhihu.com/p/27355765

https://www.cnblogs.com/weven/p/7544606.html

https://www.cnblogs.com/Leo_wl/p/8031238.html

https://www.zhihu.com/question/37020798

https://blog.csdn.net/xllily_11/article/details/51782005

https://www.jianshu.com/p/fe96491ccf56

https://www.cnblogs.com/RuMengkai/p/6667321.html

常有人拿gulp与webpack来比较，知道这两个构建工具功能上有重叠的地方，可单用，也可一起用，但本质的区别就没有那么清晰。

### gulp

gulp强调的是前端开发的工作流程，我们可以通过配置一系列的task，定义task处理的事务（例如文件压缩合并、雪碧图、启动server、版本控制等），然后定义执行顺序，来让gulp执行这些task，从而构建项目的整个前端开发流程。

PS：简单说就一个Task Runner

### webpack

webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。

### 折腾

从 2015 到现在，短短的三年内，几乎每年折腾一下工作流的 “ 更新换代 ”。从最早开始使用 Grunt 到 Gulp 再到 Webpack，再到 Rollup，再到 Webpack@2.x ......

## Polyfill简介

https://blog.csdn.net/E_li_na/article/details/79925094