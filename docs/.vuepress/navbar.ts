import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/blog/'},
    {
        text: '前端',
        items: [
            {text: 'html', link: '/web/html/'},
            {text: 'css', link: '/web/css/d'},
            {text: 'js', link: '/web/js/'},
            {text: 'nodejs', link: '/web/nodejs/'}]
    },
    {
        text: '后端',
        items: [
            {text: 'java', link: '/java/'},
            {text: 'python', link: '/python/'}]
    },
    {
        text: '网络技术',
        items: [
            {text: '华为网络', link: '/network/huawei/'},
            {text: '华三网络', link: '/network/h3c/'}]
    },
    {
        text: '数据库',
        items: [
            {text: 'mysql', link: '/notes/mysql/README.md'},
            {text: 'mssql', link: '/notes/mssql/README.md'}
        ]
    },
    {
        text: '运维',
        items: [
            {text: 'docker', link: '/yunwei/docker/'},
            {text: 'nginx', link: '/yunwei/nginx/'}
        ]
    },
    {text: '标签', link: '/blog/tags/'},
    {text: '归档', link: '/blog/archives/'},
    {
        text: '笔记',
        items: [{text: '示例', link: '/notes/demo/README.md'}]
    },
])
