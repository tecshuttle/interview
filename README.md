# 前端开发面试题


本文由我收集总结了一些前端面试题，初学者阅后也要用心钻研其中的原理，重要知识需要系统学习、透彻学习，形成自己的知识链。万不可投机取巧，临时抱佛脚只求面试侥幸混过关是错误的！也是不可能的！

前端还是一个年轻的行业，新的行业标准， 框架， 库都不断在更新和新增，正如赫门在2015深JS大会上的《前端服务化之路》主题演讲中说的一句话：“每18至24个月，前端都会难一倍”，这些变化使前端的能力更加丰富、创造的应用也会更加完美。所以关注各种前端技术，跟上快速变化的节奏，也是身为一个前端程序员必备的技能之一。

### 面试有几点需注意

* 面试题目： 根据你的等级和职位的变化，入门级到专家级，广度和深度都会有所增加。
* 题目类型： 理论知识、算法、项目细节、技术视野、开放性题、工作案例。
* 细节追问： 可以确保问到你开始不懂或面试官开始不懂为止，这样可以大大延展题目的区分度和深度，知道你的实际能力。因为这种知识关联是长时期的学习，临时抱佛脚绝对是记不住的。

回答问题再棒，面试官（可能是你面试职位的直接领导），会考虑我要不要这个人做我的同事？所以态度很重要、除了能做事，还要会做人。

资深的前端开发能把absolute和relative弄混，这样的人不要也罢，因为团队需要的是：你这个人具有可以依靠的才能（靠谱）。

### 前端开发所需掌握知识点概要

* HTML&CSS：对Web标准的理解（结构、表现、行为）、浏览器内核、渲染原理、依赖管理、兼容性、CSS语法、层次关系，常用属性、布局、选择器、权重、盒模型、Hack、CSS预处理器、CSS3、Flexbox、CSS Modules、Document flow、BFC、HTML5（离线 & 存储、Histoy,多媒体、WebGLSVGCanvas）；
* JavaScript：数据类型、运算、对象、Function、继承、闭包、作用域、事件、Prototype、RegExp、JSON、Ajax、DOM、BOM、内存泄漏、跨域、异步请求、模板引擎、模块化、Flux、同构、算法、ECMAScript6、Nodejs、HTTP、
* 其他：主流MVVM框架(ReactVueAngular)、Hybrid AppReact NativeWeex、TypeScript、RESTFul、WEB安全、前端工程化、依赖管理、性能优化、重构、团队协作、可维护、易用性、SEO、UED、前端技术选型、快速学习能力等；

作为一名前端工程师，无论工作年头长短都应该掌握的知识点：

## HTML

#### 通用

介绍一下你对浏览器内核的理解？常见的浏览器内核有哪些？

html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

Doctype作用？严格模式与混杂模式如何区分？它们有何意义?

#### 标签

简述一下你对HTML语义化的理解？

行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

iframe有那些缺点？

<a href="https://www.cnblogs.com/my--sunshine/p/6872224.html">页面导入样式时，使用link和@import有什么区别？</a>

Label的作用是什么？是怎么用的？（加 for 或 包裹）

title与h1的区别、b与strong的区别、i与em的区别？

HTML5的form如何关闭自动完成功能？

#### 存储

HTML5的离线储存怎么使用，工作原理能不能解释一下？

浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？

请描述一下cookies，sessionStorage和localStorage的区别？

#### 应用

1. **页面可见性（Page Visibility API）可以有哪些用途？**<br/>如果页面最小化了或者隐藏在了其他标签页后面，那么有些功能是可以停下来的。目前，只有IE 10和Chrome支持这个API。《JS高级程序设计（第三版）》P686

1. 如何在页面上实现一个圆形的可点击区域？

1. 实现不使用 border 画出1px高的线，在不同浏览器的Quirksmode和CSSCompat模式下都能保持同一效果。

1. 网页验证码是干嘛的，是为了解决什么安全问题？

1. 如何实现浏览器内多个标签页之间的通信? (阿里)

1. webSocket如何兼容低浏览器？(阿里)

