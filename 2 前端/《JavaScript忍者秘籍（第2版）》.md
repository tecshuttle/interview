# 简介

本书通过4个部分，让你从“学徒”晋升为“忍者”。

**第1部分 介绍我们后续学习的主题和所需要的工具。**

第1章介绍JavaScript语言及最重要的特性，推荐目前我们开发应用时需要遵循的最佳实践，包括测试和性能分析。

因为我们对JavaScript的研究是基于浏览器上下文，因此在第2章中，我们介绍客户端Web应用的生命周期，这有助于我们理解在开发Web应用程序时JavaScript所扮演的角色。

**第2部分 重点关注JavaScript的核心支柱之一——函数。**

我们将研究为什么函数如此重要，函数之间的区别，以及定义和调用函数的细节内容。我们还将特别关注一个新的函数类型——生成器函数，它在处理异步代码时尤为有效。

第3章从彻底检查JavaScript函数的定义开始涉足基础语言，也许你会感到吃惊。预期中可能是把对象作为重点，但是，让我们充分理解函数、JavaScript函数式语言，从普通的JavaScript程序员升级为JavaScript“忍者”！
在第4章中，我们继续研究函数，深入研究函数调用的机制，以及隐式函数参数的来龙去脉。

关于函数的内容还没有结束，在第5章我们把讨论推向更高的一个层级，研究两个密切相关的概念——作用域和闭包。闭包是函数式编程中的关键概念，闭包允许更细粒度地控制程序中声明和创建的对象作用域范围。控制对象的作用域范围是“忍者”编写代码的关键因素。即使不阅读后续的章节（但我们希望大家不要停下来），编程水平也会比刚开始学习时提高很多。

在第6章中，我们通过一种全新的函数类型（生成器函数）和一个新的对象类型（promise）帮助我们处理异步代码，最后结束对函数的研究。我们还展示了如何结合generator与promise，优雅地处理异步代码。

**第3部分 研究JavaScript的第二支柱——对象。**

我们将彻底地探索JavaScript中的面向对象，研究如何保护对对象的访问，如何处理集合和正则表达式。

第7章阐述对象，彻底了解JavaScript中面向对象是如何工作的。此外，我们还将引入一个新的JavaScript关键字：class。其背后概念可能与你所期望的有所不同。

第8章继续探索对象，我们将学习使用多种不同的技术保护对对象的访问。

在第9章中，我们将特别关注JavaScript中几种不同类型的集合。数组，从JavaScript诞生起就是JavaScript的一部分，map和set是最近新加入JavaScript的集合类型。

第10章着重介绍正则表达式，正则表达式是经常被忽略的一项语言特性，但正确使用正则表达式，可以减少很多代码量。我们将学习如何构建和使用正则表达式，以及如何使用正则表达式及其相关方法，优雅地解决一些重复出现的问题。

在第11章中，我们将学习使用不同技术实现代码模块化：更小、相对松耦合的代码片段，以及改善代码的机构和组织方式。

**第4部分 研究JavaScript与Web页面的交互以及浏览器如何处理事件，最后结束本书。在结束之前的最后一个重要话题是跨浏览器开发。**

第12章研究如何通过DOM API 动态修改页面，如何处理元素属性、样式，以及一些重要的性能注意事项。

第13章讨论JavaScript的单线程执行模型的重要性，以及单线程执行模型对事件循环的影响。我们还将学习间隔定时器的工作原理，以及如何使用它们提高Web应用程序的性能。

第14章检查开发时主要关心的5项跨浏览器问题：浏览器缺陷、缺陷修复、外部代码、功能缺失和回归。讨论诸如特性模拟和对象检测等方法，有助于跨浏览器开发的挑战。

# 第 1部分 热身

## 第 1章 无处不在的JavaScript

“理解”JavaScript语言
理解浏览器
使用当前的最佳实践
提高跨平台开发能力

## 第2章 运行时的页面构建过程

- 浏览器是否总是会根据给定的HTML来渲染页面呢？

- Web实用一次能处理多少个事件？
- 为什么浏览器使用事件队列来处理事件？

