## 在Ubuntu上安装kubernetes

Ubuntu缺省没有安装SSH Server，使用以下命令安装：

```bash
sudo apt-get install openssh-server
```

kubernetes.io 官方推荐的 kubeadm 工具安装 kubernetes 集群。

http://docs.kubernetes.org.cn/457.html

```bash
# 一般因为dpkg版本低，需要更新，否则出现依赖库问题。
sudo apt-get update && sudo apt-get install dpkg
apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
```

## 使用Minikube在Kubernetes中运行应用

http://docs.kubernetes.org.cn/126.html



## 使用kubeadm创建Kubernetes集群



## Kubernetes和Spring Cloud哪个部署微服务更好？

https://www.kubernetes.org.cn/1057.html

## Tomcat、Jetty、Undertow、Netty 等容器的区别

https://hacpai.com/article/1575252759539

- undertow,jetty 和 Tomcat 可以说是 javaweb 项目当下最火的三款服务器，Tomcat 是 apache 下的一款重量级的服务器，不用多说历史悠久，经得起实践的考验。

- 然而：当下微服务兴起，Spring boot ，Spring cloud 越来越热的情况下，选择一款轻量级而性能优越的服务器是必要的选择。Spring boot 完美集成了 Tomcat，Jetty 和 undertow，本文将通过对 Jetty 和 undertow 服务器的分析以及测试，来比较两款服务器的性能如何。

- 值得一提的是 Jetty 和 undertow 都是基于 NIO 实现的高并发轻量级的服务器，支持 servlet3.1 和 WebSocket。

## netty和jetty

**Jetty**是一个Web服务器（HTTP），与Tomcat等类似，但比大多数servlet容器更轻。这更接近传统的Java服务器应用程序（servlet，WAR文件）的方式。像Netty一样，它足够轻量级以嵌入到Java应用程序中。

>  **Netty**是一款**NIO客户端**服务器框架，可以快速轻松地开发协议服务器和客户端等网络应用程序。它极大地简化并简化了TCP和UDP套接字服务器等网络编程。因此Netty专注于帮助编写NIO /非阻塞异步网络程序。



**Jetty**是一个轻量级的servlet容器，易于嵌入到Java应用程序中，还有一个易于使用的jetty客户端。

**Netty**是一个异步事件驱动的网络应用框架。例如，您可以在Netty框架的帮助下编写自己的servlet容器或http客户端应用程序。

忘了提及Jetty 8和Apache Tomcat 7支持servlet 3.0规范，但netty不支持。因为它不是一个servlet容器。



### 一、网络通信框架和web容器的区别

网络通信框架：netty、mina、grizzly

web容器：tomcat、jetty

web服务器：apache、nginx

### 二、概念区别

Netty针对Socket，Jetty针对Servlet

### 三、应用范围上：

http服务用jetty、即时通信用netty



