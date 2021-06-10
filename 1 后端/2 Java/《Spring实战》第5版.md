# 第0部分 Spring 基础

## 第0章 Spring 起步

0 什么是Spring
1 初始化Spring 应用
1.1 使用Spring Tool Suite初始化Spring 项目
1.2 检查Spring 项目的结构
2 编写Spring 应用
2.1 处理Web 请求
2.2 定义视图
2.3 测试控制器
2.4 构建和运行应用
2.5 了解Spring Boot DevTools
2.6 回顾一下
3 俯瞰Spring 风景线
3.1 Spring 核心框架
3.2 Spring Boot
3.3 Spring Data
3.4 Spring Security
3.5 Spring Integration 和Spring Batch
3.6 Spring Cloud
4 小结

## 第1章 开发Web 应用

0 展现信息
0.1 构建领域类
0.2 创建控制器类
0.3 设计视图
1 处理表单提交
2 校验表单输入
2.1 声明校验规则
2.2 在表单绑定的时候执行校验
2.3 展现校验错误
3 使用视图控制器
4 选择视图模板库
5 小结

## 第2章 使用数据

0 使用JDBC 读取和写入数据
0.1 调整领域对象以适应持久化
0.2 使用JdbcTemplate
0.3 定义模式和预加载数据
0.4 插入数据
1 使用Spring Data JPA 持久化数据
1.1 添加Spring Data JPA 到项目中
1.2 将领域对象标注为实体
1.3 声明JPA repository
1.4 自定义JPA repository
2 小结

## 第3章 保护Spring

0 启用Spring Security
1 配置Spring Security
1.1 基于内存的用户存储
1.2 基于JDBC 的用户存储
1.3 以LDAP 作为后端的用户存储
1.4 自定义用户认证
2 保护Web 请求
2.1 保护请求
2.2 创建自定义的登录页
2.3 tui出
2.4 防止跨站请求伪造
3 了解用户是谁
4 小结

## 第4章 使用配置属性

0 细粒度的自动配置
0.1 理解Spring 的环境抽象
0.2 配置数据源
0.3 配置嵌入式服务器
0.4 配置日志
0.5 使用特定的属性值
1 创建自己的配置属性
1.1 定义配置属性的持有者
1.2 声明配置属性元数据
2 使用profile 进行配置
2.1 定义特定profile 的属性
2.2 激活profile
2.3 使用profile 条件化地创建bean
3 小结

# 第２部分 Spring 集成

## 第5章 创建REST 服务

0 编写RESTful 控制器
0.1 从服务器中检索数据
0.2 发送数据到服务器端
0.3 在服务器上更新数据
0.4 删除服务器上的数据
1 启用超媒体
1.1 添加超链接
1.2 创建资源装配器
1.3 命名嵌套式的关联关系
2 启用数据后端服务
2.1 调整资源路径和关系名称
2.2 分页和排序
2.3 添加自定义的端点
2.4 为Spring Data 端点添加自定义的超链接
3 小结

## 第6章 消费REST 服务

0 使用RestTemplate 消费REST 端点
0.1 GET 资源
0.2 PUT 资源
0.3 DELETE 资源
0.4 POST 资源
1 使用Traverson 导航REST API
2 小结

## 第7章 发送异步消息

0 使用JMS 发送消息
0.1 搭建JMS 环境
0.2 使用JmsTemplate 发送消息
0.3 接收JMS 消息
1 使用RabbitMQ和AMQP
1.1 添加RabbitMQ到Spring 中
1.2 通过RabbitTemplate发送消息
1.3 接收来自RabbitMQ的消息
2 使用Kafka 的消息
2.1 为Spring 搭建支持Kafka消息的环境
2.2 通过KafkaTemplate 发送消息
2.3 编写Kafka 监听器
3 小结

## 第8章 Spring 集成

0 声明一个简单的集成流
0.1 使用XML 定义集成流
0.2 使用Java 配置集成流
0.3 使用Spring Integration的DSL 配置
1 Spring Integration 功能概览
1.1 消息通道
1.2 过滤器
1.3 转换器
1.4 路由器
1.5 切分器
1.6 服务激活器
1.7 网关
1.8 通道适配器
1.9 端点模块
2 创建Email 集成流
3 小结

# 第３部分 反应式Spring

## 第9章 理解反应式编程

