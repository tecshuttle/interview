https://deno.land/manual

### Philosophy

Deno aims to be a productive and secure scripting environment for the modern programmer.

Deno will always be distributed as a single executable. Given a URL to a Deno program, it is runnable with nothing more than the 10 megabyte zipped executable. Deno explicitly takes on the role of both runtime and package manager. It uses a standard browser-compatible protocol for loading modules: URLs.

Among other things, Deno is a great replacement for utility scripts that may have been historically written with bash or python.



[Deno 运行时入门教程：Node.js 的替代品](http://www.ruanyifeng.com/blog/2020/01/deno-intro.html)

Deno早期是Golang + TypeScript的，后来因为Golang和V8的GC问题，Ryan下了大工夫把golang统统换成没有GC的Rust了。[Rust-11垃圾回收机制](https://blog.csdn.net/tianlangstudio/article/details/100971001)

go v8 会有双层gc问题，所以没办法，才改成rust的。

[《模块化系列》snowpack，提高10倍打包速度](https://zhuanlan.zhihu.com/p/108222057)

[Deno 冲上榜首，Vue.js 首次屈居第二，JavaScript 2020 年度“新起之秀”都有谁？](https://blog.csdn.net/csdnnews/article/details/112778182)



### 参考

[Deno 1.9 发布，重要更新速览](https://mp.weixin.qq.com/s/69s5mg7hzrhH-98UYahbsQ)

[Deno + Oak 连接 MySQL 实战教程](https://zhuanlan.zhihu.com/p/157316249)