### 1 生命周期概览

1. 输入URL（或者单击链接）
2. 生成请求并发送至服务器
3. 执行某些动作或者获取某些资源：将响应发送回客户端
4. 处理HTML、CSS和JavaScript并构建结果页面
5. 监控事件队列，一次处理其中的一个事件
6. 与页面元素交互
7. 关闭Web页面

> 主要阶段是：页面构建和事件处理。

### 2 页面构建阶段

#### 2.1 HTML解析和DOM构建

- 尽管DOM是根据HTML来创建的，两者紧密联系，但需要强调的是，它们两者并不相同。你可以把HTML代码看作浏览器页面UI构建初始DOM的蓝图。为了正确构建每个DOM，浏览器还会修复它在蓝图中发现的问题。

- 每当解析到脚本元素时，浏览器就会停止从HTML构建DOM，并开始执行JavaScript代码。

#### 2.2 执行JavaScript代码

- JavaScript引擎：
  - Firefox：Spidermonkey
  - Chrome和Opera：V8
  - Edge：Chakra

- JavaScript中的全局对象：浏览器暴露给JavaScript引擎的主要全局对象是window对象，它代表了包含着一个页面的窗口。全局window对象最重要的属性是document，它代表了当前页面的DOM。

- JavaScript代码的不同类型：包含在函数内的代码叫作**函数代码**，而在所有函数以外的代码叫作**全局代码**。全局代码由JavaScript引擎以一种直接的方式自动执行，每当遇到这样的代码就一行接一行地执行。

### 3 事件处理

#### 3.1 事件处理器概览

- 浏览器执行环境的核心思想基于：同一时刻只能执行一个代码片段，即所谓的单线程执行模型。
- 所有已生成的事件（无论是用户生成的，例如鼠标移动或键盘按压；还是服务器生成的，例如Ajax事件）都会放在同一个事件队列中，以它们被浏览器检测到的顺序排列。
- 一次只能处理一个事件。
- 事件是异步的。

#### 3.2 注册事件处理器

#### 3.3 处理事件

由于单线程执行模型，同一时刻只能处理一个事件，任何后面的事件都只能在当前事件处理器完全结束执行后才能被处理！

### 4 练习题

- 相比将事件处理器赋值给某个特定元素的属性，使用 `addEventListener` 方法来注册事件处理器的优势是什么？
- 测试一下，事件是如何阻止页面构建的。
- 如何为单击注册多个事件处理器。

```js
let click_num = 0;

func_1 = () => {
  console.log('click 1');
  let max = 10 ** 8 * 2;
  for (var i = 0; i < max; i++) {}
  console.log('done ' + max);
};

func_2 = () => {
  click_num += 1;
  console.log('click 2');
  delete_event();
};

delete_event = () => {
  if (click_num === 3) {
    ele.removeEventListener('click', func_1);
    console.log('remove func_1');
  }

  if (click_num > 6) {
    ele.removeEventListener('click', func_2);
    console.log('remove func_2');
  }
};

ele.addEventListener('click', func_1);
ele.addEventListener('click', func_2);
```



# 第2部分 理解函数

## 第3章 新手的第一堂函数课：定义与参数

函数式的不同点到底是什么

函数作为对象的乐趣

函数定义

函数的实参和形参

## 第4章 函数进阶：理解函数调用

使用隐式函数参数
函数调用
解决函数上下文的问题

## 第5章 精通函数：闭包和作用域

理解闭包

使用闭包

通过执行上下文来跟踪代码

使用词法环境跟踪变量的作用域

理解JavaScript的变量类型

研究闭包的工作原理



## 第6章 未来的函数：生成器和promise

生成器是一种特殊类型的函数。当从头到尾运行标准函数时，它最多只生成一个值。然而生成器函数会在几次运行请求中暂停，因此每次运行都可能会生成一个值。

promise是对象的一个新的内置类型。promise对象是一个占位符，暂时替代那些尚未计算出但未来会计算出的值。

你知道吗？

