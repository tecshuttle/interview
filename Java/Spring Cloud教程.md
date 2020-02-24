Spring Cloud教程

来源：https://github.com/ityouknow/spring-cloud-examples

# 一、大话Spring Cloud

[springcloud(一)：大话Spring Cloud](http://www.ityouknow.com/springcloud/2017/05/01/simple-springcloud.html)

# 二、注册中心

## Eureka

[springcloud(二)：注册中心Eureka](http://www.ityouknow.com/springcloud/2017/05/10/springcloud-eureka.html)

[springcloud(三)：服务提供与调用](http://www.ityouknow.com/springcloud/2017/05/12/eureka-provider-constomer.html)

参考资料

- 使用spring cloud搭建微服务框架，整理学习资料 https://www.cnblogs.com/ztfjs/p/9230374.html
- 解决maven 在intellij IDEA 下载依赖包速度慢的问题 https://www.jianshu.com/p/63a593700ebc
- SpringBoot 在IDEA中实现热部署 https://www.jianshu.com/p/f658fed35786

## Consul

[springcloud(十三)：Spring Cloud Consul 使用详解](http://www.ityouknow.com/springcloud/2018/07/20/spring-cloud-consul.html)

Consul 使用 Go 语言编写，因此具有天然可移植性(支持Linux、windows和Mac OS X)；安装包仅包含一个可执行文件，方便部署，与 Docker 等轻量级容器可无缝配合。

## Consul VS Eureka

Eureka 提供了一个弱一致的服务视图，尽可能的提供服务可用性。这个简化的模型允许简单的群集管理和高可扩展性。

Consul 提供强大的一致性保证，因为服务器使用 Raft 协议复制状态 。Consul 支持丰富的健康检查，包括 TCP，HTTP，Nagios / Sensu 兼容脚本或基于 Eureka 的 TTL。

Consul 强一致性(C)带来的是：

> 服务注册相比 Eureka 会稍慢一些。因为 Consul 的 raft 协议要求必须过半数的节点都写入成功才认为注册成功 Leader 挂掉时，重新选举期间整个 Consul 不可用。保证了强一致性但牺牲了可用性。

Eureka 保证高可用(A)和最终一致性：

> 服务注册相对要快，因为不需要等注册信息 replicate 到其它节点，也不保证注册信息是否 replicate 成功 当数据出现不一致时，虽然 A, B 上的注册信息不完全相同，但每个 Eureka 节点依然能够正常对外提供服务，这会出现查询服务信息时如果请求 A 查不到，但请求 B 就能查到。如此保证了可用性但牺牲了一致性。

其它方面，eureka 就是个 servlet 程序，跑在 servlet 容器中; Consul 则是 go 编写而成。

# 三、配置中心

[springcloud(六)：配置中心git示例](http://www.ityouknow.com/springcloud/2017/05/22/springcloud-config-git.html)

[springcloud(七)：配置中心svn示例和refresh](http://www.ityouknow.com/springcloud/2017/05/23/springcloud-config-svn-refresh.html)

[springcloud(八)：配置中心服务化和高可用](http://www.ityouknow.com/springcloud/2017/05/25/springcloud-config-eureka.html)

[springcloud(九)：配置中心和消息总线（配置中心终结版）](http://www.ityouknow.com/springcloud/2017/05/26/springcloud-config-eureka-bus.html)

## 配置中心提供的核心功能应该有什么？

- 提供服务端和客户端支持
- 集中管理各环境的配置文件
- 配置文件修改之后，可以快速的生效
- 可以进行版本管理
- 支持大的并发查询
- 支持各种语言

Spring Cloud Config可以完美的支持以上所有的需求。

## Spring Cloud Config

- 它包含了Client和Server两个部分，server提供配置文件的存储、以接口的形式将配置文件的内容提供出去。

- client通过接口获取数据、并依据此数据初始化自己的应用。

### server 端

```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

Spring cloud使用git或svn存放配置文件，默认情况下使用git。

如果直接查看配置文件中的配置信息可访问：`http://localhost:8001/neo-config-dev.properties`

仓库中的配置文件会被转换成web接口，访问可以参照以下的规则：

```http
/{application}/{profile}[/{label}]
/{application}-{profile}.yml
/{label}/{application}-{profile}.yml
/{application}-{profile}.properties
/{label}/{application}-{profile}.properties
```

以neo-config-dev.properties为例子，它的application是neo-config，profile是dev。client会根据填写的参数来选择读取对应的配置。

### client端

```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

需要配置两个文件：

application.properties

```properties
spring.application.name=spring-cloud-config-client  
server.port=8002
```

bootstrap.properties

```properties
spring.cloud.config.name=neo-config             #对应{application}部分
spring.cloud.config.profile=dev                 #对应{profile}部分        
spring.cloud.config.uri=http://localhost:8001/  #配置中心的具体地址
spring.cloud.config.label=master                #对应git的分支。
```

启动类添加`@EnableConfigServer`，激活对配置中心的支持。

```java
@SpringBootApplication
@EnableConfigServer
public class ConfigClientApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConfigClientApplication.class, args);
	}
}
```

### refresh

当重新修改配置文件提交后，客户端获取的仍然是修改前的信息。客户端如何去主动获取新的配置信息呢，springcloud已经给我们提供了解决方案，每个客户端通过POST方法触发各自的`/refresh`。

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

`spring-boot-starter-actuator`是一套监控的功能，可以监控程序在运行时状态，其中就包括`/refresh`的功能。

在加载变量的类上面添加`@RefreshScope`，以post请求的方式来访问`http://localhost:8002/refresh` 就会更新此类下面的变量值。

```java
@RestController
@RefreshScope 
class HelloController {
    @Value("${neo.hello}")
    private String hello;

    @RequestMapping("/hello")
    public String from() {
        return this.hello;
    }
}
```

### webhook

每次手动刷新客户端也很麻烦，有没有什么办法只要提交代码就自动调用客户端来更新呢，github的webhook是一个好的办法。

但是当客户端越来越多的时候hook支持的已经不够优雅，另外每次增加客户端都需要改动hook也是不现实的。其实Spring Cloud给了我们更好解决方案——消息总线。

### 高可用

我们只需要将server端当做一个服务注册到eureka中，client端去eureka中去获取配置中心server端的服务既可。

![](http://favorites.ren/assets/images/2017/springcloud/eureka-config03.jpg)

## Spring Cloud Bus消息总线

Spring cloud bus通过轻量消息代理连接各个分布的节点。这会用在广播状态的变化（例如配置变化）或者其他的消息指令。其实本质是利用了MQ的广播机制在分布式的系统中传播消息，目前常用的有Kafka和RabbitMQ。

利用Spring Cloud Bus做配置更新的步骤（版本1）：

1. 提交代码触发post给客户端A发送bus/refresh
2. 客户端A接收到请求从Server端更新配置并且发送给Spring Cloud Bus
3. Spring Cloud bus接到消息并通知给其它客户端
4. 其它客户端接收到通知，请求Server端获取最新配置
5. 全部客户端均获取到最新的配置

利用Spring Cloud Bus做配置更新的步骤（版本2）：

1、提交代码触发post请求给bus/refresh

2、server端接收到请求并发送给Spring Cloud Bus

3、Spring Cloud bus接到消息并通知给其它客户端

4、其它客户端接收到通知，请求Server端获取最新配置

5、全部客户端均获取到最新的配置

### 局部刷新

某些场景下（例如灰度发布），我们可能只想刷新部分微服务的配置，此时可通过`/bus/refresh`端点的destination参数来定位要刷新的应用程序。

例如：`/bus/refresh?destination=customers:8000`，这样消息总线上的微服务实例就会根据destination参数的值来判断是否需要要刷新。其中，`customers:8000`指的是各个微服务的ApplicationContext ID。

### `/bus/refresh` BUG

`/bus/refresh` 有一个很严重的BUG，一直没有解决：对客户端执行`/bus/refresh`之后，挂到总线的上的客户端都会从Eureka注册中心撤销登记；如果对server端执行`/bus/refresh`,server端也会从Eureka注册中心撤销登记。再用白话解释一下，就是本来人家在Eureka注册中心注册的好好的，只要你对着它执行一次`/bus/refresh`，立刻就会从Euraka中挂掉。

# 三、服务网关

## 熔断器Hystrix

[springcloud(四)：熔断器Hystrix](http://www.ityouknow.com/springcloud/2017/05/16/springcloud-hystrix.html)

[springcloud(五)：熔断监控Hystrix Dashboard和Turbine](http://www.ityouknow.com/springcloud/2017/05/18/hystrix-dashboard-turbine.html)

### 雪崩效应

在微服务架构中通常会有多个服务层调用，基础服务的故障可能会导致级联故障，进而造成整个系统不可用的情况，这种现象被称为服务雪崩效应。

### Hystrix特性

#### 1. 断路器机制

断路器很好理解，当Hystrix Command请求后端服务失败数量超过一定比例（**默认50%**），断路器会切换到开路状态(Open)。这时所有请求会直接失败而不会发送到后端服务。

断路器保持在开路状态一段时间后（**默认5秒**）， 自动切换到半开路状态(HALF-OPEN)。这时会判断下一次请求的返回情况，如果请求成功，断路器切回闭路状态(CLOSED)，否则重新切换到开路状态(OPEN)。

Hystrix的断路器就像我们家庭电路中的保险丝, 一旦后端服务不可用，断路器会直接切断请求链，避免发送大量无效请求影响系统吞吐量，并且断路器有自我检测并恢复的能力。

#### 2. Fallback

Fallback相当于是降级操作. 对于查询操作, 我们可以实现一个fallback方法, 当请求后端服务出现异常的时候, 可以使用fallback方法返回的值. fallback方法的返回值一般是设置的默认值或者来自缓存。

#### 3. 资源隔离

在Hystrix中, 主要通过线程池来实现资源隔离。

通常在使用的时候我们会根据调用的远程服务划分出多个线程池. 例如调用产品服务的Command放入A线程池, 调用账户服务的Command放入B线程池. 这样做的主要优点是运行环境被隔离开了. 这样就算调用服务的代码存在bug或者由于其他原因导致自己所在线程池被耗尽时, 不会对系统的其他服务造成影响. 但是带来的代价就是维护多个线程池会对系统带来额外的性能开销。

如果是对性能有严格要求而且确信自己调用服务的客户端代码不会出问题的话，可以使用Hystrix的信号模式(Semaphores)来隔离资源。

### Feign Hystrix

因为熔断只是作用在服务调用这一端，因此我们根据上一篇的示例代码只需要改动spring-cloud-consumer项目相关代码就可以。因为，Feign中已经依赖了Hystrix所以在maven配置上不用做任何改动。

### 熔断监控Hystrix Dashboard和Turbine



## 服务网关zuul

Eureka用于服务的注册于发现，Feign支持服务的调用以及均衡负载，Hystrix处理服务的熔断防止故障扩散，Spring Cloud Config服务集群配置中心，似乎一个微服务框架已经完成了。

我们还是少考虑了一个问题，外部的应用如何来访问内部各种各样的微服务呢？在微服务架构中，后端服务往往不直接开放给调用端，而是通过一个API网关根据请求的url，路由到相应的服务。当添加API网关后，在第三方调用端和服务提供方之间就创建了一面墙，这面墙直接与调用方通信进行权限控制，后将请求均衡分发给后台服务端。

### 为什么需要API Gateway？

1. 简化客户端调用复杂度
2. 数据裁剪以及聚合
3. 多渠道支持
4. 遗留系统的微服务化改造

- [springcloud(十一)：服务网关Zuul高级篇](http://www.ityouknow.com/springcloud/2018/01/20/spring-cloud-zuul.html)

## 服务网关 Spring Cloud GateWay 

[springcloud(十五)：服务网关 Spring Cloud GateWay 初级篇](http://www.ityouknow.com/springcloud/2018/12/12/spring-cloud-gateway-start.html)

[springcloud(十六)：服务网关 Spring Cloud GateWay 服务化和过滤器](http://www.ityouknow.com/springcloud/2019/01/19/spring-cloud-gateway-service.html)

[springcloud(十七)：服务网关 Spring Cloud GateWay 熔断、限流、重试](http://www.ityouknow.com/springcloud/2019/01/26/spring-cloud-gateway-limit.html)

Spring Cloud Gateway 作为 Spring Cloud 生态系统中的网关，目标是替代 Netflix Zuul，其不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。

### 特征

- 基于 Spring Framework 5，Project Reactor 和 Spring Boot 2.0
- 动态路由
- Predicates 和 Filters 作用于特定路由
- 集成 Hystrix 断路器
- 集成 Spring Cloud DiscoveryClient
- 易于编写的 Predicates 和 Filters
- 限流
- 路径重写

### 服务化和过滤器

### 熔断、限流、重试

# 四、使用Spring Cloud Sleuth和Zipkin进行分布式链路跟踪

随着业务发展，系统拆分导致系统调用链路愈发复杂一个前端请求可能最终需要调用很多次后端服务才能完成，当整个请求变慢或不可用时，我们是无法得知该请求是由某个或某些后端服务引起的，这时就需要解决如何快读定位服务故障点，以对症下药。于是就有了分布式系统调用跟踪的诞生。

现今业界分布式服务跟踪的理论基础主要来自于 Google 的一篇论文[《Dapper, a Large-Scale Distributed Systems Tracing Infrastructure》](https://research.google.com/pubs/pub36356.html)，使用最为广泛的开源实现是 Twitter 的 Zipkin。

## Spring Cloud Sleuth

一般的，一个分布式服务跟踪系统，主要有三部分：数据收集、数据存储和数据展示。

spring cloud sleuth可以结合zipkin，将信息发送到zipkin，利用zipkin的存储来存储信息，利用zipkin ui来展示数据。

## ZipKin

Zipkin 是一个开放源代码分布式的跟踪系统，由Twitter公司开源，它致力于收集服务的定时数据，以解决微服务架构中的延迟问题，包括数据的收集、存储、查找和展现。

每个服务向zipkin报告计时数据，zipkin会根据调用关系通过Zipkin UI生成依赖关系图，显示了多少跟踪请求通过每个服务，该系统让开发者可通过一个 Web 前端轻松的收集和分析数据，例如用户每次请求服务的处理时间等，可方便的监测系统中存在的瓶颈。

Zipkin提供了可插拔数据存储方式：In-Memory、MySql、Cassandra以及Elasticsearch。接下来的测试为方便直接采用In-Memory方式进行存储，生产推荐Elasticsearch。

## zipkin,pinpoint和skywalking对比

https://www.jianshu.com/p/4fa81b661f55

skywalking的探针对吞吐量的影响最小，zipkin的吞吐量居中。pinpoint的探针对吞吐量的影响较为明显，在500并发用户时，测试服务的吞吐量从1385降低到774，影响很大。然后再看下CPU和memory的影响，在内部服务器进行的压测，对CPU和memory的影响都差不多在10%之内。

## 调用链选型之Zipkin、Pinpoint、SkyWalking、CAT

https://www.jianshu.com/p/0fbbf99a236e

# 五、Spring Cloud 开源软件都有哪些

[Spring Cloud (十四)：Spring Cloud 开源软件都有哪些？](http://www.ityouknow.com/springcloud/2018/08/06/spring-cloud-open-source.html)

1. awesome-spring-cloud
2. PiggyMetrics
3. spaascloud-master
4. Cloud-Admin
5. spring-cloud-rest-tcc
6. pig
7. xxpay-master
8. spring-boot-cloud
9. FCat
10. spring-cloud-examples

结束