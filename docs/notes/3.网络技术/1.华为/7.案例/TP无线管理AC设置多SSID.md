---
title: TP无线管理AC设置多SSID
createTime: 2025/01/17 10:02:05
permalink: /network/huawei/j1dehrry/
---
设备：TL - AC500、华为交换机5720、TL-HDAP1800



1. 配置三层交换机 

- 配置网关、AC接口配置信息,10为ac和ap的vlan。20，30为SSID准备的

```shell
[HUAWEI]vlan 10    # AC和AP
[HUAWEI]vlan 20   # 客户wifi
[HUAWEI]vlan 30   # 办公wifi
[HUAWEI]interface vlanif10
[HUAWEI-vlanif10]ip address 192.168.1.254 24
[HUAWEI-vlanif10]quit
[HUAWEI]interface GigabitEthernet0/0/24    # 对应AC接口
[HUAWEI-GigabitEthernet0/0/24]port link-type hybrid
[HUAWEI-GigabitEthernet0/0/24]port hybrid tagged vlan 10 20 30
# 配置20和30地址池，有dhpc服务器的自己配置。
#  Vlan20
[HUAWEI]dhcp enable
[HUAWEI]ip pool guest   # 客户wifi
[HUAWEI-ip-pool-guest]gateway-list 192.168.2.254
[HUAWEI-ip-pool-guest]network 192.168.2.0 mask 24
[HUAWEI-ip-pool-guest]dns-list 202.101.224.69 202.101.226.68
[HUAWEI-ip-pool-guest]quit
[HUAWEI]interface vlanif20
[HUAWEI-Vlanif20]ip address 192.168.1.254 24
[HUAWEI-Vlanif20dhcp select global
#  Vlan30
[HUAWEI]ip pool office   # 办公wifi
[HUAWEI-ip-pool-office]gateway-list 192.168.3.254
[HUAWEI-ip-pool-office]network 192.168.3.0 mask 24
[HUAWEI-ip-pool-office]dns-list 202.101.224.69 202.101.226.68
[HUAWEI-ip-pool-office]quit
[HUAWEI]interface vlanif30
[HUAWEI-Vlanif30]ip address 192.168.2.254 24
[HUAWEI-Vlanif30dhcp select global
```

1. 配置二层交换机 

- 接口都放行对应的vlan 10 20 30，接口可以设置trunk或者hybrid，自行决定

```shell
[HUAWEI]vlan 10    # AC和AP
[HUAWEI]vlan 20   # 客户wifi
[HUAWEI]vlan 30   # 办公wifi
[HUAWEI]interface Ethernet0/0/1    # 对应AP接口
[HUAWEI-Ethernet0/0/1]port link-type hybrid
[HUAWEI-Ethernet0/0/1]port hybrid pvid vlan 10 # 看情况是否需要
[HUAWEI-Ethernet0/0/1]port hybrid untagged vlan 10
[HUAWEI-Ethernet0/0/1]port hybrid tagged vlan 20 30
```

1. 配置ac 

- 配置接口vlan 

- 网络设置—vlan设置—新增— vlanID（10）—端口（TAG）— 确定

- 配置DHCP服务，为AP分配ip地址使用。 

- 网络设置—DHCP服务—服务接口（刚设置的vlan接口名称）— 开始地址（192.168.1.1）—结束地址

- (192.168.1.254)— 确定

- 设置SSID,即wifi名 

- 无线管理—新增—SSID（guest）—安全选项—PSK密码（wifi密码）—确定

- 无线管理—新增—SSID（office）—安全选项—PSK密码（wifi密码）—确定

- 射频绑定 

- 无线管理—SSID（guest）—射频绑定—选中ap —绑定vlan（20）—绑定

- 无线管理—SSID（office）—射频绑定—选中ap —绑定vlan（30）—绑定