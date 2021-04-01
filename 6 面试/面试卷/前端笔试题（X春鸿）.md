1、请写出如下代码的返回值

```javascript
typeof typeof undefined
```



2、请写出如下代码的返回值

new Array == new Array 



3、构造等式：

Array.prototype.__proto__ == ?? 



4、请写出如下代码的返回值

```js
var a = { n: 1 };
var b = a;

a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);
```



5、请写出如下代码的打印结果

```js
var a = 10;

(function () {
  console.log(a);

  a = 5;
  console.log(window.a);

  var a = 20;
  console.log(a);
})();
```



6、改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```



7、请写出下面代码的运行结果

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');
```



script start

setTimeout

async1 start



8、写出5种css隐藏元素的办法

  

9、已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。写出所有的。

```html
<img src="1.jpg" style="width:480px!important;">
```

 

```
max-width:300px 
transform: scale(0.625); 
zoom:0.625; 
```



10、编程题

编写一个程序将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组。已知如下数组：

```js
var arr = [
  [1, 2, 2], 
  [3, 4, 5, 5], 
  [ 
    6, 7, 8, 9, 
    [
      11, 12, 
      [ 12, 13, [14] ]
    ]
  ], 
  10
];
```

 

## 参考

[搞懂JavaScript中的连续赋值](https://cloud.tencent.com/developer/article/1093667)

根据js引擎语法解析，会先去从左到右寻找有没有未声明的变量，如果有就把该变量提升至作用域顶部并声明该变量。



### 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法

https://blog.csdn.net/Umbrella_Um/article/details/102426311

1. 利用 setTimeout 函数的第三个参数，会作为回调函数的第一个参数传入。
2. 利用 let 变量的特性 — 在每一次 for 循环的过程中，let 声明的变量会在当前的块级作用域里面创建一个文法环境（Lexical Environment），该环境里面包括了当前 for 循环过程中的 i。
3. 利用函数自执行的方式，把当前 for 循环过程中的 i 传递进去，构建出块级作用域。IIFE 其实并不属于闭包的范畴。
4. 很多其它的方案只是把 console.log(i) 放到一个函数里面，因为 setTimeout 函数的第一个参数只接受函数以及字符串，如果是 js 语句的话，js 引擎应该会自动在该语句外面包裹一层函数。
5. 利用 eval 或者 new Function 执行字符串，然后执行过程同方法四。



### JavaScript数组去重

[JavaScript数组去重（12种方法）](https://segmentfault.com/a/1190000016418021)

[JavaScript数组排序的六种常见算法总结](https://www.jb51.net/article/193524.htm)

```js
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

var res = [];

var flatArray = function (item) {
  if (typeof item === 'object') {
    item.map(flatArray);
  } else {
    res.push(item);
  }
};

arr.map(flatArray);

console.log(
  Array.from(new Set(res)).sort((a, b) => {
    return a - b;
  })
);
```



### JS执行——Promise

https://www.jianshu.com/p/b16e7c9e1f9f



#### 拓展 async/await

##### async

顾名思义，异步。async函数对 Generator 函数的改进，async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数。特点体现在以下四点：

- 内置执行器
- 更好的语义
- 更广的适用性
- 返回值是 Promise

##### await

顾名思义，等待。正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。

```js
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

async function handle() {
  console.log('AAA');
  await sleep(1000);
  console.log('BBB');
}

handle();
```



### 宏任务和微任务到底是什么？

https://www.jianshu.com/p/bfc3e319a96b

概念1： JS是单线程执行

概念2：宿主

概念3：执行栈

概念4：Event Loop

概念5：宏任务和微任务

拓展 1：`async`和`await`是如何处理异步任务的？简单说，`async`是通过`Promise`包装异步任务。比如有如下代码：

```jsx
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
```

拓展 2：`setTimeout`，`setImmediate`谁先执行？

拓展 3：`Promise`，`process.nextTick`谁先执行？

拓展 4：应用场景 - Vue中的`vm.$nextTick`



### 每日一题

https://blog.csdn.net/MFWSCQ/article/details/105109727

#### 知识点

考察的是事件循环和回调队列。注意以下几点：

- Promise 优先于 setTimeout 宏任务，所以 setTimeout 回调会最后执行
- Promise 一旦被定义就会立即执行
- Promise 的 resolve 和 reject  是异步执行的回调。所以 resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 之前调用
- await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象

#### 解析

- 首先，事件循环从宏任务（macrotask）队列开始，这个时候，宏任务队列中，只有一个 script (整体代码)任务。从宏任务队列中取出一个任务来执行。
- 首先执行 console.log('script start')，输出 ‘script start'。
- 遇到 setTimeout 把 console.log('setTimeout') 放到 macrotask 队列中。
- 执行 aync1() 输出 ‘async1 start' 和 'async2' ,把 console.log('async1 end') 放到 micro 队列中。
- 执行到 promise ，输出 'promise1' ，把 console.log('promise2') 放到  micro 队列中。
- 执行 console.log('script end')，输出 ‘script end'。
- macrotask 执行完成会执行 microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 'async1 end' 和 ‘promise2'。
- 开始新一轮的事件循环，去除执行一个 macrotask 执行，所以会输出 ‘setTimeout'。

