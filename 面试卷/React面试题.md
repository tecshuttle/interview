# React

#### 1. react组件生命期有哪几个？

componentWillMount - 多用于根组件中的应用程序配置。
componentDidMount - 渲染完成。在这里获取所有你需要的数据、设置事件监听。
omponentWillReceiveProps - 这个周期函数作用于特定的 prop 改变导致的 state 转换。
shouldComponentUpdate - 防止组件过度渲染，它返回一个布尔值来决定组件是否要重新渲染。
componentWillUpdate - 开始渲染前调用。有得少。
componentDidUpdate - 开始渲染后调用。常用于更新 DOM，响应 prop 或 state 的改变。
componentWillUnmount - 取消网络请求，或者移除所有与组件相关的事件监听器。

#### 2. state、props有什么区别？

State 是一种数据结构，用于组件挂载时所需数据的默认值。State 可能会随着时间的推移而发生突变，但多数时候是作为用户事件行为的结果。

Props是组件的配置。props 由父组件传递给子组件，并且就子组件而言，props 是不可变的(immutable)。

#### 3. Redux是做什么用的？

Redux 的基本思想是整个应用的 state 保持在一个单一的 store 中。

#### 4. React必须使用JSX吗？

React 并不强制要求使用 JSX。使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。

#### 5. setState是实时更新吗？

- 在React相关的回调函数中setState() 是异步更新
- 不在React 相关的回调中setState() 是同步更新

React 相关的回调包括：组件的生命周期钩子，React 组件事件监听回调。

React不相关的回调包括常见的：setTimeout(), Promise()等。

