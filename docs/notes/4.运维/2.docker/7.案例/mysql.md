---
title: mysql
createTime: 2025/01/17 10:12:16
permalink: /article/2xl3vhx5/
---
## 

```shell
docker run --name mysql -d 
	-p 3306:3306
  -e TZ=Asia/Shanghai	# 时区
  -e MYSQL_ROOT_PASSWORD=123	# 密码
 	-v /mysql/conf:/etc/mysql/conf.d	# 配置路径
  -v /mysql/data:/var/lib/mysql	# 数据
  -v /mysql/init:/docker-entrypoint-initdb.d	# 脚本
  mysql:8
```

```shell
docker run --name mysql -d -p 3306:3306 -e TZ=Asia/Shanghai	-e MYSQL_ROOT_PASSWORD=123 -v /mysql/conf:/etc/mysql/conf.d -v /mysql/data:/var/lib/mysql -v /mysql/init:/docker-entrypoint-initdb.d mysql
```



## 什么是MySQL？

MySQL是世界上最流行的开源数据库。凭借其久经考验的性能，可靠性和易用性，MySQL已成为基于Web的应用程序的领先数据库选择，涵盖了从个人项目和网站到电子商务和信息服务的整个范围，一直到高知名度的Web属性，包括Facebook，Twitter，YouTube，Yahoo！和更多.

有关MySQL Server和其他MySQL产品的更多信息和相关下载，请访问www.mysql.com

## 开始一个 mysql 服务器实例

启动MySQL实例很简单：

```bash
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

some-mysql：是你想要分配给你的容器的名称

my-secret-pw：是要为MySQL root用户设置的密码

tag：是指定你想要的MySQL版本的标签。相关标签请参见上面的列表

## 从其他Docker容器中的应用程序连接到MySQL

此映像公开了标准MySQL端口（3306），因此容器链接使MySQL实例可用于其他应用程序容器。像这样启动应用程序容器，以便将其链接到MySQL容器

```bash
$ docker run --name some-app
--link some-mysql:mysql -d application-that-uses-mysql
```

## 从MySQL命令行客户端连接到MySQL

以下命令启动另一个mysql容器实例，并对原始mysql容器运行mysql命令行客户端，允许您对数据库实例执行SQL语句

```bash
$ docker run -it --link some-mysql:mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```

some-mysql是您原始mysql容器的名称

## 容器外壳访问和查看MySQL日志

docker exec命令允许您在Docker容器中运行命令。下面的命令行将给予你一个bash shell在你的mysql容器中

```bash
$ docker exec -it some-mysql bash
```

MySQL服务器日志可以通过Docker的容器日志获得

```bash
$ docker logs some-mysql
```

## 使用自定义MySQL配置文件

MySQL启动配置在文件/etc/mysql/my.cnf中指定，该文件反过来包括在/etc/mysql/conf.d目录中以.cnf结尾的所有文件。此目录中文件的设置将增加和/或覆盖/etc/mysql/my.cnf中的设置。如果你想使用自定义的MySQL配置，你可以在主机上的一个目录中创建你的替代配置文件，然后将该目录位置作为/etc/mysql/conf.d挂载到mysql容器中。

如果/my/custom/config-file.cnf是你的自定义配置文件的路径和名称，你可以像这样启动你的mysql容器（注意在这个命令中只使用自定义配置文件的目录路径）

```bash
$ docker run --name some-mysql -v /my/custom:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

这将启动一个新的容器some-mysql，其中MySQL实例使用来自/etc/mysql/my.cnf和/etc/mysql/conf.d/config-file.cnf的组合启动设置，后者的设置优先。

请注意，启用SELinux的主机系统上的用户可能会遇到此问题。当前的解决方法是将相关的SELinux策略类型分配给您的新配置文件，以便允许容器挂载它

```bash
$ chcon -Rt svirt_sandbox_file_t /my/custom
```

### 配置不带 cnf 文件

许多配置选项可以作为标志传递给mysqld。这将为您提供给予灵活性来自定义容器，而不需要cnf文件。例如，如果你想将所有表的默认编码和排序规则更改为使用UTF-8（utf8mb4），只需运行以下命令：

