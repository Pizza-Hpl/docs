const secret =require('./secret')
module.exports={
    '@vuepress/back-to-top': true,
   '@vssue/vuepress-plugin-vssue': {
       // 设置 `platform` 而不是 `api`
       platform: 'github-v4',
 
       // 其他的 Vssue 配置
       owner: 'Pizza-Hpl',
       repo: 'docs',
       clientId: 'secret.clientId',
       clientSecret: 'secret.clientSecret',
     },
    
}