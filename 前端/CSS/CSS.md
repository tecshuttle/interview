# CSS

### 通用

1. 介绍一下标准的CSS的盒子模型？[盒子模型你是怎么理解的？](https://blog.csdn.net/lxcao/article/details/52620453)，IE的盒子模型更合理，W3C为了弥补，在CSS3中增加了box-sizing属性。低版本IE的盒子模型有什么不同的？不算border宽度。
2. 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

1. CSS3有哪些新特性？

1. [为什么要初始化CSS样式?](https://blog.csdn.net/lxcao/article/details/52678973)，各浏览器在元素显示上会有些细微差异。
2. 什么是CSS 预处理器 / 后处理器？喜欢那个？

1. 对BFC规范(块级格式化上下文：block formatting context)的理解？

### 特性

1. CSS选择符有哪些？哪些属性可以继承？

1. [CSS权重优先级是如何计算的？](https://blog.csdn.net/lxcao/article/details/52641272)

1. CSS3新增伪类有那些？

1. CSS优化、提高性能的方法有哪些？

1. 浏览器是怎样解析CSS选择器的？

1. style标签写在body后与body前有什么区别？

### 属性

1. [元素定位有哪些？](https://blog.csdn.net/lxcao/article/details/52634189)，absolute\relative\fixed\static。position的值relative和absolute定位原点是？relative是父元素，absolute是文档左上角。
   - position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
   - margin和padding分别适合什么场景使用？
   - absolute的containing block计算方式跟正常流有什么不同？
   - 你对line-height是如何理解的？
   - position:fixed;在android下无效怎么处理？
2. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
3. CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

1. 元素竖向的百分比设定是相对于容器的高度吗？

1. 全屏滚动的原理是什么？用到了CSS的那些属性？

1. [::before 和 :after中双冒号和单冒号有什么区别？](https://blog.csdn.net/lxcao/article/details/52640662)，伪类对象不会出现在DOM中，所以不能通过js来操作，仅仅是在 CSS 渲染层加入。

1. [display有哪些值？说明他们的作用。](https://blog.csdn.net/lxcao/article/details/52673179)

1. 设置元素浮动后，该元素的display值是多少？（自动变成display:block）

1. 怎么让Chrome支持小于12px 的文字？

1. 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

1. font-style属性可以让它赋值为“oblique” oblique是什么意思？

1. display:inline-block 什么时候会显示间隙？(携程)

1. overflow: scroll时不能平滑滚动的问题怎么处理？

### 应用

1. [如何居中一个元素（正常、绝对定位、浮动元素）？](https://blog.csdn.net/lxcao/article/details/52670724)参考：[CSS垂直居中的11种实现方式](https://www.cnblogs.com/zhouhuan/p/vertical_center.html)

   - 元素水平居中

     1. 行级元素

     2. 块级元素

     3. 浮动元素

        - 宽度不固定的浮动元素（要用2个div）

        - 宽度固定的互动元素（1个div+margin）

     4. 绝对定位的元素水平居中。这种方式非常独特，一定要记牢这种方式，会用这种方式的薪资待遇必然高出几千¥。

   - 元素垂直居中

     1. 行级元素
     2. 块级元素
        - 父元素高度固定
        - 父元素高度不固定
1. 用纯CSS创建一个三角形的原理是什么？
2. 一个满屏品字布局如何设计?
3. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。
4. css多列等高如何实现？
5. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？
6. 请解释一下为什么需要清除浮动？
7. zoom:1的清楚浮动原理?
9. 移动端的布局用过媒体查询吗？
1. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
2. 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]
3. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
4. 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
5. 如何修改chrome记住密码后自动填充表单的黄色背景 ？
6. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
7. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
8. 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
9. rem布局的优缺点

### 面试题

1. [前端开发面试题收集(css部分)](https://www.cnblogs.com/wj204/p/5813736.html)