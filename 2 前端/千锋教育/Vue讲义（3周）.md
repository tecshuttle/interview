# 概述（0.5天）

### Web前端技术的发展

《前端架构：从入门到微前端》第1章 前端架构

前端静态页面走向动态页面的转变

程序后端走向前端的转变

多页Web应用（MPA）

单页Web应用（SPA）

MVC模式介绍

MVP模式介绍

MVVM模式介绍

MVC到MVVM的演化历程

框架和库的区别

模块化和组件化

后端中的MVC与前端中的MVVM 之间的区别

Web开发面临的问题

解决方案：前后端分离

### 资料

[Web前端技术发展简史](https://www.cnblogs.com/luwanlin/p/11228147.html)

[前端的发展历程](https://zhuanlan.zhihu.com/p/53211263)

[盘点Web前端20年的技术变迁史](https://cloud.tencent.com/developer/article/1492656)

[前端发展简史](https://blog.csdn.net/freekiteyu/article/details/79927047)

[Web前端发展史](https://segmentfault.com/a/1190000020281750)

### 初识Vue.js

Vue.js简史

- 版本及特点
- [Vue简史](https://zhuanlan.zhihu.com/p/58261979)

Vue特点

- 渐进式框架

- 响应式系统
  - 状态侦测
  - 虚拟DOM与Diff算法

知识图、生态、https://github.com/vuejs/awesome-vue

### 示例

创建一个Vue实例

```bash
$ vue create user-list
$ cd user-list
$ npm run serve
```

代码

```html
<template>
  <div class="hello">
    <div class="form">
      <p>姓名：<input v-model="formVal.name" /></p>
      <p>
        性别：
        <select v-model="formVal.sex">
          <option value="1">男</option>
          <option value="0">女</option>
        </select>
      </p>
      <p>年龄：<input v-model="formVal.old" /></p>
      <p><button @click="add">添加</button></p>
    </div>

    <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
      </tr>
      <tr v-for="(item, index) in userList" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex === "1" ? "男" : "女" }}</td>
        <td>{{ item.old }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formVal: {},
      userList: [
        { name: "Tom", sex: 1, old: 42 },
        { name: "Jack", sex: 1, old: 36 },
        { name: "Elle", sex: 0, old: 18 },
      ],
    };
  },
  methods: {
    add() {
      if (Object.keys(this.formVal).length === 3) {
        this.userList.push(this.formVal);
        this.formVal = {};
      }
    },
    del(index) {
      this.userList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

div.form {
  width: 50%;
  margin: 1em auto 1em auto;
}

input,
select {
  width: 160px;
}

div.form p {
  text-align: left;
}
</style>
```

模板语法

开发工具

# 起步（0.5天）

# 官方教程（一周5天）

深入了解组件

过渡&动画

可复用性&组合

工具

规模化

风格指南

# 原理（一周5天）

变化侦测

虚拟DOM

模板编译原理

# 专题（2天）

整体流程

生命周期

指令的奥秘

过滤器的奥秘

最佳实践

# 面试题（2天）



# 资料

[【译】Angular vs React vs Vue](https://zhuanlan.zhihu.com/p/28349401)

[React VS Vue：2020年选哪个更好？](https://zhuanlan.zhihu.com/p/88267994)

[Reactjs vs. Vuejs](https://zhuanlan.zhihu.com/p/26757994)

[8分钟为你详解React、Angular、Vue三大前端技术](https://www.cnblogs.com/huaweiyun/p/12979587.html)

[“前端架构”React，Angular还是Vue，太难选了？看完秒懂](https://new.qq.com/omn/20201105/20201105A0H3NT00.html)

[技术趋势：React vs Vue vs Angular](https://www.cnblogs.com/willick/p/React-vs-Vue-vs-Angular.html)

[作为前端，真的有必要把三大JS框架（vue，react，angular）都学会吗?](https://www.zhihu.com/question/368330227)

[前端框架angular，angularJS，React，Vue对比](https://blog.csdn.net/xinghuowuzhao/article/details/104562732)

