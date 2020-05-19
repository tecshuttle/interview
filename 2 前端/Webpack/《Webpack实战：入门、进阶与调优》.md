# 《Webpack实战：入门、进阶与调优》

## 第1章 Webpack简介

1.1　何为Webpack1
1.2　为什么需要Webpack2
1.2.1　何为模块2
1.2.2　JavaScript中的模块3
1.2.3　模块打包工具4
1.2.4　为什么选择Webpack5
1.3　安装5
1.4　打包第一个应用7
1.4.1　Hello World7
1.4.2　使用npm scripts9
1.4.3　使用默认目录配置10
1.4.4　使用配置文件10
1.4.5　webpack-dev-server13
1.5　本章小结15

## 第2章 模块打包

2.1　CommonJS17
2.1.1　模块18
2.1.2　导出18
2.1.3　导入20
2.2　ES6 Module22
2.2.1　模块22
2.2.2　导出23
2.2.3　导入24
2.2.4　复合写法26
2.3　CommonJS与ES6 Module的区别26
2.3.1　动态与静态26
2.3.2　值拷贝与动态映射27
2.3.3　循环依赖29
2.4　加载其他类型模块33
2.4.1　非模块化文件34
2.4.2　AMD34
2.4.3　UMD35
2.4.4　加载npm模块37
2.5　模块打包原理38
2.6　本章小结41

## 第3章 资源输入输出

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

## 第4章 预处理器

4.1　一切皆模块59
4.2　loader概述61
4.3　loader的配置63
4.3.1　loader的引入63
4.3.2　链式loader65
4.3.3　loader options65
4.3.4　更多配置66
4.4　常用loader介绍70
4.4.1　babel-loader70
4.4.2　ts-loader72
4.4.3　html-loader73
4.4.4　handlebars-loader73
4.4.5　file-loader74
4.4.6　url-loader76
4.4.7　vue-loader77
4.5　自定义loader78
4.6　本章小结82

## 第5章 样式处理

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

## 第6章 代码分片

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

## 第7章 生产环境配置

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

## 第8章 打包优化

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

## 第9章 开发环境调优

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

## 第10章 更多JavaScript打包工具

10.1　Rollup169
10.1.1　配置170
10.1.2　tree shaking171
10.1.3　可选的输出格式172
10.1.4　使用Rollup构建JavaScript库173
10.2　Parcel173
10.2.1　打包速度174
10.2.2　零配置176
10.3　打包工具的发展趋势178
10.3.1　性能与通用性178
10.3.2　配置极小化与工程标准化178
10.3.3　WebAssembly179
10.4　本章小结180