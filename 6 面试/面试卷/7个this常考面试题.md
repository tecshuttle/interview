https://dmitripavlutin.com/javascript-this-interview-questions/

问题 1：变量 vs 属性

```js
const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};

console.log(object.getMessage()); // ??
```



问题 2：Cat 的名字

```js
function Pet(name) {
  this.name = name;
  this.getName = () => this.name; //考察箭头函数的使用
}

const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?

const { getName } = cat;
console.log(getName()); // What is logged?
```



问题 3：延迟打招呼

```js
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message); // What is logged?
  },
};

setTimeout(object.logMessage, 1000);
```



问题 4：人工方法

```js
const object = {
  message: 'Hello, World!',
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}
```

如何调用 logMessage 函数，让它打印 "Hello, World!" ?至少有 3 种方式，可以做到。



问题 5：问候和告别

```js
const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`; //考察箭头函数，没明白。
  },
};

console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?
```



问题 6：棘手的 length

```js
var length = 4;

function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2); // 参数1和2没用到，仅起迷惑作用，干扰注意力。
```



问题 7：调用参数

```js
var length = 4;

function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object.method(callback, 1, 2);
```



