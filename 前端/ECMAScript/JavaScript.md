# JavaScript

### 通用

1. 说说写JavaScript的基本规范？
2. 用原生JavaScript的实现过什么功能吗？
3. 页面编码和被请求的资源编码如果不一致如何处理？
4. 服务器代理转发时，该如何处理cookie？
5. 模块化开发怎么做？
6. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
7. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何缓存的？）
8. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

### 语言特性

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

### DOM

1. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

### BOM

1. 什么是window对象? 什么是document对象?[BOM部分基础知识总结](https://www.cnblogs.com/2010master/p/5824215.html)，[BOM和DOM详解](https://www.jb51.net/article/55851.htm)。
1. **documen.write和 innerHTML的区别？**<br/>document.write会将页面上的所有内容清除包括标题，innerHTML只会重写所属元素的内容。<br/>document.write是直接写入到页面的内容流，会导致页面被重写。innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。<br/>两者都可动态包含外部资源如JavaScript文件。通过document.write插入`<script>`元素会自动执行其中的脚本；大多数浏览器中，通过innerHTML插入`<script>`元素并不会执行其中的脚本。
1. 检测浏览器版本版本有哪些方式？

### 高级主题

2. 那些操作会造成内存泄漏？
3. 如何编写高性能的Javascript？
6. 请介绍一下JS之事件节流？
7. 什么是JS的函数防抖？
8. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）
9. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
10. What is a Polyfill?做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
12. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？
13. 使用JS实现获取文件扩展名？
14. Webpack热更新实现原理?

### 应用

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

### 框架

1. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
2. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？
3. Node.js的适用场景？
4. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
5. 解释一下 Backbone 的 MVC 实现方式？
6. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
7. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?
8. 简述一下 Handlebars 的基本用法？
9. 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

### 面试题

1. [一份 JavaScript 高级面试题](https://zhuanlan.zhihu.com/p/34273811)
2. [BAT前端开发面试题]( https://www.jianshu.com/p/1d0b6e6aee90)
3. [深入理解ES6箭头函数的this以及各类this面试题总结](https://blog.csdn.net/qq_39207948/article/details/79547743)
4. [ES6系列40道基础题（含答案）](https://blog.csdn.net/qq_39207948/article/details/80678800)
5. [前端开发面试题收集(css部分)](https://www.cnblogs.com/wj204/p/5813736.html)
6. [前端开发面试题收集(html部分)](https://www.cnblogs.com/wj204/p/5814784.html)
7. [前端开发面试题收集(js部分)](https://www.cnblogs.com/wj204/p/5816455.html)
8. [面试常见ES6问题集锦]( https://zhuanlan.zhihu.com/p/61068657)

### JS

• 最详尽的 JS 原型与原型链终极详解，没有「可能是」 https://www.jianshu.com/p/dee9f8b14771

• JS—特殊的对象~函数 https://www.jianshu.com/p/79c30b99f051

• 一探前端开发中的JS调试技巧 http://seejs.me/2016/03/27/jsdebugger/

• javascript中BOM部分基础知识总结 https://www.cnblogs.com/2010master/p/5824215.html

• 数学运算

• 取余：%

• 开方：Math.pow()、 2**3

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

### ES6专题

ES6、ES7、ES8、ES9、ES10新特性一览 https://juejin.im/post/5ca2e1935188254416288eb2#heading-26

• promise、await 、async、异步。

• Async/Await：比Promise更好的6个理由 http://caibaojian.com/asyncawait.html

Generator与react状态机（14） https://zhuanlan.zhihu.com/p/60914496

1.5万字概括ES6全部特性(看图就能记下，值得收藏) https://zhuanlan.zhihu.com/p/87699079

• PhantomJs https://www.jianshu.com/p/80e984ef94d3

• 如何编写轻量级 CSS 框架 https://www.cnblogs.com/nzbin/p/7073601.html

• 个人的中小型项目前端架构浅谈 https://blog.csdn.net/qq20004604/article/details/70480932

• 了解什么是微前端 https://juejin.im/post/5d1f19e3f265da1bab29ce5f

• 微前端如何落地 https://www.infoq.cn/article/xm_AaiOTXmLpPgWvX9y9

• 阻塞非阻塞与同步异步的区别是什么？ https://leetcode-cn.com/circle/discuss/uHGOZo

• isset() defined()



- [「译」ES5, ES6, ES2016, ES.Next: JavaScript 的版本是怎么回事？](https://huangxuan.me/2015/09/22/js-version/)

- [10 个常问的 JS 面试题](https://juejin.im/post/5dc360bef265da4d307f193a)
- [7道简单的 JavaScript 面试题，三个月没招到一个人](https://juejin.im/post/5dbe818a6fb9a0203c34e4bb)
- [听说会做这道题的人后来都进了头条？](https://juejin.im/post/5dca5516f265da4d3429b003)
- [可能是最全的 “文本溢出截断省略” 方案合集](https://juejin.im/post/5dc15b35f265da4d432a3d10)
- [35 道咱们必须要清楚的 React 面试题](https://juejin.im/post/5dc20a4ff265da4d4e30040b)
- [(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/5dbebbfa51882524c507fddb)
- [JS 原生面经从初级到高级【近1.5W字】](https://juejin.im/post/5daeefc8e51d4524f007fb15)
- [五分钟带你领略: 腾讯半年来出现最频繁的算法之一——字符串解码](https://juejin.im/post/5dc2a7cce51d4504f0726a00)
- [前端开发中79条不可忽视的知识点汇总](https://juejin.im/post/5d8989296fb9a06b1f147070)
- [Lodash](https://juejin.im/post/5c134de65188250918135eb6)
- [快看，前端开发者都收藏了这几张图表！](https://juejin.im/post/5dc43b6b6fb9a04a945dd6b2)
- [React 中获取数据的 3 种方法：哪种最好？](https://juejin.im/post/5dc4ada5f265da4cfb51303e)
- [微服务架构~BFF和网关是如何演化出来的](https://www.cnblogs.com/dadadechengzi/p/9373069.html)
- [HTTP缓存是如何实现](http://caibaojian.com/http-cache.html)
- [首页白屏优化实践](https://segmentfault.com/a/1190000020383064)
- [Webview加载界面白屏解决方法总结](https://blog.csdn.net/qq_34584049/article/details/78280815)
- [awesome-javascript](https://github.com/sorrycc/awesome-javascript)
- [Javascript中的async await](https://www.cnblogs.com/cpselvis/p/6344122.html)
- [Kafka，Mq和Redis作为消息队列使用时的差异有哪些](https://www.jianshu.com/p/a4319755c6da)
- [Immutable.js了解一下？](https://www.jianshu.com/p/0fa8c7456c15)
- [ES6、ES7、ES8、ES9、ES10新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2#heading-25)
- [package-lock.json的作用](https://www.cnblogs.com/cangqinglang/p/8336754.html)



