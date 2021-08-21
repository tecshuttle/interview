# 第1章 Node简介 

1 Node的诞生历程 
2 Node的命名与起源 
为什么是JavaScript 
为什么叫Node 
3 Node给JavaScript带来的意义 
4 Node的特点 
异步I/O 
事件与回调函数 
单线程 
跨平台 
5 Node的应用场景 
I/O密集型 
是否不擅长CPU密集型业务 
与遗留系统和平共处 
分布式应用 
6 Node的使用者 

# 第2章 模块机制 

1 CommonJS规范 
CommonJS的出发点 
CommonJS的模块规范 
2 Node的模块实现 
优先从缓存加载 
路径分析和文件定位 
模块编译 
3 核心模块 
JavaScript核心模块的编译过程 
C/C++核心模块的编译过程 
核心模块的引入流程 
编写核心模块 
4 C/C++扩展模块 
前提条件 
C/C++扩展模块的编写 
C/C++扩展模块的编译 
C/C++扩展模块的加载 
5 模块调用栈 
6 包与NPM 
包结构 
包描述文件与NPM 
NPM常用功能 
局域NPM 
NPM潜在问题 
7 前后端共用模块 
模块的侧重点 
AMD规范 
CMD规范 
兼容多种模块规范 

# 第3章 异步I/O 

1 为什么要异步I/O 
用户体验 
资源分配 
2 异步I/O实现现状 
异步I/O与非阻塞I/O 
理想的非阻塞异步I/O 
现实的异步I/O 
3 Node的异步I/O 
事件循环 
观察者 
请求对象 
执行回调 
4 非I/O的异步API 
定时器 
process.nextTick() 
setImmediate() 
5 事件驱动与高性能服务器 

# 第4章 异步编程 

1 函数式编程 
高阶函数 
偏函数用法 
2 异步编程的优势与难点 
优势 
难点 
3 异步编程解决方案 
事件发布/订阅模式 
Promise/Deferred模式 
流程控制库 
4 异步并发控制 
bagpipe的解决方案 
async的解决方案 

# 第5章 内存控制 

1 V8的垃圾回收机制与内存限制 
Node与V8 
V8的内存限制 
V8的对象分配 
V8的垃圾回收机制 
查看垃圾回收日志 
2 高效使用内存 
作用域 
闭包 
3 内存指标 
查看内存使用情况 
堆外内存 
4 内存泄漏 
慎将内存当做缓存 
关注队列状态 
5 内存泄漏排查 
node-heapdump 
node-memwatch 
6 大内存应用 

# 第6章 理解Buffer 

1 Buffer结构 
模块结构 
Buffer对象 
Buffer内存分配 
2 Buffer的转换 
字符串转Buffer 
Buffer转字符串 
Buffer不支持的编码类型 
3 Buffer的拼接 
乱码是如何产生的 
setEncoding()与string_decoder() 
正确拼接Buffer 
4 Buffer与性能 

# 第7章 网络编程 

1 构建TCP服务 
TCP 
创建TCP服务器端 
TCP服务的事件 
2 构建UDP服务 
创建UDP套接字 
创建UDP服务器端 
创建UDP客户端 
UDP套接字事件 
3 构建HTTP服务 
HTTP 
http模块 
HTTP客户端 
4 构建WebSocket服务 
WebSocket握手 
WebSocket数据传输 
5 网络服务与安全 
TLS/SSL 
TLS服务 
HTTPS服务 

# 第8章 构建Web应用 

1 基础功能 
请求方法 
路径解析 
查询字符串 
Cookie 
Session 
缓存 
Basic认证 
2 数据上传 
表单数据 
其他格式 
附件上传 
数据上传与安全 
3 路由解析 
文件路径型 
MVC 
RESTful 
4 中间件 
异常处理 
中间件与性能 
5 页面渲染 
内容响应 
视图渲染 
模板 
Bigpipe 

# 第9章 玩转进程 

1 服务模型的变迁 
石器时代：同步 
青铜时代：复制进程 
白银时代：多线程 
黄金时代：事件驱动 
2 多进程架构 
创建子进程 
进程间通信 
句柄传递 
3 集群稳定之路 
进程事件 
自动重启 
负载均衡 
状态共享 
4 Cluster模块 
Cluster工作原理 
Cluster事件 

# 第10章 测试 

1 单元测试 
单元测试的意义 
单元测试介绍 
工程化与自动化 
2 性能测试 
基准测试 
压力测试 
基准测试驱动开发 
测试数据与业务数据的转换 

# 第11章 产品化 

1 项目工程化 
目录结构 
构建工具 
编码规范 
代码审查 
2 部署流程 
部署环境 
部署操作 
3 性能 
动静分离 
启用缓存 
多进程架构 
读写分离 
4 日志 
访问日志 
异常日志 
日志与数据库 
分割日志 
5 监控报警 
监控 
报警的实现 
监控系统的稳定性 
6 稳定性 
7 异构共存 

# 附录A 安装Node 

1 Windows系统下的Node安装 
2 Mac系统下Node的安装 
3 Linux系统下Node的安装 

# 附录B 调试Node 

1 Debugger 
2 Node Inspector 
安装Node Inspector 
错误堆栈 

# 附录C Node编码规范 

1 根源 
2 编码规范 
空格与格式 
命名规范 
比较操作 
字面量 
作用域 
数组与对象 
异步 
类与模块 
注解规范 
3 最佳实践 
冲突的解决原则 
给编辑器设置检测工具 
版本控制中的hook 
持续集成 

# 附录D 搭建局域NPM仓库 

1 NPM仓库的安装 
安装Erlang和CouchDB 
搭建NPM仓库 
2 高阶应用 
镜像仓库 
私有模块应用 
纯私有仓库 