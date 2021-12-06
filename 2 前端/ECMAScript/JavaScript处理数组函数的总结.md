## 数组函数

https://mp.weixin.qq.com/s/B2F0BSALlWUPL7Gs_mlgnQ



JavaScript的array可以包含任意数据类型，并通过索引来访问每个元素。

### 1 检测数组

instanceof、slice()、Array.isArray()

检测一个对象是不是数组的三种方法：
(1)方法一：instanceOf检测方法
var arr = ['a','b','c'];
if (arr instanceof Array){
// do something...
}
或者：

var arr = ['a','b','c'];
if (Array.prototype.isPrototypeOf(arr)){
// do something...
}
问题：instanceof 操作符假设只有一个全局执行环境。如果网页中包含多个框架，那实际上存在两个以上的不同全局执行环境，从而存在两个以上不同版本的Array构造函数。如果从一个框架向另一个框架传入数组，那么传入的数组与第二框架中原生的数组分别具有各自不同的构造函数。从而将传入的数组误判为非数组。

注意：如果只有一个全局执行环境，可以用 instanceof检测数组，关于instanceof操作符的原理，请移步这里理解Javascript_07_理解instanceof实现原理.

A instanceof B:检查B.prototype 是否存在于A的原型链[[prototype]]中。

(2)方法二：Array.isArray(obj)方法

var arr = ['a','b','c'];
if (Array.isArray(arr)){
// do something...
}
这个方法克服了instanceof的问题，可以确定某个变量是不是数组，而不管它是在哪个全局执行环境中创建的。

问题：但是支持Array.isArray()方法的浏览器有IE9+、Firefox4+、Safari5+、Opera10.5+和Chrome

(3)方法三：万能方法

function isArray(arr){
    return Object.prototype.toString.call(arr) == '[object Array]';
}
var arr = ['a','b','c'];
isArray(arr);//true
原理：在任何值上调用Object原型的toString() 方法，都会返回一个[object NativeConstructorName] 格式的字符串。每个类在内部都有一个[[Class]](不可访问属性的表示方式)属性，这个属性就指定了上述字符串中的构造函数名NativeConstructorName。如：

var arr = [];
console.log(Object.prototype.toString.call(arr)); // "[object Array]"
引申： 这种思路也可用于检测某个值是不是原生函数或正则表达式。

// Array
Object.prototype.toString.call(value); // "[object Array]"

// Function
Object.prototype.toString.call(value); // "[object Function]"

// RegExp
Object.prototype.toString.call(value); // "[object RegExp]"

// Date
Object.prototype.toString.call(value); // "[object Date]"
注意：Object的toString()方法不能检测非原生的构造函数的构造函数名，因此，开发人员定义的任何构造函数都将返回[object Object]。

### 2 获取数组长度

直接访问length属性获取数组长度：

var arr = [1,'hihi',3.14,null,true];
arr.length;//5
注意： length还是可写的，直接给Array的length赋一个新的值会导致Array大小的变化:

var arr = [1,2,3];
arr.length;//3
arr;//1,2,3
arr.length = 5;
arr;//1,2,3,undefined,undefined
arr.length = 2;
arr;//1,2
通过设置Array的length属性，可以从数组的末尾移除或者添加若干新项。
利用length属性还可以方便的向数组末尾添加新项：arr[arr.length]="black"，不过，这种方法通常可以用'push'方法来替代。

### 3 修改数组元素

var arr = [1,2,3];
arr[5] = 8;
arr;//1,2,3,undefined,undefined,8

建议：大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

### 4 位置方法

与String类似，Array也可以通过indexOf()来搜索一个指定的元素在Array中首次出现的位置:

var arr = [10,20,'30',20,30];
arr.indexOf(20);//1
arr.indexOf(20,2)//3
补充：

stringObject.indexOf(searchvalue,fromindex)
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

searchvalue: 必需。规定需检索的字符串值。
fromindex: 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。

indexOf() 方法对大小写敏感！

如果要检索的字符串值没有出现，则该方法返回 -1。

在判断查找的项是否存在时，使用的是全等===。

lastIndexOf和indexOf操作符类似，不过是从数组的末尾开始向前查找的。

### 5 操作方法

slice()、concat()、splice()

arr.slice()

slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：

var arr = ['A','B','C','D','E','F','G'];
arr.slice(1,3);//['B','C']
arr.slice(3);//['D','E','F','G']
arr.slice(3,50);//['D','E','F','G']
arr.slice(-3);//['E','F','G']
arr.slice(3,-2);//['D','E']
注意

到slice()的起止参数包括开始索引，不包括结束索引。

如果结束索引省略，将返回从开始索引到数组结束的所有元素。

如果结束索引超过了范围，将返回从开始索引到数组结束的所有元素。

开始索引可以去负值，它规定从从数组尾部开始算起的位置。

补充：

arrayObject.slice(start,end)
slice() 方法可从已有的数组中返回选定的元素。

start: 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。(这里的必需，有待商榷，实际上不写也是可以的)
end: 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。

小技巧：复制数组
如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：

