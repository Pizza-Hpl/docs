//引入封装head部分
const headConf = require("./config/headConf");
//引入封装的plugins
const pluginsConf = require("./config/pluginsConf");
//引入封装的nav
const navConf = require("./config/navConf");
module.exports = {
    base:"/docs/",
    title:'Pizza-Hpl',
    description:'快速入门前端必备知识点,node,vue,微信小程序,html,css...',
    head: headConf,//引用head部分
// 插件
    //   plugins:[
    //     [
    //         '@vuepress/last-updated',
    //     {
    //         transformer:(timestamp)=>{
    //             return moment(timestamp).format('LLLL')
    //         }
    //     }
    //     ],
    //     [
    //         '@vuepress/pwa',{
    //               serviceWorker: true,
    //               updatePopup: {
    //                 message: "已更新内容",
    //                 buttonText: "刷新"
    //               }
    //             }
    //     ]
    //   ],
    //引入封装的plugins
    plugins:pluginsConf,
        // nav栏
    themeConfig: {
        logo: '/assets/img/logo.png',        

        nav:navConf ,
        sidebar: 'auto'
    }
}