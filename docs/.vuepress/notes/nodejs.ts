import {defineNoteConfig} from 'vuepress-theme-plume'

export const nodejs = defineNoteConfig({
    // 链接 区分大小写
    dir: '2.前端/',
    link: '/nodejs/',
    sidebar: [
        {
            text: 'nodejs',
            icon: 'ph:code-bold',
            prefix: '4.nodejs',
            collapsed: false,
            items: [
                '1.npm',
                '2.yarn',
                '3.npnm',
            ],
        }
    ]
})