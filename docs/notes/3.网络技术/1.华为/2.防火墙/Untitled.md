---
title: Untitled
createTime: 2025/01/17 09:58:52
permalink: /network/huawei/egvjzlc2/
---
# 防火墙



### 防火墙接口区域划分

## 安全区域

网络—>安全区域—>安全区域列表

1. Trust区域：内部用户区域

1. 该区域内网络的受信程度高，通常定义内部用户所在的网络,安全级别85

1. DMZ区域：内部服务器区域

1. 该区域内网络的受信程度中等，通常定义内部服务器所在的网络,安全级别50

1. Untrust区域：Internet区域

1. 该区域代表的是不受信任的网络，通常来定义Internet等不安全的网络,安全级别5

1. local区域：代表防火墙本身,安全级别100

| local   | 本地       |        |      |
| ------- | ---------- | ------ | ---- |
| trust   | 内网区域   | 可信   |      |
| untrust | 外网区域   | 不可信 |      |
| dmz     | 服务器区域 |        |      |

![img](https://cdn.nlark.com/yuque/0/2024/jpeg/39001393/1715584927190-0105c1b9-85e7-4516-9abd-40c1c55f2bcc.jpeg)

由此我们可以描述处于不同网络的用户互访时报文在防火墙上所走的路线。

例如，当内部网络中的用户访问Internet时，报文在防火墙上的路线是从Trust区域到Untrust区域;当Internet上的用户访问内部服务器时，报文在防火墙上的路线是从Untrust区域到DMZ区域。



注意: 在华为防火墙上，一个接口只能加入到一个安全区域中。

## 五元组



源地址、源端口、目的地址、目的端口和协议这5个元素是会话的重要信息，我们将这5个元素称之为“五元组”。

## 配置安全区域

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731381854534-2db4734f-9e49-4875-80cf-8ff7686f840b.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731381905369-6489873e-a22b-4084-a906-a6c5af8a490c.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731381919050-a159a59e-d6f1-4002-b847-8c1ae2cedac5.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731381934000-6a9e55d1-5038-4979-8b3f-6370fb830e82.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382019846-5c4de6c3-1451-402a-bea9-235c2e097865.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382030568-64659bc6-5236-4623-829f-b537f7b30509.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382039543-80dcb356-b545-44d5-bb05-d04bd67012d1.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382049105-f1b98f80-b6c2-443d-ae63-b0d18a3f096b.png)

会话

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382871160-cfa1b889-9fe2-45d6-985e-a7d6e9eb40e5.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731382978442-99c638c5-a3df-43d8-b2a6-445cceb63d67.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731383027962-94e547cd-0c70-4ac7-a721-9c9f243c530f.png)

![img](https://cdn.nlark.com/yuque/0/2024/png/39001393/1731383417080-acc6f707-b4ee-485e-b485-f7e133b667ed.png)

## 其他



```bash
[huawei]web-manager enable  # 开启web服务
reset saved-configuration # 初始化配置
# 配置远程
user-interface vty 0 4
authentication-mode password  # 基于password登录，无需用户名
user privilege level 3
set authentication password 123456

dis users # 查询登录用户
dis firewall session table # 查询会话状态
dis firewall session table verbose # 查询会话状态明细
netstat -an

# 防火墙nat配置
[USG6500]nat-policy
[USG6500-policy-nat]rule name trust_isp    # 名称
[USG6500-policy-nat-rule-trust_isp]source-zone trust   # 源安全区域
[USG6500-policy-nat-rule-trust_isp]egress-interface gigabitethernet1/0/0  # 目的出接口
[USG6500-policy-nat-rule-trust_isp]action nat easy-ipdis   # 转换方式

# 防火墙常见nat配置
[USG6500]nat-policy
[USG6500-policy-nat]rule name trust_isp # 名称
[USG6500-policy-nat-rule-trust_isp]source-zone trust    # 源安全区域
[USG6500-policy-nat-rule-trust_isp]destination-zone untrust # 目的安全区域
[USG6500-policy-nat-rule-trust_isp]source-address 172.16.0.0 mask 255.255.255.0   # 源地址，可以转换的地址
[USG6500-policy-nat-rule-trust_isp]source-address 172.26.0.0 mask 255.255.0.0 # 源地址，可以转换的地址
[USG6500-policy-nat-rule-trust_isp]action nat easy-ip # 转换方式

# 默认安全策略允许
[USG6500]security-policy
[USG6500-policy-security]default action permit  # 默认允许，删除为禁止

# 放行trust-dmz
[USG6500]security-policy
[USG6500-policy-security]rule name trust_dmz
[USG6500-policy-security-rule-trust_dmz]source-zone trust
[USG6500-policy-security-rule-trust_dmz]destination-zone dmz
[USG6500-policy-security-rule-trust_dmz]action permit

# 防火墙tracert回显
[USG6500]icmp ttl-exceeded send # tracert回显

portswitch # 防火墙接口改为交换机接口
vlan  bach 10 20 # 批量创建vlan
```



## 防火墙加入安全区域配置如下



防火墙加入安全区域配置如下



```bash
[FW] firewall zone name test //创建安全区域 test
[FW-zone-test] set priority 10 //将安全级别设置为10
[FW-zone-test] add interface GigabitEthernet 0/0/1 //将接口GE0/0/1加入安全区域
```



防火墙一个接口连接两个子网，加入不同安全区域配置如下



```bash
[FW] interface GigabitEthernet 0/0/1.10 # 取子接口
[FW-GigabitEthernet0/0/1.10] vlan-type dot1q 10
[FW-GigabitEthernet0/0/1.10] ip address 192.168.10.1 24
[FW-GigabitEthernet0/0/1.10] quit
[FW] interface GigabitEthernet 0/0/1.20 # 取子接口
[FW-GigabitEthernet0/0/1.20] vlan-type dot1q 20
[FW-GigabitEthernet0/0/1.20] ip address 192.168.20.1 24
[FW-GigabitEthernet0/0/1.20] quit
[FW] firewall zone name trust1 # 创建安全区域 trust1
[FW-zone-trust1] set priority 10 # 将安全级别设置为10
[FW-zone-trust1] add interface GigabitEthernet 0/0/1.10 # 将接口GE0/0/1.10加入trust1安全区域
[FW-zone-trust1] quit
[FW] firewall zone name trust2 # 创建安全区域 trust2
[FW-zone-trust2] set priority 20 # 将安全级别设置为20
[FW-zone-trust2] add interface GigabitEthernet 0/0/1.20 # 将接口GE0/0/1.10加入trust2安全区域
[FW-zone-trust2] quit
[FW] vlan 10
[FW-vlan-10] quit
[FW] interface Vlanif 10
[FW-Vlanif10] quit
[FW] vlan 20
[FW-vlan-20] quit
[FW] interface Vlanif 20
[FW-Vlanif20] quit
[FW] interface GigabitEthernet 0/0/1
[FW-GigabitEthernet0/0/1] portswitch
[FW-GigabitEthernet0/0/1] port link-type trunk

[FW-GigabitEthernet0/0/1] port trunk permit vlan 10 20
[FW-GigabitEthernet0/0/1] quit
[FW] firewall zone name trust1

[FW-zone-trust1] set priority 10
[FW-zone-trust1] add interface Vlanif 10
[FW-zone-trust1] quit
[FW] firewall zone name trust2

[FW-zone-trust2] set priority 20
[FW-zone-trust2] add interface Vlanif 20
[FW-zone-trust2] quit
```