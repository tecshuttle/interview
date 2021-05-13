# Java语法

## 遍历List

https://blog.csdn.net/WZH577/article/details/90453762

```java
for (int i = 0; i < list.size(); i++) {
	Goods good = list.get(i);
	if (good.getGid==20) {
		list.remove(i);
		break;
	}
}
```

## 字符串和List集合互相转换

```java
//拆分
public static List convertStringToList(String str,String mark){
  String[] strArray = str.split(mark);
  List list=Arrays.asList(strArray);
  return list;
}

//合并
public static String convertListToString(List list,String mark){
  return  StringUtils.join(list,";").toString();
}
```

# 数据库操作

官网项目

```java
List<ProductDetailsEntity> findAllByShowHeadAndLableLifeStageAndStatus(Integer showhead, Integer lifeStage , Integer status);

@Query(value = "select * from t_product_details where status = 1 and lable_life_stage like :life_stage", nativeQuery = true)
List<ProductDetailsEntity> findAllShowHeadByLiftStage(String life_stage);
```



# 原理

## SOA

SOA是一种粗粒度、松耦合服务架构，服务之间通过简单、精确定义接口进行通讯，不涉及底层编程接口和通讯模型。

SOA可以看作是B/S模型、XML（标准通用标记语言的子集）/Web Service技术之后的自然延伸。

## IOC

• IOC，就是控制反转。在spring中，对象的属性是由对象自己创建的，就是正向流程；如果属性不是对象创建，而是由spring来自动进行装配，就是控制反转。这里的DI也就是依赖注入，就是实现控制反转的方式。

• spring进行IOC实现时使用的有两个概念：context上下文和bean。所有被spring管理的、由spring创建的、用于依赖注入的对象，就叫做一个bean。Spring创建并完成依赖注入后，所有bean统一放在一个叫做context的上下文中进行管理。

[java IOC(控制反转) ](https://www.jianshu.com/p/c354c439facd)

[浅析控制反转 ](https://zhuanlan.zhihu.com/p/60995312)

## AOP

• AOP就是面向切面编程。如右面的图，一般程序执行流程是从controller层调用service层、然后service层调用DAO层访问数据，最后在逐层返回结果。

• 这个是图中向下箭头所示的按程序执行顺序的纵向处理。但是，一个系统中会有多个不同的服务，例如用户服务、商品信息服务等等，每个服务的controller层都需要验证参数，都需要处理异常，如果按照图中红色的部分，对不同服务的纵向处理流程进行横切，在每个切面上完成通用的功能，例如身份认证、验证参数、处理异常等等、这样就不用在每个服务中都写相同的逻辑了，这就是AOP思想解决的问题。

• AOP以功能进行划分，对服务顺序执行流程中的不同位置进行横切，完成各服务共同需要实现的功能。

[什么是面向切面编程AOP？ - 欲眼熊猫的回答 - 知乎](https://www.zhihu.com/question/24863332/answer/48376158)

[AOP 面向切面编程](https://www.jianshu.com/p/f1770b9dce27)

[Spring之AOP原理及多种实现方式]( https://blog.csdn.net/lgl782519197/article/details/109596304)

## DAO

DAO(Data Access Object) 数据访问对象。

## CAP理论

C：数据一致性(consistency)：所有节点拥有数据的最新版本

A：可用性(availability)：数据具备高可用性

P：分区容错性(partition-tolerance)：容忍网络出现分区，分区之间网络不可达。

## POJO

POJO（Plain Ordinary Java Object）简单的Java对象，实际就是普通JavaBeans，是为了避免和EJB混淆所创造的简称。

一个简单的Java类，这个类没有实现/继承任何特殊的java接口或者类，不遵循任何主要java模型，约定或者框架的java对象。在理想情况下，POJO不应该有注解。

## JavaBean

JavaBean是可序列化的，实现了serializable接口

具有一个无参构造器

有按照命名规范的set和gett，is（可以用于访问布尔类型的属性）方法

## 资料

[java注解-最通俗易懂的讲解]( https://zhuanlan.zhihu.com/p/37701743)

# DDD

[以理性不断的崇敬 - 对 DDD 之后复杂业务软件系统设计的思考]( https://xie.infoq.cn/article/6938f09ca191361f383615890)

[基于 DDD 思想的酒店报价重构实践]( https://www.infoq.cn/article/VivlEAARr5gCOV3iCcUe)

# Spring

[使用Activiti和Spring集成实现BPEL和BPMN ](https://www.jdon.com/springboot/spring-integration.html)

[spring-integration初探 ](https://blog.csdn.net/qq_27808011/article/details/80108622)

[Spring Integration 中文手册 (1) ](https://my.oschina.net/yumg/blog/387701)

[Spring integration 基本概念 ](https://www.jianshu.com/p/bf1643539f99)

# QueryDSL

关于 QueryDSL 配置和使用（详细）https://blog.csdn.net/qq_36537546/article/details/95315040

虽然说 QueryDSL 也可以做增删改查，但是个人不建议使用（仅限单表），因为单表操作，其实使用 Jpa 就可以了，包括 Jpa 的动态查询，都是很适合单表的，不管是代码量还是效率个人感觉都比 QueryDSL 要快，尤其是代码量，少了不止一点半点，但是连表操作的话，就比较偏向于 QueryDSL 了，特别好用！！下边是连表操作的 QueryDSL ，另外说一下上边只是演示一下 QueryDSL 的使用方法，单表还是建议用 Jpa 比较快！

```xml
<!-- QueryDSL 相关依赖 -->
<dependency>
  <groupId>com.querydsl</groupId>
  <artifactId>querydsl-jpa</artifactId>
</dependency>
<dependency>
  <groupId>com.querydsl</groupId>
  <artifactId>querydsl-apt</artifactId>
  <scope>provided</scope>
</dependency>

<!-- lombok 相关依赖 -->
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.16.10</version>
  <scope>provided</scope>
</dependency>
```

Ps：lombok 可以已注解的方式来对代码进行简化，省去了 get 和 set 方法，至于怎么使用 lombok ，先看本文示例吧

采用JPA的方式确实能减少很多工作，并且效率很高，QueryDSL更是可以为JPA插上翅膀，方便很多工作。

QueryDSL目前只支持：Update,Delete,Select操作，不支持Save操作，但是看官方文档有insert操作，这个目前没去试验！

# 批处理

[为什么阿里云要做流批一体？]( https://www.infoq.cn/article/YKKZj6IjzdRzdLLs83Kg)

[40亿条/秒！Flink流批一体在阿里双11首次落地的背后 ](https://www.infoq.cn/article/f5A69vWZauqFfgCWM9ZL)

# 消息

[RabbitMQ的五种模式和四种交换机]( https://blog.csdn.net/qq_16979575/article/details/103545157)

# 微服务

[爱奇艺微服务标准技术架构实践]( https://www.infoq.cn/article/AJj3lKQyaKVeA08Bgj9e)

# 资料

[RestTemplate实践]( https://www.jianshu.com/p/0fd5f3f64137)

[设计数据密集型应用 ](https://github.com/Vonng/ddia)

[OLTP与OLAP ](https://www.jianshu.com/p/3c5ecfbc28d1)

[欠下“技术债”，谁负责？]( https://www.infoq.cn/article/G9hyluiAvCiAhX11Badv)

[首席技术官：你的同事尊重你吗？]( https://www.infoq.cn/article/gwcL2psAF0WzhViD8xGw)