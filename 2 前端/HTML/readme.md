# 通用

1. 介绍一下你对浏览器内核的理解？常见的浏览器内核有哪些？
2. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
3. Doctype作用？严格模式与混杂模式如何区分？它们有何意义?



# 标签

1. 简述一下你对HTML语义化的理解？
2. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
3. [iframe有那些缺点？](https://blog.csdn.net/lxcao/article/details/52618490)
4. [样式导入有哪些方式？](https://blog.csdn.net/lxcao/article/details/52639442)，link和@import两种。[使用link和@import有什么区别？](https://www.cnblogs.com/my--sunshine/p/6872224.html)
5. Label的作用是什么？是怎么用的？（加 for 或 包裹）
6. title与h1的区别、b与strong的区别、i与em的区别？
7. HTML5的form如何关闭自动完成功能？
8. [关于html5中的section标签与div标签的区别（内有实例）](https://www.php.cn/html5-tutorial-409201.html)



# 存储

1. HTML5的离线储存怎么使用，工作原理能不能解释一下？
2. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
3. 请描述一下cookies，sessionStorage和localStorage的区别？



# 自适应

[静态布局、自适应布局、流式布局、响应式布局、弹性布局等的概念和区别](https://www.cnblogs.com/yanayana/p/7066948.html)

[响应式（自适应）网页设计](https://blog.csdn.net/qq_40164190/article/details/83089459)

[自适应和响应式的介绍和区别](https://blog.csdn.net/li_li_lin/article/details/80675092)

[响应式（自适应）网页设计](http://www.zuidaima.com/blog/4397162647342080.htm)

[响应式布局与自适应式布局有什么不同](https://baijiahao.baidu.com/s?id=1627060039271152391&wfr=spider&for=pc)

[响应式布局和自适应布局详解](http://caibaojian.com/356.html)

[响应式网站自适应网站的区别以及利与弊](https://zhuanlan.zhihu.com/p/43702870)

[自适应与响应式网站设计：最佳比较指南](https://www.sumaart.com/share/1161.html)

[自适应和响应式的区别](https://www.jianshu.com/p/b8c5493f743e)

[自适应网站和响应式网站有什么区别，哪个更利于SEO一些]( https://www.yelangcn.com/view/1495.html)



# 应用

1. **页面可见性（Page Visibility API）可以有哪些用途？**<br/>如果页面最小化了或者隐藏在了其他标签页后面，那么有些功能是可以停下来的。目前，只有IE 10和Chrome支持这个API。《JS高级程序设计（第三版）》P686
2. 如何在页面上实现一个圆形的可点击区域？
3. 实现不使用 border 画出1px高的线，在不同浏览器的Quirksmode和CSSCompat模式下都能保持同一效果。
4. 网页验证码是干嘛的，是为了解决什么安全问题？
5. 如何实现浏览器内多个标签页之间的通信? (阿里)
6. webSocket如何兼容低浏览器？(阿里)



# 面试题

- [前端开发面试题收集(html部分)](https://www.cnblogs.com/wj204/p/5814784.html)



# CSS中outline和border的区别

1. border占用空间，outline不占用空间，不会影响元素的尺寸和位置。

2. border 可应用于几乎所有有形的html元素，而 outline 是针对链接、表单控件和ImageMap等元素设计。从而另一个区别也可以推理出，那就是： outline 的效果将随元素的 focus 而自动出现，相应的由 blur 而自动消失。这些都是浏览器的默认行为，无需JavaScript配合CSS来控制。

利用这些特性，我们常用outline来设置悬停的动态效果。之前一直困扰我的问题：hover加边框会导致元素定位和大小的改变，同事也会影响其他元素位置的改变，现在终于解决了，虽然只是一个小的问题但是还是很开心的~



# 资料

[23款非常实用的CSS3工具](https://mp.weixin.qq.com/s/CtEfh2zbt_W21yWUd_-BLQ)

[字节跳动最爱考的前端面试题：CSS 基础](https://mp.weixin.qq.com/s/DcwU4JfUZ5qjfgydL1b9_A)

[Css实现图片裁剪居中（图片不变形） ](https://www.jianshu.com/p/8a9fe8f2b7fb)

[网页中的形状图形都是怎么画出来的？](https://mp.weixin.qq.com/s/OWd7D7tnt2Vh8U8oduF5Cw)

[HTML最新标准HTML5小结](https://www.cnblogs.com/chenpi/p/5578011.html)

[H5 是 HTML5 吗？](https://zhuanlan.zhihu.com/p/29027643)

HTML历史上有如下版本：
HTML 1.0：在1993年6月作为互联网工程工作小组(IETF)工作草案发布。
HTML 2.0：1995年1 1月作为RFC 1866发布，于2000年6月发布之后被宣布已经过时。
HTML 3.2：1997年1月14日，W3C推荐标准。
HTML 4.0：1997年12月18日，W3C推荐标准。
HTML 4.01（微小改进）：1999年12月24日，W3C推荐标准。
HTML5：2014年10月28日，W3C推荐标准。
