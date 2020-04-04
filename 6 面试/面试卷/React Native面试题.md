# React Native

#### 1. 什么是Flex布局？

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。2009年，W3C 提出了一种新的方案—-Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。 项目默认沿主轴排列。 

#### 2. 安装第三方依赖库的时候有时候要执行`react-native link`操作，这个操作有什么作用？

纯JS库的安装不需要link，需要使用原生代码的库就要link，把java代码安装到Libraries目录。

#### 3. FlatList和ListView的区别

FlatList 主要是解决 ListView 性能问题，数据量大时 ListView 性能很差，占用内存持续增加。

#### 4. 图片要实现一个圆角效果

图片在Android上不能直接设置圆角，要用View包裹并设置View的圆角。

#### 5. UI组件是自己写还是使用第三方UI组件包？

开放题。