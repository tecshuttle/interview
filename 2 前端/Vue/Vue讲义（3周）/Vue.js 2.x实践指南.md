# 第1章 Vue开发前奏

1 网站交互方式
多页Web应用（MPA）
单页Web应用（SPA）
2 前后端分离的开发模式
3 前端三大开发框架
4 为什么要学习流行框架（MVVM框架）
5 框架和库的区别
6 模块化和组件化
7 后端中的MVC与前端中的MVVM 之间的区别
8 Node.js安装
9 Promises介绍
在Promises出现之前的文件读取方式
Promises基本概念介绍
10 ES7语法糖async/await
11 开发工具
Visual Studio Code
vue dev tools
Chrome

# 第2章 Vue基础入门

1 Vue发展历史
2 什么是Vue.js
3 Vue基本代码
4 Vue常用指令介绍
v-cloak指令
v-html指令
5 v-bind&v-on指令
示例：跑马灯特效
事件修饰符
6 v-model双向数据绑定
7 v-for和key属性
8 v-if和v-show
9 在Vue中使用样式
使用class样式
使用内联样式
10 过滤器
全局过滤器
私有过滤器
11 键盘修饰符以及自定义键盘修饰符
12 自定义指令
13 增删改查示例

# 第3章 Vue进阶

1 Vue生命周期
2 axios介绍
跨域请求
Node手写JSONP服务器剖析JSONP原理
3 Vue过渡动画
单元素/组件的过渡
列表过渡

# 第4章 Vue组件开发

1 组件介绍
全局组件定义的三种方式
使用components定义私有组件
组件中展示数据和响应事件
组件切换
2 组件传值
父组件向子组件传值
子组件向父组件传值
3 组件案例：留言板
4 使用ref获取DOM元素和组件引用
5 Vuex
安装Vuex
配置Vuex的步骤
6 render函数

# 第5章 路由vue-router

1 什么是路由
2 安装vue-router的两种方式
3 vue-router的基本使用
4 设置选中路由高亮
5 为路由切换启动动画
6 路由传参query¶ms
query
params
7 使用children属性实现路由嵌套
8 使用命名视图
9 watch监听
10 computed：计算属性的使用
11 watch、computed、methods的对比
12 nrm的安装及使用
13 vue-router中编程式导航

# 第6章 webpack介绍

1 webpack概念的引入
2 webpack：最基本的使用方式
3 webpack最基本的配置文件的使用
4 webpack-dev-server的基本使用
5 使用html-webpack-plugin插件配置启动页面
6 webpack-dev-server的常用命令参数
7 webpack-dev-server配置命令的另一种方式
8 配置处理css样式表的第三方loader
9 分析webpack调用第三方loader的过程
10 npm install--save、--save-dev、-D、-S、-g的区别
11 配置处理less文件的loader
12 配置处理scss文件的loader
13 webpack中url-loader的使用
14 webpack中使用url-loader处理字体文件
15 webpack中Babel的配置

# 第7章 webpack和Vue的结合

1 webpack中导入Vue和普通网页使用Vue的区别
在webpack中使用Vue
在webpack中配置.vue组件页面总结
2 export default和export的使用方式
3 结合webpack使用vue-router
4 结合webpack实现children子路由
5 组件中style标签lang属性和scoped属性的介绍
6 抽离路由模块

# 第8章 webpack中UI组件的使用

1 使用饿了么的Mint UI组件
button组件
Toast组件
2 Mint UI按需导入
3 MUI介绍
4 MUI的使用
5 Vant UI
6 Element UI
引入Element
Element常见应用场景及解决方案

# 第9章 移动图书商城

1 mockjs介绍
2 App首页设计
3 使用阿里巴巴矢量库
4 App.vue 组件的基本设置
设置路由激活时高亮的两种方式
实现tabbar页签不同组件页面的切换
路由切换添加过渡效果
5 首页轮播图
6 首页九宫格
7 图书分类组件
8 制作顶部滑动导航
9 制作图片列表
10 在Android手机浏览器中调试App
11 真机调试
12 封装轮播组件
13 商品详情页
14 购物车小球动画
15 封装购买数量组件
16 设计购物车数据存储
17 我的购物车
18 增加页面返回
19 总结

# 第10章 天下会管理平台

1 Vue前端开发规范
统一开发环境
技术框架选型
命名规范
注意事项
ESlint配置js语法检查并自动格式化
2 通过vue-cli来搭建项目
3 完善项目结构
设置浏览器图标
完善src源码目录结构
引入Element UI
封装axios请求
Ajax跨域支持
封装全局的css变量文件
vue-wechat-title动态修改title
封装全局的配置文件base-config.js
4 项目介绍及其界面设计
5 项目设计和分析
帮主首页
其他管理界面
设计路由
设计业务逻辑层
Vuex设计
权限设计
菜单组件
6 表单验证
7 登录
账号密码登录
在线生成二维码
制作网站ico图标
存储登录信息
回车自动登录
防止登录按钮频繁点击
8 增删改查列表
