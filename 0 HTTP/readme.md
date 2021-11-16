# HTTP

http状态码有那些？分别代表是什么意思？



## 30 张图解 HTTP 常见的面试题

https://zhuanlan.zhihu.com/p/112010468

### HTTP 基本概念



### Get 与 Post



### HTTP 特性



### HTTPS 与 HTTP



### HTTP/1.1、HTTP/2、HTTP/3 演变

## 参考资料

[可能是全网最全的http面试答案HTTP协议](https://juejin.cn/post/6844903865410650126)

[都2019年了，还问GET和POST的区别](https://zhuanlan.zhihu.com/p/57361216)

[POST与GET的区别及RESTful](http://blog.csdn.net/shiyaru1314/article/details/47294871)

[浏览器HTTP请求并发数和TCP连接的关系](https://blog.csdn.net/u012193330/article/details/99713563)

[401、402、403、404分别是什么意思？](https://www.cnblogs.com/lgj8/p/12072587.html)



# TCP/IP

## 太厉害了，终于有人能把TCP/IP 协议讲的明明白白了

https://zhuanlan.zhihu.com/p/147370653

### 1 计算机网络体系结构分层



### 2 TCP/IP 基础



### 3 传输层中的 TCP 和 UDP

#### TCP

##### 1 三次握手（重点）

- TCP 提供面向有连接的通信传输。面向有连接是指在数据通信开始之前先做好两端之间的准备工作。
- 所谓三次握手是指建立一个 TCP 连接时需要客户端和服务器端总共发送三个包以确认连接的建立。在socket编程中，这一过程由客户端执行connect来触发。

##### 2 四次挥手（重点）

- 四次挥手即终止TCP连接，就是指断开一个TCP连接时，需要客户端和服务端总共发送4个包以确认连接的断开。在socket编程中，这一过程由客户端或服务端任一方执行close来触发。
- 由于TCP连接是全双工的，因此，每个方向都必须要单独进行关闭，这一原则是当一方完成数据发送任务后，发送一个FIN来终止这一方向的连接，收到一个FIN只是意味着这一方向上没有数据流动了，即不会再收到数据了，但是在这个TCP连接上仍然能够发送数据，直到这一方向也发送了FIN。首先进行关闭的一方将执行主动关闭，而另一方则执行被动关闭。

**上面是一方主动关闭，另一方被动关闭的情况，实际中还会出现同时发起主动关闭的情况。**

##### 3 通过序列号与确认应答提高可靠性

##### 4 重发超时的确定

##### 5 以段为单位发送数据

##### 6 利用窗口控制提高速度

##### 7 滑动窗口控制

##### 8 窗口控制中的重发控制

### 4 网络层中的 IP 协议

## 参考资料

[字节跳动最爱考的前端面试题：计算机网络基础](https://mp.weixin.qq.com/s/v3U8CnI59JQsn-dbV3JyFA)

[71张图详解IP 地址、IP 路由、分片和重组、三层转发、ARP、ICMP](https://zhuanlan.zhihu.com/p/363651969)



# 缓存

## 设计一个无懈可击的浏览器缓存方案

https://zhuanlan.zhihu.com/p/28113197

一、浏览器缓存设计的思路和策略

- 无需验证
- 需要验证

二、技术细节

- "no-cache", "no-store", "must-revalidate"
  - no-cache: 虽然字面意义是“不要缓存”。但它实际上的机制是，仍然对资源使用缓存，但每一次在使用缓存之前必须（MUST）向服务器对缓存资源进行验证。
  - no-store: 不使用任何缓存。
  - must-revalidate: 如果你配置了max-age信息，当缓存资源仍然新鲜（小于max-age）时使用缓存，否则需要对资源进行验证。所以must-revalidate可以和max-age组合使用Cache-Control: must-revalidate, max-age=60。

- Expires VS. max-age

- Etag VS. Last-Modified
- max-age=0 VS. no-cache：在no-cache的情况下，浏览器在向服务器验证成功之前绝不会使用过期的缓存资源，而max-age=0则不一定了。虽然理论上来说它们的效果应该是一致的。

- public VS. private

三、缓存与ServiceWorker结合

随着Service Worker（以下简称SW）的普及和规范，我们可以使用SW提供的缓存接口替代HTTP缓存。当然SW的功能是强大的，除了缓存功能，还能够使用它来实现离线、数据同步、后台编译等等。

四、Chrome浏览器的缓存总揽以及HTTP/2缓存

preloader的相关指令已经是页面优化的常见手段之一，而通过这些指令下载的资源也都会暂存到内存中。根据一些材料，如果资源已经存在于缓存中，则可能不会再进行preload。需要注意的事情是，内存缓存在缓存资源时并不关心返回资源的HTTP缓存头Cache-Control是什么值，同时资源的匹配也并非仅仅是对URL做匹配，还可能会对Content-Type，CORS等其他特征做校验。

## 协商缓存

### 浅析HTTP缓存

https://mp.weixin.qq.com/s/dt1_TrjgAwRxz73vqeACiw

- Expires 和 Cache-Control 的区别
  - 时间区别：Cache-Control 为相对时间，相对于当前时间，如 60s 后缓存过期。
  - 优先级：Cache-Control优先级高。
  - HTTP 版本：Cache-Control是 HTTP/1.1 提出的，浏览器兼容性不佳。Expires 和 Cache-Control可同时存在。
- ETag 格式
  - ETag:W/"xxxxxxxx"：W/前缀代表使用弱类型验证，不需要每个字节都一样，例如页脚的时间 or 展示的广告不一样，都可以认为是一样的。
  - ETag:"xxxxxxx"
- Nginx中 ETag 由 last_modified 和 content_length 拼接而成。

### 强缓存和协商缓存

https://www.jianshu.com/p/fb59c770160c

- 强缓存：200
  - expires | cache-control | pragma
- 协商缓存：304
  - last-modified：不管内容是否发生变化。
  - etag：核对内容是否发生变化，消耗服务器资源。if-none-match
- 访问刷新分析
  - 标签进入、输入url回车进入：按缓存设计读取缓存。
  - 按刷新按钮、F5 刷新、网页右键“重新加载”：强缓存作废，走协商缓存。
  - ctrl + F5 强制刷新：设置no-cache协商缓存作废，重新获取数据。
- 缓存我们分为四类，按浏览器读取优先级顺序依次为：
  - Memory Cache
  - Service Worker Cache
  - HTTP Cache
  - Push Cache

### 协商缓存（缓存验证）

https://www.cnblogs.com/padding1015/p/15169091.html

附带条件请求

形如 If-xxx 这种样式的请求首部字段，都可称为条件请求。服务器接 收到附带条件的请求后，只有判断指定条件为真时，才会执行请求。协商缓存中，就有很多这样的附带条件请求。

协商缓存特点：

- 服务端校验
- 304 Not Modified状态码
- Last-Modified
- Etag

## 缓存（一）总览：从性能优化的角度看缓存

https://github.com/amandakelake/blog/issues/43

缓存分类

![](img/http_cache_1.png)

各类缓存技术优缺点

1. cookie：数据量小4K。
2. Web Storage：5M，本地储存数据都容易被篡改，容易受到XSS攻击。
3. indexDB：提供了一个结构化的、事务型的、高性能的NoSQL类型的数据库，包含了一组同步/异步API，这部分不好判断优缺点，主要看使用者。
4. Manifest（已经被web标准废除）。
5. PWA(Service Worker)：这位目前是最炙手可热的缓存明星，是官方建议替代Application Cache（Manifest）的方案。目前有三个限制（不能明说是缺点）：不能访问 DOM、不能使用同步 API、需要HTTPS协议。

大公司静态资源优化方案

- 配置超长时间的本地缓存 —— 节省带宽，提高性能
- 采用内容摘要作为缓存更新依据 —— 精确的缓存控制
- 静态资源CDN部署 —— 优化网络请求
- 更资源发布路径实现非覆盖式发布 —— 平滑升级

## 缓存（二）浏览器缓存机制：强缓存、协商缓存

https://github.com/amandakelake/blog/issues/41

Cache-Control: no-cache不会缓存数据到本地的说法是错误的，详情《HTTP权威指南》P182。

Cache-Control: no-store才是真正的不缓存数据到本地。

Cache-Control: public可以被所有用户缓存（多用户共享），包括终端和CDN等中间代理服务器。

Cache-Control: private只能被终端浏览器缓存（而且是私有缓存），不允许中继缓存服务器进行缓存。

几种状态码的区别

- 200：强缓Expires/Cache-Control存失效时，返回新的资源文件。
- 200(from cache): 强缓Expires/Cache-Control两者都存在，未过期，Cache-Control优先Expires时，浏览器从本地获取资源成功。
- 304(Not Modified )：协商缓存Last-modified/Etag没有过期时，服务端返回状态码304。

现在的200(from cache)已经变成了from disk cache(磁盘缓存)和from memory cache(内存缓存)两种。

整体流程图

<img src="img/http_cache_2.png" width="60%"/>

## 缓存（三）数据存储：cookie、Storage、indexedDB

https://github.com/amandakelake/blog/issues/13

1. cookie：4K，可以手动设置失效期
2. localStorage：5M，除非手动清除，否则一直存在
3. sessionStorage：5M，不可以跨标签访问，页面关闭就清理
4. indexedDB：浏览器端数据库，无限容量，除非手动清除，否则一直存在
5. Web SQL：关系数据库，通过SQL语句访问（已经被抛弃）

对比

- 如果是浏览器主窗体线程开发，同时存储数据结构简单，localStorage比较好；
- 如果数据结构比较复杂，同时对浏览器兼容性没什么要求，可以考虑使用indexedDB；
- 如果是在Service Workers中开发应用，只能使用indexedDB数据存储。
- indexedDB数据库的使用目前可以直接在http协议下使用，这个和cacheStorage缓存存储必须使用https协议不一样。

> cacheStorage缓存页面，indexedDB数据库缓存数据，两者一结合而就可以实现百分百的离线开发。

## WebStorage是什么？

https://www.jianshu.com/p/26e1e9fa7089

Web Storage又分为两种： sessionStorage 和localStorage ，即这两个是Storage的一个实例。从字面意思就可以很清楚的看出来，sessionStorage将数据保存在session中，浏览器关闭也就没了；而localStorage则一直将数据保存在客户端本地。

## PWA 系列 -Cache技术

https://zhuanlan.zhihu.com/p/52324412

## 浏览器缓存、CacheStorage、Web Worker 与 Service Worker

https://www.webascii.cn/article/5ef2cb72071be112473165b7/

## 从 0 到 1 上手 bfcache 往返缓存

https://mp.weixin.qq.com/s/eAxooCtufmua4nDnBCpshQ

- bfcache（back/forword cache），可称为“往返缓存”，是一种可以实现即时前进、后退导航的浏览器（优化）特性。
- bfcahce 缓存机制是由浏览器的自动处理；
- 相关内容：javascript 任务队列、网页生命周期、页面过渡事件、IndexedDB 事务。

## 缓存位置可分Service Worker、Memory Cache、Disk Cache、Push Cache四种

https://blog.csdn.net/m0_37217612/article/details/107942864

1. Memory Cache：一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。内存缓存中有一块重要的缓存资源是preloader相关指令（例如 ）下载的资源。
2. Service Worker：Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。
3. Disk Cache：它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache。
4. Push Cache：Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。