## CSS

#### 通用

介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

CSS3有哪些新特性？

为什么要初始化CSS样式?

对BFC规范(块级格式化上下文：block formatting context)的理解？

#### 特性

CSS选择符有哪些？哪些属性可以继承？

CSS权重优先级是如何计算的？

CSS3新增伪类有那些？

请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

什么是CSS 预处理器 / 后处理器？喜欢那个？

CSS优化、提高性能的方法有哪些？

浏览器是怎样解析CSS选择器的？

style标签写在body后与body前有什么区别？

#### 属性

display有哪些值？说明他们的作用。

position的值relative和absolute定位原点是？

li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

absolute的containing block计算方式跟正常流有什么不同？

CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？

margin和padding分别适合什么场景使用？

元素竖向的百分比设定是相对于容器的高度吗？

全屏滚动的原理是什么？用到了CSS的那些属性？

::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

你对line-height是如何理解的？

设置元素浮动后，该元素的display值是多少？（自动变成display:block）

怎么让Chrome支持小于12px 的文字？

让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

font-style属性可以让它赋值为“oblique” oblique是什么意思？

position:fixed;在android下无效怎么处理？

display:inline-block 什么时候会显示间隙？(携程)

overflow: scroll时不能平滑滚动的问题怎么处理？

有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

#### 应用

如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？

用纯CSS创建一个三角形的原理是什么？

css多列等高如何实现？

一个满屏 品 字布局 如何设计?

经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？

请解释一下为什么需要清除浮动？清除浮动的方式
zoom:1的清楚浮动原理?

移动端的布局用过媒体查询吗？

在网页中的应该使用奇数还是偶数的字体？为什么呢？

抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

如何修改chrome记住密码后自动填充表单的黄色背景 ？

如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？

什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）

rem布局的优缺点

## JavaScript

### 通用



说说写JavaScript的基本规范？

用原生JavaScript的实现过什么功能吗？

页面编码和被请求的资源编码如果不一致如何处理？

服务器代理转发时，该如何处理cookie？

模块化开发怎么做？

AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？

requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）

JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

谈一谈你对ECMAScript6的了解？

### 语言特性

介绍JavaScript的基本数据类型。

JavaScript原型，原型链 ? 有什么特点？

JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？

Javascript如何实现继承？

Javascript创建对象的几种方式？

Javascript作用链域?

谈谈this对象的理解。

eval是做什么的？

null，undefined的区别？

什么是闭包（closure），为什么要用它？

javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？

如何判断一个对象是否属于某个类？

new操作符具体干了什么呢?

Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

###DOM

DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

###BOM

