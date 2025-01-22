import {defineNoteConfig} from 'vuepress-theme-plume'

export const networkHuawei = defineNoteConfig({
    // 链接 区分大小写
    dir: '3.网络技术/1.华为',
    link: '/network/huawei/',
    sidebar: [
        {
            text: 'HUAWEI脚本',
            icon: 'ph:code-bold',
            prefix: '1.脚本',
            collapsed: false,
            items: [
                '1.HUAWEI登录脚本',
            ],
        },
        {
            text: 'HUAWEI防火墙',
            icon: 'ph:code-bold',
            prefix: '2.防火墙',
            collapsed: false,
            items: [
                '1.HUAWEI登录脚本',
            ],
        },
        {
            text: 'HUAWEI路由器',
            icon: 'ph:code-bold',
            prefix: '3.路由器',
            collapsed: false,
            items: [
                '1.HUAWEI登录脚本',
            ],
        },
        {
            text: 'HUAWEI交换机',
            icon: 'ph:code-bold',
            prefix: '4.交换机',
            collapsed: false,
            items: [
                '1.HUAWEI登录脚本',
            ],
        },
        {
            text: 'HUAWEI无线',
            icon: 'ph:code-bold',
            prefix: '5.无线',
            collapsed: false,
            items: [
                '无线优化方案',
            ],
        },
        {
            text: 'HUAWEI案例',
            icon: 'ph:code-bold',
            prefix: '7.案例',
            collapsed: false,
            items: [
                'TP无线管理AC设置多SSID',
                'VRRP配置详解',
                '根据ipmac查询接口',
                '海康存储服务器和华为三层交换机链路捆绑',
                '华为LeaderAP配置',
                '华为防火墙端口回流',
                '华为路由器配置NAT方法',
                '接口绑定MAC-IP',
                '深信服AC1000路由模式连接TP-LINK三层交换机'
            ],
        },
    ]
})