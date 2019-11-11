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