import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'


export default defineUserConfig({
   /// base: '/docs/',
    base: '/',
    lang: 'zh-CN',
    title: 'DT',
    description: 'Java',
    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
    theme: plumeTheme({
        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        hostname: 'https://docs.1259.net',
        /* 文档仓库配置，用于 editLink */
        // docsRepo: '',
        // docsDir: 'docs',
        // docsBranch: '',
        /* 页内信息 */
        editLink: true,
        lastUpdated: true,
        contributors: true,
        changelog: false,
        //blog: false, // 禁用博客
        blog: {
            include: ['**/*.md'],
            postList: true, // 是否启用文章列表页
            tags: true, // 是否启用标签页
            archives: true, // 是否启用归档页
            categories: true, // 是否启用分类页
            postCover: 'right', // 文章封面位置
            pagination: 15, // 每页显示文章数量
        },
        /* 博客文章页面链接前缀 */
        article: '/article/',
        cache: 'filesystem',
        autoFrontmatter: {
            permalink: true,  // 是否生成永久链接
            createTime: true, // 是否生成创建时间
            title: true,      // 是否生成标题
        },
        plugins: {
            // 视频支持
            markdownPower: {
                artPlayer: true,
            },
            shiki: {
                languages: ["javascript", "typescript", "vue", "bash", "sh", "java", "html", "python", "go"],
            },
            readingTime: true,
        },
        encrypt: {
            rules: {
             //   '/java/index/': '123456',
            }
        },
    }),
})