- 生成器函数的主要用途是什么？
- 在异步代码中，为什么使用promise比使用简单的回调函数更好？
- 使用Promise.race来执行很多长期执行的任务时，promise最终会在什么时候变成resolved状态？它什么时候会无法变成resolved状态？

### 1 使用生成器和promise编写优雅的异步代码

```js
async(function*(){
  try{
    const ninjas = yield get("ninjas.json");
    const missions = yield getJSON(ninjas[0].missionsUrl);
    const missionDescription = yield getJSON(missions[0].detailsUrl);
    //Study the mission details
  }
  catch(){
    //Oh no, we were't able to get the mission details
  }
});
```

如果你不能理解这个例子，或者其中的某些语法你并不熟悉（例如 `function*` 或 `yield` ），不要担心。读完本章，你将能够理解所有的关键要素。

### 2 使用生成器函数

生成器函数几乎是一个完全崭新的函数类型，它和标准的普通函数完全不同。生成器（generator）函数能生成一组值的序列，但每个值的生成是基于每次请求，并不同于标准函数那样立即生成。我们必须显示地向生成器请求一个新的值，随后生成器要么响应一个新生成的值，要么就告诉我们它之后都不会再生成新值。更让人好奇的是，每当生成器函数生成了一个值，它都不会像普通函数一样停止执行。相反，生成器几乎从不挂起。随后，当对另一个值的请求到来后，生成器就会从上次离开的位置恢复执行。

```js
function* WeaponGenerator() {
  yield "Katana";
  yield "Wkizashi";
  yield "Kusarigama";
}

for (let weapon of WeaponGenerator()) {
  assert(weapon !== undefined, weapon)
}
```

我们把执行生成器得到的结果放在for-of循环的右边。**但如果你仔细看看WeaponGenerator函数的函数体，你会发现其中并没有return语句。这是为什么？**这个例子中，for-of循环的右边不是应该得到undefined，就像我们处理一个标准函数一样吗？

真相是生成器函数和标准函数非常不同。调用生成器并不会执行生成器函数，相反，它会创建一个叫作迭代器（iterator）的对象。

#### 2.1 通过迭代器对象控制生成器

```js
function* WeaponGenerator() {
  yield "Katana";
  yield "Wkizashi";
}

const weaponsIterator = WeaponGenerator();
const result1 = weaponsIterator.next();
```

最后一次执行next方法，迭代器返回一个结果对象，属性value被置为undefined，属性done被置为true，表明它的工作已经完成了。

##### 对迭代器进行迭代

通过调用生成器得到的迭代器，暴露出一个next方法能让我们向生成器请求一个新值。next方法返回一个携带着生成值的对象，而该对象中包含的另一个属性done也向我们指示了生成器是否还会追加生成值。

for-of循环不过是对迭代器进行迭代的语法糖。不同于手动调用迭代器的next方法，for-of循环同时还要查看生成器是否完成，它在后台自动做了完全相同的工作。

##### 把执行权交给下一个生成器

```js
function* WarriorGenerator() {
  yield "Sun Tzu";
  yield* NinjaGenerator();
  yield "Genghis Khan";
}

function* NinjaGenerator() {
  yield "Hattori";
  yield "Yoshi";
}

for (let warrior of WarriorGenerator()) {
  assert(warrior !== null, warrior);
}

// 输出：SunTzu、Hattori、Yoshi、Genghis Khan。
```

在迭代器上使用yield*操作符，程序会跳转到另外一个生成器上执行。仅当NinjaGenerator的工作完成后，调用原来的迭代器才会继续输出值Genghis Khan。

#### 2.2 使用生成器

##### 用生成器生成ID序列

```js
function* IdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = IdGenerator();
const idIterator2 = IdGenerator();

console.log(idIterator.next().value); //1
console.log(idIterator.next().value); //2
console.log(idIterator.next().value); //3
```

注意：标准函数中一般不应该书写无限循环的代码。但在生成器中没有问题！当生成器遇到了一个yield语句，它就会一直挂起执行直到下次调用next方法，所以只有每次调用一次next方法，while循环才会迭代一次并返回下一个ID值。

