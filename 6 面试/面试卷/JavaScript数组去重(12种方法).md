# JavaScript数组去重（12种方法，史上最全）

https://segmentfault.com/a/1190000016418021

### 1、利用ES6 Set去重

```js
function unique(arr) {
    return Array.from(new Set(arr))
}
```

这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。

### 2、利用for嵌套for，然后splice去重（ES5中最常用）

```js
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
```

NaN和{}没有去重，两个null直接消失了。

### 3、利用indexOf去重

```jsp
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!');
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}
```

NaN、{}没有去重。

### 4、利用sort()

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!');
        return;
    }
    arr = arr.sort();
    var arrry = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
```

NaN、{}没有去重。

### 5、利用对象的属性不能相同的特点进行去重



这种数组去重的方法有问题，不建议用，有待改进。

### 6、利用includes



{}没有去重。



### 7、利用hasOwnProperty

利用hasOwnProperty 判断是否存在对象属性。

```js
function unique(arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
```

所有的都去重了。

赋值语句有返回值，就是等号右边的值！