---
title: 华为LeaderAP配置
createTime: 2025/01/17 10:07:15
permalink: /network/huawei/jkupg2b1/
---
低成本享受ac功能。无需ac授权

ap 管理vlan 800 地址 172.31.1.0/24

业务vlan 6 12

```bash
## 创建业务vlan
[HUAWEI]vlan 800 6 12

## 创建地址池
[HUAWEI]ip pool apipadd
[HUAWEI-ip-pool-apipadd]gateway-list 172.31.1.254
[HUAWEI-ip-pool-apipadd]network 172.31.1.0 mask 255.255.255.0
[HUAWEI-ip-pool-apipadd]excluded-ip-address 172.31.1.253
[HUAWEI-ip-pool-apipadd]quit

## 配置dhcp
[HUAWEI]interface Vlanif 800
[HUAWEI-Vlanif800]ip address 172.31.1.254 255.255.255.0
[HUAWEI-Vlanif800]dhcp select global
[HUAWEI-Vlanif800]quit

## 配置接口
[HUAWEI]interface GigabitEthernet 0/0/18
[HUAWEI-GigabitEthernet0/0/18]port link-type trunk
[HUAWEI-GigabitEthernet0/0/18]port trunk allow-pass vlan 6 12 800
## 创建 相关vlan
[H3C]vlan 800 6 12 
[H3C-vlan800]quit

## ap fat接口配置(fat模式)
[H3C]interface GigabitEthernet 1/0/30
[H3C-GigabitEthernet1/0/30]port link-type trunk
[H3C-GigabitEthernet1/0/30]undo port trunk permit vlan 1
[H3C-GigabitEthernet1/0/30]port port trunk permit vlan 6 12 800

## ap fit接口配置
[H3C-GigabitEthernet1/0/30]interface GigabitEthernet 1/0/29
[H3C-GigabitEthernet1/0/29]port link-type trunk
[H3C-GigabitEthernet1/0/29]undo port trunk permit vlan 1
[H3C-GigabitEthernet1/0/29]port port trunk permit vlan 6 12 800
[H3C-GigabitEthernet1/0/29]port trunk pvid vlan 800
```

连接ap的管理wifi`wh_manage_xxxx`，改成aft模式管理wifi会改变成`HUAWEI-LeaderAP-xxxx`。

注意：xxxx为后四位mac地址

连接好后就可以用ssh连接调试ap了，网关就是ap的地址`169.254.2.1`

```bash
## fat模式配置
## 创建vlan
[88e0-56bb-7410]vlan batch 6 12 100 800

## 修改接口
[88e0-56bb-7410]int GigabitEthernet 0/0/0
[88e0-56bb-7410-GigabitEthernet0/0/0]port link-type trunk
[88e0-56bb-7410-GigabitEthernet0/0/0]undo port trunk allow-pass vlan 1
[88e0-56bb-7410-GigabitEthernet0/0/0]port trunk allow-pass vlan 6 12 800
[88e0-56bb-7410-GigabitEthernet0/0/0]quit

## 配置管理ap地址
[88e0-56bb-7410]int vlan 800
[88e0-56bb-7410-Vlanif800]ip address 172.31.1.253 255.255.255.0
[88e0-56bb-7410-Vlanif800]quit

## 配置管理ap的静态路由
[88e0-56bb-7410]ip route-static 0.0.0.0 0.0.0.0 172.31.1.254

## 配置管理vlan ip 地址
[88e0-56bb-7410]capwap source interface vlanif 800
```