var arr = ['A','B','C','D','E','F','G'];
var aCopy = arr.slice();
aCopy;//['A','B','C','D','E','F','G']
arr === aCopy; //false(如果，你不知道这里为什么是`false`,那么你应该去看看原始值和引用对象)
arr.splice()

splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
补充：

arrayObject.splice(index,howmany,item1,item2,...,itemx)
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

index: 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany: 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1,item2,...,itemx: 可选。向数组添加的新项目。

返回值：包含被删除项目的新数组，如果有的话。

注意：

splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

arr.concat()

concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array:

var arr = ['one','two','three'];
var arrAdd = arr.concat([1,2,3]);
arrAdd;//['one','two','three',1,2,3];
arr;//['one','two','three']
注意：请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里：

var arr = ['one','two','three'];
var arrAdd = arr.concat(1,2,['A','B']);
arrAdd;//['one','two','three',1,2,'A','B']
补充：

arrayObject.concat(arrayX,arrayX,...,arrayX)
concat() 方法用于连接两个或多个数组。

arrayX: 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

返回值：返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

关于数组的操作方法

如果要修改数组中的某些项的值，可以使用[]和splice.

若果要在数组中插入某些项，只能使用'splice'

### 6 栈方法

push和pop

var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr; // []
补充：

(1)push: 方法可向数组的末尾添加一个或多个元素，并返回Array新的长度。

arrayObject.push(newElement1,newElement2,...,newElementX)

newElement1: 必需。要添加到数组的第一个元素。
newElement2: 可选。要添加到数组的第二个元素。
newElementX: 可选。可添加多个元素。

返回值：把指定的值添加到数组后的新长度。

push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

(2)pop: 方法用于删除并返回数组的最后一个元素

arrayObject.pop()

返回值：arrayObject 的最后一个元素。

pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

### 7 队列方法

unshift和shift

unshift和shift的作用于push和pop类似，只不过前者操作的是Array的头部.

var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
注意： unshift() 方法无法在 Internet Explorer 中正确地工作！

### 8 重排序方法

sort和reserve

arr.sort()

sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序(将按字母顺序对数组中的元素进行排序)排序:

var arr = ['c','b','a','C','B','A'];
arr.sort();
arr;//['A','B','C','a','b','c'];
补充：

arrayObject.sort(sortby)
sort() 方法用于对数组的元素进行排序。

sortby: 可选。规定排序顺序。必须是函数。

返回值：对数组的引用。请注意，数组在原数组上进行排序，不生成副本。

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。

若 a 等于 b，则返回 0。

若 a 大于 b，则返回一个大于 0 的值。

举例说明：
实例1：按数字大小对数字排序

function sortNumber(a,b){
    return a-b
}

var arr=[3,5,1,10,21];
arr.sort();
arr;//[1,10,21,3,5];
arr.sort(sortNumber);
arr;//[1,3,5,10,21]
实例2：默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。

var arr = ['Google','apple','Microsoft','BUPT'];
arr.sort();
arr;//['BUPT','Google','Microsoft'，'apple'];
arr.sort(function(s1,s2){
    var x1 = s1.toLowerCase();
    var x2 = s2.toLowerCase();
    if(x1<x2)
        return -1;
    if(x1>x2)
        return 1;
    return 0;
});
arr;//['apple','BUPT','Google','Microsoft']
arr.reverse()

将整个Array的元素给掉个(gě)个(gè)，也就是反转：

var arr = ['one','two','three'];
arr.reverse();
arr;//['three','two','one'];
注意：该方法会直接改变原来的数组，而不会创建新的数组。

### 9 转换方法

join、toString、toLocaleString、valueOf

arr.toString()

该方法会返回由数组中每个值的字符串形式拼接而成的一个以，分割的字符串.该方法首先会针对数组中的每一项调用其相应的toString()方法得到字符串，然后再用,拼接这些字符串。

Image

arr.valueOf()

该方法会返回数组本身。

Image

arr.toLocalString()

该方法也会创建一个数组值的以,分隔的字符串，但是与前面两个方法不同的是，这一次为了取得数组中每一项的值，调用的是每一项的toLocaleString()方法。

Image

arr.join()

join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

var arr = ['a','b','c',1,2,3];
var arrToString = arr.join('-');
arrToString;//a-b-c-1-2-3
注意：如果Array的元素不是字符串，将自动转换为字符串后再连接。

补充：

arrayObject.join(separator)
join()方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。

separator: 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

返回值：返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。

关于转换方法，需要注意：

如果数组中某一项的值为null、undefined,那么该值在这些方法的返回结果中以空白字符串表示。

Image

### 10 迭代方法

every、filter、forEach、map、some

这些方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响this的值。传入这些方法的函数会接收三个参数：数据项的值、该项在数组中的位置和数组对象本身。

every()对数值中的每一项运行给定的函数，如果数组对每一项返回true,则返回true.

some()对数组中的每一项运行给定的函数，如果该函数对任一项返回true，则返回true

这两个方法会忽略数组中undefined项

filter()对数组中的每一项运行给定的函数，返回该函数会返回true的项组成的数组。

Image

