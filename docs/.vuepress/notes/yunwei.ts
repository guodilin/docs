import {defineNoteConfig} from 'vuepress-theme-plume'

export const yunwei = defineNoteConfig({
    // 链接 区分大小写
    dir: '4.运维/2.docker',
    link: '/yunwei/docker/',
    sidebar: [
        {
            text: 'docker',
            icon: 'ph:code-bold',
            prefix: '/',
            collapsed: false,
            items: [
                '1. 快速入门',
                '2. Docker命令',
            ],
        },
        {
            text: 'docker案例',
            icon: 'ph:code-bold',
            prefix: '7.案例',
            collapsed: false,
            items: [
                'jdk1.8',
                'mysql',
                'nginx',
                'vpn pptp',
            ],
        }
    ]
})