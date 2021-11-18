# 版本

https://huangxuan.me/2015/09/22/js-version/

https://segmentfault.com/a/1190000039352300

[1.5万字概括ES6全部特性(看图就能记下，值得收藏)]( https://zhuanlan.zhihu.com/p/87699079)

[这难道不是你期待的 ES2021 新特性吗？](https://mp.weixin.qq.com/s/zxpZUV5EYYZbenp8afCgGA)

[理解ECMAScript规范（3）](https://mp.weixin.qq.com/s/1bNRE2t7UBY1UNikC7MC6g)

[ES7、ES8、ES9、ES10 新特性大盘点](https://zhuanlan.zhihu.com/p/99342755)

ES6、ES7、ES8、ES9、ES10新特性一览 https://juejin.im/post/5ca2e1935188254416288eb2#heading-26

[JavaScript 语言的历史](https://wangdoc.com/javascript/basic/history.html)

★★★ [JS ES各版本特性](https://cloud.tencent.com/developer/article/1625624)

★★★ [种草 ES2020 新特性](https://zhuanlan.zhihu.com/p/100251213)

★★★★ [解读ES2020（ES11）新特性](https://www.jianshu.com/p/3e59df36342a)

# 通用

1. 说说写JavaScript的基本规范？
2. 用原生JavaScript的实现过什么功能吗？
3. 页面编码和被请求的资源编码如果不一致如何处理？
4. 服务器代理转发时，该如何处理cookie？
5. 模块化开发怎么做？
6. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
7. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何缓存的？）
8. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

# 语言特性

## 原型

### 最详尽的 JS 原型与原型链终极详解

https://www.jianshu.com/p/dee9f8b14771

#### 一 普通对象与函数对象

JavaScript 中，万物皆对象！但对象也是有区别的。分为：

- 普通对象
- 函数对象

#### 二 构造函数

person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 Person。

#### 三 原型对象

每个对象都有 `__proto__` 属性，但只有函数对象才有prototype属性。

```js
Person.prototype.constructor == Person
person1.constructor == Person
```

那原型对象是用来做什么的呢？主要作用是用于继承。

#### 四 `__proto__`

JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做`__proto__` 的内置属性，用于指向创建它的构造函数的原型对象。

```js
person1.__proto__ == Person.prototype
```

#### 五 构造器

```js
var obj = {}
// 它等同于下面这样
var obj = new Object()
```

构造器都是函数对象。

#### 六 原型链

小测试来检验一下你理解的怎么样：

1. `person1.__proto__` 是什么？
2. `Person.__proto__` 是什么？
3. `Person.prototype.__proto__` 是什么？
4. `Object.__proto__` 是什么？
5. `Object.prototype.__proto__` 是什么？

#### 七 函数对象

所有函数对象的`__proto__`都指向Function.prototype，它是一个空函数（Empty function）。

Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象。

```js
Function.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null // true
```

#### 八 prototype

在 ECMAScript 核心所定义的全部属性中，最耐人寻味的就要数 prototype 属性了。对于 ECMAScript 中的引用类型而言，prototype 是保存着它们所有实例方法的真正所在。换句话所说，诸如 toString()和 valuseOf() 等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访问罢了。

——《JavaScript 高级程序设计》第三版 P116

```javascript
var arrayAllKeys = Array.prototype; // [] 空数组

console.log(Object.getOwnPropertyNames(arrayAllKeys)); 
/*
["length", "constructor", "toString", "toLocaleString", "join", "pop", "push", 
"concat", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach", 
"some", "every", "map", "indexOf", "lastIndexOf", "reduce", "reduceRight", 
"entries", "keys", "copyWithin", "find", "findIndex", "fill"]
*/
```

JS的hasOwnPrototype()方法和 in 操作符

https://blog.csdn.net/a18792627168/article/details/106735231

#### 九 复习一下

```js
p.__proto__ === Person.prototype; // true
p.__proto__ === p.constructor.prototype; // true
```

#### 十 原型链（再复习一下：）

```javascript
function Person(){}
var person1 = new Person();
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null

Person.__proto__ == Function.prototype; //true
console.log(Function.prototype)// function(){} (空函数)

var num = new Array()
console.log(num.__proto__ == Array.prototype) // true
console.log( Array.prototype.__proto__ == Object.prototype) // true
console.log(Array.prototype) // [] (空数组)
console.log(Object.prototype.__proto__) //null

console.log(Array.__proto__ == Function.prototype)// true
```

#### 十一 总结

- 原型和原型链是JS实现继承的一种模型。
- 原型链的形成是真正是靠`__proto__` 而非prototype。

### JavaScript有几种原型继承方法？

https://mp.weixin.qq.com/s/DIzvXtyk7rd5m5aUQ8LAkw

#### 1 简单混入继承

#### 2 混入式原型继承

#### 3 替换式原型继承

#### 4 Object.create()方法实现原型继承

## 相等

## 异步

[阻塞非阻塞与同步异步的区别是什么？]( https://leetcode-cn.com/circle/discuss/uHGOZo)

[使用顶层 await 简化 JS 代码](https://mp.weixin.qq.com/s/XeZXrTa5X-08dBw2I7cg6A)

[Promise、Genarator、 Async，这三者的区别和联系，你是否明白？](https://mp.weixin.qq.com/s/_ciah0VIog-IgQ75WqTkGQ)

Async/Await：比Promise更好的6个理由 http://caibaojian.com/asyncawait.html

[Javascript中的async await](https://www.cnblogs.com/cpselvis/p/6344122.html)

[JS 异步(callback→Promise→async/await)](https://segmentfault.com/a/1190000013141641)

### await了解吗？

1. promise

2. 了解ES各版本、着重学习ES6。

3. New Function()

4. Function.prototype 是函数对象，什么是函数对象？

5. null 是一个独立的数据类型，为什么typeof(null)的值是object？

6. prototype原型、原型链 => 继承

7. prototype/ `__proto__`的区别

8. 构造函数

9. call / apply / bind

10. js OOP

11. clone / deepcopy

12. 同步与异步、阻塞与非阻塞

## 错误处理

## ES6

- Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？
- ES6是如何实现编译成ES5的？
- css-loader的原理？
- ECMAScript6 怎么写class，为什么会出现class这种东西?
- 谈一谈你对ECMAScript6的了解？

### 面试题

#### 面试常见ES6问题集锦

https://zhuanlan.zhihu.com/p/61068657

**1 下面不属于关键字let的特点的是：（ ）**

A、只在 let 命令所在的代码块内有效

B、会产生变量提升现象

C、同一个作用域，不能重复声明同一个变量

D、不能在函数内部重新声明参数

**2 关于定义常量的关键字const，定义一个Object对象{“name”:”Jack”}，再对属性name 的值进行修改，如：obj.name = “John”。下列说法正确的：（）**

A、修改常量，程序跑出异常

B、程序不抛出异常，修改无效

C、修改成功，name的值为John

D、程序不抛出异常，name的值为undefined

**3 在对象的解构赋值中，var {a,b,c} = { “c”:10, ”b”:9, ”a”:8 } 结果中，a、b、c的值分别是：（）**

A、10 9 8

B、8 9 10

C、undefined 9 undefined

D、null 9 null

**4 关于模板字符串，下列说法不正确的是：（）**

A、使用反引号标识

B、插入变量的时候使用${ }

C、所有的空格和缩进都会被保留在输出中

D、${ }中的表达式不能是函数的调用

**5 关于字符串扩展的新函数，下面描述错误的是：（）**

A、includes函数用于判断字符串中是否含有指定的子字符串

B、repeat函数将目标字符串重复N次，目标字符串被修改

C、startsWidth函数判断指定的子字符串是否出现在目标字符串头部位置

D、endWidth函数判断指定的子字符串是否出现在目标字符串尾部位置

**6 数组扩展的fill( )函数，[1,2,3].fill(4)的结果是：（）**

A、[4]

B、[1,2,3,4]

C、[4,1,2,3]

D、[4,4,4]

**7 数组的扩展中，不属于用于数组遍历的函数的是：（）**

A、keys( )

B、entries( )

C、values( )

D、find( )

**8 关于Proxy代理，下面说法错误的是：（）**

A、可以理解成在目标对象之前，架设一层“拦截”

B、Proxy的get 方法用于拦截某个属性的读取操作。

C、Proxy的set方法用于拦截对对象的写操作。

D、一旦对象设置Proxy代理后不可取消，所以要谨慎操作

**9 关于Set结构的实例方法，下面说法错误的是：（）**

A、set方法用于添加成员

B、clear方法用于清除所有成员。

C、entries方法返回成员的位置索引和值的遍历器

D、values方法返回成员值的便利器

**10 下面关于类class的描述，错误的是：（）**

A、 JavaScript的类class本质上是基于原型prototype的实现方式做了进一步的封装

B、 constructor构造方法是必须的

C、 如果类的constructor构造方法有多个，后者会覆盖前者

D、 类的静态方法可以通过类名调用，不需要实例化

**11 关于Promise对象的状态，下列说法错误的是：（）**

A、 三种状态分别是：pending初始状态、fulfilled成功、rejected失败

B、 pending初始状态可以状变成fulfilled成功

C、 rejected失败不可以状变成pending初始状态

D、 rejected失败可以状变成fulfilled成功

**12 关于新特性Generator函数的描述，错误的是：（）**

A、Generator函数，又称生成器函数

B、声明Generator函数的关键字是：function*

C、Generator函数执行后得到的一个生成器

D、使用return语句使Generator函数暂停执行，直到next方法的调用

**13 Generator函数的yield关键字的作用是：（）**

A、停止执行

B、退出函数

C、暂停执行，等待next( )方法调用

D、停止执行，可自行恢复执行

**14 module模块中，对下列语句的描述，错误的是：（）**

A、export 导出

B、import 导入

C、export default 默认导出

D、import * as 重命名

**15 在类的继承中，关于super的说法错误的是：（）**

A、 在子类的构造函数，必须先调用super( )

B、 super相当于子类的引用

C、 先调用super( )，才可以使用this

D、 super( )相当于父类构造函数的调用

**简答题：说出至少5个ES6的新特性，并简述它们的作用。**

1. let关键字，用于声明只在块级作用域起作用的变量。 
2. const关键字，用于声明一个常量。
3. 解构赋值，一种新的变量赋值方式。常用于交换变量值，提取函数返回值，设置默认值。 
4. Symbol数据类型，定义一个独一无二的值。 
5. Proxy代理，用于编写处理函数，来拦截目标对象的操作。 
6. for...of遍历，可遍历具有iterator 接口的数据结构。 
7. Set结构，存储不重复的成员值的集合。 
8. Map结构，键名可以是任何类型的键值对集合。
9. Promise对象，更合理、规范地处理异步操作。 
10. Class类定义类和更简便地实现类的继承。

**编程题**

1. 使用解构赋值，实现两个变量的值的交换。
2. 使用模板字符串改写下面的代码。
3. promise对象的用法，手写一个promise。
4. 阅读下面的代码，并用for...of改成它。

**运行分析题**

1 分析下列程序代码，得出运行结果，解释其原因。

```js
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
```

2 以下代码依次输出的内容是？

```js
setTimeout(function () {
  console.log(1)
}, 0);

new Promise(function executor(resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function () {
  console.log(4);
});

console.log(5);
```



#### ES6系列基础题

https://blog.csdn.net/qq_39207948/article/details/80678800

**1 下面不属于ECMAScript规范的范围的是：（ ）**

A、数据类型

B、语法

C、DOM事件

D、内置对象和函数的标准库

**2 关于数值的扩展，window.isNaN(“abc”) 和Number.isNaN(“abc”)的结果分别是：（）**

A、true  false

B、false  true

C、true  true

D、false  false

**3 关于数值扩展的Number.isInteger函数，下面说法错误的是：（）**

A、用来判断是否是整数，返回布尔值。

B、Number.isInteger(3);结果为：true

C、Number.isInteger(3.0);结果为：false

D、Number.isInteger(3.01);结果为：false

**4 关于对象的扩展，错误的是：（）**

A、ES6中对象的表示法更加简洁

B、对象的属性名可以是表达式

C、对象的方法名不可以是表达式

D、当属性名为表达式的时候，需要使用[ ]标识

**5 关于对象的Object.is函数，错误的是：（）**

A、用于判断两个值是否严格相等

B、用于判断两个值是否抽象相等

C、Object.is(3,'3') 结果是：false

D、Object.is(3,3.0) 结果是：true

**6 函数的扩展中，关于rest参数的描述，正确的是：（）**

A、获取函数剩下部分的参数

B、rest参数不可以是函数的最后一个参数

C、获取函数的第一个参数

D、一个名叫rest的参数

**7 关于箭头函数的描述，错误的是：（）**

A、使用箭头符号=>定义

B、参数超过1个的话，需要用小括号（）括起来

C、函数体语句超过1条的时候，需要用大括号{ }括起来，用return语句返回

D、函数体内的 this 对象，绑定使用时所在的对象

**8 关于Symbol，错误的说法是：（）**

A、是ES6新增的一种数据类型

B、Symbol() === Symbol() 结果为false

C、Symbol('same') === Symbol('same') 结果为true

D、当symbol值作为对象的属性名的时候，不能用点运算符获取对应的值。

**9 下面运算结果，结果为true的是：（）**

A、Symbol.for('name') == Symbol.for('name')  

B、Symbol('name') == Symbol.for('name')

C、Symbol('name') == Symbol('name')

D、Symbol.for('name') == Symbol('name')

**10 关于for...of的简述，说法错误的是：（）**

A、它可以遍历所有具有iterator 接口的数据结构

B、不可以用break来终止循环

C、使用continue可以跳过当前循环

D、可以遍历DOM list对象

**11 关于set结构，下面说法错误的是：（）**

A、创建一个实例需要用new关键字

B、结构成员都是唯一的，不允许重复

C、使用add方法添加已经存在的成员会报错

D、初始化的时候接受数组作为参数

**12 关于Set结构的实例方法，下面说法错误的是：（）**

A、set方法用于添加成员

B、clear方法用于清除所有成员。

C、entries方法返回成员的位置索引和值的遍历器

D、values方法返回成员值的便利器

**13 关于WeakSet结构，说法错误的是：（）**

A、与Set结构一样，成员值都是唯一

B、成员值必须是对象

C、WeakSet 中的对象都是弱引用

D、可以forEach( )方法实现遍历

**14 关于Map结构的介绍，下面说法错误的是：（）**

A、是键值对的集合

B、创建实例需要使用new关键字

C、Map结构的键名必须是引用类型

D、Map结构是可遍历的

**15 下列Map结构的键名数据类型，描述错误的是：（）**

A、键名可以是数组类型的值

B、键名可以是Symbol类型的值

C、键名值可以是null

D、键名值不可以为undefined

**16 关于WeakMap结构，下列说法错误的是：（）**

A、创建实例需要使用new关键字

B、键名可以是任何类型的值

C、WeakMap结构不支持clear方法

D、WeakMap结构不可遍历

**17 ES6的新特性Promise对象的设计初衷是：（）**

A、 更好地实现遍历具有iterator接口的数据结构

B、 为对象的操作增加了一层“拦截”

C、 独一无二的值，用于对象属性，避免属性名冲突

D、 让开发者更合理、更规范地用于处理异步操作

**18 JavaScript中类的继承使用的关键字是：（）**

A、 extends

B、 inherit

C、 extend

D、 base

**19 下列数据结构中，不能被for...of遍历的是：（）**

A、 Array数组

B、 Object对象

C、 String字符串

D、 Set结构

**20 关于Iterator遍历器的说法，错误的是：（）**

A、next( )方法是Iterator遍历器的核心

B、当next( )返回对象的done属性为fasle，遍历结束

C、具有Iterator接口的对象视为可遍历对象

D、可以自定义一个可遍历对象和其遍历行为

**21 关于ES6的module模块，下列说法错误的是：（）**

A、可以有效解决大型系统文件复杂的依赖问题

B、使用export语句可以选择性地向外部暴露自己的属性或者方法

C、使用import语句导入其他模块的属性或者方法

D、目前大部分主流浏览器都支持module模块

**22 module模块中的注意事项，下列说法错误的：（）**

A、除了对象类型以外，导出的属性对外都是只读的

B、导入不存在的变量，值为undefined

C、导入不存在的变量，程序会抛出异常

D、可以为导入的属性和方法取任意名字

**23 想要获取Map实例对象的成员数，利用的属性是：（）**

A、size

B、length

C、sum

D、members



[ES6十道面试题之Promise，有答案的](https://cloud.tencent.com/developer/article/1407125)

[深入理解ES6箭头函数的this以及各类this面试题总结](https://blog.csdn.net/qq_39207948/article/details/79547743)



## 数组

[13个JavaScript数组reduce的实例方法](https://mp.weixin.qq.com/s/Ozf2WA8D3HlLYcNH0bBbGA)



## 迭代器

[全网最完整的JavaScript迭代器](https://blog.csdn.net/qq_39287602/article/details/108795880)



## 其它

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

[不用循环，不用递归，输出1到100的整数](https://www.cnblogs.com/igin/archive/2008/07/12/1241388.html)

[ES6不用循坏快速创建从0到N的数组的方法及详解](https://blog.csdn.net/qq_28473731/article/details/79537303)

[理解 JavaScript 中的高阶函数](https://zhuanlan.zhihu.com/p/49579052)

[全网最完整的JavaScript迭代器](https://blog.csdn.net/qq_39287602/article/details/108795880)

# 运算符

JavaScript 解构赋值 5 个常见场景和实例https://juejin.cn/post/7025482565456756744

- 空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null或者 undefined时，返回其右侧操作数，否则返回左侧操作数。
- 逻辑空赋值运算符 (x??= y) 仅在x是nullish(null或undefined) 时对其赋值。
- 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish) (null或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

# 书籍

- 犀牛书

- 红宝书

# 高级主题

1. 那些操作会造成内存泄漏？

   如何编写高性能的Javascript？

2. 请介绍一下JS之事件节流？什么是JS的函数防抖？

3. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

4. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
5. What is a Polyfill?做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

6. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？

7. 使用JS实现获取文件扩展名？

8. Webpack热更新实现原理?

# 应用

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

# 面试题

[一份 JavaScript 高级面试题](https://zhuanlan.zhihu.com/p/34273811)

[BAT前端开发面试题]( https://www.jianshu.com/p/1d0b6e6aee90)

[前端开发面试题收集(js部分)](https://www.cnblogs.com/wj204/p/5816455.html)

[10 个常问的 JS 面试题](https://juejin.im/post/5dc360bef265da4d307f193a)

[7道简单的 JavaScript 面试题，三个月没招到一个人](https://juejin.im/post/5dbe818a6fb9a0203c34e4bb)

[听说会做这道题的人后来都进了头条？](https://juejin.im/post/5dca5516f265da4d3429b003)

[JS 原生面经从初级到高级【近1.5W字】](https://juejin.im/post/5daeefc8e51d4524f007fb15)

[五分钟带你领略: 腾讯半年来出现最频繁的算法之一——字符串解码](https://juejin.im/post/5dc2a7cce51d4504f0726a00)

[可能是最全的 “文本溢出截断省略” 方案合集](https://juejin.im/post/5dc15b35f265da4d432a3d10)

[JS计算两个数组的交集、差集、并集、补集](https://blog.csdn.net/qq_45039540/article/details/112554604)



# 资料

## 原理

[JS—特殊的对象~函数]( https://www.jianshu.com/p/79c30b99f051)

[图文并茂讲清楚 JavaScript 内存管理](https://mp.weixin.qq.com/s/W2AxuO0OgoAUwROMyBwpYg)

[理解JavaScript中浅拷贝和深拷贝的区别](https://mp.weixin.qq.com/s/qJqgI8qZJCdWq2sudpyLPA)



## 事件

[关于javascript 中的高级定时器的若干问题](https://mp.weixin.qq.com/s/0w8lSk2ZUBsWnzt2QBmkZw)

[如何理解JavaScript定时器的4种写法【带面试题讲解】](https://mp.weixin.qq.com/s/UDO_xWR1lsJlijajsLTcxA)

[精读《Tasks, microtasks, queues and schedules》](https://mp.weixin.qq.com/s/osRVRjMzgEnmlBgQrurd3w)

[Js阻止事件冒泡与阻止默认事件](https://mp.weixin.qq.com/s/-42rjYODdyBLLgI4J_OgZg)



## 其它

[如何实现JavaSrcipt页面的跳转](https://mp.weixin.qq.com/s/2c96esPar1I-0Jgg56QTrQ)

[JavaScript中foreach()用法及使用的坑](https://mp.weixin.qq.com/s/UfnfazB05LQMnQ3dmbrW_Q)

[精读《函数缓存》](https://mp.weixin.qq.com/s/bvep2BfQGGaqKkfd5f3LKg)

[精读《如何比较 Object 对象》](https://mp.weixin.qq.com/s/u7ckAg59Aol5QNRco7LA5A)

[精读《精通 console.log》](https://mp.weixin.qq.com/s/JecYEq9JMy6sCoIXQcwclw)

[JS正则获取HTML所有img的链接 ](https://blog.csdn.net/u011539729/article/details/103618300)

[什么是前端防抖？](https://mp.weixin.qq.com/s/FEVcAsqxTeZQfZT703YVVQ)

[你用得上的25个JS技巧](https://mp.weixin.qq.com/s/AGIi-Ghpdi7U4_eHDOgIVg)

[20个常用的JavaScript简写技巧](https://mp.weixin.qq.com/s/ogrWP9Dok_8_PAMU_7fOXg)

[JavaScript生成随机数和随机字符串的5种方法](https://mp.weixin.qq.com/s/i09U7zybD22fQJ5vdoTzDQ)

取余：%

开方：Math.pow()、 2**3

isset() defined()

[(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/5dbebbfa51882524c507fddb)