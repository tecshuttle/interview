1. 请写出如下代码的返回值

```javascript
typeof typeof undefined
```

2. 请写出如下代码的返回值

new Array == new Array 

3. 构造等式：

Array.prototype.__proto__ == ?? 

4. 请写出如下代码的返回值

```js
var a = { n: 1 };
var b = a;

a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);
```



5. 请写出如下代码的打印结果

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



6. 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。

for (var i = 0; i< 10; i++){

setTimeout(() => {

console.log(i);

}, 1000)

} 

7. 请写出下面代码的运行结果

async function async1() {

console.log('async1 start');

await async2();

console.log('async1 end');

}

async function async2() {

console.log('async2');

}

console.log('script start');

setTimeout(function() {

console.log('setTimeout');

}, 0)

async1();

new Promise(function(resolve) {

console.log('promise1');

resolve();

}).then(function() {

console.log('promise2');

});

console.log('script end');   

8. 写出5种css隐藏元素的办法

  

9. 已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。写出所有的。

```html
<img src="1.jpg" style="width:480px!important;">
```

 

```
max-width:300px 
transform: scale(0.625); 
zoom:0.625; 
```



10. 编程题

已知如下数组：

var arr = [

[1, 2, 2],

[3, 4, 5, 5],

[6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ],

10

];

 

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

## 参考

[搞懂JavaScript中的连续赋值](https://cloud.tencent.com/developer/article/1093667)

根据js引擎语法解析，会先去从左到右寻找有没有未声明的变量，如果有就把该变量提升至作用域顶部并声明该变量。

