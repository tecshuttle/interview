# 人物

- 尤雨溪
- [阮一峰](https://www.ruanyifeng.com/)
- [玉伯](https://maimai.cn/article/detail?fid=1610849252&efid=K8dkpVhSHLb-7JRmNE79JQ)
- [郭宇](https://www.zhihu.com/question/375888332)
- 刘博文

# 面试

[2019前端面试 | “HTML + CSS + JS”专题](https://juejin.im/post/5ce4171ff265da1bd04eb4f3#heading-11)

[400道前端面试题！阿里、头条、网易等19家大厂面经全公开！](https://csdnnews.blog.csdn.net/article/details/89324381)

[前端开发工程师简历应该如何准备？](https://mp.weixin.qq.com/s/RClhJAEKkhYs01JY-UecQA)

[简历的项目经历应该怎么写得好看？](https://mp.weixin.qq.com/s/5XajWdvdNC4FuADTabJ_9Q)

[高频前端开发面试问题及答案整理](https://mp.weixin.qq.com/s/eJH0Eh1iBohPoeXwHvfwng)

[400道前端工程师常考必考面试题+详细解答](https://mp.weixin.qq.com/s/J9YV_ZqmqvkutjVSJTJJVA)

# DOM

1. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

# BOM

1. 什么是window对象? 什么是document对象?[BOM部分基础知识总结](https://www.cnblogs.com/2010master/p/5824215.html)，[BOM和DOM详解](https://www.jb51.net/article/55851.htm)。
1. **documen.write和 innerHTML的区别？**<br/>document.write会将页面上的所有内容清除包括标题，innerHTML只会重写所属元素的内容。<br/>document.write是直接写入到页面的内容流，会导致页面被重写。innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。<br/>两者都可动态包含外部资源如JavaScript文件。通过document.write插入`<script>`元素会自动执行其中的脚本；大多数浏览器中，通过innerHTML插入`<script>`元素并不会执行其中的脚本。
1. 检测浏览器版本版本有哪些方式？
1. [javascript中BOM部分基础知识总结]( https://www.cnblogs.com/2010master/p/5824215.html)

# 库

## Zepto.js

https://blog.csdn.net/qq_38021852/article/details/82659994

https://www.jianshu.com/p/262d36c1e13e

https://www.zhihu.com/question/25379207

https://www.cnblogs.com/colima/p/5289386.html

**jQuery和Zepto.js的区别在哪里？**

1. jQuery更多是在PC端被应用，因此，考虑了很多低级浏览器的的兼容性问题；而Zepto.js则是直接抛弃了低级浏览器的适配问题，显得很轻盈；
2. Zepto.js在移动端被运用的更加广泛；更注重在移动端的使用

3. jQuery的底层是通过DOM来实现效果的，zepto.js是用css3来实现的；

4. Zepto.js可以说是阉割版本的jQuery。

Zepto是一个轻量级的JavaScript库，它的文件大小只有10K左右，兼容现代高级浏览器，主要用于移动端的开发，它有着与jQuery类似的API。就像zepto官网说的如果你会使用jQuery，那你也会用zepto。

## Day.js

国内镜像https://dayjs.gitee.io/zh-CN/

```bash
yarn add dayjs  #安装
```

## SortableJS

```bash
yarn add vuedraggable@next  # for V3  不能用，版本很长时间没更新了。
```

[Sortable.js中文网](http://www.sortablejs.com/index.html)

## Lodash

[Lodash](https://juejin.im/post/5c134de65188250918135eb6)

## qs

https://github.com/ljharb/qs

[npm qs 模块（中文）](https://www.cnblogs.com/sexintercourse/p/14364050.html)

## framer

https://www.framer.com/motion

动画库，提供了一些简单地API帮助我们创建复杂的动效，这些简化的API帮助然我们抽象出动画背后的复杂性，让创建动画变得简单。

# 组件

[什么叫组件化开发?](https://www.zhihu.com/question/29735633/answer/90873592)

# 测试

## console.log()加样式

```js
console.log(
  `%c${description} With Tax:%c$${total}`,
  'font-weight: bold',
  'color: green'
);
```

[一探前端开发中的JS调试技巧]( http://seejs.me/2016/03/27/jsdebugger/)

[前端容易忽略的debugger调试技巧](https://mp.weixin.qq.com/s/VOoDHqIo4gh3scHVNxk3lA)

[你需要知道的javaScript的调试](https://juejin.cn/post/6992098793722216462)

[Chrome开发者工具9个调试技巧详解](https://www.jb51.net/article/147438.htm)

[Chrome——F12谷歌开发者工具详解](https://www.cnblogs.com/xiaowenshu/p/10450848.html)

[Chrome开发者工具-高级使用技巧](https://blog.csdn.net/qq_42313447/article/details/113425649)

[Chrome开发者工具中文文档](https://www.html.cn/doc/chrome-devtools)

[面对this指向丢失，尤雨溪在Vuex源码中是怎么处理的](https://juejin.cn/post/6991701614612447239)

[如何优雅的使用console](https://mp.weixin.qq.com/s/yVY3N14Vr9Fl2Y1twH-VJQ)

[Web Performance Metrics与Core Web Vitals简介](https://mp.weixin.qq.com/s/Hmkod3gYRR38B6Qdp1Iu6g)

[聊一聊前端自动化测试](https://segmentfault.com/a/1190000004558796)

# 其它技能

- 常使用的库有哪些？常用的前端开发工具？开发过什么应用或组件？
- 页面重构怎么操作？
- 列举IE与其他浏览器不一样的特性？
- 99%的网站都需要被重构是那本书上写的？
- 什么叫优雅降级和渐进增强？
- 是否了解公钥加密和私钥加密。
- WEB应用从服务器主动推送Data到客户端有那些方式？
- 每个模块的代码结构都应该比较简单，且每个模块之间的关系也应该非常清晰，随着功能和迭代次数越来越多，你会如何去保持这个状态的？
- 知道什么是SEO并且怎么优化么?知道各种meta data的含义么?
- 移动端（Android IOS）怎么做好用户体验?
- 简单描述一下你做过的移动APP项目研发流程？

# 设计模式

设计模式知道什么是singleton, factory, strategy, decrator么?

# Git

Git知道branch, diff, merge么?

[25个每个人都应该知道的Git命令](https://mp.weixin.qq.com/s/nZjJVcKQIZEbagz4pRjJMg)

[git打tag - 简书](https://www.jianshu.com/p/cdd80dd15593)

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)

[git cherry-pick 教程](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

[Git操作 ：从一个分支cherry-pick多个commit到其他分支](https://www.jianshu.com/p/c787fa885ffd)

# 框架

1. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
2. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？
3. Node.js的适用场景？
4. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
5. 解释一下 Backbone 的 MVC 实现方式？
6. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
7. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?
8. 简述一下 Handlebars 的基本用法？
9. 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

## Svelte

[官网](https://www.sveltejs.cn/tutorial/making-an-app)

[新兴前端框架 Svelte 从入门到原理](https://zhuanlan.zhihu.com/p/350507037)

[尝鲜 Svelte 前端框架，开发读书笔记](https://www.sohu.com/a/433313081_115128)

## 资料

[如何编写轻量级 CSS 框架](https://www.cnblogs.com/nzbin/p/7073601.html)

[（可参考）vue2.x+iview实现可编辑表格 ](https://zhuanlan.zhihu.com/p/81027411)

[Vue.js实现可编辑的表格 ](https://www.jb51.net/article/176195.htm)

[vue+iview 实现可编辑表格的示例代码 ](https://www.jb51.net/article/149855.htm)

[Rust Web框架怎么选？研究本文就够了！](https://blog.csdn.net/weixin_45583158/article/details/104489414)

[网页上用 Rust 渲染十万个待办事项有多快？](https://zhuanlan.zhihu.com/p/112223727)

[组件 | Element](https://element.eleme.cn/#/zh-CN/component/installation)

[组件 · Bootstrap 中文文档](http://v3.bootcss.com/components/)

[Ant Design - 一个 UI 设计语言](https://ant.design/index-cn)

[Ant Design Mobile - 移动端设计规范](https://mobile.ant.design/index-cn)



# 安全

- 是否了解Web注入攻击，说下原理，最常见的两种攻击（XSS和CSRF）了解到什么程度？



## SEO

[前端，你要知道的SEO知识](https://mp.weixin.qq.com/s/h9CLv8XWnAKzTg2YqngiDg)

https://zh.nuxtjs.org/

https://www.nuxtjs.cn/ 中文网

### Nuxt报错：Though the "loose" option was set to "false" in your @babel/preset-env config

在 nuxt.config.js 的 build 加上该插件就行了

```javascript
build: {
    parallel: true,
    babel:{
      plugins:[
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
      ]
   }
}
```



# 性能

你有用过哪些前端性能优化的方法？

## 渲染页面：浏览器的工作原理

https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work

## 图解浏览器的基本工作原理

https://www.infoq.cn/article/CS9-WZQlNR5h05HHDo1b

### 前言

- 可能每一个前端工程师都想要理解浏览器的工作原理。

- 我们希望知道从在浏览器地址栏中输入 url 到页面展现的短短几秒内浏览器究竟做了什么；

- 我们希望了解平时常常听说的各种代码优化方案是究竟为什么能起到优化的作用；

- 我们希望更细化的了解浏览器的渲染流程。

### 浏览器的多进程架构

#### 1 进程（process）和线程（thread）

一个好的程序常常被划分为几个相互独立又彼此配合的模块，浏览器也是如此，以 Chrome 为例，它由多个进程组成，每个进程都有自己核心的职责，它们相互配合完成浏览器的整体功能，每个进程中又包含多个线程，一个进程内的多个线程也会协同工作，配合完成所在进程的职责。

#### 2 浏览器的架构

- Browser Process：负责包括地址栏，书签栏，前进后退按钮等部分的工作；负责处理浏览器的一些不可见的底层操作，比如网络请求和文件访问；
- Renderer Process：负责一个 tab 内关于网页呈现的所有事情；
- Plugin Process：负责控制一个网页用到的所有插件，如 flash；
- GPU Process：负责处理 GPU 相关的任务。

<img src="images/browser_1.png" width="80%"/>

#### 3 Chrome 多进程架构的优缺点

优点

- 某一渲染进程出问题不会影响其他进程；
- 更为安全，在系统层面上限定了不同进程的权限。

缺点

由于不同进程间的内存不共享，不同进程的内存常常需要包含相同的内容。。

为了节省内存，Chrome 限制了最多的进程数，最大进程数量由设备的内存和 CPU 能力决定，当达到这一限制时，新打开的 Tab 会共用之前同一个站点的渲染进程。

Chrome 把浏览器不同程序的功能看做服务，这些服务可以方便的分割为不同的进程或者合并为一个进程。以 Broswer Process 为例，如果 Chrome 运行在强大的硬件上，它会分割不同的服务到不同的进程，这样 Chrome 整体的运行会更加稳定，但是如果 Chrome 运行在资源贫瘠的设备上，这些服务又会合并到同一个进程中运行，这样可以节省内存。

#### 4 iframe 的渲染 -- Site Isolation

Site Isolation 机制从 Chrome 67 开始默认启用。这种机制允许在同一个 Tab 下的跨站 iframe 使用单独的进程来渲染，这样会更为安全。

### 导航过程发生了什么

我们知道浏览器 Tab 外的工作主要由 Browser Process 掌控，Browser Process 又对这些工作进一步划分，使用不同线程进行处理：

- UI thread：控制浏览器上的按钮及输入框；
- network thread：处理网络请求，从网上获取数据；
- storage thread：控制文件等的访问。

#### 1 处理输入

UI thread需要判断用户输入的是 URL 还是 query。

#### 2 开始导航

当用户点击回车键，UI thread 通知 network thread 获取网页内容，并控制 tab 上的 spinner 展现，表示正在加载中。

network thread 会执行 DNS 查询，随后为请求建立 TLS 连接。

如果 network thread 接收到了重定向请求头如 301，network thread 会通知 UI thread 服务器要求重定向，之后，另外一个 URL 请求会被触发。

#### 3 读取响应

当请求响应返回的时候，network thread 会依据 Content-Type 及 MIME Type sniffing 判断响应内容的格式。

如果响应内容的格式是 HTML ，下一步将会把这些数据传递给 renderer process，如果是 zip 文件或者其它文件，会把相关数据传输给下载管理器。

Safe Browsing 检查也会在此时触发，如果域名或者请求内容匹配到已知的恶意站点，network thread 会展示一个警告页。此外 CORB 检测也会触发确保敏感数据不会被传递给渲染进程。

Cross-Origin Read Blocking (CORB)http://www.yaoyanhuo.com/blog/corb/

#### 4 查找渲染进程

当上述所有检查完成，network thread 确信浏览器可以导航到请求网页，network thread 会通知 UI thread 数据已经准备好，UI thread 会查找到一个 renderer process 进行网页的渲染。

收到 Network thread 返回的数据后，UI thread 查找相关的渲染进程

由于网络请求获取响应需要时间，这里其实还存在着一个加速方案。当 UI thread 发送 URL 请求给 network thread 时，浏览器其实已经知道了将要导航到那个站点。UI thread 会并行的预先查找和启动一个渲染进程，如果一切正常，当 network thread 接收到数据时，渲染进程已经准备就绪了，但是如果遇到重定向，准备好的渲染进程也许就不可用了，这时候就需要重启一个新的渲染进程。

#### 5 确认导航

进过了上述过程，数据以及渲染进程都可用了， Browser Process 会给 renderer process 发送 IPC 消息来确认导航，一旦 Browser Process 收到 renderer process 的渲染确认消息，导航过程结束，页面加载过程开始。

此时，地址栏会更新，展示出新页面的网页信息。history tab 会更新，可通过返回键返回导航来的页面，为了让关闭 tab 或者窗口后便于恢复，这些信息会存放在硬盘中。

#### 6 额外的步骤

一旦导航被确认，renderer process 会使用相关的资源渲染页面，下文中我们将重点介绍渲染流程。当 renderer process 渲染结束（渲染结束意味着该页面内的所有的页面，包括所有 iframe 都触发了 onload 时），会发送 IPC 信号到 Browser process， UI thread 会停止展示 tab 中的 spinner。

所有的 JS 代码其实都由 renderer Process 控制的，所以在你浏览网页内容的过程大部分时候不会涉及到其它的进程。

除了上述流程，有些页面还拥有 Service Worker （服务工作线程），Service Worker 让开发者对本地缓存及判断何时从网络上获取信息有了更多的控制权，如果 Service Worker 被设置为从本地 cache 中加载数据，那么就没有必要从网上获取更多数据了。

值得注意的是 service worker 也是运行在渲染进程中的 JS 代码，因此对于拥有 Service Worker 的页面，上述流程有些许的不同。

### 渲染进程是如何工作的

渲染进程几乎负责 Tab 内的所有事情，渲染进程的核心目的在于转换 HTML CSS JS 为用户可交互的 web 页面。渲染进程中主要包含以下线程：

1. 主线程 Main thread

2. 工作线程 Worker thread

3. 排版线程 Compositor thread

4. 光栅线程 Raster thread

后文我们将逐步介绍不同线程的职责，在此之前我们先看看渲染的流程。

1. 构建 DOM：当渲染进程接收到导航的确认信息，开始接受 HTML 数据时，主线程会解析文本字符串为 DOM。

2. 加载次级的资源：网页中常常包含诸如图片，CSS，JS 等额外的资源，这些资源需要从网络上或者 cache 中获取。主进程可以在构建 DOM 的过程中会逐一请求它们，为了加速 preload scanner 会同时运行，如果在 html 中存在 `<img>` `<link>` 等标签，preload scanner 会把这些请求传递给 Browser process 中的 network thread 进行相关资源的下载。

3. JS 的下载与执行：当遇到 `<script>` 标签时，渲染进程会停止解析 HTML，而去加载，解析和执行 JS 代码，停止解析 html 的原因在于 JS 可能会改变 DOM 的结构（使用诸如 `documwnt.write()`等 API）。不过开发者其实也有多种方式来告知浏览器应对如何应对某个资源，比如说如果在`<script>` 标签上添加了 `async` 或 `defer` 等属性，浏览器会异步的加载和执行 JS 代码，而不会阻塞渲染。

4. 样式计算：仅仅渲染 DOM 还不足以获知页面的具体样式，主进程还会基于 CSS 选择器解析 CSS 获取每一个节点的最终的计算样式值。即使不提供任何 CSS，浏览器对每个元素也会有一个默认的样式。

5. 获取布局：想要渲染一个完整的页面，除了获知每个节点的具体样式，还需要获知每一个节点在页面上的位置，布局其实是找到所有元素的几何关系的过程。通过遍历 DOM 及相关元素的计算样式，主线程会构建出包含每个元素的坐标信息及盒子大小的布局树。布局树和 DOM 树类似，但是其中只包含页面可见的元素，如果一个元素设置了 `display:none` ，这个元素不会出现在布局树上，伪元素虽然在 DOM 树上不可见，但是在布局树上是可见的。

6. 绘制各元素：即使知道了不同元素的位置及样式信息，我们还需要知道不同元素的绘制先后顺序才能正确绘制出整个页面。在绘制阶段，主线程会遍历布局树以创建绘制记录。绘制记录可以看做是记录各元素绘制先后顺序的笔记。

7. 合成帧：不同层的组合由 compositor 线程（合成器线程）完成。一旦层树被创建，渲染顺序被确定，主线程会把这些信息通知给合成器线程，合成器线程会栅格化每一层。有的层的可以达到整个页面的大小，因此，合成器线程将它们分成多个磁贴，并将每个磁贴发送到栅格线程，栅格线程会栅格化每一个磁贴并存储在 GPU 显存中。合成器的优点在于，其工作无关主线程，合成器线程不需要等待样式计算或者 JS 执行，这就是为什么合成器相关的动画 最流畅，如果某个动画涉及到布局或者绘制的调整，就会涉及到主线程的重新计算，自然会慢很多。

### 浏览器对事件的处理

当用户在屏幕上触发诸如 touch 等手势时，首先收到手势信息的是 Browser process， 不过 Browser process 只会感知到在哪里发生了手势，对 tab 内内容的处理是还是由渲染进程控制的。

事件发生时，浏览器进程会发送事件类型及相应的坐标给渲染进程，渲染进程随后找到事件对象并执行所有绑定在其上的相关事件处理函数。

这里涉及到一个专业名词「非快速滚动区域（non-fast scrollable region）」。由于执行 JS 是主线程的工作，当页面合成时，合成器线程会标记页面中绑定有事件处理器的区域为 non-fast scrollable region ，如果存在这个标注，合成器线程会把发生在此处的事件发送给主线程，如果事件不是发生在这些区域，合成器线程则会直接合成新的帧而不用等到主线程的响应。

web 开发中常用的事件处理模式是事件委托，基于事件冒泡，我们常常在最顶层绑定事件：

```js
document.body.addEventListener('touchstart', event => {
    if (event.target === area) {
        event.preventDefault();
    }
});
```

上述做法很常见，但是如果从浏览器的角度看，整个页面都成了 non-fast scrollable region 了。

这意味着即使操作的是页面无绑定事件处理器的区域，每次输入时，合成器线程也需要和主线程通信并等待反馈，流畅的合成器独立处理合成帧的模式就失效了。

为了防止这种情况，我们可以为事件处理器传递 `passive: true` 做为参数，这样写就能让浏览器即监听相关事件，又让组合器线程在等等主线程响应前构建新的组合帧。

```js
document.body.addEventListener('touchstart', event => {
    if (event.target === area) {
        event.preventDefault()
    }
 }, {passive: true}); 
```

不过上述写法可能又会带来另外一个问题，假设某个区域你只想要水平滚动，使用 `passive: true` 可以实现平滑滚动，但是垂直方向的滚动可能会先于`event.preventDefault()`发生，此时可以通过 `event.cancelable` 来防止这种情况。

```js
document.body.addEventListener('pointermove', event => {
    if (event.cancelable) {
        event.preventDefault(); // block the native scroll
        /*
        *  do what you want the application to do here
        */
    } 
}, {passive: true});
```

也可以使用 css 属性 `touch-action` 来完全消除事件处理器的影响，如：

```css
#area { 
  touch-action: pan-x; 
}
```

#### 查找到事件对象

当组合器线程发送输入事件给主线程时，主线程首先会进行命中测试（hit test）来查找对应的事件目标，命中测试会基于渲染过程中生成的绘制记录（ paint records ）查找事件发生坐标下存在的元素。

#### 事件的优化

一般我们屏幕的刷新速率为 60fps，但是某些事件的触发量会不止这个值，出于优化的目的，Chrome 会合并连续的事件(如 wheel, mousewheel, mousemove, pointermove, touchmove )，并延迟到下一帧渲染时候执行 。

而如 keydown, keyup, mouseup, mousedown, touchstart, 和 touchend 等非连续性事件则会立即被触发。

合并事件虽然能提示性能，但是如果你的应用是绘画等，则很难绘制一条平滑的曲线了，此时可以使用 `getCoalescedEvents` API 来获取组合的事件。



## 深度剖析浏览器渲染性能原理

https://www.jianshu.com/p/a32b890c29b1

### 渲染卡顿是怎么回事？

### 渲染流程分为几步？

### 结合渲染流程怎么优化渲染性能呢？

结合上述的渲染流程，我们可以去针对性的分析并优化每个步骤。

- 优化JavaScript的执行效率
  - 动画实现，避免使用setTimeout或setInterval，尽量使用requestAnimationFrame
  - 把耗时长的JavaScript代码放到Web Workers中去做
  - 把DOM元素的更新划分为多个小任务，分别在多个frame中去完成
  - 使用Chrome DevTools的Timeline来分析JavaScript的性能
- 降低样式计算的范围和复杂度
  - 降低样式选择器的复杂度
  - 减少需要执行样式计算的元素个数
- 避免大规模、复杂的布局
  - 尽可能避免触发布局
  - 使用flexbox替代老的布局模型
  - 避免强制同步布局事件的发生
  - 避免连续的强制同步布局发生
- 简化绘制的复杂度、减少绘制区域
  - 提升移动或渐变元素的绘制层
  - 减少绘制区域
  - 简化绘制的复杂度
  - 通过Chrome DevTools来分析绘制复杂度和时间消耗，尽可能降低这些指标
- 优先使用渲染层合并属性、控制层数量
  - 使用transform/opacity实现动画效果
  - 提升动画效果中的元素
  - 管理渲染层、避免过多数量的层
  - 使用Chrome DevTools来了解页面的渲染层情况
- 对用户输入事件的处理函数去抖动（移动设备）
  - 避免使用运行时间过长的输入事件处理函数
  - 避免在输入事件处理函数中修改样式属性
  - 对滚动事件处理函数去抖动

### 总结点什么？

网站性能优化是一个有一定门槛的细致活，需要对浏览器的机制有很好的理解，同时也应该学会利用Chrome DevTools去分析并解决实际问题，关于Chrome DevTools的学习我会专门开一篇博客来讲解，同时会结合具体的性能问题来分析。

## 浏览器的渲染过程 

http://www.tripod.fun/2019/01/03/2019/浏览器的渲染过程/

1. DOMTree的构建
2. CSSOMTree的构建
3. 渲染树的构建
4. 布局
5. 渲染



## 浏览器渲染中发生的事

https://zhuanlan.zhihu.com/p/36700206



## 前端性能优化：细说浏览器渲染的重排与重绘

https://zhuanlan.zhihu.com/p/40605154



## 浏览器渲染流水线解析与网页动画性能优化

https://zhuanlan.zhihu.com/p/30534023



## 白屏

[首页白屏优化实践](https://segmentfault.com/a/1190000020383064)

[Webview加载界面白屏解决方法总结](https://blog.csdn.net/qq_34584049/article/details/78280815)

[前端优化-如何计算白屏和首屏时间](https://www.cnblogs.com/longm/p/7382163.html)



## 页面重排或回流、重绘

为了让项目的运行效率更高，减少开销，需要对重排、回流、重绘有一定的了解。重排和回流其实是一回事。

### 浏览器渲染

浏览器在渲染页面的时候，大致是以下几个步骤：

1. 解析html生成DOM树，解析css，生成CSSOM树，将DOM树和CSSOM树结合，生成渲染树；
2. 根据渲染树，浏览器可以计算出网页中有哪些节点，各节点的CSS以及从属关系（回流）；
3. 根据渲染树以及回流得到的节点信息，计算出每个节点在屏幕中的位置（重绘）；
4. 最后将得到的节点位置信息交给浏览器的图形处理程序，让浏览器中显示页面；

### 回流

回流：英文叫reflow，指的是当渲染树中的节点信息发生了大小、边距等问题，需要重新计算各节点和css具体的大小和位置。

例：在css中对一个div修饰的样式中，使用了宽度50%，此时需要将50%转换为具体的像素，这个计算的过程，就是回流的过程。

容易造成回流的操作：

1、布局流相关操作

- 盒模型的相关操作会触发重新布局：width、height、padding、border、margin
- 定位相关操作会触发重新布局：position、top、left、bottom、right
- 浮动相关操作会触发重新布局：float、clear、overflow

2、改变节点内的内容
改变节点的结构或其中的文本结构会触发重新布局：text-align、vertical-align、line-height、font-weight、font-size、font-family、white-space

### 重绘

重绘：英文叫repaint，当节点的部分属性发生变化，但不影响布局，只需要重新计算节点在屏幕中的绝对位置并渲染的过程，就叫重绘。

比如：改变元素的背景颜色、字体颜色等操作会造成重绘。

回流的过程在重绘的过程前面，所以回流一定会重绘，但重绘不一定会引起回流。

容易造成重绘操作的css：color、border-style、border-radius、text-decoration、box-shadow、outline、background

### 浏览器自身的优化

每次回流都会对浏览器造成额外的计算消耗，所以浏览器对于回流和重绘有一定的优化机制。浏览器通常都会将多次回流操作放入一个队列中，等过了一段时间或操作达到了一定的临界值，然后才会挨个执行，这样能节省一些计算消耗。但是在获取布局信息操作的时候，会强制将队列清空，也就是强制回流，比如访问或操作以下或方法时：

- offsetWidth、offsetHeight
- clientWidth、clientHeight
- scrollWidth、scrollHeight
- scrollTop、scrollLeft
- offsetTop、offsetLeft
- clientTop、clientLeft
- getComputedStyle()

这些属性或方法都需要得到最新的布局信息，所以浏览器必须去回流执行。因此，在项目中，尽量避免使用上述属性或方法，如果非要使用的时候，也尽量将值缓存起来，而不是一直获取。

### 减少回流和重绘

#### 合并样式修改

减少造成回流的次数，如果要给一个节点操作多个css属性，而每一个都会造成回流的话，尽量将多次操作合并成一个，例：

```js
var oDiv = document.querySelector('.box');
oDiv.style.padding = '5px';
oDiv.style.border = '1px solid #000';
oDiv.style.margin = '5px';
```

操作div的3个css属性，分别是padding、border、margin，此时就可以考虑将多次操作合并为一次。

方法一：使用style的cssText：

```js
oDiv.style.cssText = 'padding:5px; border:1px solid #000; margin:5px;';
```

方法二：将这几个样式定义给一个类名，然后给标签添加类名：

```html
<style>
    .pbm{
        padding:5px; 
        border:1px solid #000; 
        margin:5px;
    }
</style>
<script>
    var oDiv = document.querySelector('.box');
    oDiv.classList.add('pbm');
</script>
```

#### 批量操作DOM

当对DOM有多次操作的时候，需要使用一些特殊处理减少触发回流，其实就是对DOM的多次操作，在脱离标准流后，对元素进行的多次操作，不会触发回流，等操作完成后，再将元素放回标准流。

脱离标准流的操作有以下3中：

1. 隐藏元素
2. 使用文档碎片
3. 拷贝节点

例：下面对DOM节点的多次操作，每次都会触发回流

```js
var data = [
  { id: 1, name: "商品1" },
  { id: 2, name: "商品2" },
  { id: 3, name: "商品3" },
  { id: 4, name: "商品4" }
  // 假设后面还有很多
];
var oUl = document.querySelector("ul");
for (var i = 0; i < data.length; i++) {
  var oLi = document.createElement("li");
  oLi.innerText = data[i].name;
  oUl.appendChild(oLi);
}
```

这样每次给ul中新增一个li的操作，每次都会触发回流。

方法一：隐藏ul后，给ul添加节点，添加完成后再将ul显示

```js
oUl.style.display = 'none';
for(var i=0;i<data.length;i++){
    var oLi = document.createElement("li");
    oLi.innerText = data[i].name;
    oUl.appendChild(oLi);
}
oUl.style.display = 'block';
```

此时，在隐藏ul和显示ul的时候，触发了两次回流，给ul添加每个li的时候没有触发回流。

方法二：创建文档碎片，将所有li先放在文档碎片中，等都放进去以后，再将文档碎片放在ul中

```js
var fragment = document.createDocumentFragment();
for(var i=0;i<data.length;i++){
    var oLi = document.createElement("li");
    oLi.innerText = data[i].name;
    fragment.appendChild(oLi);
}
oUl.appendChild(fragment);
```

方法三：将ul拷贝一份，将所有li放在拷贝中，等都放进去以后，使用拷贝替换掉ul

```js
var newUL = oUl.cloneNode(true);
for(var i=0;i<data.length;i++){
    var oLi = document.createElement("li");
    oLi.innerText = data[i].name;
    newUL.appendChild(oLi);
}
oUl.parentElement.replaceChild(newUl, oUl);
```

#### 避免多次触发布局

如下回到顶部的操作：

```js
goBack.onclick = function () {
  setInterval(function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    t += 10;
    document.documentElement.scrollTop = document.body.scrollTop = t;
  }, 20);
};
```

每隔20毫秒都会重新获取滚动过的距离，每次都会触发回流，代码优化如下：

```js
goBack.onclick = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  setInterval(function () {
    t += 10;
    document.documentElement.scrollTop = document.body.scrollTop = t;
  }, 20);
};
```

只获取一次，每次都让数字递增，避免每次都获取滚动过的距离。

对于页面中比较复杂的动画，尽量将元素设置为绝对定位，操作元素的定位属性，这样只有这一个元素会回流，如果不是定位的话，容易引起其父元素以及子元素的回流。

### 参考

★ [你真的了解回流和重绘吗](https://segmentfault.com/a/1190000017329980)

[重绘回流过程](https://fecommunity.github.io/front-end-interview/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/3.%E9%87%8D%E7%BB%98%E5%9B%9E%E6%B5%81.html)

[从浏览器渲染原理，浅谈回流重绘与性能优化](https://www.cnblogs.com/xiahj/p/11777786.html)



## 资料

从Chrome源码看JS Object的实现https://zhuanlan.zhihu.com/p/26169639

[10分钟彻底搞懂前端页面性能监控](https://zhuanlan.zhihu.com/p/82981365)

[从Chrome源码看浏览器如何构建DOM树](https://zhuanlan.zhihu.com/p/24911872)

[常见的web性能优化方法](https://blog.csdn.net/daimomo000/article/details/72897436)

[前端性能优化的七大手段](https://www.cnblogs.com/xiaohuochai/p/9178390.html)

# V8引擎

## 认识V8引擎

https://zhuanlan.zhihu.com/p/27628685

### 1 渲染引擎及网页渲染

#### 1.1 渲染引擎

WebCore是各个浏览器使用的共享部分，包括HTML解析器、CSS解析器、DOM和SVG等。JavaScriptCore是WebKit的默认引擎，在谷歌系列产品中被替换为V8引擎。

#### 1.2 网页渲染流程

##### 从输入URL到生成DOM树

##### 从DOM树到构建WebKit绘图上下文

##### 绘图上下文到最终图像呈现

#### 1.3 JavaScript引擎

JavaScript语言是解释型语言，为了提高性能，引入了Java虚拟机和C++编译器中的众多技术。

现在JavaScript引擎的执行过程大致是：源代码→抽象语法树→字节码→JIT→本地代码(V8引擎没有中间字节码)。

V8更加直接的将抽象语法树通过JIT技术转换成本地代码，放弃了在字节码阶段可以进行的一些性能优化，但保证了执行速度。虽然，少了生成字节码这一阶段的性能优化，但极大减少了转换时间。

但是在2017年4月底，v8的5.9版本发布了，新增了一个Ignition字节码解释器，将默认启动，从此之后将与JSCore有大致相同的流程。做出这一改变的原因为：（主要动机）减轻机器码占用的内存空间，即牺牲时间换空间；提高代码的启动速度。[V8 Ignition：JS引擎与字节码的不解之缘](https://zhuanlan.zhihu.com/p/26669846)

### 2 V8引擎

V8引擎是一个JavaScript引擎实现，最初由一些语言方面专家设计，后被谷歌收购，随后谷歌对其进行了开源。

V8使用C++开发，在运行JavaScript之前，相比其它的JavaScript的引擎转换成字节码或解释执行，V8将其编译成原生机器码（IA-32, x86-64, ARM, or MIPS CPUs），并且使用了如内联缓存（inline caching）等方法来提高性能。有了这些功能，JavaScript程序在V8引擎下的运行速度媲美二进制程序。

#### 2.1 数据表示

JavaScript是一种动态类型语言，在编译时并不能准确知道变量的类型，只可以在运行时确定，这就不像c++或者java等静态类型语言，在编译时候就可以确切知道变量的类型。然而，在运行时计算和决定类型，会严重影响语言性能，这也就是JavaScript运行效率比C++或者JAVA低很多的原因之一。

在JavaScript中，除boolean，number，string，null，undefined这个五个简单变量外，其他的数据都是对象，V8使用一种特殊的方式来表示它们，进而优化JavaScript的内部表示问题。

在V8中，数据的内部表示由数据的实际内容和数据的句柄构成。数据的实际内容是变长的，类型也是不同的；句柄固定大小，包含指向数据的指针。这种设计可以方便V8进行垃圾回收和移动数据内容，如果直接使用指针的话就会出问题或者需要更大的开销，使用句柄的话，只需修改句柄中的指针即可，使用者使用的还是句柄，指针改动是对使用者透明的。

#### 2.2 工作过程

在执行编译之前，V8会构建众多全局对象并加载一些内置的库（如math库），来构建一个运行环境。而且在JavaScript源代码中，并非所有的函数都被编译生成本地代码，而是延迟编译，在调用时才会编译。

由于V8缺少了生成中间代码这一环节，缺少了必要的优化，为了提升性能，V8会在生成本地代码后，使用数据分析器(profiler)采集一些信息，然后根据这些数据将本地代码进行优化，生成更高效的本地代码，这是一个逐步改进的过程。

#### 2.3 优化回滚

在2010年，V8引入了新的编译器-Crankshaft，它主要针对热点函数进行优化，基于JavaScript源代码开始分析而非本地代码，同时构建Hydroger图并基于此来进行优化分析。

Crankshaft编译器为了性能考虑，通常会做出比较乐观和大胆的预测—代码稳定且变量类型不变，所以可以生成高效的本地代码。但是，鉴于JavaScript的一个弱类型的语言，变量类型也可能在执行的过程中进行改变，鉴于这种情况，V8会将该编译器做的想当然的优化进行回滚，称为优化回滚。

```js
var counter = 0;
function test(x, y) {
    counter++;
    if (counter < 1000000) {
        // do something
        return 'jeri';
    }
    var unknown = new Date();
    console.log(unknown);
}
```

该函数被调用多次之后，V8引擎可能会触发Crankshaft编译器对其进行优化，而优化代码认为示例代码的类型信息都已经被确定。但，由于尚未真正执行到new Date()这个地方，并未获取unknown这个变量的类型，V8只得将该部分代码进行回滚。优化回滚是一个很耗时的操作，在写代码过程中，尽量不要触发优化该操作。

在最近发布的V8 5.9版本中，新增了一个Ignition字节码解释器，TurboFan和Ignition结合起来共同完成JavaScript的编译。这个版本中消除Cranshaft这个旧的编译器，并让新的Turbofan直接从字节码来优化代码，并当需要进行反优化的时候直接反优化到字节码，而不需要再考虑JS源代码。

#### 2.4 隐藏类与内嵌缓存

**隐藏类**

在执行C++代码时，仅凭几个指令即可根据偏移信息获取变量信息，而JavaScript里需要通过字符串匹配来查找属性值的，这就需要更多的操作才能访问到变量信息，而代码量变量存取是十分频繁的，这也就制约了JavaScript的性能。V8借用了类和偏移位置的思想，将本来通过属性名匹配来访问属性值的方法进行了改进，使用类似C++编译器的偏移位置机制来实现，这就是隐藏类。

隐藏类将对象划分成不同的组，对于组内对象拥有相同的属性名和属性值的情况，将这些组的属性名和对应的偏移位置保存在一个隐藏类中，组内所有对象共享该信息。同时，也可以识别属性不同的对象。

**内嵌缓存**

正常访问对象属性的过程是：首先获取隐藏类的地址，然后根据属性名查找偏移值，然后计算该属性的地址。虽然相比以往在整个执行环境中查找减小了很大的工作量，但依然比较耗时。能不能将之前查询的结果缓存起来，供再次访问呢？当然是可行的，这就是内嵌缓存。

内嵌缓存的大致思路就是将初次查找的隐藏类和偏移值保存起来，当下次查找的时候，先比较当前对象是否是之前的隐藏类，如果是的话，直接使用之前的缓存结果，减少再次查找表的时间。当然，如果一个对象有多个属性，那么缓存失误的概率就会提高，因为某个属性的类型变化之后，对象的隐藏类也会变化，就与之前的缓存不一致，需要重新使用以前的方式查找哈希表。

#### 2.5 内存管理

Node中通过JavaScript使用内存时就会发现只能使用部分内存（64位系统下约为1.4 GB，32位系统下约为0.7 GB），其深层原因是V8垃圾回收机制的限制所致（如果可使用内存太大，V8在进行垃圾回收时需耗费更多的资源和时间，严重影响JS的执行效率）。

V8使用了分代和大数据的内存分配，在回收内存时使用精简整理的算法标记未引用的对象，然后消除没有标记的对象，最后整理和压缩那些还未保存的对象，即可完成垃圾回收。

在V8中，使用较多的是年轻分代和年老分代。

- 年轻分代中的对象垃圾回收主要通过Scavenge算法进行垃圾回收。在Scavenge的具体实现中，主要采用了Cheney算法：通过复制的方式实现的垃圾回收算法。它将堆内存分为两个semispace，一个处于使用中（From空间），另一个处于闲置状态（To空间）。当分配对象时，先是在From空间中进行分配。当开始进行垃圾回收时，会检查From空间中的存活对象，这些存活对象将被复制到To空间中，而非存活对象占用的空间将会被释放。完成复制后，From空间和To空间的角色发生对换。在垃圾回收的过程中，就是通过将存活对象在两个semispace空间之间进行复制。年轻分代中的对象有机会晋升为年老分代，条件主要有两个：一个是对象是否经历过Scavenge回收，一个是To空间的内存占用比超过限制。

- 对于年老分代中的对象，由于存活对象占较大比重，再采用上面的方式会有两个问题：一个是存活对象较多，复制存活对象的效率将会很低；另一个问题依然是浪费一半空间的问题。为此，V8在年老分代中主要采用了Mark-Sweep（标记清除）标记清除和Mark-Compact（标记整理）相结合的方式进行垃圾回收。

#### 2.6 快照

在V8引擎启动时，需要构建JavaScript运行环境，需要加载很多内置对象，同时也需要建立内置的函数，如Array，String，Math等。为了使V8更加整洁，加载对象和建立函数等任务都是使用JavaScript文件来实现的，V8引擎负责提供机制来支持，就是在编译和执行JavaScript前先加载这些文件。

V8引擎需要编译和执行这些内置的JavaScript代码，同时使用堆等来保存执行过程中创建的对象、代码等，这些都需要时间。为此，V8引入了快照机制。将这些内置的对象和函数加载之后的内存保存并序列化。序列化之后的结果很容易反序列化，**经过快照机制的启动时间可以缩减几毫秒**。快照机制也可以将一些开发者认为需要的JavaScript文件序列化，以减少处理时间。不过快照机制的加载的代码不能被CrankShaft这样的编译器优化，可能会存在性能问题。

### 3 V8 VS JavaScriptCore

JavaScriptCore引擎是WebKit中默认的JavaScript引擎，也是苹果开源的一个项目，应用较为广泛。最初，性能不是很好，从2008年开始了一系列的优化，重新实现了编译器和字节码解释器，使得引擎的性能有较大的提升。随后内嵌缓存、基于正则表达式的JIT、简单的JIT及字节码解释器等技术引入进来，JavaScriptCore引擎也在不断的迭代和发展。

V8引擎自诞生之日起就以性能优化作为目标，引入了众多新技术，极大了带动了整个业界JavaScript引擎性能的快速发展。总的来说，V8引擎较为激进，青睐可以提高性能的新技术，而JavaScriptCore引擎较为稳健，渐进式的改变着自己的性能。

### 4 功能扩展

JavaScript引擎的主要功能是解析和执行JavaScript代码，往往不能满足使用者多样化的需要，那么就可以增加扩展以提升它的能力。V8引擎有两种扩展机制：绑定和扩展。

#### 4.1 绑定机制

JavaScript引擎绑定机制需要将扩展代码和JavaScript引擎一块编译和打包，不能根据需要在引擎启动后再动态注入这些本地代码。在实际WEB开发中，开发者都是基于现有浏览器的，根本不可能介入到JavaScript引擎的编译中，绑定机制有很大的局限性，但其非常高效，适用于对性能要求较高的场景。

#### 4.2 Extension机制

通过V8的基类Extension进行能力扩展，无需和V8引擎一起编译，可以动态为引擎增加功能特性，具有很大的灵活性。

### 总结

在过去几年，JavaScript在很多领域得到了广泛的应用，然而限于JavaScript语言本身的不足，执行效率不高。Google也推出了一些JavaScript网络应用，如Gmail、Google Maps及Google Docs office等。这些应用的性能不仅受到服务器、网络、渲染引擎以及其他诸多因素的影响，同时也受到JavaScript本身执行速度的影响。然而既有的JavaScript引擎无法满足新的需求，而性能不佳一直是网络应用开发者最关心的。Google就开始了V8引擎的研究，将一系列新技术引入JavaScript引擎中，大大提高了JavaScript的执行效率。相信随着V8引擎的不断发展，JavaScript也会有更广泛的应用场景，前端工程师也会有更好的未来！
那么结合上面对于V8引擎的介绍，我们在编程中应注意：

- 类型。对于函数，JavaScript是一种动态类型语言，JavaScriptCore和V8都使用隐藏类和内嵌缓存来提高性能，为了保证缓存命中率，一个函数应该使用较少的数据类型；对于数组，应尽量存放相同类型的数据，这样就可以通过偏移位置来访问。
- 数据表示。简单类型数据（如整型）直接保存在句柄中，可以减少寻址时间和内存占用，如果可以使用整数表示的，尽量不要用浮点类型。
- 内存。虽然JavaScript语言会自己进行垃圾回收，但我们也应尽量做到及时回收不用的内存，对不再使用的对象设置为null或使用delete方法来删除(使用delete方法删除会触发隐藏类新建，需要更多的额外操作)。
- 优化回滚。在执行多次之后，不要出现修改对象类型的语句，尽量不要触发优化回滚，否则会大幅度降低代码的性能。
- 新机制。使用JavaScript引擎或者渲染引擎提供的新机制和新接口提高性能。

## V8 十年故事：从农场诞生的星球最强JS引擎

https://www.infoq.cn/article/v8-10-years

## 资料

编译 V8 源码https://zhuanlan.zhihu.com/p/25120909

Promise V8 源码分析(一)https://zhuanlan.zhihu.com/p/264944183

探究JS V8引擎下的“数组”底层实现https://zhuanlan.zhihu.com/p/96959371

【深度】扒开V8引擎的源码，我找到了你们想要的前端算法https://www.yisu.com/zixun/77005.html

新手应该如何读Google V8引擎源代码？https://www.zhihu.com/question/39014659

v8引擎源码分析https://blog.csdn.net/theanarkh/category_9015796.html

[V8引擎版本发布流程](https://zhuanlan.zhihu.com/p/35038142)

[了解V8引擎如何运行JS](https://www.jianshu.com/p/c71c714c27bd)

[V8的内存限制](https://cnodejs.org/topic/5ade9f8fa7d228c16b9871fd)

[V8内存浅析](https://zhuanlan.zhihu.com/p/33816534)

[【译】了解V8内存管理](https://www.keisei.top/architecture-of-v8-memory/)



# 微前端

## qiankun

https://qiankun.umijs.org/zh/

★ [基于qiankun的微前端最佳实践](https://mp.weixin.qq.com/s/5BhiyfP4JtXThz2rO0_P4g)

[目标是最完善的微前端解决方案-qiankun 2.0](https://zhuanlan.zhihu.com/p/131022025)

## 资料

[BAT都在玩的微前端，究竟是怎样设计的？](https://mp.weixin.qq.com/s/Dd7dB5jkWTFgfEQdFqZvJQ)

[微前端的核心价值](https://zhuanlan.zhihu.com/p/95085796)

[可能是你见过最完善的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)

了解什么是微前端 https://juejin.im/post/5d1f19e3f265da1bab29ce5f

微前端如何落地 https://www.infoq.cn/article/xm_AaiOTXmLpPgWvX9y9



# 工程化

## 各大互联网公司的前端开发流程和前端架构是怎么做的呢？

- 通过框架（vue，angular，kissy）组织，把html、css、js写成不像html（mustache，dot，jade）、css（less，sass，compass，stylus）、js（babel，coffee）

- 用模块工具或框架（webpack，broswerify，seajs，kissy）组织各种模块化（cmd，amd，kmd）、组件化

- 再用工具（grunt，gulp）打包解析压缩合并成html、css和js，最后版本控制（git，svn，cvs）

- 发布到静态资源平台（cdn），后端提供接口前端渲染或是后端（有时候权限也在前端那儿）将前端html文件套成后端语言模板发布上线。

总而言之，离不开“三化”——模块化，组件化，工程化。



## 资料

[package-lock.json的作用](https://www.cnblogs.com/cangqinglang/p/8336754.html)

[自制前端脚手架](https://cloud.tencent.com/developer/article/1547353)

[一文看懂npm、yarn、pnpm之间的区别](http://geek.csdn.net/news/detail/197339)

[Yarn vs npm：你需要知道的一切](https://zhuanlan.zhihu.com/p/23493436)



# GraphQL

https://graphql.cn/learn/

# Chrome插件

[【干货】Chrome插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)



# 无头浏览器

★[初探 Headless Chrome](https://zhuanlan.zhihu.com/p/27100187)

[Phantomjs、Selenium之后浪Puppeteer](https://zhuanlan.zhihu.com/p/137922030)

[PhantomJs](https://www.jianshu.com/p/80e984ef94d3)



# 视频

WebRTC

[Vue-Core-Video-Player - 轻量精致的web视频播放组件](https://zhuanlan.zhihu.com/p/160104019)

[「1.4万字」玩转前端Video播放器 | 多图预警](https://segmentfault.com/a/1190000023243743)

[从0到1实现Web端H.265播放器：YUV渲染篇](https://mp.weixin.qq.com/s/9Ui3NcEZ63PcjDb12mLiAQ)



# VS Code

## 快捷键

Cmd + ,   打开设置 

Cmd + P  打开最近使用的文件

Cmd + B 打开和关闭侧栏

Cmd + Alt + 上箭头/下箭头 块选择 

Shift + Opt 块选择（鼠标）

Shift + Cmd + X 打开插件面板

Cmd + K + S 显示快捷键列表

Cmd + K + M 快捷键方案

Ctrl + J 合并上下行

Ctrl + F 搜索

Ctrl + ALT + F 替换

Ctrl + Shift + F 在项目内搜索

Ctrl + Shift + [ 折叠区域代码

Ctrl + Shift + ] 展开区域代码

Ctrl + / 添加关闭行注释

Shift + Alt + A 块区域注释

## 命令

format on save 保存时格式化

zoom 屏幕缩放

title

## Prettier

Arrow Parens

Print width

Single quote

Semi

[VSCode Prettier 单引号设置无效](https://blog.csdn.net/Lyrelion/article/details/113569702)

## Theme

- Cobalt2：比默认theme更好，关键字更突出。

## Font

- 默认：Menlo, Monaco, 'Courier New', monospace
- 推荐字体：'cascadia code'
- Font Ligature：运算符会显示更美观。
  - 箭头符号会连在一起
  - 全等号会显示为三横线

## 插件

[Prettier 完全指南，以及和 Git、VSCode、ESLint 整合，让你的代码变美丽](https://mp.weixin.qq.com/s/Et2Y2H71O3d3q5Ui7v5WLA)

[ESlint + stylelint + VSCode自动格式化代码(2020)](https://mp.weixin.qq.com/s/T17_kj5Ag21026EB8djUWw)

[每个Web开发者在2021年必须拥有15 个VSCode扩展](https://mp.weixin.qq.com/s/s04gdmR9dJTbC6IG2SsX2Q)

[自用VSCode优质插件推荐](https://zhuanlan.zhihu.com/p/89693351)

- Settings Sync 它能够利用GitHub Gist作为存储载体，把VSCode的各类.json设置文件上传保存，并能够在不同的设备间同步。

[15个必备的VSCode插件](https://zhuanlan.zhihu.com/p/27905838)

- Quokka 是一个调试工具插件，能够根据你正在编写的代码提供实时反馈。
- Prettier 是目前 Web 开发中最受欢迎的代码格式化程序。

[这就是我想要的VSCode插件！](https://zhuanlan.zhihu.com/p/36020180)

- Bracket Pair Colorizer 可以让不同缩减的括号显示不同的颜色。
- HTML Snippets
- JavaScript (ES6) code snippets
- Import Cost 这个扩展简直惊艳到我了，之前写代码的时候很少有关注导入包的大小。只有在后期优化的时候才考虑这些问题。但是这个插件可以在你导入包的时候就提示这个包有多大。
- Auto Rename Tag 在 VSCode 中输入一半的标签会自动帮忙补全另一半，但是如果我后期想修改的话需要就需要两边都要改了，插件可以很好的解决这个问题。
- GitLens 可以增强 VSCode 内置 Git 的功能。

[从零开始配置vscode](https://zhuanlan.zhihu.com/p/79612479)

- ESLint 要养成一个良好的编程习惯, `ESLint`就是一个不错的选择. 它能适应项目中的规则来纠正你的不好的习惯。

[Visual Studio Code（VS code）你们都在用吗？或许你们需要看一下这篇博文](https://zhuanlan.zhihu.com/p/51764279)

- WakaTime 从您的编程活动自动生成的度量标准，见解和时间跟踪。
- vetur 语法高亮、智能感知、Emmet等（VUE插件）。

[高效的编码：我的VS Code设置](https://mp.weixin.qq.com/s/NvtDwfG4FDAsYFuwtxsxMg)

- Version Lens 显示 package.json 文件中每个软件包的最新版本。

## jshint

```json
{
  "esversion": 6, //指定的ECMAScript版本代码
  "sub": true, //允许 [] . 形式来访问对象
  "laxbreak": true, //不检查换行
  "regexp": true, //不允许使用.和[^...]的正则
  "asi": true, //无视没有加分号的行尾
  "bitwise": true, //会禁用位运算符
  "curly": true, //要求使用if和while等结构语句时加上{}来明确代码块
  "immed": true, //要求匿名函数的调用为(function(){//}());
  "eqeqeq": true, //要求代码中使用===或!==，而不是使用==和!=
  "eqnull": true, //允许使用"== null"作比较
  "newcap": true, //要求每一个构造函数名都要大写字母开头
  "noarg": true, //禁止arguments.caller和arguments.callee的使用
  "undef": true, //要求所有的非全局变量，在使用前都被声明
  "strict": false, //要求使用use strict;语法
  "devel": true
}
```

## 其它

[从VSCode看大型IDE技术架构](https://zhuanlan.zhihu.com/p/96041706)

[VS Code1.47发布！全新的JavaScript debugger来了！](https://zhuanlan.zhihu.com/p/158675930)

[远程开发初探-VSCode Remote Development](https://zhuanlan.zhihu.com/p/82568294)



# 跨端



## 我为啥没有再学习flutter和electron了

不可否认这两个都是牛逼的技术，我为什么没有学习了，因为离开业务谈技术都是耍流氓，一个是用来开发app的，一个用来开发桌面的，目前我不知道哪些产品和业务有这样的使用场景。我没有开发app的需求，也没有开发桌面的需求，所以就放弃了。我还没有想好开发什么产品，就算要开发产品，也是先要搞定服务器端开发，而不是app端和桌面端开发。单纯用这俩技术找工作，那就是幼稚，这不是什么生产力技术，而且比我厉害的人多得是，我没有什么优势。与其这样，我不如用心去学习下java,c++和设计模式，算法等底层通用知识。

最近可能政治与地理历史和公众号看多了，花费了太多时间，这些东西可以吹牛逼，但是不能创造什么价值。

*我应该从一个搞技术的，变成一个搞经济的，变成一个自我经营者。*

electron是源于自己的好奇，希望开发一个教育软件，我可能低估了教育软件的竞争惨烈程度，通过我女儿的学习软件，我感觉到这类产品的壁垒还是很高的，现有产品已经很精致了。

flutter源于公司要给客户开发一个app的需求，后来公司感觉成本太高，就不愿意开发了，开发app不是我们公司的专长，也不好收回成本，而使用cordova把原来的web封装一下，也能凑合用。

这是个随笔日记，发现来看的人还真多，我就总结一下：技术要以产品为导向，产品以需求为导向，因为需求才是可以交付的价值，一切为交付服务。



## 资料

[闲鱼正在悄悄放弃Flutter吗？](https://mp.weixin.qq.com/s/k2RJv6FJJBwb2D5Hzgh8lg)

分享这半年的 Electron 应用开发和优化经验http://www.uml.org.cn/AJAX/2020032621.asp

2020年 开发桌面应用是用 flutter 还是用 electron？https://www.zhihu.com/question/390186321



# DevOps

[K8S怎么就和微服务成死对头了？](https://mp.weixin.qq.com/s/sJWoiDwc-VwR-euakeb7iA)

[DevOps编年史](https://mp.weixin.qq.com/s/2HqJoSGUa-5-vMOFqePgWg)

[前端场景下CI/CD的探索与实践](https://mp.weixin.qq.com/s/Y-i20dQgSPu86KFVC7wNTA)



# 行业

[爱奇艺是如何在活动中台实践低代码的？](https://mp.weixin.qq.com/s/m89lqxxjbfynC_pJeXAl6Q)

[现代化Web开发实践之PWA](https://mp.weixin.qq.com/s/AQzyegbzx_od4RKqetS_ug)

[小程序的老祖宗PWA为什么没有火起来？](https://baijiahao.baidu.com/s?id=1612919514973793701&wfr=spider&for=pc)



# 资料

[前端开发中79条不可忽视的知识点汇总](https://juejin.im/post/5d8989296fb9a06b1f147070)

[JS获取文件扩展名方法](https://www.cnblogs.com/FallIntoDarkness/p/9757334.html)

[web前端在线预览，编辑word文件的方法汇总（2021-7-14更新）](https://blog.csdn.net/qq_41312395/article/details/109450562)

[TinyMCE中文文档](http://tinymce.ax-z.cn/)

[MVC、MVP、MVVM的区别和联系（精讲版）]( http://c.biancheng.net/view/7743.html)

[MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

[MVVM和MVC模型的区别](http://metronic.net.cn/metronic/show-42520.html)

[五分钟了解互联网Web技术发展史](https://new.qq.com/omn/20210331/20210331A0CN8U00.html)

[快看，前端开发者都收藏了这几张图表！](https://juejin.im/post/5dc43b6b6fb9a04a945dd6b2)

[微服务架构~BFF和网关是如何演化出来的](https://www.cnblogs.com/dadadechengzi/p/9373069.html)

[个人的中小型项目前端架构浅谈](https://blog.csdn.net/qq20004604/article/details/70480932)

[awesome-javascript](https://github.com/sorrycc/awesome-javascript)

[Kafka，Mq和Redis作为消息队列使用时的差异有哪些](https://www.jianshu.com/p/a4319755c6da)

[Immutable.js了解一下？](https://www.jianshu.com/p/0fa8c7456c15)

[call、apply和bind方法的用法以及区别 ](https://www.jianshu.com/p/bc541afad6ee)

[彻底弄懂bind，apply，call三者的区别 ](https://zhuanlan.zhihu.com/p/82340026)

[几张图让你看懂WebAssembly ](https://www.jianshu.com/p/bff8aa23fe4d)

[国内有哪些互联网公司已经开始使用 HTTP/2 了？](https://www.zhihu.com/question/38166198)

[数据库大牛李海翔详解全局读一致性技术](https://maimai.cn/article/detail?fid=1349253255&efid=FJJMyCrwqQFfoZ7rYKtc_A&share_channel=2&use_rn=1&_share_channel=wechat)

[看了就会的浏览器帧原理](https://mp.weixin.qq.com/s/Q4MBBFhc-ONrpCYWhow3uw)

[如何实现一个高度自适应的虚拟列表](https://mp.weixin.qq.com/s/80bNGH9nRNVsb1OCCGtgrg)

[Streams权威指南](https://mp.weixin.qq.com/s/Kg2w5V26brFHsQkJK4-SrQ)

[Web前端的路该怎么走？](https://www.zhihu.com/question/34388831/answer/61429937)

[Real DOM和 Virtual DOM 的区别？优缺点？](https://www.cnblogs.com/houxianzhou/p/15047476.html)

[js为什么是单线程的？](https://www.cnblogs.com/langzianan/p/8403330.html)

[arnog/mathlive: Math input made easy](https://github.com/arnog/mathlive)

[display 的 32 种写法](https://www.cnblogs.com/langzianan/p/8403331.html)

[蚂蚁数据可视化 - AntV](https://antv.alipay.com/zh-cn/index.html)

[Font Awesome Icons](http://fontawesome.io/icons/)

[FullCalendar - Full-sized Calendar jQuery Plugin](http://arshaw.com/fullcalendar/)

[fullCalendar:中文API](http://blog.163.com/lizhenming_2008/blog/static/7655833320124304254255/)

[git-trash/repo.jsx at master · kureikain/git-trash · GitHub](https://github.com/kureikain/git-trash/blob/master/src/repo.jsx)
