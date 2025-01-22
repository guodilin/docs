---
title: 1.nginx
createTime: 2025/01/17 09:39:33
permalink: /yunwei/nginx/
---
# 下载安装



## 一、ubantu安装



##### ①. 安装依赖



```shell
# 启动root权限
sudo su root
# 安装依赖
apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
              nginx signing key <signing-key@nginx.com>
```



##### ②. 验证签名



```shell
# 导入一个官方的nginx签名密钥，以便apt可以验证软件包的真实性。获取密钥：
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
# 验证下载的文件是否包含正确的密钥：
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
# 输出应包含完整的指纹，如下所示：573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid
```



##### ③. 安装nginx



```shell
# 更新包文件
apt-get update
# 安装nginx
apt install nginx
# 查询服务状态未退出
systemctl status nginx
```



##### ④. 配置nginx



```shell
# nginx -- guodilin.com
# 自定义配置文件路径
# /etc/nginx/conf.d/*conf
server{
	# 端口 443 ssl
    listen 443 ssl;
    # 域名 www.guodilin.com
    server_name www.guodilin.com;
    # 证书pem文件
    ssl_certificate /uwsgi/guodilin/ssl/www.guodilin.com_bundle.pem;
    # 证书key文件
    ssl_certificate_key  /uwsgi/guodilin/ssl/www.guodilin.com.key;
    # 启动ssl session 缓存
    ssl_session_cache shared:SSL:1m;
    # 缓存ssl握手产生的参数和加密秘钥的时长
    ssl_session_timeout 5m;
    # 使用的加密套件的类型
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    # 表示使用的TLS协议的类型
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    # 加密套件优先选择服务器的加密套件
    ssl_prefer_server_ciphers on;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    # sock方式
    location / {
        include uwsgi_params;
        uwsgi_connect_timeout 30;
        uwsgi_pass unix:/uwsgi/guodilin/uwsgi.sock;
    }
   # 默认
   # location / {
   #     root html;
   #     index index.html index.htm;
   # }
    location /static/ {
        alias /www/wwwguodilincom/static/;
        index index.html index.htm;
    }
}
server{
    listen 80;
    return 301 https://$host$request_uri;
    server_name www.guodilin.com;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location / {
        root html;
        index index.html index.htm;
    }
}
```



##### ⑤. nginx调用配置



```bash
# 调用单文件
include web.conf;
# 调用vhost目录下的所有conf文件
include vhost/*.conf;
```



##### ⑥. 常用命令



```bash
# 启动nginx
nginx restart
# 自定义配置文件启动nginx
nginx -c /etc/nginx/nginx.conf
# 重载nginx
nginx -s reload
# 快速关闭
nginx -s stop
# 安全关闭
nginx -s quit
# 关闭进程
kill -quit 进程号
# 强制关闭进程
kill -9 进程号
# 查看nginx进程
ps -ef|grep nginx
# 重新打开一个log文件，主要用于日志切割
nginx reopen
# 验证默认配置文件
nginx -t
# 验证自定义配置文件
nginx -t -c /etc/nginx/nginx.conf
# 开机自动启动
systemctl enable nginx
# 查看版本
nginx -v
```



## 二、RHEL/CentOS安装



```bash
# 下载
wget https://nginx.org/download/nginx-1.22.1.tar.gz
# 解压
tar -axvf nginx-1.22.1.tar.gz
# 安装至home下
./onfigure --prefix=/home/nginx
# 安装所需依赖
apt install libpcre3 libpcre3-dev
# make install
```



## 三、windows安装



## 防盗链



```bash
# 防盗链
server{
    listen 80;
    return 301 https://$host$request_uri;
    server_name www.guodilin.com;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location / {
        root html;
        # 防盗链，只允许*.baidu.com的通过
        valid_referers none blocked *.baidu.com;
        # 判断防盗链如果不成功返回错误信息
        if($valid_referers){
        rewrite ^/ https://www.guodilin.com/error.html
        }
        index index.html index.htm;
    }
```



##### 防防盗链



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--  referrer 不发送referrer，对防盗链失效 -->
    <meta name="referrer" content="no-referrer">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```



## 开启GZIP压缩



```bash
server{
	gzip on; # 开启gzip
	gzip_types application/javascript;
}
```



##### 配置详解

| 名称              | 参考参数              | 详解                                                         |
| ----------------- | --------------------- | ------------------------------------------------------------ |
| gzip              | on                    | 是否开启gzip压缩（on开启off关闭）                            |
| gzip_min_length   | 1k                    | 最小压缩单位，小于1k压缩意义就不大了                         |
| gzip_cpmp_level   | 6                     | 压缩级别，1-9可选，数字越大压缩效果越好，但是会加大CPU压力，高并发场景不建议调太高 |
| gzip_types        | js、css、text、json等 | 压缩类型，取自application/type，文本文件压缩的效果最好       |
| gzip_very         | on                    | 用在在相应头添加very:accept-encoding，让代理服务器根据请求头识别是否启用了gzip压缩 |
| gzip_http_version | 1.1                   | 启用gzip压缩的最低http协议版本，这里也可以不填，默认就是 1.1 |
| gzip_buffers      | 2 4k                  | 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区 |
| gzip_static       | on                    | 静态压缩，也就是提前已经准备好了压缩文件在同目录下会有一个.gz的压缩包，避免了动态压缩性能较好 |
| gzip_disable      | MSIE[1-6].            | 设置禁用浏览器进行GZIO压缩，IE6的某些版本对GZIP的压缩支持很不好，会造成页面的假死 |



## Brotli压缩



##### 下载



```shell
git clone https://github.com/google/ngx_brotli.git
```



## 反向代理



```nginx
server{
	listen 80;
    server_name www.guodilin.com;	# 域名绑定香港服务器地址
	location / {
		proxy_pass http://175.27.129.237/;	# 代理国内的服务器
	}
}
```



## 限流



##### 请求限流



```bash
limit_req_zone
```



```nginx
http {
	limit_req_zone $binary_remote_addr zone = ip_limit:10m rate = 1r/s;
}
server{
	location / {
		limit_req zone = ip_limit burst = 2 nodelay;
	}
}
```



##### 连接限流



```nginx
http {
	# 限制连接
	limit_conn_zone $binary_remote_addr zone=conn_limit:10m;
}
server{	
	location / {
		# 限制连接数
		limit_conn conn_limit 1;
	}
}
```



## 请求合并



```bash
git clone https://github.com/alibaba/nginx-http-concat.git
```