# Javascript

#### 1. BOM

包括：window、frames、document、location、navigator、history、screen。

#### 2. DOM

- 1级：允许获取和操作文档的任意部分。
- 2级：增加对鼠票、CSS的支持。
- 3级：可支持XML1.0所有内容。

#### 3. DOM事件模型

- 消息捕捉
- 消息冒泡
- DOM标准事件模型

#### 4. 闭包

闭包就是能够读取其他函数内部变量的函数。

作用：

- 可以读取函数内部的变量。

- 这些变量的值始终保持在内存中，不会在被调用后被自动清除。

缺点

内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。

# ECMAScript

#### 1. ECMAScript与JavaScript的关系？

ECMAScript是规范，JavaScript是这一规范的一个具体实现。

#### 2. ECMAScript比较重要的版本是哪一个？最新的版本到第几版了？

- 2015年ES6（大版本）
- 2016年ES7
- 2017年ES8
- 2018年ES9
- 2019年ES10

#### 3. 箭头`=>`

- 定义函数的简便方式。
- 箭头函数完全修复了this的指向，也就是外层调用者obj，不需要`bind(this)`。

#### 4. 展开运算符`...`

- 获取一个对象全部或部分属性；
- 作为函数参数使用时，使参数变为可变序列。

#### 5. Promise

是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。只有3种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。

#### 6. XHR、ajax、axios、fetch有什么区别？

它们都是用来发起http请求的方式。区别是：

- ajax是对XHR的封装，更方便使用。

- axios是对XHR的promise化。

- fetch是原先js，没有使用XHR。





