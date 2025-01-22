---
title: 华为路由器配置NAT方法
createTime: 2025/01/17 10:01:47
permalink: /network/huawei/hv7ruz04/
---
1. 静态NAT一对一

```shell
# 218.87.139.50 # 为公网ip   10.10.10.1  # 为需要上网的ip
[Huawei-GigabitEthernet0/0/1]nat static global 218.87.139.50 inside 10.10.10.1  # 出接口地址绑定
```

 

1. PAT动态NAT一对一

```shell
[Huawei]nat address-group 1 218.87.139.1 218.87.139.50 # 创建地址池
[Huawei]acl 2021    # 创建id
[Huawei-acl-basic-2021]rule 5 permit source 10.10.10.0 0.0.0.255  # 允许哪些段或者ip通过上网
[Huawei-GigabitEthernet0/0/1] nat outbound 2021 address-group 1     # 出接口地址绑定
```

 

1. PAT基于接口NAT一对多

```shell
[Huawei]acl 2021                 # 创建id
[Huawei-acl-basic-2021]rule 5 permit source 10.10.10.0 0.0.0.255    # 允许哪些段或者ip通过上网
[Huawei-GigabitEthernet0/0/1]ip address 218.87.139.50 30  # 配置出接口ip外网地址
[Huawei-GigabitEthernet0/0/1]nat outbound 2021    # 出口地址绑定2021上网段
```

 

1. 静态PAT端口映射

```shell
[Huawei-GigabitEthernet0/0/1]nat server protocol tcp global current-interface 8808 inside 10.10.10.100 23 # 基于接口做端口映射方法1
[Huawei-GigabitEthernet0/0/1]nat static protocol tcp global current-interface 8808 inside 10.10.10.100 23 # 基于接口做端口映射方法2
[Huawei-GigabitEthernet0/0/1]nat static protocol tcp global 218.1.1.1 23 inside 10.10.10.100 23 # 基于专门公网ip端口映射
```

 