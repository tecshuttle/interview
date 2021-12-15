Spring Boot教程

来源：http://www.ityouknow.com/spring-boot.html

# 入门篇

[Spring Boot(一)：入门篇](http://www.ityouknow.com/springboot/2016/01/06/spring-boot-quick-start.html)

# Web综合开发

[Spring Boot(二)：Web 综合开发](http://www.ityouknow.com/springboot/2016/02/03/spring-boot-web.html)

[Spring Boot(三)：Spring Boot 中 Redis 的使用](http://www.ityouknow.com/springboot/2016/03/06/spring-boot-redis.html)

# Thymeleaf 使用详解

[Spring Boot(四)：Thymeleaf 使用详解](http://www.ityouknow.com/springboot/2016/05/01/spring-boot-thymeleaf.html)





# Spring Boot Jpa 的使用

[Spring Boot(五)：Spring Boot Jpa 的使用](http://www.ityouknow.com/springboot/2016/08/20/spring-boot-jpa.html)

[Spring Boot(六)：如何优雅的使用 Mybatis](http://www.ityouknow.com/springboot/2016/11/06/spring-boot-mybatis.html)

[Spring Boot(七)：Mybatis 多数据源最简解决方案](http://www.ityouknow.com/springboot/2016/11/25/spring-boot-multi-mybatis.html)

[Spring Boot(八)：RabbitMQ 详解](http://www.ityouknow.com/springboot/2016/11/30/spring-boot-rabbitMQ.html)

[Spring Boot(九)：定时任务](http://www.ityouknow.com/springboot/2016/12/02/spring-boot-scheduler.html)

[Spring Boot (十)：邮件服务](http://www.ityouknow.com/springboot/2017/05/06/spring-boot-mail.html)

[Spring Boot(十一)：Spring Boot 中 MongoDB 的使用](http://www.ityouknow.com/springboot/2017/05/08/spring-boot-mongodb.html)

[Spring Boot(十二)：Spring Boot 如何测试打包部署](http://www.ityouknow.com/springboot/2017/05/09/spring-boot-deploy.html)

# Spring Boot 小技巧

[Spring Boot (十三)： Spring Boot 小技巧](http://www.ityouknow.com/springboot/2017/06/22/spring-boot-tips.html)

[Spring Boot (十四)： Spring Boot 整合 Shiro-登录认证和权限管理](http://www.ityouknow.com/springboot/2017/06/26/spring-boot-shiro.html)

# Spring Boot + Jpa + Thymeleaf 增删改查示例

[Spring Boot (十五)： Spring Boot + Jpa + Thymeleaf 增删改查示例](http://www.ityouknow.com/springboot/2017/09/23/spring-boot-jpa-thymeleaf-curd.html)

[Spring Boot(十六)：使用 Jenkins 部署 Spring Boot](http://www.ityouknow.com/springboot/2017/11/11/spring-boot-jenkins.html)

[Spring Boot(十七)：使用 Spring Boot 上传文件](http://www.ityouknow.com/springboot/2018/01/12/spring-boot-upload-file.html)

[Spring Boot(十八)：使用 Spring Boot 集成 FastDFS](http://www.ityouknow.com/springboot/2018/01/16/spring-boot-fastdfs.html)

[Spring Boot (十九)：使用 Spring Boot Actuator 监控应用](http://www.ityouknow.com/springboot/2018/02/06/spring-boot-actuator.html)

# Spring Boot 中如何解决跨域问题 ?

https://blog.csdn.net/weixin_44259720/article/details/104900530

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true) // 使用该参数有时会报错。
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .maxAge(3600);
    }
}
```



# 使用 spring-boot-admin 对 Spring Boot 服务进行监控

[Spring Boot(二十)：使用 spring-boot-admin 对 Spring Boot 服务进行监控](http://www.ityouknow.com/springboot/2018/02/11/spring-boot-admin.html)

# 如何在 Spring/Spring Boot 中做参数校验？

https://zhuanlan.zhihu.com/p/91823620



# Spring-boot-devtools开发时热部署

**POM**

```xml
<!-- 热部署模块 -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-devtools</artifactId>
  <optional>true</optional> <!-- 这个需要为 true 热部署才有效 -->
</dependency>
```

**application.yaml**

```yaml
devtools:
    restart:
      additional-paths: src/main/java
      exclude: static/**,public/**
```

**设置idea**

1. 找到idea的`Preferences -> Build, Execution, Deployment -> Compiler`，勾选`Build project automatically`。

2. 回到idea正常界面，Mac使用快捷键`shift+option+command+/`，window上的快捷键是`Shift+Ctrl+Alt+/`，打开Registry，勾选`compiler.automake.allow.when.app.running`

通过以上的设置就可以在不重启服务的情况下加载html，但如果修改java文件，服务在几秒后会自动重启。



结束