##### 使用迭代器遍历DOM树



#### 2.3 与生成器交互

从目前已经展示的例子来看，你已经看到了如何通过使用yield表达式从生成器中返回多个值。但生成器远比这强大！我们还能向生成器发送值，从而实现双向通信！使用用生成器我们能够生成中间结果，在生成器以外我们也能够使用该结果进行任何什么操作，然后，一旦准备好了，就能够把整个新计算得到的数据再完完全全返回给生成器，本章的最后我们会利用这个特性来实现异步代码。

##### 作为生成器函数参数发送值

```js
function* NinjaGenerator(action){
  const imposter = yield ("Hattori " + action); 
  const param = yield ("Yoshi (" + imposter + ") " + action); 
  console.log(param); //end
}

const ninjaIterator = NinjaGenerator("skulk");
const result1 = ninjaIterator.next();        //Hattori skulk
const result2 = ninjaIterator.next("Hanzo"); //Yoshi (Hanzo) skulk
const result3 = ninjaIterator.next("end");   //undefined
```

##### 使用next方向向生成器发送值

我们通过yield语句从生成器中返回值，再使用迭代器的next()方法把值传回生成器。

注意：我们无法通过第一次调用next方法来向生成器提供值。如果你需要为生成器提供一个初始值，你可以调用生成器自身，就像NinjaGenerator("skulk")。

##### 抛出异常

```js
function* NinjaGenerator() {
  try {
    yield "Hattori";
    console.log("The expected exception didn't occur");
    yield "end";
  }
  catch (e) {
    console.log("Aha! We caught an exception");
  }
}

const ninjaIterator = NinjaGenerator();
const result1 = ninjaIterator.next();
console.log(result1.value);           //Hattori
ninjaIterator.throw("Catch this!");   //Aha! We caught an exception
const result2 = ninjaIterator.next(); //抛出异常后，迭代器完成，next返回结束值。
console.log(result2);                 //{value: undefined, done: true}
```

这个能让我们把异常抛回生成器的特性初看可能有点奇怪。为什么要进行这样的操作呢？不必担心，我们不会让你一直蒙在鼓里。本章的最后部分，我们将使用这个特性来改善异步服务器端的通信。

#### 2.4 探索生成器内部构成

我们已经知道了调用了一个生成器不会实际执行它。相反，它创造了一个新的迭代器，通过该迭代器我们才能从生成器中请求值。在生成器生成（或让渡）了一个值后，生成器会挂起执行并等待下一个请求的到来。

- 挂起开始：创建了一个生成器后，它最先以这种状态开始。其中的你任何代码都未执行。
- 执行：生成器中的代码执行的状态。执行要么是刚开始，要么是从上次挂起的时候继续的。当生成器对应的迭代器调用了next方法，并且当前存在可执行的代码时，生成器都会转移到这个状态。
- 挂起让渡：当生成器在执行过程中遇到了一个yield表达式，它会创建一个包含着返回值的新对象，随后再挂起执行。生成器在这个状态暂停并等待继续执行。
- 完成：在生成器执行期间，如果代码执行到return语句或者全部代码执行完毕，生成器就进入该状态。

##### 通过执行上下文跟踪生成器函数



### 3 使用promise

#### 理解简单回调函数所带来的问题



#### 深入研究promise



#### 拒绝promise



#### 创建第一个真实promise案例



#### 链式调用promise

**Promise链中的错误捕捉**



#### 等待多个promise



#### promise竞赛



### 4 把生成器和promise相结合

#### 面向未来的async函数

当前的JavaScript标准计划新增两个关键字，用于替代上述样板代码。

通过在关键字function之前使用关键字async，可以表明当前的函数依赖一个异步返回的值。在每个调用异步任务的位置上，都要放置一个await关键字，用来告诉JavaScript引擎，请在不阻塞应用执行的情况下在这个位置上等待执行结果。在这个过程背后，其实发生着本章前面所讨论内容。

