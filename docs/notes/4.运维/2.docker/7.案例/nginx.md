---
title: nginx
createTime: 2025/01/17 10:11:18
permalink: /article/o2w0cwmx/
---
```shell
docker pull nginx	# 拉取nginx镜像
docker images	# 查看本地所有镜像
docker ps	# 查看运行中的容器
docker exec -it nginx bash # 进入容器执行容器内的内容
```
```shell
# 安装镜像
docker run --name nginx -d -p 80:80 -v html:/usr/share/nginx/html nginx
# 安装镜像,挂载到指定目录
```
```shell
docker run 
	--name nginx 
 	-d -p 80:80 
  -v /html:/usr/share/nginx/html 
  nginx
```