注意，该方法与jQuery中$().filter()方法的区别

filter(expr|obj|ele|fn):筛选出与指定表达式匹配的元素集合。这个方法用于缩小匹配的范围。用逗号分隔多个表达式。

expr:字符串值，包含供匹配当前元素集合的选择器表达式。
obj:现有的jQuery对象，以匹配当前的元素。
ele:一个用于匹配元素的DOM元素。
fn:一个函数用来作为测试元素的集合。它接受一个参数index，这是元素在jQuery集合的索引。在函数， this指的是当前的DOM元素。

forEach()对数组中的每一项运行给定的函数，该方法没有返回值。

Image

注意，该方法不会遍历只声明而为定义的值

注意，该方法与jQuery中$.each()和each()方法的区别。

$.each(object,callback): 不同于例遍 jQuery 对象的 $().each() 方法，此方法可用于例遍任何对象。如果需要退出 each 循环可使回调函数返回 false，其它返回值将被忽略。

object:需要例遍的对象或数组。
callback:每个成员/元素执行的回调函数。回调函数拥有两个参数：第一个为对象的成员或数组的索引index，第二个为对应变量或内容value。

$().each(callback): 以每一个匹配的元素作为上下文来执行一个函数。意味着，每次执行传递进来的函数时，函数中的this关键字都指向一个不同的DOM元素（每次都是一个不同的匹配元素）。而且，在每次执行函数时，都会给函数传递一个表示作为执行环境的元素在匹配的元素集合中所处位置的数字值作为参数（从零开始的整型）。返回 false 将停止循环 (就像在普通的循环中使用 break)。返回 true 跳至下一个循环(就像在普通的循环中使用continue)。

calback:对于每个匹配的元素所要执行的函数。回调函数只有一个参数，即index。

### 11 归并方法

reduce、reduceRight

这两个方法都会迭代数组中的所有项，然后构建一个最终返回的值。reduce()从数组的第一项开始，逐个遍历到最后，而reduceRight()从最后一项开始。

这两个方法都接收两个参数：一个在每一项上调用的函数，和（可选的）最为归并基础的初始值。

传给这两个方法的函数接收4个参数：前一个值，当前值，当前值的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项，因此，第一次迭代发生在数组的第二项上。



参考
1、数组-廖雪峰的官方网站
2、js中substr,substring,indexOf,lastIndexOf的用法小结
3、 JavaScript 检测数组
4、[javascript 高级教程]()



## 查找数组中的值？

问题:

我有一个未命名的对象数组，其中包含一个命名对象的数组，我需要获取“名称”是“字符串1”的对象。这是一个示例数组。

```js
var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];
```

方法1.

```js
let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);
```

## JS数组遍历的几种方法

https://blog.csdn.net/fu983531588/article/details/89597521

### for

最简单的一种循环遍历方法，也是使用频率最高的一种，可优化。

优化：使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。

### for…in…

这个循环用的人也很多，但是效率最低（输出的 key 是数组索引）。

### for…of…（ES6）

虽然性能要好于 for…in…，但仍然比不上普通的 for 循环（不能循环对象）

### forEach

数组里的元素个数有几个，该方法里的回调就会执行几次。
第一个参数是数组里的元素，第二个参数为数组里元素的索引，第三个参数则是它自己。
数组自带的遍历方法，虽然使用频率略高，但是性能仍然比普通循环略低。

### map

遍历每一个元素并且返回对应的元素(可以返回处理后的元素) (map 映射 一一 对应)。
返回的新数组和旧数组的长度是一样的。
使用比较广泛，但其性能还不如 forEach。

### filter

遍历数组，过滤出符合条件的元素并返回一个新数组。

### some

遍历数组，只要有一个以上的元素满足条件就返回 true，否则返回 false。

### every

遍历数组，每一个元素都满足条件 则返回 true，否则返回 false。

### find（ES6）

遍历数组，返回符合条件的第一个元素，如果没有符合条件的元素则返回 undefined。

### findIndex（ES6）

遍历数组，返回符合条件的第一个元素的索引，如果没有符合条件的元素则返回 -1。

## map循环如何跳出 ?

https://segmentfault.com/q/1010000013463825

- map无法跳出，所以才会在es6中添加for of语法。

- 你用return试了就说明你对js的理解不深，类似的some或every可以通过返回的bool值推出。some是遇到ture就退出。
- 面试官认为map可以跳出(对map理解有误)
- 面试官想让你回答不能跳出，以及为什么不能跳出，对map的理解。
- map 不能正常跳出，如果非要跳出的话……`throw`，当然也就得不到 map 的结果
- Array的几个遍历的方法各有千秋，map是为了返回值的，forEach是为了处理但不返回值的，filter是过滤值的，如果要跳出循坏，还是用for。
  至于面试这样问，是为了寻找“特殊感”？
- map不能跳出，原因要从map流程中得到，因为map本身更精确来讲是个迭代，而不是循环。

### forEach跳出本次循环和终止循环

https://blog.csdn.net/daoxiaofei/article/details/108690589

结论：与map()一样，无法正常跳出。



END