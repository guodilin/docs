import {defineNoteConfig} from 'vuepress-theme-plume'

export const nginx = defineNoteConfig({
    // 链接 区分大小写
    dir: '4.运维/1.nginx',
    link: '/yunwei/nginx/',
    sidebar: [
        {
            text: 'nginx',
            icon: 'ph:code-bold',
            prefix: '/',
            collapsed: false,
            items: [
                'README',
            ],
        }
    ]
})