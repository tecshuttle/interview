# vue-cli

```bash
sudo npm update -g @vue/cli #升级
vue create goals
cd goals
yarn serve
```

[Vue CLI 是如何实现的？](https://mp.weixin.qq.com/s/UpkOGbJ2VZugzwas2ddeGA)

# Vue3.0 

## Router

需求：点击列表页条目，进入编辑页面，为减少接口请求，把条目数据放在route参数中传递。

问题：这个做法在Vue2中是可行的，在Vue3中Object参数会变成[object Object]。

解决：把Object参数转化为JSON格式传递。

原因：目前并不了解，为什么在Vue3中Route不能传递Object参数。

```js
// 列表页
edit(item: any): void {
  this.$router.push({
    name: "CategoryFormEdit",
    params: { id: item.id, item: JSON.stringify(item) },
  });
},
```

```js
// 编辑页
setup() {
  onMounted(() => {
    if (route.params.id) {
      route.params.item
        ? updateFormState(JSON.parse(<string>route.params.item))
        : getCategory(route.params.id);
    }
  });
}
```

## 使用 ant-design-vue

https://www.antdv.com/docs/vue/introduce-cn/

引入ant-design-vue

```bash
yarn  add ant-design-vue@next
```

在`main.js`中引入

```js
import {createApp} from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

createApp(App)
    .use(Antd) 
    .mount('#app')
```

## 如何在Vue3中使用生命周期函数

https://zhuanlan.zhihu.com/p/136417498

## 深入理解 Vue3 Reactivity API

https://zhuanlan.zhihu.com/p/146097763

## 全面解析Vue3 Reactive家族和Ref家族API

https://www.jianshu.com/p/cfe25e757d0e

# Vuex

[vuex数据存储到了哪里？](https://blog.csdn.net/Luckier_hope/article/details/108056585)

[sessionstorage和localstorage的区别是啥？](https://www.php.cn/faq/463215.html)

[sessionStorage、localStorage用法总结](https://zhuanlan.zhihu.com/p/92947594)

# 优化

[九种Vue性能优化方法](https://www.jianshu.com/p/f372d0e3de80)

# 测试

[vue e2e 测试](https://blog.csdn.net/iceice_L/article/details/89359670)

# 资料

[精读《DOM diff 原理详解》](https://mp.weixin.qq.com/s/KCX8xwY563qCAJqaK2H2EA)

[Vue 3源码及原理，看这篇就懂了](https://mp.weixin.qq.com/s/uAJ8A9By5U7skL-u1sYUtA)

[20 道 Vue 常见面试题](https://m.zhipin.com/mpa/html/get/column?contentId=6b5b951c724c4259qxB7098~)

[说说你对 VUE 的理解?](https://m.zhipin.com/mpa/html/get/column?contentId=6687c624f10c470cqxB93dU~)

[vue 生命周期共分为四个阶段](https://m.zhipin.com/mpa/html/get/share?type=2&contentId=fcf8ecee1ac913c6pnJ-2t--FA~~)

