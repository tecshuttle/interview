第一部分 初识React
    第1章 初识React
        1 初识React
            1 本书的受众
            2 工具说明
            3 谁在使用React
        2 React不能做什么
        3 虚拟DOM
            1 DOM
            2 虚拟DOM
            3 更新与差异比对
            4 虚拟DOM：渴求速度
        4 组件：React的基本单元
            1 组件概览
            2 React中的组件：封装与复用
        5 团队的React
    第2章 我们的第一个组件
        1 React组件介绍
            1 理解应用数据
            2 多组件：组合关系和父子关系
            3 建立组件关系
        2 用React创建组件
            1 创建React元素
            2 渲染首个组件
            3 创建React组件
            4 创建React类
            5 render方法
            6 通过PropTypes校验属性
        3 组件的一生
            1 React的状态
            2 设定初始状态
        4 认识JSX
            1 使用JSX创建组件
            2 JSX的好处以及JSX与HTML的差别
第二部分 React中的组件和数据
    第3章 React中的数据和数据流
        1 状态介绍
            1 什么是状态
            2 可变状态与不可变状态
        2 React中的状态
            1 React中的可变状态：组件状态
            2 React中的不可变状态：属性
            3 使用属性：PropTypes和默认属性
            4 无状态函数组件
        3 组件通信
        4 单向数据流
    第4章 React中的渲染和生命周期方法
        1 搭建Letters Social仓库
            1 获取源代码
            2 应该使用哪个版本的Node
            3 关于工具和CSS的注意事项
            4 部署
            5 API服务器和数据库
            6 运行应用程序
        2 渲染过程和生命周期方法
            1 生命周期方法概览
            2 生命周期方法的类型
            3 初始方法和“将执行”方法
            4 挂载组件
            5 更新方法
            6 卸载方法
            7 捕捉错误
        3 开始创建Letters Social
    第5章 在React中使用表单
        1 在Letters Social中创建帖子
            1 数据需求
            2 组件概览与层级
        2 React中的表单
            1 开始使用表单
            2 表单元素和事件
            3 更新表单状态
            4 受控和非受控组件
            5 表单验证与清理
        3 创建新帖子
    第6章 将第三方库与React集成
        1 向Letters Social API发送帖子
        2 用地图增强组件
            1 使用refs创建DisplayMap组件
            2 创建LocationTypeAhead组件
            3 更新CreatePost，给帖子添加地图
    第7章 React的路由
        1 什么是路由
        2 创建路由器
            1 组件路由
            2 创建组件
            3 开始构建组件
            4 匹配URL路径和参数化路由
            5 向Router组件添加路由
    第8章 再谈路由以及集成Firebase
        1 使用路由器
            1 创建帖子页面
            2 创建组件
            3 创建组件
        2 集成Firebase
    第9章 测试React组件
        1 测试的类型
        2 用Jest、Enzyme和React-test-render测试React组件
        3 编写第 一个测试
            1 开始使用Jest
            2 测试无状态函数组件
            3 不使用Enzyme测试CreatePost组件
            4 测试覆盖率
第三部分 React应用架构
    第10章 Redux应用架构
        1 Flux应用架构
            1 初识Redux：Flux的一个变种
            2 为Redux做准备
        2 在Redux中创建action
            1 定义action类型
            2 在Redux中创建action
            3 创建Redux store并派发action
            4 异步action和中间件
            5 要不要使用Redux
            6 测试action
            7 创建用于崩溃报告的自定义Redux中间件
    第11章 Redux进阶及Redux与React集成
        1 reducer决定状态应该如何改变
            1 状态的结构与初始状态
            2 设置reducer来响应传入的action
            3 将reducer合并到store
            4 测试reducer
        2 将React和Redux结合起来
            1 容器组件与展示组件
            2 使用将组件连接到Redux store
            3 将action绑定到组件的事件处理器上
            4 更新测试
    第12章 服务器端React与集成React Router
        1 什么是服务器端渲染
        2 为什么在服务器上 渲染
        3 可能并不需要SSR
        4 在服务器上渲染 组件
        5 切换到React Router
        6 使用React Router处理已 验证的路由器
        7 带数据获取的服务器端 渲染
        8 小结
    第13章 React Native介绍
        1 介绍React Native
        2 React和React Native
        3 何时使用React Native
        4 最简单的“Hello World”
        5 下一站
