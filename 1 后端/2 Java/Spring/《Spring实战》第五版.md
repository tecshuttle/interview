## 第1部分 Spring基础

### 第1章 Spring起步

1 什么是Spring
2 初始化Spring应用
2.1 使用Spring Tool Suite初始化Spring项目
2.2 检查Spring项目的结构
3 编写Spring应用
3.1 处理Web请求
3.2 定义视图
3.3 测试控制器
3.4 构建和运行应用
3.5 了解Spring Boot DevTools
3.6 回顾一下
4 俯瞰Spring风景线
4.1 Spring核心框架
4.2 Spring Boot
4.3 Spring Data
4.4 Spring Security
4.5 Spring Integration 和Spring Batch
4.6 Spring Cloud
5 小结

### 第2章 开发Web应用

1 展现信息
1.1 构建领域类
1.2 创建控制器类
1.3 设计视图
2 处理表单提交
3 校验表单输入
3.1 声明校验规则
3.2 在表单绑定的时候执行校验
3.3 展现校验错误
4 使用视图控制器
5 选择视图模板库
6 小结

### 第3章 使用数据

#### 使用JDBC读取和写入数据

1 调整领域对象以适应持久化
2 使用JdbcTemplate
3 定义模式和预加载数据
4 插入数据

#### 使用Spring Data JPA持久化数据

1 添加Spring Data JPA到项目中
2 将领域对象标注为实体
3 声明JPA repository
4 自定义JPA repository

### 第4章 保护Spring

1 启用Spring Security
2 配置Spring Security
2.1 基于内存的用户存储
2.2 基于JDBC的用户存储
2.3 以LDAP作为后端的用户存储
2.4 自定义用户认证
3 保护Web请求
3.1 保护请求
3.2 创建自定义的登录页
3.3 退出
3.4 防止跨站请求伪造
4 了解用户是谁
5 小结

### 第5章 使用配置属性

1 细粒度的自动配置
1.1 理解Spring的环境抽象
1.2 配置数据源
1.3 配置嵌入式服务器
1.4 配置日志
1.5 使用特定的属性值
2 创建自己的配置属性
2.1 定义配置属性的持有者
2.2 声明配置属性元数据
3 使用profile进行配置
3.1 定义特定profile的属性
3.2 激活profile
3.3 使用profile条件化地创建bean
4 小结

## 第2部分 Spring集成

### 第6章 创建REST服务

1 编写RESTful控制器
1.1 从服务器中检索数据
1.2 发送数据到服务器端
1.3 在服务器上更新数据
1.4 删除服务器上的数据
2 启用超媒体
2.1 添加超链接
2.2 创建资源装配器
2.3 命名嵌套式的关联关系
3 启用数据后端服务
3.1 调整资源路径和关系名称
3.2 分页和排序
3.3 添加自定义的端点
3.4 为Spring Data端点添加自定义的超链接
4 小结

### 第7章 消费REST服务

1 使用RestTemplate消费REST端点
1.1 GET资源
1.2 PUT资源
1.3 DELETE资源
1.4 POST资源
2 使用Traverson导航REST API
3 小结

### 第8章 发送异步消息

1 使用JMS发送消息
1.1 搭建JMS环境
1.2 使用JmsTemplate发送消息
1.3 接收JMS消息
2 使用RabbitMQ和AMQP
2.1 添加RabbitMQ到Spring中
2.2 通过RabbitTemplate发送消息
2.3 接收来自RabbitMQ的消息
3 使用Kafka的消息
3.1 为Spring搭建支持Kafka消息的环境
3.2 通过KafkaTemplate发送消息
3.3 编写Kafka监听器
4 小结

### 第9章 Spring集成

1 声明一个简单的集成流
1.1 使用XML定义集成流
1.2 使用Java配置集成流
1.3 使用Spring Integration的DSL配置
2 Spring Integration功能概览
2.1 消息通道
2.2 过滤器
2.3 转换器
2.4 路由器
2.5 切分器
2.6 服务激活器
2.7 网关
2.8 通道适配器
2.9 端点模块
3 创建Email集成流
4 小结

## 第3部分 反应式Spring

### 第10 章理解反应式编程

