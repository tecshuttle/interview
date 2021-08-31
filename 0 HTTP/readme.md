# HTTP

http状态码有那些？分别代表是什么意思？



## 30 张图解 HTTP 常见的面试题

https://zhuanlan.zhihu.com/p/112010468

### HTTP 基本概念



### Get 与 Post



### HTTP 特性



### HTTPS 与 HTTP



### HTTP/1.1、HTTP/2、HTTP/3 演变



## 缓存

[从 0 到 1 上手 bfcache 往返缓存](https://mp.weixin.qq.com/s/eAxooCtufmua4nDnBCpshQ)

[浅析HTTP缓存](https://mp.weixin.qq.com/s/dt1_TrjgAwRxz73vqeACiw)

[强缓存和协商缓存](https://www.jianshu.com/p/fb59c770160c)

[缓存（二）——浏览器缓存机制：强缓存、协商缓存](https://github.com/amandakelake/blog/issues/41)

[HTTP缓存——协商缓存（缓存验证）](https://www.cnblogs.com/padding1015/p/15169091.html)

[设计一个无懈可击的浏览器缓存方案：关于思路，细节，ServiceWorker，以及HTTP/2](https://zhuanlan.zhihu.com/p/28113197)

[缓存位置可分Service Worker、Memory Cache、Disk Cache、Push Cache四种](https://blog.csdn.net/m0_37217612/article/details/107942864)

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





