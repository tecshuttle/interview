## CSS部分

1. 宽高分别为200px的div在父盒子中的水平垂直居中的方法（至少两种）

2. 清除浮动的方法及原理（至少两种）

3. 列举隐藏元素但不会触发重排的方式

## JS部分

1. 列举出改变函数this的方法

2. 输出执行结果

```js
var word = 'hello';

function Person(word) {
  this.word = `${word} world`;
  return {};
}

Person.prototype.say = function () {
  console.log(`say ${this.word}`);
};

let p = new Person(word);
console.log(p.word);
p.say();
```

3. 实现String的trim方法

4. 对象转化

例如：{‘a.b.c’:1} =>转化成=>{a:{b{c:1}}}

 

## 前端布局之——水平垂直居中

[前端布局之——水平垂直居中](https://zhuanlan.zhihu.com/p/83553320)

[10种水平垂直居中对齐方式（史上最全）](https://www.jianshu.com/p/907f99004c3e)



## 清除浮动的几种方法

[清除浮动的几种方法](https://zhuanlan.zhihu.com/p/25948683)

### 为什么会有 Floats

最初，引入 float 属性是为了能让 web 开发人员实现简单的布局，包括在一列文本中浮动的图像，文字环绕在它的左边或右边。但 大家很快意识到，它可以浮动任何东西，而不仅仅是图像，所以浮动的使用范围扩大了。

当我们在网页各处使用 float 的时候，也由此引发的一些副作用，如：父元素塌陷、元素重叠，清除浮动也就是清除这些副作用。

### 怎么解决

1. 为 float 元素后的元素添加 clear 属性

2. 利用伪元素

3. 修改父元素的 owerflow 属性

## CSS“隐藏”元素的几种方法的对比

### display:none

元素彻底消失，很显然不会触发其点击事件

### visibility:hidden

无法触发其点击事件，有一种说法是display:none是元素看不见摸不着，而visibility:hidden是看不见摸得着，这种说法是不准确的，设置元素的visibility后无法触发点击事件，说明这种方法元素也是消失了，只是依然占据着页面空间。

### opacity:0

可以触发点击事件，原因也很简单，设置元素透明度为0后，元素只是相对于人眼不存在而已，对浏览器来说，它还是存在的，所以可以触发点击事件

### height:0

将元素的高度设置为0，并且设置overflow:hidden。使用这种方法来隐藏元素，是否可以触发事件要根据具体的情况来分析。如果元素设置了border，padding等属性不为0，很显然，页面上还是能看到这个元素的，触发元素的点击事件完全没有问题。如果全部属性都设置为0，很显然，这个元素相当于消失了，即无法触发点击事件。

### z-index: -1

在元素当前dom脱离文档流(position:absolute)的前提下，设置z-index才起作用。
设置z-index：-1本质是改变当前dom的层叠上下文，使器置于其他元素之下，达到被隐藏的目的。
部分重排，不影响其他图层布局
被其他元素遮挡部分，无法响应事件，即使上层元素设置了pointer-events:none;也无法点击到(注：这个属性会被继承的)
