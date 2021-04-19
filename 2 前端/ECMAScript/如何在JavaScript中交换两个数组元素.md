[js交换两个变量之间值的11种方法总结及性能分析](https://blog.csdn.net/qaqLjj/article/details/88169410)

最近做某个项目时，其中有一个需求是交换数组中的两个元素。当时使用的方法是:

```js
arr = [item0, item1, ..., itemN];

//交换第0个和第K(k<N)个元素
arr[0] = arr.splice(k, 1, arr[0])[0];
```

当时觉得这种方法非常好。其实，这种方式的效率与普通方式比低很多。

|                  | 普通方式 | splice() |
| ---------------- | -------- | -------- |
| 总耗时           | 15ms     | 776ms    |
| 平均每秒执行次数 | 6666万   | 128万    |
| 执行平均差       | 170.00%  | 15.06%   |



## 变量

### 1 普通临时变量变换方式（）

```js
tmp = a;
a = b;
b = tmp;
```

引入临时变量，看着很low，但效率确实很高，经典的才是最优雅的。

### 2 用对象（很少用）

```js
a = {a : b, b : a};
b = a.b;
a = a.a;
```

### 3 用数组1

```js
a = [a, b];
b = a[0];
a = a[1];
```

### 4 用数组2（性能不高）

```js
a = [b, b = a][0];
```

### 5 用ES6解构赋值（性能不高）

```js
[a, b] = [b, a];
```

### 6 利用try catch交换（）

```js
a = (function () {
  try { return b; }
  finally { b = a; }
})();
```

这种方法应该是没人使用的，而且性能在各种方法中垫底。

### 7 仅适用于数字1（性能不低）

```js
a = a + b;
b = a - b;
a = a - b;
```

### 8 仅适用于数字2（性能不低）

```js
a = b - a + (b = a);
```

### 9 位运算：用异或操作1（性能不低）

```js
a ^= b;
b ^= a;
a ^= b;
```

### 10 位运算：用异或操作2（性能不低）

```
a = (b = (a ^= b) ^ b) ^ a;
```

### 11 利用eval计算

```js
eval("a=" + b + ";b=" + a);
```

这种方式仅用于研究，它的效率是其它方式的万分之一。



https://www.jb51.net/article/98720.htm

https://blog.csdn.net/Chou_Junn/article/details/84967408

https://blog.csdn.net/ligang2585116/article/details/42048671
https://blog.csdn.net/qq_35304820/article/details/89399083
https://www.cnblogs.com/shapeY/p/9669924.html