

# 完全搞懂js 中的new()到底做了什么?

https://blog.csdn.net/qq_27674439/article/details/99095336



在《JavaScript模式》这本书中，new的过程说的比较直白，当我们new一个构造器，主要有三步：

1. 创建一个空对象，将它的引用赋给this，继承函数的原型；
2. 通过this将属性和方法添加至这个对象；
3. 最后返回this指向的新对象，也就是实例（如果没有手动返回其他的对象）。



# JS 的 new 到底是干什么的？

https://zhuanlan.zhihu.com/p/23987456



使用new关键字，可以少做四件事情：

1. 不用创建临时对象，因为new会帮你做（使用「this」就可以访问到临时对象）；
2. 不用绑定原型，因为new会帮你做（new为了知道原型在哪，所以指定原型的名字为prototype）；
3. 不用return临时对象，因为new会帮你做；
4. 不要给原型想名字了，因为new指定名字为 prototype。



# JS中Map和ForEach的区别

https://www.jianshu.com/p/83aa9a2a4055

```js
array.map(function(currentValue,index,arr), thisValue)
```

