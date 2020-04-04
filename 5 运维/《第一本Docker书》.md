# 《第一本Docker书》

## 第4章 使用Docker镜像和仓库

### 1. 什么是Docker镜像

### 2. 列出镜像

### 3. 拉取镜像

### 4. 查找镜像

### 5. 构建镜像

构建Docker镜像有以下两种方法：

- 使用`docker commit`命令；
- 使用`docker build`命令和`Dockerfile`文件。

不推荐使用`docker commit`命令，而应该使用更灵活、更强大的`Dockerfile`来构建Docker镜像。

#### `docker commit` 示例

```bash
#运行一个镜像
sudo docker run -i -t ubuntu /bin/bash  
#进行一些操作，例如安排apacke
root@4aab3ce3cb76:/# apt-get -yqq update
...
root@4aab3ce3cb76:/# apt-get -y install apache2
...
#退出docker，提交刚才对镜像所做的修改。
sudo docker commit 4aab3ce3cb76 jamtur01/apache2
```

#### 一个简单的`Dockerfile` 示例

```bash
# Version: 0.0.1
FROM ubuntu:14.04
MAINTAINER James Turnbull "james@exmple.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo 'Hi, I am in your container' > /usr/share/nginx/html/index.html

#对外公开端口
EXPOSE 80 
```

- Dockerfile由一系列指令和参数组成；
- 指令必须为大写字母：
  - CMD
  - ENTRYPOINT
  - ADD
  - COPY
  - VOLUME
  - WORKDIR
  - USER
  - ONBUILD
  - ENV
  - ARG
- 每条指命都会执行类似 `docker commit` 的操作，提交一个新的镜像。

执行构建命令：

```bash
sudo docker build -t="jamtur01/static_web"
...
Successfully built 22d47c8cb6e5
```

#### `Dockerfile` 和构建缓存

由于每一步的构建过程都会将结果提交为镜像，所以`Docker`的构建镜像过程就显得非常聪明。它会将之前的镜像层看做缓存。

为了尽可能命中缓存，我们一般在`Dockerfile`文件顶部使用相同的指令集模板。

手动禁用缓存：

```bash
sudo docker build --no-cache -t="jamtur01/static_web"
```

#### `ARG`指令

用户可以在构建期间对变量赋值，如果用户指定的参数没有在`Dockerfile`定义的话，将输出错误。

```bash
#Dockerfile
FROM ubuntu
ARG CONT_IMG_VER
RUN echo $CONT_IMG_VER

$ docker build --build-arg CONT_IMG_VER=v2.0.1 Dockerfile
```

### 6. 将镜像推送到Docker Hub

### 7. 删除镜像

### 8. 运行自己的Docker Registry

### 9. 其它可选Registery服务

### 10. 小结



我们要实现这一步的目的是利用docker缓存机制，在build代码过程中能利用缓存能快速构建，下载依赖这一步也会极大提高效率。



由docker构建时嵌入变量



Dockerfile:ARG GATEWAY



以下是别人项目嵌入变量的方法：

```
app/utils/etmNetwork.js:import { GATEWAY, PHOTO_ENDPOINT } from './serverUrl';
app/utils/etmNetwork.js:const ERP_URL = `${GATEWAY}/java-getway/apigateway/api.do?flagForAddress=rc_cms&api_path=/lola_cms_Interface`;
app/utils/serverUrl.js:const GATEWAY=process.env.GATEWAY||'https://java-getway.xxxx.com';
app/utils/serverUrl.js:  return `${GATEWAY}/java-getway/apigateway/api.do?api_path=${url}&flagForAddress=${site_code}`;
app/utils/serverUrl.js:  GATEWAY,
internals/webpack/webpack.base.babel.js:        GATEWAY: JSON.stringify(process.env.GATEWAY),
```



这是我们以前公司前端构建的一些变量参数

```
Dockerfile:ARG AD_ROOT

app/utils/serverUrl.js:const AD_ROOT = process.env.AD_ROOT||'http://ad-stg.xxx.cn:8083/';// 广告系统
app/utils/serverUrl.js:  AD_ROOT,
app/containers/TopicPage/index.js:import {AD_ROOT} from "../../utils/serverUrl";
app/containers/TopicPage/index.js:    const url = `${AD_ROOT}f_index?id=${id}&f=${window.location.origin}`;
internals/webpack/webpack.base.babel.js:        AD_ROOT: JSON.stringify(process.env.AD_ROOT),
```



```
Dockerfile:ARG AD_ENDPOINT

app/resourse/Product.js:import {AD_ENDPOINT, SITE_CODE} from '../utils/serverUrl';
app/utils/serverUrl.js:const AD_ENDPOINT = process.env.AD_ENDPOINT||'http://ad-api-stg.xxx.cn:9002/';
app/utils/serverUrl.js:  AD_ENDPOINT,
app/utils/service.js:import { setUrl, SITE_CODE, AD_ENDPOINT } from './serverUrl.js';
app/utils/service.js:                  return post(AD_ENDPOINT, { query, variables }).then(data=>data.data.pageList.list[0]);
app/utils/service.js:  return post(AD_ENDPOINT, { query, variables }).then((data) => data.data.footList[0]);
app/utils/service.js:  return post(AD_ENDPOINT, { query, variables }).then((data) => data.data.articleCategoryList);
app/utils/service.js:  return post(AD_ENDPOINT, params);
app/utils/service.js:  return post(AD_ENDPOINT, params);
internals/webpack/webpack.base.babel.js:        AD_ENDPOINT: JSON.stringify(process.env.AD_ENDPOINT),
```



