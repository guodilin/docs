---
title: 接口绑定MAC-IP
createTime: 2025/01/17 10:03:26
permalink: /network/huawei/77vsea2v/
---
## 配置通过IPSG功能对IP报文的接口+IP+MAC信息进行匹配检查示例

### 组网需求

如[图10-2](https://support.huawei.com/enterprise/zh/doc/EDOC1000047401/2eeb3da9#fig_dc_cfg_ipsg_00001301)所示，HostA与HostB分别与Switch的GE0/0/1和GE0/0/2接口相连。要求使HostB不能仿冒HostA的IP和MAC欺骗Server，保证HostA的IP报文能正常上送。

![img](/docs/1699415313991-91c77cb6-f700-407c-8573-66cbc0ef5f03.png)

### 配置思路

采用如下的思路在Switch上配置IPSG功能（假设用户的IP地址是静态分配的）：

1. 接口使能IP报文检查功能。连接HostA和HostB的接口都需要使能该功能。
2. 配置静态绑定表，对于静态配置IP的用户建立绑定关系表。

### 操作步骤

1. 配置IP报文检查功能

1. 在连接HostA的GE0/0/1接口使能IP报文检查功能。

```bash
<HUAWEI> system-view
[HUAWEI] sysname Switch
[Switch] interface gigabitethernet 0/0/1
[Switch-GigabitEthernet0/0/1] ip source check user-bind enable
```

1. 在连接HostA的GE0/0/1接口使能IP报文检查告警功能并配置告警阈值。

```bash
[Switch-GigabitEthernet0/0/1] ip source check user-bind alarm enable
[Switch-GigabitEthernet0/0/1] ip source check user-bind alarm threshold 200
[Switch-GigabitEthernet0/0/1] quit
```

1. 在连接HostB的GE0/0/2接口使能IP报文检查功能。

```bash
[Switch] interface gigabitethernet 0/0/2
[Switch-GigabitEthernet0/0/2] ip source check user-bind enable
```

1. 在连接HostB的GE0/0/2接口使能IP报文检查告警功能并配置告警阈值。

```bash
[Switch-GigabitEthernet0/0/2] ip source check user-bind alarm enable
[Switch-GigabitEthernet0/0/2] ip source check user-bind alarm threshold 200
[Switch-GigabitEthernet0/0/2] quit
```

1. 配置静态绑定表项

1. 配置HostA为静态绑定表项。

```bash
[Switch] user-bind static ip-address 10.0.0.1 mac-address 0001-0001-0001 interface gigabitethernet 0/0/1
```

1. 验证配置结果

1. 在Switch上执行**display dhcp static user-bind all**命令可以查看绑定表信息。

```bash
[Switch] display dhcp static user-bind all
DHCP static Bind-table:                                                         
Flags:O - outer vlan ,I - inner vlan ,P - Vlan-mapping                          
IP Address                      MAC Address     VSI/VLAN(O/I/P) Interface       
--------------------------------------------------------------------------------
10.0.0.1                        0001-0001-0001  --  /--  /--    GE0/0/1         
--------------------------------------------------------------------------------
Print count:           1          Total count:           1         
```

从显示信息可知，HostA已经配置为静态绑定表项。

### 配置文件

Switch的配置文件

```bash
#
sysname Switch
#
user-bind static ip-address 10.0.0.1 mac-address 0001-0001-0001 interface GigabitEthernet0/0/1
#
interface GigabitEthernet0/0/1
 ip source check user-bind enable
 ip source check user-bind alarm enable
 ip source check user-bind alarm threshold 200
#
interface GigabitEthernet0/0/2
 ip source check user-bind enable
 ip source check user-bind alarm enable
 ip source check user-bind alarm threshold 200
#
return
```