```bash
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

如果您想查看可用选项的完整列表，只需运行：

```bash
$ docker run -it --rm mysql:tag --verbose --help
```

## 环境变量

当您启动mysql镜像时，您可以通过在docker run命令行上传递一个或多个环境变量来调整MySQL实例的配置。请注意，如果您使用已经包含数据库的数据目录启动容器，则以下变量都不会有任何影响：任何预先存在的数据库在容器启动时都将保持不变。

### MYSQL_ROOT_PASSWORD

此变量是强制性的，它指定将为MySQL root超级用户帐户设置的密码。在上面的示例中，它被设置为my-secret-pw。

### MYSQL_DATABASE

此变量是可选的，允许您指定要在映像启动时创建的数据库的名称。如果提供了用户/密码（见下文），则该用户将被授予对此数据库的超级用户访问权限（对应于GRANT ALL）。

### MYSQL_USER, MYSQL_PASSWORD

这些变量都是可选的，可以结合使用来创建新用户并设置该用户的密码。该用户将被授予对由MYSQL_DATABASE变量指定的数据库的超级用户权限（见上文）。这两个变量都是创建用户所必需的。

请注意，不需要使用这种机制来创建超级用户，默认情况下，该用户将使用MYSQL_ROOT_PASSWORD变量指定的密码创建。

### MYSQL_ALLOW_EMPTY_PASSWORD

这是一个可选变量。设置为yes，允许使用root用户的空密码启动容器。注意：不建议将此变量设置为yes，除非你真的知道你在做什么，因为这将使你的MySQL实例完全不受保护，允许任何人获得完全的超级用户访问。

## 初始化新实例

当容器第一次启动时，新的数据库mysql将使用提供的配置变量进行初始化。此外，它将执行扩展名为.sh和.sql的文件，这些文件在/docker-entrypoint-initdb.d中找到。您可以通过[将SQL转储装载到该目录中来](https://docs.docker.com/userguide/dockervolumes/#mount-a-host-file-as-a-data-volume)轻松填充mysql服务，并提供具有贡献数据[的自定义图像](https://docs.docker.com/reference/builder/)。

## 警告

### 在何处存储数据

重要提示：有几种方法可以存储在Docker容器中运行的应用程序所使用的数据。我们鼓励mysql图像的用户熟悉可用的选项，包括：

- 让Docker管理数据库数据的存储，方法是使用自己的内部卷管理将数据库文件写入主机系统上的磁盘。这是默认设置，对用户来说很容易且相当透明。缺点是，对于直接在主机系统上运行的工具和应用程序（即外部容器），这些文件可能很难找到。
- 在主机系统上（容器外部）创建一个数据目录，并[将其挂载到从容器内部可见的目录中](https://docs.docker.com/userguide/dockervolumes/#mount-a-host-directory-as-a-data-volume)。这将数据库文件放置在主机系统上的已知位置，并使主机系统上的工具和应用程序可以轻松访问这些文件。缺点是用户需要确保目录存在，并且在主机系统上正确设置了目录权限和其他安全机制。

Docker文档是理解不同存储选项和变体的一个很好的起点，有多个博客和论坛帖子讨论并给予这方面的建议。我们将简单地展示上面后一个选项的基本过程：

1. 在主机系统上的适当卷上创建数据目录，例如/my/own/datadir。
2. 像这样启动mysql容器：

```bash
$ docker run --name some-mysql -v /my/own/datadir：/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql：tag
```

该命令的-v /my/own/datadir:/var/lib/mysql部分将底层主机系统的/my/own/datadir目录挂载为容器内的/var/lib/mysql目录，MySQL默认将在其中写入其数据文件。

请注意，启用SELinux的主机系统上的用户可能会遇到此问题。当前的解决方法是将相关的SELinux策略类型分配给新的数据目录，以便允许容器访问它：

```bash
$ chcon -Rt svirt_sandbox_file_t /my/own/datadir
```

### 在MySQL init完成之前没有连接

如果在容器启动时没有初始化数据库，则将创建默认数据库。虽然这是预期的行为，但这意味着在初始化完成之前它不会接受传入的连接。这可能会在使用自动化工具（如docker-compose）时导致问题，因为它会同时启动多个容器。

### 对现有数据库的使用

如果你用一个已经包含数据库的数据目录启动mysql容器实例（特别是一个mysql容器），那么应该从run命令行中省略$MYSQL_ROOT_PASSWORD变量；它在任何情况下都会被忽略，并且预先存在的数据库不会以任何方式被更改。

### Docker版本支持

此镜像在Docker 1.10.3版本上正式支持。

对旧版本（低至1.6）的支持是尽最大努力提供的。