0 反应式编程概览
1 初识Reactor
1.1 绘制反应式流图
1.2 添加Reactor 依赖
2 使用常见的反应式操作
2.1 创建反应式类型
2.2 组合反应式类型
2.3 转换和过滤反应式流
2.4 在反应式类型上执行逻辑操作
3 小结

## 第10章 开发反应式API

0 使用Spring WebFlux
0.1 Spring WebFlux 简介
0.2 编写反应式控制器
1 定义函数式请求处理器
2 测试反应式控制器
2.1 测试GET 请求
2.2 测试POST 请求
2.3 使用实时服务器进行测试
3 反应式消费REST API
3.1 获取资源
3.2 发送资源
3.3 删除资源
3.4 处理错误
3.5 交换请求
4 保护反应式Web API
4.1 配置反应式Web 应用的安全性
4.2 配置反应式的用户详情服务
5 小结

## 第11章 反应式持久化数据

0 理解Spring Data 的反应式概况
0.1 Spring Data 反应式本质论
0.2 反应式和非反应式类型之间的转换
0.3 开发反应式repository
1 使用反应式的Cassandra repository
1.1 启用Spring Data Cassandra
1.2 理解Cassandra 的数据模型
1.3 将领域对象映射为Cassandra持久化
1.4 编写反应式Cassandra repository
2 编写反应式的MongoDB repository
2.1 启用Spring Data MongoDB
2.2 将领域对象映射为 文档
2.3 编写反应式的MongoDB repository 接口
3 小结

# 第3 部分 云原生Spring

## 第12章 注册和发现服务

0 思考微服务
1 搭建服务注册中心
1.1 配置Eureka
1.2 扩展Eureka
2 注册和发现服务
2.1 配置Eureka 客户端属性
2.2 消费服务
3 小结

## 第13章 管理配置

0 共享配置
1 运行配置服务器
1.1 启用配置服务器
1.2 填充配置仓库
2 消费共享配置
3 提供特定应用和profile 的属性
3.1 提供特定应用的属性
3.2 提供来自profile 的属性
4 保持配置属性的私密性
4.1 在Git 中加密属性
4.2 在Vault 中存储私密信息
5 在运行时刷新配置属性
5.1 手动刷新配置属性
5.2 自动刷新配置属性
6 小结

## 第14章 处理失败和延迟

0 理解断路器模式
1 声明断路器
1.1 缓解延迟
1.2 管理断路器的阈值
2 监控失败
2.1 Hystrix dashboard 简介
2.2 理解Hystrix 的线程模型
3 聚合多个Hystrix 流
4 小结

# 第4 部分 部署Spring

## 第15章 使用Spring Boot Actuator

0 Actuator 概览
0.1 配置Actuator 的基础路径
0.2 启用和禁用Actuator端点
1 消费Actuator 端点
1.1 获取应用的基础信息
1.2 查看配置细节
1.3 查看应用的活动
1.4 获取应用的指标
2 自定义Actuator
2.1 为“/info”端点提供信息
2.2 实现自定义的健康指示器
2.3 注册自定义的指标
2.4 创建自定义的端点
3 保护Actuator
4 小结

## 第16章 管理Spring

0 使用Spring Boot Admin
0.1 创建Admin 服务器
0.2 注册Admin 客户端
1 探索Admin 服务器
1.1 查看应用基本的健康状况和信息
1.2 观察核心指标
1.3 探查环境属性
1.4 查看和设置日志级别
1.5 监控线程
1.6 跟踪HTTP 请求
2 保护Admin 服务器
2.1 为Admin 服务器启用登录功能
2.2 为Actuator 启用认证
3 小结

## 第17章 使用JMX 监控Spring

0 使用Actuator MBean
1 创建自己的MBean
2 发送通知
3 小结

## 第18章 部署Spring

0 权衡各种部署方案
1 构建和部署WAR文件
2 推送JAR 文件到Cloud Foundry 上
3 在Docker 容器中运行Spring Boot
4 以终为始
5 小结

# 附录 初始化Spring 应用

A.0 使用Spring Tool Suite 初始化项目
A.1 使用IntelliJ IDEA 初始化项目
A.2 使用NetBeans 初始化项目
A.3 在start.spring.io 中初始化项目
A.4 使用命令行初始化项目
A.4.1 curl 和Initializr API
A.4.2 Spring Boot 命令行接口
A.5 使用元框架创建Spring应用
A.6 构建和运行项目