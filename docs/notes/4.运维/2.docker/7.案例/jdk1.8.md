---
title: jdk1.8
createTime: 2025/01/17 10:13:09
permalink: /article/hzjti5tw/
---
安装jdk1.8

```shell
# 初始镜像
FROM ubuntu:16.04
# 配置环境变量，JDK安装目录
ENV JAVA_DIR=/usr/local
# 拷贝jdk
COPY ./jdk8.tar.gz $JAVA_DIR/
# 项目包
COPY demo.jar /tmp/app.jar
# 安装jdk
RUN cd $JAVA_DIR \ && tar -xf ./jdk8.tar.gz \ && mv ./jdk1.8.0 ./java8
# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_DIR/bin
# 入口，java的启动命令
ENTRYPOINT  ["java","-jar","/app.jar"]
```