1 反应式编程概览
2 初识Reactor
2.1 绘制反应式流图
2.2 添加Reactor依赖
3 使用常见的反应式操作
3.1 创建反应式类型
3.2 组合反应式类型
3.3 转换和过滤反应式流
3.4 在反应式类型上执行逻辑操作
4 小结

### 第11章 开发反应式API

1 使用Spring WebFlux
1.1 Spring WebFlux简介
1.2 编写反应式控制器
2 定义函数式请求处理器
3 测试反应式控制器
3.1 测试GET请求
3.2 测试POST请求
3.3 使用实时服务器进行测试
4 反应式消费REST API
4.1 获取资源
4.2 发送资源
4.3 删除资源
4.4 处理错误
4.5 交换请求
5 保护反应式Web API
5.1 配置反应式Web应用的安全性
5.2 配置反应式的用户详情服务
6 小结

### 第12章 反应式持久化数据

1 理解Spring Data的反应式概况
1.1 Spring Data反应式本质论
1.2 反应式和非反应式类型之间的转换
1.3 开发反应式repository
2 使用反应式的Cassandra repository
2.1 启用Spring Data Cassandra
2.2 理解Cassandra的数据模型
2.3 将领域对象映射为Cassandra持久化
2.4 编写反应式Cassandra repository
3 编写反应式的MongoDB repository
3.1 启用Spring Data MongoDB
3.2 将领域对象映射为文档
3.3 编写反应式的MongoDB repository接口
4 小结

## 第4部分 云原生Spring

### 第13章 注册和发现服务

1 思考微服务
2 搭建服务注册中心
2.1 配置Eureka
2.2 扩展Eureka
3 注册和发现服务
3.1 配置Eureka客户端属性
3.2 消费服务
4 小结

### 第14章 管理配置

1 共享配置
2 运行配置服务器
2.1 启用配置服务器
2.2 填充配置仓库
3 消费共享配置
4 提供特定应用和profile的属性
4.1 提供特定应用的属性
4.2 提供来自profile的属性
5 保持配置属性的私密性
5.1 在Git中加密属性
5.2 在Vault中存储私密信息
6 在运行时刷新配置属性
6.1 手动刷新配置属性
6.2 自动刷新配置属性
7 小结

### 第15章 处理失败和延迟

1 理解断路器模式
2 声明断路器
2.1 缓解延迟
2.2 管理断路器的阈值
3 监控失败
3.1 Hystrix dashboard简介
3.2 理解Hystrix的线程模型
4 聚合多个Hystrix流
5 小结

## 第5部分 部署Spring

### 第16章 使用Spring Boot Actuator

1 Actuator概览
1.1 配置Actuator的基础路径
1.2 启用和禁用Actuator端点
2 消费Actuator端点
2.1 获取应用的基础信息
2.2 查看配置细节
2.3 查看应用的活动
2.4 获取应用的指标
3 自定义Actuator
3.1 为“/info”端点提供信息
3.2 实现自定义的健康指示器
3.3 注册自定义的指标
3.4 创建自定义的端点
4 保护Actuator
5 小结

### 第17章 管理Spring

1 使用Spring Boot Admin
1.1 创建Admin服务器
1.2 注册Admin客户端
2 探索Admin服务器
2.1 查看应用基本的健康状况和信息
2.2 观察核心指标
2.3 探查环境属性
2.4 查看和设置日志级别
2.5 监控线程
2.6 跟踪HTTP请求
3 保护Admin服务器
3.1 为Admin服务器启用登录功能
3.2 为Actuator启用认证
4 小结

### 第18章 使用JMX监控Spring

1 使用Actuator MBean
2 创建自己的MBean
3 发送通知
4 小结

### 第19章 部署Spring

1 权衡各种部署方案
2 构建和部署WAR文件
3 推送JAR文件到Cloud Foundry上
4 在Docker容器中运行Spring Boot
5 以终为始
6 小结

## 附录 初始化Spring应用

1 使用Spring Tool Suite初始化项目
2 使用IntelliJ IDEA初始化项目
3 使用NetBeans初始化项目
4 在start.spring.io中初始化项目
5 使用命令行初始化项目
5.1 curl 和Initializr API
5.2 Spring Boot命令行接口
6 使用元框架创建Spring应用
7 构建和运行项目
