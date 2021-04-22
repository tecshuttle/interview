https://mp.weixin.qq.com/s/W2AxuO0OgoAUwROMyBwpYg



作为一个JavaScript的开发者，大多数情况下你可能不会担心内存管理问题，因为JavaScript引擎会帮你处理这些。但是在开发过程中，你或多或少的会遇到一些相关的问题，比如内存泄漏等，只有了解了内存分配的工作机制，你才会知道如何去解决这些问题。

在这篇文章中，我将会向你介绍内存分配和垃圾收集的机制，以及如何避免一些常见的内存泄漏的问题。

## 内存生命周期

在JavaScript中，当我们创建变量、函数或者其他东西的时候，JS引擎会自动的为它分配内存，当它不再被使用的时候，JS引擎又会自动的去释放掉这块内存。

分配内存，实际上是在内存中保留一块空间的过程，而释放内存则是释放这块区域的空间，以便后续使用。

每次我们给变量赋值或者创建一个函数的时候，它所对应的那块内存总会经历如下的阶段：

![Image](https://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7HvQWicEibmzancHibOfjDcmJPKKz9xu9W1yTr0hdPw5fj0B7xY33SNWVSDxMAzx8eLcYmtuicibPgQNqQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



- 内存分配：JavaScript会帮我们处理，它会为我们创建的内容分配内存。

- 内存使用：使用内存的过程体现在代码中，我们对于变量或对象等的读写其实就是对内存的读写。

- 内存释放：这一步也是由JavaScript引擎处理的。一旦这个内存被释放掉了，它就可以用于新的目的。

## 堆内存和栈内存

现在我们知道了，在JavaScript中定义的任何东西，JS引擎都会为他分配内存，并且在不再使用的时候释放掉。

接下来我们要考虑的问题就是：我们创建的变量、函数等，会被存放在哪里呢？

JavaScript引擎有两个地方可以存储数据：堆内存和栈内存。

堆（Heap）和栈（Stack）是两种不同的数据结构，他们的使用场景也各不相同。

### 栈：静态内存分配

![](https://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7HvQWicEibmzancHibOfjDcmJPbl0HchKVpqmWDGGqNkE9Y8kNooEIDqSJkHbVZdjIR6WUCuE6hByU8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

栈是JavaScript用来存放*静态数据*的一种数据结构。静态数据指的是JS引擎在编译时期就能确定其大小的数据。在JS中，它包括原始的值（strings, numbers, booleans, undefined, symbol, and null）和指向对象和函数的引用。

由于引擎知道了数据的大小不会再改变了，那么在分配内存的时候，就会给它分配一个固定大小的空间。

在程序执行前分配内存的过程，就叫做静态内存分配。

因为引擎为这些值分配的是固定大小的内存，所以这些值的大小肯定是有个上限的，而这个上限取决于具体的浏览器。

### 堆：动态内存分配

堆内存是JavaScript用来存在对象和函数的区域。与栈内存不同的是，引擎并不会为这些对象分配一个固定大小的内存，相反，它将根据具体的需要来分配对应的内存空间，这种内存分配的方式就是动态内存分配。

我们来对比一下栈和堆内存的区别：

|        |   栈（Stack）    |    堆（Heap）    |
| :----- | :--------------: | :--------------: |
| 值类型 |   原始值和引用   |    对象和函数    |
| 时期   | 编译期间确定大小 | 运行期间确定大小 |
| 大小   |     固定大小     |    无具体限制    |

### 例子

```js
// 为对象分配堆内存
const person = {
  name: 'John',
  age: 24
};

const hobbies = ['hiking', 'reading']; // 数组也是对象，所以分配的也是堆内存

let name = 'John';                     // 为字符串分配栈内存
const age = 24;                        // 为数字分配栈内存
name = 'John Doe';                     // 为字符串分配新的栈内存
const firstName = name.slice(0,4);     // 为字符串分配新的栈内存
```

这里要注意的是，原始值都是不可变的，所以修改的时候实际上是创建了一个新的值。

## 垃圾收集

所有的变量一开始都是指向栈的。如果它不是原始值，那么栈中保留着指向堆内存中对象的引用。

堆内存里的数据并不是按照某个特定的顺序排列的，所以我们需要在栈中保留一个指向堆内存数据的引用。您可以将引用当作是地址，而堆内存中的对象则是这些地址所对应的房屋。

![Image](https://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7HvQWicEibmzancHibOfjDcmJPQ9pHg4xKIXDxrwjV1RnOrbUsQI3zicnIMyNkR0S4cudcom5RUoT2MYA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

上图清晰的展示了不同类型的值是如何存放的。要注意的是，`person` 和 `newPerson` 都是指向同一个对象的。

这里已经知道了，JavaScript会为所有类型的数据分配内存，但是如果你还记得一开始介绍的内存生命周期，你就知道我们还缺少最后一步：内存释放。

与内存分配一样，这一步也是由JS引擎为我们完成的，更具体的说，是垃圾收集器为我们完成的。

当JS引擎识别到给定变量或函数不再需要的时候，它就会释放其所占用的内存。

这一步骤的主要问题在于，我们无法精确的判定某一块内存是仍然需要的，这只能是一个近似的过程，无法通过算法来解决。这里介绍两种最常见的算法：引用计数法和标记清除法（注意，它们也都是最大程度的近似判定）。

### 引用计数法

这是最简单的实现，它收集**没有引用指向它们的**对象作为垃圾。来看一下下面的演示：

![](https://mmbiz.qpic.cn/mmbiz_gif/mshqAkialV7HvQWicEibmzancHibOfjDcmJPQUwsncVKibnHPmyphbxB9BibubssFIApmWSbXDUJKick7eI5gq55W0zSQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

这里要注意，在最后一帧中，只有hobbies保留在堆内存中，因为它是唯一一个有引用指向他的对象。

引用计数法的问题在于，它没有考虑到循环引用的场景。当一个或多个对象之间相互引用，并且不能通过代码访问它们时，就会发生这种情况。看下面的例子：

```js
let son = {
  name: 'John',
};

let dad = {
  name: 'Johnson',
}

son.dad = dad;
dad.son = son;

son = null;
dad = null;
```

![Image](https://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7HvQWicEibmzancHibOfjDcmJPjNEqg9ONJLl9joadR1odGWLgGLMG10fXlZlDDz9GNyPHHlITuhz0Vg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

由于son和dad这两个对象都引用了对方，所以这个算法不会释放它们占用的内存，我们也无法通过代码来访问到这两个对象。将它们都设置为null也无济于事，因为都有引用指向它们，所以标记清除法照样会认为它们是有用的，不可回收。

### 标记清除法

标记清除法很好的避免了循环引用的问题。它假定了一个叫做根（root）的对象，然后从它出发去访问给定的对象。根对象在浏览器中是window对象，在NodeJS中是global对象。

![Image](https://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7HvQWicEibmzancHibOfjDcmJPCe9mm20aTXzIshXWzvsbNO7YJ1ewoyZXiaYmic2VDbZEicBsK87LibGR6g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

该算法将不可访问的对象标记为垃圾，然后清除(收集)它们。根对象将永远不会被收集。这样，循环引用就不再是个问题了。在之前的例子中，dad和son这两个对象最后都无法通过根对象访问到，所以它们都会被标记为垃圾然后被清理掉。

**从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。**所有对JavaScript垃圾回收算法的改进都是基于标记-清除算法性能和实现的改进，并不是对算法本身。

## 权衡

自动的垃圾收集机制让我们可以专注于构建应用程序本身，而不用因为内存管理而浪费时间。然而，我们需要注意一些权衡。

### 内存使用

由于算法无法确切的知道何时不再需要某块内存，所以Javascript应用可能会比平时需要更多的内存。即使某些对象已经被标记为垃圾了，但具体的垃圾收集时机还是由垃圾收集器来决定的。如果你想你的应用程序尽可能地提高内存效率，那你最好使用一些底层（lower-level）语言。但请记住，任何语言的内存管理都有自己的一套权衡。

### 性能

为我们收集垃圾的算法通常是定期运行的。然而问题是，作为开发者，我们并不知道它什么时候发生。收集大量的垃圾或频繁地收集垃圾可能会影响性能，因为这样做需要一定的计算能力。当然，我们的用户或开发人员通常不会注意到这种影响。

## 内存泄漏

好了，有了上面的知识储备，下面我们来看看几种常见的内存泄漏问题。当你理解背后的原理时，你就会发现这些问题都可以轻松的避免。

### 全局对象

将数据存储在全局变量上可能是最常见的内存泄漏问题了。举个例子，在浏览器中声明一个变量，如果你不用const或者let，而是用var或者干脆省略关键字，那么这个变量将会变成window对象的一个属性。用function定义的函数也同理。

```js
major = 'JS';
var user = 'Jerry';
function getName() {
  return 'jerry';
}

window.major // => 'JS'
window.user // => 'Jerry'
window.getName() // => 'jerry'
```

你可以在严格模式下运行你的代码，这样可以避免上述问题。当然有时候你可能是故意的使用全局变量来存储一些信息，但是请确保在不再需要这些对象的时候主动的设置为null，这样可以保证垃圾收集器可以及时的回收掉它的内存：

```js
window.user = null;
```

### 被遗忘的定时器

忘记处理了某些计时器和回调函数会增加应用程序的内存。特别是在单页应用程序（SPA）中，在动态添加事件监听和回调时务必要小心。

```js
const object = {};
const intervalId = setInterval(function() {
  doSomething(object);
}, 2000);
```

这段代码每两秒执行一次，定时器内部引用了外部的object对象。只要定时器在运行，这个object对象就不会被回收。所以要确保在合适的时机清除掉这个定时器：

```js
clearInterval(intervalId);
```

这点在SPA中特别重要。因为有时候你可能已经导航到另一个页面去了，但是原先页面的定时器还在后台运行着，它导致了引用了外部对象无法被回收。

### 被遗忘的回调函数

假设你有一个按钮，它绑定了一个onclick事件。一些老的浏览器的垃圾回收器是无法收集监听器的，不过现在基本都可以了，不过还是建议你在不需要的时候，手动的移除事件监听，释放内存。

```js
const element = document.getElementById('button');
const onClick = () => alert('hi');

element.addEventListener('click', onClick);

element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
```

### DOM引用

这种内存泄漏与上一个相似，它们都发生在存储DOM元素的时候。当你删除某一个元素的时候，你可能希望从elements数组中也删除对应的元素。否则，这些DOM元素还是不能被垃圾收集器收集。

```js
const elements = [];
const element = document.getElementById('button');
elements.push(element);

function removeAllElements() {
  elements.forEach((item, index) => {
    document.body.removeChild(document.getElementById(item.id));
    
    elements.splice(index, 1); // 从数组中删除
  });
}
```

## 参考文档

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
- https://deepu.tech/memory-management-in-v8