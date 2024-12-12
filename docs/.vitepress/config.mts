import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "掉头发ing Project",
  description: "A VitePress Site",
  themeConfig: {
    //左上角logo
    logo:'/hhh.png',
    //siteTitle:false,//标题隐藏：上面的title: "莓有烦恼Project"
    siteTitle:'每天都要嘻嘻哈哈',//设置后会覆盖原本的网页标题

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '奇奇怪怪一类',items:[
        { text: '高数',link:'/markdown-examples'},
        { text: '概率论与数理统计',link:'/markdown-examples'},
      ]},
      { text: '学习小笔记',items:[
        { text: 'C/C++', link: '/markdown-examples' },
        { text: 'Java', link: '/markdown-examples' },
        { text: '软件工程', link: '/markdown-examples' },
      ]}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Averyjhy' }
    ],

    footer:{
      copyright:"jhy18770010187@qq.com"
    }
  }
})
