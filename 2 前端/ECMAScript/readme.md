# 版本

https://huangxuan.me/2015/09/22/js-version/

https://segmentfault.com/a/1190000039352300

[1.5万字概括ES6全部特性(看图就能记下，值得收藏)]( https://zhuanlan.zhihu.com/p/87699079)

[这难道不是你期待的 ES2021 新特性吗？](https://mp.weixin.qq.com/s/zxpZUV5EYYZbenp8afCgGA)

[理解ECMAScript规范（3）](https://mp.weixin.qq.com/s/1bNRE2t7UBY1UNikC7MC6g)

[ES7、ES8、ES9、ES10 新特性大盘点](https://zhuanlan.zhihu.com/p/99342755)

★★★ [JS ES各版本特性](https://cloud.tencent.com/developer/article/1625624)

★★★ [种草 ES2020 新特性](https://zhuanlan.zhihu.com/p/100251213)

★★★★ [解读ES2020（ES11）新特性](https://www.jianshu.com/p/3e59df36342a)

# 通用

1. 说说写JavaScript的基本规范？
2. 用原生JavaScript的实现过什么功能吗？
3. 页面编码和被请求的资源编码如果不一致如何处理？
4. 服务器代理转发时，该如何处理cookie？
5. 模块化开发怎么做？
6. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
7. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何缓存的？）
8. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

# 语言特性

## 相等

## 异步

[阻塞非阻塞与同步异步的区别是什么？]( https://leetcode-cn.com/circle/discuss/uHGOZo)

[使用顶层 await 简化 JS 代码](https://mp.weixin.qq.com/s/XeZXrTa5X-08dBw2I7cg6A)

[Promise、Genarator、 Async，这三者的区别和联系，你是否明白？](https://mp.weixin.qq.com/s/_ciah0VIog-IgQ75WqTkGQ)

### await了解吗？

1. promise

2. 了解ES各版本、着重学习ES6。

3. New Function()

4. Function.prototype 是函数对象，什么是函数对象？

5. null 是一个独立的数据类型，为什么typeof(null)的值是object？

6. prototype原型、原型链 => 继承

7. prototype/ `__proto__`的区别

8. 构造函数

9. call / apply / bind

10. js OOP

11. clone / deepcopy

12. 同步与异步、阻塞与非阻塞

## 错误处理

## ES6

- Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？
- ES6是如何实现编译成ES5的？
- css-loader的原理？
- ECMAScript6 怎么写class，为什么会出现class这种东西?
- 谈一谈你对ECMAScript6的了解？
- ES6、ES7、ES8、ES9、ES10新特性一览 https://juejin.im/post/5ca2e1935188254416288eb2#heading-26
- promise、await 、async、异步。
- Async/Await：比Promise更好的6个理由 http://caibaojian.com/asyncawait.html
- [Javascript中的async await](https://www.cnblogs.com/cpselvis/p/6344122.html)
- [JS 异步(callback→Promise→async/await)](https://segmentfault.com/a/1190000013141641)
- [「译」ES5, ES6, ES2016, ES.Next: JavaScript 的版本是怎么回事？](https://huangxuan.me/2015/09/22/js-version/)

## 数组

[13个JavaScript数组reduce的实例方法](https://mp.weixin.qq.com/s/Ozf2WA8D3HlLYcNH0bBbGA)

## 其它

1. 介绍JavaScript的基本数据类型。
2. 解释JavaScript中的作用域与变量声明提升？
3. JavaScript原型，原型链 ? 有什么特点？
4. JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？
5. Javascript如何实现继承？
6. Javascript创建对象的几种方式？
7. JS怎么实现一个类？怎么实例化这个类？
8. Javascript作用链域?
9. 谈谈this对象的理解。
10. eval是做什么的？
11. null，undefined的区别？
12. 什么是闭包（closure），为什么要用它？
13. javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
14. 如何判断一个对象是否属于某个类？
15. new操作符具体干了什么呢?
16. Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
17. .call() 和 .apply() 的作用和区别？
18. [JavaScript中如何翻转一个字符串？](https://blog.csdn.net/lxcao/article/details/52705790)，3个方法：reverse()、for循环、递归。
19. 数组和对象有哪些原生方法，列举一下？
20. 把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
21. 用js实现千位分隔符?(来源：前端农民工，提示：正则+replace)

# 运算符

- 空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null或者 undefined时，返回其右侧操作数，否则返回左侧操作数。
- 逻辑空赋值运算符 (x??= y) 仅在x是nullish(null或undefined) 时对其赋值。
- 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish) (null或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

# 书籍

- 犀牛书

- 红宝书

# 高级主题

2. 那些操作会造成内存泄漏？
3. 如何编写高性能的Javascript？
6. 请介绍一下JS之事件节流？什么是JS的函数防抖？
8. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）
9. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
10. What is a Polyfill?做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
12. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？
13. 使用JS实现获取文件扩展名？
14. Webpack热更新实现原理?

# 应用

1. 写一个通用的事件侦听器函数(机试题)。
2. 关于事件，IE与火狐的事件机制有什么区别？ [如何阻止冒泡？](https://blog.csdn.net/lxcao/article/details/52733737)为什么要阻止事件冒泡？
3. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
4. <a href="https://blog.csdn.net/JustJavaC/article/details/19473199">["1", "2", "3"].map(parseInt) 答案是多少？</a>parseInt的进制不能为1，没意义。<a href="https://www.w3school.com.cn/jsref/jsref_obj_global.asp">JavaScript 全局对象</a>，全局对象可重定义。`map(callbackfn, thisArg)`的回调`classbackfn`接收3个参数。
5. [].forEach.call($$(""),function(a){ a.style.outline="1px solid #"+(~~(Math.random()(1<<24))).toString(16) })能解释一下这段代码的意思吗？
6. js延迟加载的方式有哪些？共有6种，参考[关于js延迟加载（异步操作）的方式](https://www.cnblogs.com/songForU/p/10905031.html)。[defer和async的区别是什么？](https://www.jianshu.com/p/a5e56f7a00b4)，并且defer属性解决了async引起的脚本顺序问题（见async的缺点），使用defer属性，脚本将按照在页面中出现的顺序加载和运行。js延迟加载是为了加快js的获取速度，也可以通过设置缓存来省略网络请求，http状态码由304到200。性能优化的核心思想就是快，可以预先准备数据（如缓存的使用），可以按需获取，可以分段、异步获取等都是常见的优化手段。
7. 对JSON的了解？
8. [Ajax是什么? 如何创建一个Ajax？](https://blog.csdn.net/lxcao/article/details/52745743)，用window.XMLHttpRequest或newActiveXObject()来创建ajax对象，open方法有3个参数：method、url、async。
9. 什么是阻塞与非阻塞？
10. 如何解决跨域问题?
11. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
12. 移动端最小触控区域是多大？
13. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

# 面试题

1. [一份 JavaScript 高级面试题](https://zhuanlan.zhihu.com/p/34273811)
2. [BAT前端开发面试题]( https://www.jianshu.com/p/1d0b6e6aee90)
3. [前端开发面试题收集(js部分)](https://www.cnblogs.com/wj204/p/5816455.html)
4. [10 个常问的 JS 面试题](https://juejin.im/post/5dc360bef265da4d307f193a)
5. [7道简单的 JavaScript 面试题，三个月没招到一个人](https://juejin.im/post/5dbe818a6fb9a0203c34e4bb)
6. [听说会做这道题的人后来都进了头条？](https://juejin.im/post/5dca5516f265da4d3429b003)
7. [JS 原生面经从初级到高级【近1.5W字】](https://juejin.im/post/5daeefc8e51d4524f007fb15)
8. [五分钟带你领略: 腾讯半年来出现最频繁的算法之一——字符串解码](https://juejin.im/post/5dc2a7cce51d4504f0726a00)
9. [可能是最全的 “文本溢出截断省略” 方案合集](https://juejin.im/post/5dc15b35f265da4d432a3d10)
10. [面试常见ES6问题集锦]( https://zhuanlan.zhihu.com/p/61068657)
11. [ES6十道面试题之Promise，有答案的](https://cloud.tencent.com/developer/article/1407125)
12. [深入理解ES6箭头函数的this以及各类this面试题总结](https://blog.csdn.net/qq_39207948/article/details/79547743)
13. [ES6系列40道基础题（含答案）](https://blog.csdn.net/qq_39207948/article/details/80678800)
14. [前端面试必看ES6的15道练习题](https://mp.weixin.qq.com/s/1Hw2QukgCOyjabugISpVlQ)

# 资料

## 原理

[最详尽的 JS 原型与原型链终极详解，没有「可能是」]( https://www.jianshu.com/p/dee9f8b14771)

[JS—特殊的对象~函数]( https://www.jianshu.com/p/79c30b99f051)

[图文并茂讲清楚 JavaScript 内存管理](https://mp.weixin.qq.com/s/W2AxuO0OgoAUwROMyBwpYg)

[JavaScript有几种原型继承方法？](https://mp.weixin.qq.com/s/DIzvXtyk7rd5m5aUQ8LAkw)

[理解JavaScript中浅拷贝和深拷贝的区别](https://mp.weixin.qq.com/s/qJqgI8qZJCdWq2sudpyLPA)

## 事件

[关于javascript 中的高级定时器的若干问题](https://mp.weixin.qq.com/s/0w8lSk2ZUBsWnzt2QBmkZw)

[如何理解JavaScript定时器的4种写法【带面试题讲解】](https://mp.weixin.qq.com/s/UDO_xWR1lsJlijajsLTcxA)

[精读《Tasks, microtasks, queues and schedules》](https://mp.weixin.qq.com/s/osRVRjMzgEnmlBgQrurd3w)

[Js阻止事件冒泡与阻止默认事件](https://mp.weixin.qq.com/s/-42rjYODdyBLLgI4J_OgZg)

## 其它

[如何实现JavaSrcipt页面的跳转](https://mp.weixin.qq.com/s/2c96esPar1I-0Jgg56QTrQ)

[JavaScript中foreach()用法及使用的坑](https://mp.weixin.qq.com/s/UfnfazB05LQMnQ3dmbrW_Q)

[精读《函数缓存》](https://mp.weixin.qq.com/s/bvep2BfQGGaqKkfd5f3LKg)

[精读《如何比较 Object 对象》](https://mp.weixin.qq.com/s/u7ckAg59Aol5QNRco7LA5A)

[精读《精通 console.log》](https://mp.weixin.qq.com/s/JecYEq9JMy6sCoIXQcwclw)

[JS正则获取HTML所有img的链接 ](https://blog.csdn.net/u011539729/article/details/103618300)

[什么是前端防抖？](https://mp.weixin.qq.com/s/FEVcAsqxTeZQfZT703YVVQ)

[你用得上的25个JS技巧](https://mp.weixin.qq.com/s/AGIi-Ghpdi7U4_eHDOgIVg)

[20个常用的JavaScript简写技巧](https://mp.weixin.qq.com/s/ogrWP9Dok_8_PAMU_7fOXg)

[JavaScript生成随机数和随机字符串的5种方法](https://mp.weixin.qq.com/s/i09U7zybD22fQJ5vdoTzDQ)

取余：%

开方：Math.pow()、 2**3

isset() defined()

[(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/5dbebbfa51882524c507fddb)