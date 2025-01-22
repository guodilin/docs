import { defineNoteConfig } from 'vuepress-theme-plume'

export const java = defineNoteConfig({
    // 链接 区分大小写
    dir: '1.后端/1.Java',
    link: '/java/',
    sidebar: [
        {
            text: 'Java语言基础',
            icon: 'ph:code-bold',
            prefix: '第一章',
            collapsed: false,
            items: [
                '1.Java简介',
                '2.Java环境配置',
                '3.Java基础语法',
                '4.Java注释',
                '5.Java标识符',
                '6.Java关键字',
                '7.Java基本数据类型',
                '8.Java常量',
                '9.Java变量',
                '10.Java命名规则',
                '11.Java修饰符',
                '12.Java运算符',
                '13.Java循环语句',
                '14.Java条件语句',
                '15.Javas-witch-case',
                '16.Java数组',
                '17.Java集合',
                '18.JavaMap集合',
                '19.Java字符串',
            ],
        },
        {
            text: 'Java语言进阶',
            icon: 'ph:code-bold',
            prefix: '第二章',
            collapsed: false,
            items: [
                '1.Java对象',
                '2.Java静态',
                '3.Java继承',
                '4.Java多态',
                '5.Java重写',
                '6.Java抽象类',
                '7.Java接口',
            ],
        },
    ]
})