import { defineNoteConfig } from 'vuepress-theme-plume'

export const python = defineNoteConfig({
    dir: 'python',
    link: '/python/',
    sidebar: [
        {
            text: 'nodejs',
            icon: 'ph:code-bold',
            prefix: '/',
            collapsed: false,
            items: [
                '1.npm',
                '2.yarn',
                '3.npnm',
            ],
        }
    ]
})