> 注意：在JavaScript的下一个版本中将会新增async函数。现阶段还没有浏览器对其进行支持，但通过Babel或者Traceur转译代码后，你可以在代码中使用async语法。



# 第3部分 深入钻研对象，强化代码

## 第7章 面向对象与原型

理解原型

对象构造器与原型

实现继承

在ES6使用JavaScript的class

## 第8章 控制对象的访问

### 1 使用getter与setter控制属性访问

#### 1.1 定义getter和setter

#### 1.2 使用getter与setter校验属性值

#### 1.3 使用getter与setter定义如何计算属性值

### 2 使用代理控制访问

代理是ES6提出的。

可以将代理理解为通用化的setter和getter，代理更加强大，区别是每个setter与getter仅能控制单个对象属性，而代理可用于对象交互的能用处理，包括调用对象的方法。

过去使用setter与getter处理日志记录、数据校验、计算属性等操作，均可使用代理对它们进行处理。

#### 2.1 使用代理记录日志

#### 2.2 使用代理检测性能

#### 2.3 使用代理自动填充属性

#### 2.4 使用代理实现负数组索引

#### 2.5 代理的性能消耗

在Chrome浏览器，代理数组的执行时间大约为正常数组的50倍，在Firefox浏览器大约为20倍。

我们建议谨慎使用代理。尽管使用代理可以创造性地控制对象的访问，但是大量的控制操作将带来性能问题。可以在对性能不敏感的程序里使用代理，但是若要多次执行代码时仍然要小心谨慎。像往常一样，我们建议你彻底地测试代码的性能。

## 第9章 处理集合

数组

Map

Set



## 第10章 正则表达式

解决同一个问题的方式有很多种。通常，需要编写半屏幕的代码才能解决的问题，通过正则表达式可以压缩成一条语句。正则表达式是每位JavaScript“忍者”工具箱中的必备武器。

**学习资源**

- 正则表达式测试：www.regexplanet.com/advanced/javascript/index.html
- 正则表达式解读：www.regex101.com/#javascript

**你知道吗？**

- 何时优先使用正则字面量，而不使用正则对象？
- 什么是粘连匹配，如何开户粘连匹配？
- 使用全局和非全局正则表达式的区别是什么？

### 1 为什么需要正则表达式

示例：用一条语句代替半屏代码。

```js
function isThisAZipCode(candidate) {
  return /^\d{5}-\d{4}$/.test(candidate);
}
```

### 2 正则表达式进阶

在有限的篇幅里，我们会尽力覆盖到所有的重点内容，更多的细节可以查看以下书籍：

- Jeffrey E.F.Friedl《Mastering Regular Expressions》
- Michael Fitzgerald《Introducing Regular Expressions》
- Steven Levithan《Regular Expressions Cookbook》

#### 正则表达式说明

创建正则表达式的两种方式，它们创建的正则表达式相同：

```js
const pattern = /test/;             //使用正则表达式字面量
const pattern = new RegExp("test"); //通过创建RegExp对象的实例
```

注意：当正则表达式在开发环境是明确的，推荐优先优先使用字面量语法；当需要在运行时动态创建字符串来构建正则表达式时，则使用构造函数的方式。

修饰符

- i - 对大小写不敏感
- g - 查找所有匹配项
- m - 允许多行匹配
- y - 开启粘连匹配
- u - 允许使用Unicode点转义符

#### 术语和操作符

- 精确匹配：精确匹配字符串是无意义的，毕竟我们可以用一个简单的字符串比较来实现。

- 匹配字符集：`[abc][^abc][a-m]`

- 转义：`\\` 表示一个反斜杠。

- 起止符号：`/^test$/` 表示匹配整个字符串。

- 重复出现：

- 预定义字符集：

- 分组：

- 或操作符（OR）：`/a|b/` 可以匹配a或者b。

- 反向引用：`<(\w+)>(.+)<\/\1>` 这可以匹配简单的元素如`<strong>whatever</strong>`。如果没有反向引用，也许无法做到，因为无法预先知道与起始标记相匹配的结束标记是什么。

### 3 编译正则表达式