什么是window对象? 什么是document对象?[BOM部分基础知识总结](https://www.cnblogs.com/2010master/p/5824215.html)，[BOM和DOM详解](https://www.jb51.net/article/55851.htm)。

##### documen.write和 innerHTML的区别？

document.write会将页面上的所有内容清除包括标题，innerHTML只会重写所属元素的内容。

document.write是直接写入到页面的内容流，会导致页面被重写。innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。

两者都可动态包含外部资源如JavaScript文件。通过document.write插入`<script>`元素会自动执行其中的脚本；大多数浏览器中，通过innerHTML插入`<script>`元素并不会执行其中的脚本。

### 应用

1. 写一个通用的事件侦听器函数(机试题)。
2. 关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
3. <a href="https://blog.csdn.net/JustJavaC/article/details/19473199">["1", "2", "3"].map(parseInt) 答案是多少？</a>parseInt的进制不能为1，没意义。<a href="https://www.w3school.com.cn/jsref/jsref_obj_global.asp">JavaScript 全局对象</a>，全局对象可重定义。`map(callbackfn, thisArg)`的回调`classbackfn`接收3个参数。
4. [].forEach.call($$(""),function(a){ a.style.outline="1px solid #"+(~~(Math.random()(1<<24))).toString(16) })能解释一下这段代码的意思吗？
5. js延迟加载的方式有哪些？共有6种，参考[关于js延迟加载（异步操作）的方式](https://www.cnblogs.com/songForU/p/10905031.html)。[defer和async的区别是什么？](https://www.jianshu.com/p/a5e56f7a00b4)，并且defer属性解决了async引起的脚本顺序问题（见async的缺点），使用defer属性，脚本将按照在页面中出现的顺序加载和运行。js延迟加载是为了加快js的获取速度，也可以通过设置缓存来省略网络请求，http状态码由304到200。性能优化的核心思想就是快，可以预先准备数据（如缓存的使用），可以按需获取，可以分段、异步获取等都是常见的优化手段。
6. 对JSON的了解？
7. [Ajax是什么? 如何创建一个Ajax？](https://blog.csdn.net/lxcao/article/details/52745743)，用window.XMLHttpRequest或newActiveXObject()来创建ajax对象，open方法有3个参数：method、url、async。
8. 什么是阻塞与非阻塞？
9. 如何解决跨域问题?

### JQuery

JQuery的源码看过吗？能不能简单概况一下它的实现原理？

jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

jquery中如何将数组转化为json字符串，然后再转化回来？

jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

jquery.extend 与 jquery.fn.extend的区别？

jQuery 的队列是如何实现的？队列可以用在哪些地方？

谈一下Jquery中的bind(),live(),delegate(),on()的区别？

JQuery一个对象可以同时绑定多个事件，这是如何实现的？

是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

针对 jQuery性能的优化方法？

Jquery与jQuery UI有啥区别？

JQuery的源码看过吗？能不能简单说一下它的实现原理？

jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery和Zepto的区别？各自的使用场景？

针对 jQuery 的优化方法？

Zepto的点透问题如何解决？

jQueryUI如何自定义组件?

jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

JQuery一个对象可以同时绑定多个事件，这是如何实现的？





.call() 和 .apply() 的作用和区别？

数组和对象有哪些原生方法，列举一下？

JS 怎么实现一个类？怎么实例化这个类？

JavaScript中的作用域与变量声明提升？

如何编写高性能的Javascript？

那些操作会造成内存泄漏？

需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

如何判断当前脚本运行在浏览器还是node环境中？（阿里）

移动端最小触控区域是多大？

把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

解释JavaScript中的作用域与变量声明提升？

那些操作会造成内存泄漏？

Node.js的适用场景？

(如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

解释一下 Backbone 的 MVC 实现方式？

什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

简述一下 Handlebars 的基本用法？

简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

用js实现千位分隔符?(来源：前端农民工，提示：正则+replace)

检测浏览器版本版本有哪些方式？

What is a Polyfill?

做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？

使用JS实现获取文件扩展名？

Webpack热更新实现原理?

请介绍一下JS之事件节流？

什么是JS的函数防抖？

## ECMAScript6 相关

Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？

ES6是如何实现编译成ES5的？

css-loader的原理？

ECMAScript6 怎么写class，为什么会出现class这种东西?

## React前端框架

#### 通用

[必须要会的50个React面试题](https://segmentfault.com/a/1190000018604138)

React 使用场景？

描述一下React 生命周期。

应该在React生命周期的什么阶段发出ajax请求，为什么？

shouldComponentUpdate函数有什么作用？

当组件的setState函数被调用之后，发生了什么？

为什么循环产生的组件中要利用上key这个特殊的prop？

#### 组件

实现组件有哪些方式？

受控组件(Controlled Component)与非受控组件(Uncontrolled Component)的区别？

refs 是什么?

什么时候应该选择用class实现一个组件，什么时候用一个函数实现一个组件？

什么是HoC（Higher-Order Component）？适用于什么场景？

并不是父子关系的组件，如何实现相互的数据通信？

React为什么自己定义一套事件体系呢，与浏览器原生事件体系有什么关系？

#### Redux

请描述一次完整的 Redux 数据流。

Redux是如何做到可预测呢？

Redux将React组件划分为哪两种？

Redux是如何将state注入到React组件上的？

React的批量更新机制 BatchUpdates？

React与Vue，各自的组件更新进行对比，它们有哪些区别？

#### 路由

React-router 路由的实现原理？

用过 React 技术栈中哪些数据流管理库？

#### 其它

说说React Native、Weex框架的实现原理？

## 其他问题

### 其它技能

设计模式 知道什么是singleton, factory, strategy, decrator么?

常使用的库有哪些？常用的前端开发工具？开发过什么应用或组件？

页面重构怎么操作？

列举IE与其他浏览器不一样的特性？

99%的网站都需要被重构是那本书上写的？

什么叫优雅降级和渐进增强？

是否了解公钥加密和私钥加密。

WEB应用从服务器主动推送Data到客户端有那些方式？

对Node的优点和缺点提出了自己的看法？

你有用过哪些前端性能优化的方法？

http状态码有那些？分别代表是什么意思？

是否了解开源的工具 bower、npm、yeoman、grunt、gulp，一个 npm 的包里的 package.json 具备的必要的字段都有哪些？（名称、版本号，依赖）

每个模块的代码结构都应该比较简单，且每个模块之间的关系也应该非常清晰，随着功能和迭代次数越来越多，你会如何去保持这个状态的？

Git知道branch, diff, merge么?

知道什么是SEO并且怎么优化么? 知道各种meta data的含义么?

移动端（Android IOS）怎么做好用户体验?

简单描述一下你做过的移动APP项目研发流程？

是否了解Web注入攻击，说下原理，最常见的两种攻击（XSS 和 CSRF）了解到什么程度？

### 工作能力

原来公司工作流程是怎么样的，如何与其他人协作的？如何跨部门合作的？

你遇到过比较难的技术问题是？你是如何解决的？

一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）

部分地区用户反应网站很卡，请问有哪些可能性的原因，以及解决方法？

从打开app到刷新出内容，整个过程中都发生了什么，如果感觉慢，怎么定位问题，怎么解决?

第一次访问页面中时弹出引导，用户关闭引导，之后再次进入页面时不希望出现引导，如何实现？

产品进行版本升级时，可能发生不兼容性问题，如何提前预防和解决？

平时如何管理你的项目？

如何设计突发大规模并发架构？

当团队人手不足，把功能代码写完已经需要加班的情况下，你会做前端代码的测试吗？

###个人情况

除了前端以外还了解什么其它技术么？你最最厉害的技能是什么？

你用的得心应手用的熟练地编辑器&开发环境是什么样子？

对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？

你怎么看待Web App 、hybrid App、Native App？

你移动端前端开发的理解？（和 Web 前端开发的主要区别是什么？）

你对加班的看法？

说说最近最流行的一些东西吧？常去哪些网站？

你在现在的团队处于什么样的角色，起到了什么明显的作用？

你认为怎样才是全端工程师（Full Stack developer）？

介绍一个你最得意的作品吧？

你有自己的技术博客吗，用了哪些技术？

对前端安全有什么看法？

项目中遇到国哪些印象深刻的技术难题，具体是什么问题，怎么解决？

最近在学什么东西？

你的优点是什么？缺点是什么？

如何管理前端团队?

最近在学什么？能谈谈你未来3，5年给自己的规划吗？

## 有趣的问题

A、B两人分别在两座岛上。B生病了，A有B所需要的药。C有一艘小船和一个可以上锁的箱子。C愿意在A和B之间运东西，但东西只能放在箱子里。只要箱子没被上锁，C都会偷走箱子里的东西，不管箱子里有什么。如果A和B各自有一把锁和只能开自己那把锁的钥匙，A应该如何把东西安全递交给B？

答案：A把药放进箱子，用自己的锁把箱子锁上。B拿到箱子后，再在箱子上加一把自己的锁。箱子运回A后，A取下自己的锁。箱子再运到B手中时，B取下自己的锁，获得药物。

Amazon主页的左上角有一个商品分类浏览的下拉菜单 没有延迟，而且子菜单也不会在不应该的时候消失。它是怎样做到这一点的呢？

答案：是通过探测鼠标移动的方向和轨迹，具体查看Khan Academy工程师 Ben Kamens 写的 jQuery插件