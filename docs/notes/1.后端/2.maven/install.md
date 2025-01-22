---
title: install
createTime: 2025/01/22 08:43:24
permalink: /article/olrlsq4y/
---

下载地址：https://maven.apache.org/download.cgi

1.解压apache-maven-3.9.9-bin.zip

2.配置本地仓库：修改`conf/settings.xml中的<localRepository>`为一个指定目录

```xml
<localRepository>/path/to/local/repo</localRepository>
```

3.配置阿里云私服：修改`conf/settings.xml中的<mirrors>`标签，为其添加如下子标签

```xml
    <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
```

4.配置环境变量：MAVEN_HOME为maven的解压目录，并将其bin目录加入PATH环境变量

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
  <localRepository>D:\Dev\apache-maven\repo</localRepository>
  <mirrors>
    <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
  </mirrors>
</settings>
```



```bash
src
--main-------------->实际项目资源
----java-----------—>java源代码目录
----resources------->配置文件目录
--test--------------> 测试项目资源
----java
----resources
--pom.xml----------->项目配置文件
```

设置maven

![img](/docs/1734790846563-808fb174-548a-4a6d-aeca-0a291be46cd2.png)

编译器版本

![img](/docs/1734790896576-733cc720-dde1-4075-ae39-5f6b36cc8c10.png)

设置编译语言版本

![img](/docs/1734790968483-d39e964d-28ec-4f90-a876-4e2b8015e66a.png)