如何识别编译，还是没太明白。

### 4 捕获匹配的片段

执行简单捕获

使用全局表达式进行匹配

捕获的引用

未捕获的分组

### 5 利用函数进行替换

String对象的replace方法是既强大又灵活的方法。

### 6 使用正则表达式解决常见的问题

匹配换行

匹配Unicode字符

匹配转义字符

### 7 练习



## 第11章 代码模块化

在JavaScript ES6之前的版本中模块化代码

ES6模块

# 第4部分 洞悉浏览器

## 第12章 DOM操作

向DOM中注入HTML

DOM的特性和属性

令人头疼的样式特性

避免布局抖动

## 第13章 历久弥新的事件

你知道吗？

- 为什么不能保证定时器回调的时机？
- 如果setInterval定时器每3ms执行一次，而事件处理程序需要运行16ms，那么定时器回调函数将被添加到微任务队列中多少次？
- 为什么事件处理程序的函数上下文有时与事件的目标不同？

### 1 深入事件循环

事件循环基于两个基本原则：

- 一次处理一个任务；
- 一个任务开始后直到运行完成，不会被其他任务中断。

宏任务和微任务队列之间的区别：单次循环迭代中，最多处理一个宏任务（其余的在队列中等待），而队列中的所有微任务都会被处理。

##### 1.1 仅含宏任务的示例

##### 1.2 同时含有宏任务和微任务的示例

在两个宏任务之间，可以重新渲染页面，而在微任务执行之前不允许重新渲染页面。



- 两类任务队列都是独立于事件循环的，这意味着任务队列的添加行为也发生在事件循环之外。如果不是这样设计，则会导致在执行JavaScript代码时，发生的任何事件都将初忽略。正因为我们不希望看到这种情况，因此检测和添加任务的行为，是独立于事件循环完成的。
- 因为JavaScript基于单线程执行模型，所以这两类任务都是逐个





### 2 玩转计时器：延迟执行和间隔执行

计时器能延迟一段代码的执行，延迟时长**至少**是指定的时长（单位是ms）。无法确保计时器延迟的时间，理解这一点非常重要，在事件循环中需要处理非常多的任务。

##### 2.1 在事件循环中执行计时器

延迟执行与间隔执行的区别

```js
const tbody = document.querySelector('tbody');
for (let i = 0; i < 20000; i++) {
  const tr = document.createElement('tr');
  for (let t = 0; t < 15; t++) {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(i + ',' + t));
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
```



```js
const rowCount = 80000;
const divideInto = 40;
const chunkSize = rowCount / divideInto;
let iteration = 0;
const table = document.querySelector('tbody');
setTimeout(function generateRows() {
  const base = chunkSize * iteration;
  for (let i = 0; i < chunkSize; i++) {
    const tr = document.createElement('tr');
    for (let t = 0; t < 6; t++) {
      const td = document.createElement('td');
      td.appendChild(document.createTextNode(i + base + ',' + t + ',' + iteration));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  iteration++;
  if (iteration < divideInto) setTimeout(generateRows, 0);
}, 0);
```

##### 2.2 处理计算复杂度高的任务

### 3 处理事件

#### 3.1 通过DOM代理事件

**在祖先元素上代理事件**

#### 3.2 自定义事件

假设某些场景下，你希望执行某些行为，但你又希望在一系列条件下才能被触发。这些条件位于不同的代码片段，甚至不同的脚本文件中。初学者也许会在需要的时候重复编写相同的代码。熟练工也许会创建全局函数，在需要的时候进行调用。而“忍者”将会采用自定义事件。为什么呢？

**松耦合**

**一个Ajax-Y示例**

**创建自定义事件**

## 第14章 跨浏览器开发技巧

### 跨浏览器注意事项

### 五大开发问题

1. 浏览器缺陷
2. 浏览器的缺陷修复
3. 外部代码
4. 浏览器回归
5. 浏览器缺失的功能

### 实现策略

### 减少假设

# 附录A ES6附加特性

# 附录B 测试与调试的武器

# 附录C 习题答案

