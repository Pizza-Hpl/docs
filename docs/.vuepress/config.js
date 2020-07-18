module.exports = {
    base:"/docs/",
    title:'Pizza-Hpl',
    description:'快速入门前端必备知识点,node,vue,微信小程序,html,css...',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { name: 'author', href: 'Pizze-Hpl' }],
        ['link', { name: 'keywords', href: 'Pizze-Hpl个人博客,快速入门前端必备知识点,node,vue,微信小程序,html,css...' }],
      ],
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
    plugins:{
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
      
            // 其他的 Vssue 配置
            owner: 'Pizza-Hpl',
            repo: 'docs',
            clientId: '01b9442f53375a88196b',
            clientSecret: '8c3524574e4973e54c4780b4ce65d1b3aa5bcb70',
          },
    },
        // nav栏
    themeConfig: {
        logo: '/assets/img/logo.png',        

        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                items: [{
                        items: [{
                            text: 'html',
                            link: '/frontend/html/html/'
                        }, ]
                    },
                    {
                        items: [{
                            text: 'css',
                            link: '/frontend/css/css/'
                        }, ]
                    },
                    {
                        items: [{
                                text: 'javascript初级',
                                link: '/frontend/javascript/javascript初级/'
                            },
                            {
                                text: 'javascript中级',
                                link: '/frontend/javascript/javascript中级/'
                            },
                        ]
                    },
                    {
                        items: [{
                            text: 'jquery',
                            link: '/frontend/jquery/jquery/'
                        }, ]
                    },
                    {
                        items: [{
                            text: 'node',
                            link: '/frontend/node/node/'
                        }, ]
                    },
                    {
                        items: [{
                            text: 'ajax',
                            link: '/frontend/ajax/ajax/'
                        }, ]
                    },
                    {
                        items: [{
                            text: 'vue',
                            link: '/frontend/vue/vue/'
                        }, ]
                    },
                    {
                        items: [{
                            text: '小程序',
                            link: '/frontend/小程序/小程序/'
                        }, ]
                    }
                ]
            },
            
            {
                text: '开发者工具',
                 items: [{
                        items: [{
                            text: '常用GIT命令大全',
                            link: '/tools/git/'
                        }, ]
                    },
                ]
            },
            {
                text: 'about',
                link: '/about/about/'
            },
            {
                text: 'github',
                link: 'https://google.com'
            },
        ],
        sidebar: 'auto'
    }
}