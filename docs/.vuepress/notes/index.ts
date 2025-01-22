import {defineNotesConfig} from 'vuepress-theme-plume'
import {java} from './java'
import {networkH3c} from "./network-h3c"
import {networkHuawei} from "./network-huawei"
import {nodejs} from "./nodejs";
import {yunwei} from "./yunwei";
import {nginx} from "./nginx";
import {python} from "./python";

export default defineNotesConfig({
    // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
    dir: '/notes/',
    link: '/',
    // 在这里添加 note 配置
    notes: [
        java,
        networkH3c,
        networkHuawei,
        nodejs,
        yunwei,
        nginx,
        python
    ]
})