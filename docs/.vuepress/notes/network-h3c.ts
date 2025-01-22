import {defineNoteConfig} from 'vuepress-theme-plume'

export const networkH3c = defineNoteConfig({
    // 链接 区分大小写
    dir: '3.网络技术/2.H3c',
    link: '/network/h3c/',
    sidebar: [
        {
            text: 'H3C脚本',
            icon: 'ph:code-bold',
            prefix: '1.脚本',
            collapsed: false,
            items: [
                '1.H3C登录脚本',
            ],
        },
        {
            text: 'H3C案例',
            icon: 'ph:code-bold',
            prefix: '7.案例',
            collapsed: false,
            items: [
                '修改交换机时间',
                '华三端口聚合',
                '批量修改端口',
            ],
        }
    ]
})