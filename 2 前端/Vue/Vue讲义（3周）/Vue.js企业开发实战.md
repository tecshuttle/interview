# 基础知识篇

## 第1章Vue基础入门（20min）

### 1 Vue概述

MVC到MVVM的演化历程
Vue简介
虚拟DOM与Diff算法

### 2 Vue的安装与使用

直接使用script引入
使用NPM方式
使用命令行工具
创建一个Vue实例

### 3 Vue模板语法

插值
指令
缩写

## 第2章Vue内置指令（127min）

### 1 基本指令

vtext与vhtml
vbind
vonce
vcloak
vpre

### 2 条件渲染

vshow
vif与velseif
velse
在template元素上使用vif条件渲染分组
用key管理可复用的元素

### 3 列表渲染

遍历元素
维护状态
数组更新检测
对象变更检测注意事项
在template上使用vfor
vfor与vif一同使用

### 4 事件处理

监听事件
事件处理方法
事件修饰符
按键修饰符
系统修饰键
为什么在HTML中监听事件

### 5 表单输入绑定

双向绑定
vmodel基本用法
修饰符

### 6 class与style样式绑定

HTML样式绑定
内联样式绑定

## 第3章Vue实例核心选项（66min）

### 1 数据选项

data选项
props选项
computed选项
methods选项
watch选项

### 2 DOM渲染选项

el选项
template选项
render选项

### 3 生命周期钩子

create初始化
mount组件挂载
update组件更新
destroy组件销毁

### 4 资源选项

directives选项
filters选项

## 第4章Vue工程化项目（42min）

### 1 使用Webpack构建Vue项目

什么是Webpack
Webpack中配置Vue开发环境
Webpack配置本地服务器

### 2 Vue CLI脚手架工具

脚手架安装
使用脚手架创建Vue项目
项目结构与文件描述

## 第5章深入了解Vue组件（35min）

### 1 什么是组件化开发

### 2 Vue自定义组件

组件的封装
自定义组件上的属性
自定义组件上的事件

### 3 组件属性校验

### 4 组件通信

父组件向子组件通信
子组件向父组件通信

### 5 插槽

什么是插槽
具名插槽
作用域插槽

# 核心技术篇

## 第6章Vue Router路由（33min）

### 1 路由基础

什么是路由
在Vue中使用路由
动态路由
嵌套模式路由
编程式导航

### 2 路由的相关配置

命名路由
命名视图
重定向

### 3 路由的模式

### 4 导航守卫

全局守卫
路由独享守卫
组件内守卫

## 第7章Vuex状态管理（33min）

### 1 Vuex简介

什么是Vuex
Vuex的安装与使用

### 2 Vuex核心概念

Vuex的工作流程
Vuex对象核心成员
Vuex规范目录结构

## 第8章Vue的异步请求（35min）

### 1 axios的安装与使用

安装axios
axios基本用法

### 2 axios实例

### 3 axios并发请求

### 4 axios拦截器

### 5 axios错误处理

### 6 axios取消请求处理

## 第9章服务器端渲染

### 1 服务器端渲染简介

什么是服务器端渲染(SSR)
为什么要使用服务器端渲染

### 2 服务器端渲染的基本用法

安装与使用
与服务器集成

### 3 Nuxt.js框架

Nuxt.js简介
Nuxt.js的项目搭建
目录结构

## 第10章Vue 3新特性详讲

### 1 为什么要用Vue 3

Vue 2对复杂功能的处理不友好
Vue 2中mixin存在缺陷
Vue 2对TypeScript的支持有限

### 2 Vue 3简介

### 3 Vue 3项目搭建

Vue CLI脚手架简介
安装Vue CLI
创建Vue 3项目

### 4 Vue 3项目的目录结构

### 5 Composition API 详讲

setup（）函数
reactive（）函数
ref（）函数
computed（）计算属性
Vue 3中的响应式对象
生命周期的改变
watch（）侦测变化
Vue 3更好地支持TypeScript
Teleport传送门
Suspense异步请求
全局API修改

# 项目实战篇

## 第11章实战——Vue 2仿“京东商城”App

### 1 项目概述

开发环境
项目结构

### 2 入口文件

项目入口页面
程序入口文件
组件入口文件

### 3 项目组件

底部导航组件
商城首页
搜索页面
分类导航页面
商品列表页面
购物车页面

## 第12章实战——Vue 2仿“饿了么”App

### 1 项目概述

开发环境
项目结构

### 2 入口文件

项目入口页面
程序入口文件
组件入口文件

### 3 项目组件

头部组件
商品标签栏与侧边导航组件
购物车组件
商品列表组件
商家公告组件
评论内容组件
商家信息组件

## 第13章实战——Vue 3仿“今日头条”App

### 1 项目概述

开发环境
项目结构

### 2 入口文件

项目入口页面
程序入口文件
组件入口文件
路由文件

### 3 项目组件

公共组件
首页导航栏
首页新闻列表
新闻详情页
私信留言页
新闻搜索页面
