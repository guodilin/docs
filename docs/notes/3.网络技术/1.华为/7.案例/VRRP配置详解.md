---
title: VRRP配置详解
createTime: 2025/01/17 10:01:00
permalink: /network/huawei/qcpjlshy/
---
![image-20250117100102428](/docs/image-20250117100102428.png)

```shell
##LSW1
[Huawei]vlan 10
[Huawei]vlan 20
[Huawei]interface Vlanif10
[Huawei-Vlanif10]ip address 192.168.10.10 255.255.255.0
[Huawei-Vlanif10]vrrp vrid 1 virtual-ip 192.168.10.254             # 虚拟网关
[Huawei-Vlanif10]vrrp vrid 1 priority 120                          # 配置优先级，默认100
[Huawei-Vlanif10]vrrp vrid 1 preempt-mode timer delay 0           # 抢占时间0秒，默认0秒
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/1    # 监听上下行口
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/24   # 监听上下行口
[Huawei]interface Vlanif20
[Huawei-Vlanif20]ip address 192.168.20.10 255.255.255.0
[Huawei-Vlanif20]vrrp vrid 2 virtual-ip 192.168.20.254             # 虚拟网关
[Huawei-Vlanif20]vrrp vrid 2 priority 115                          # 配置优先级，需要低于主链路
##配置接LSW3口
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type trunk
[Huawei-GigabitEthernet0/0/1]port trunk allow-pass vlan 10 20
##配置接AR3口
[Huawei]interface Vlanif100
[Huawei-Vlanif100]ip address 172.10.0.2 255.255.255.0
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type access
[Huawei-GigabitEthernet0/0/2]port default vlan 100
[Huawei]ip route-static 0.0.0.0 0.0.0.0 172.10.0.1
##LSW2
[Huawei]vlan 10
[Huawei]vlan 20
[Huawei]interface Vlanif10
[Huawei-Vlanif20]ip address 192.168.10.20 255.255.255.0
[Huawei-Vlanif20]vrrp vrid 2 virtual-ip 192.168.10.254             # 虚拟网关
[Huawei-Vlanif20]vrrp vrid 2 priority 115                          # 配置优先级，需要低于主链路
[Huawei]interface Vlanif20
[Huawei-Vlanif10]ip address 192.168.20.20 255.255.255.0
[Huawei-Vlanif10]vrrp vrid 1 virtual-ip 192.168.20.254             # 虚拟网关
[Huawei-Vlanif10]vrrp vrid 1 priority 120                          # 配置优先级，默认100
[Huawei-Vlanif10]vrrp vrid 1 preempt-mode timer delay 0           # 抢占时间0秒，默认0秒
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/1    # 监听上下行口
[Huawei-Vlanif10]vrrp vrid 1 track interface GigabitEthernet0/0/24   # 监听上下行口
##配置接LSW3口
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type trunk
[Huawei-GigabitEthernet0/0/2]port trunk allow-pass vlan 10 20
##配置接AR3口
[Huawei]interface Vlanif100
[Huawei-Vlanif100]ip address 172.20.0.2 255.255.255.0
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type access
[Huawei-GigabitEthernet0/0/1]port default vlan 10
[Huawei]ip route-static 0.0.0.0 0.0.0.0 172.20.0.1
##LSW3
##配置接LSW1口
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/1]port link-type trunk
[Huawei-GigabitEthernet0/0/1]port trunk allow-pass vlan 10 20
##配置接LSW2口
[Huawei]interface GigabitEthernet0/0/2
[Huawei-GigabitEthernet0/0/2]port link-type trunk
[Huawei-GigabitEthernet0/0/2]port trunk allow-pass vlan 10 20
##pc接入端
[Huawei]interface Ethernet0/0/1
[Huawei-Ethernet0/0/1]port link-type access
[Huawei-Ethernet0/0/1]port default vlan 10
[Huawei]interface Ethernet0/0/2
[Huawei-Ethernet0/0/2]port link-type access
[Huawei-Ethernet0/0/2]port default vlan 20
##AR1
##vlan10默认通过
[Huawei]interface GigabitEthernet0/0/0
[Huawei-GigabitEthernet0/0/0]ip address 172.10.0.1 24
##vlan20默认通过
[Huawei]interface GigabitEthernet0/0/1
[Huawei-GigabitEthernet0/0/0]ip address 172.20.0.1 24
##配置换回口
[Huawei]interface LoopBack 0
[Huawei-LoopBack0]ip address 1.1.1.1 255.255.255.0
##路由
[Huawei]ip route-static 192.168.10.0 255.255.255.0 172.10.0.2
[Huawei]ip route-static 192.168.10.0 255.255.255.0 172.20.0.2 preference 70
[Huawei]ip route-static 192.168.20.0 255.255.255.0 172.20.0.2
[Huawei]ip route-static 192.168.20.0 255.255.255.0 172.10.0.2 preference 70
```