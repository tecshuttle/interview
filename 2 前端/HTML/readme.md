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

# 存储

1. HTML5的离线储存怎么使用，工作原理能不能解释一下？
2. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
3. 请描述一下cookies，sessionStorage和localStorage的区别？

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

# 页面重排或回流、重绘

为了让项目的运行效率更高，减少开销，需要对重排、回流、重绘有一定的了解。重排和回流其实是一回事。

## 浏览器渲染

浏览器在渲染页面的时候，大致是以下几个步骤：

1. 解析html生成DOM树，解析css，生成CSSOM树，将DOM树和CSSOM树结合，生成渲染树；
2. 根据渲染树，浏览器可以计算出网页中有哪些节点，各节点的CSS以及从属关系（回流）；
3. 根据渲染树以及回流得到的节点信息，计算出每个节点在屏幕中的位置（重绘）；
4. 最后将得到的节点位置信息交给浏览器的图形处理程序，让浏览器中显示页面；

## 回流

回流：英文叫reflow，指的是当渲染树中的节点信息发生了大小、边距等问题，需要重新计算各节点和css具体的大小和位置。

例：在css中对一个div修饰的样式中，使用了宽度50%，此时需要将50%转换为具体的像素，这个计算的过程，就是回流的过程。

容易造成回流的操作：

1、布局流相关操作

- 盒模型的相关操作会触发重新布局：width、height、padding、border、margin
- 定位相关操作会触发重新布局：position、top、left、bottom、right
- 浮动相关操作会触发重新布局：float、clear、overflow

2、改变节点内的内容
改变节点的结构或其中的文本结构会触发重新布局：text-align、vertical-align、line-height、font-weight、font-size、font-family、white-space

## 重绘

重绘：英文叫repaint，当节点的部分属性发生变化，但不影响布局，只需要重新计算节点在屏幕中的绝对位置并渲染的过程，就叫重绘。

比如：改变元素的背景颜色、字体颜色等操作会造成重绘。

回流的过程在重绘的过程前面，所以回流一定会重绘，但重绘不一定会引起回流。

容易造成重绘操作的css：color、border-style、border-radius、text-decoration、box-shadow、outline、background

## 浏览器自身的优化

每次回流都会对浏览器造成额外的计算消耗，所以浏览器对于回流和重绘有一定的优化机制。浏览器通常都会将多次回流操作放入一个队列中，等过了一段时间或操作达到了一定的临界值，然后才会挨个执行，这样能节省一些计算消耗。但是在获取布局信息操作的时候，会强制将队列清空，也就是强制回流，比如访问或操作以下或方法时：

- offsetWidth、offsetHeight
- clientWidth、clientHeight
- scrollWidth、scrollHeight
- scrollTop、scrollLeft
- offsetTop、offsetLeft
- clientTop、clientLeft
- getComputedStyle()

这些属性或方法都需要得到最新的布局信息，所以浏览器必须去回流执行。因此，在项目中，尽量避免使用上述属性或方法，如果非要使用的时候，也尽量将值缓存起来，而不是一直获取。

## 减少回流和重绘

### 合并样式修改

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

### 批量操作DOM

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

### 避免多次触发布局

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



## 参考

★ [你真的了解回流和重绘吗](https://segmentfault.com/a/1190000017329980)

[重绘回流过程](https://fecommunity.github.io/front-end-interview/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/3.%E9%87%8D%E7%BB%98%E5%9B%9E%E6%B5%81.html)

[从浏览器渲染原理，浅谈回流重绘与性能优化](https://www.cnblogs.com/xiahj/p/11777786.html)



