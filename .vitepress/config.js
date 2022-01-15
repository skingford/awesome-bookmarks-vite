// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/', // 部署二级目录/doc-next/',
  title: 'Awesome Bookmarks',
  lang: 'zh-CN',
  description: '个人收藏夹',
  head: createHead(),
  themeConfig: {
    repo: 'skingford/awesome-bookmarks-vite',
    docsRepo: 'skingford/awesome-bookmarks-vite',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'kingford' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'front-end, vitejs, vite, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '文档链接',
      items: [
        {
          text: 'Vue 3',
          link: 'https://v3.cn.vuejs.org/',
        },
        {
          text: 'React',
          link: 'https://zh-hans.reactjs.org/',
        },
      ],
    },
    {
      text: '库',
      link: '/repository/',
    },
    {
      text: '网站',
      link: '/website/',
      items: [
        {
          text: '介绍',
          link: '/website/introduction',
        },
        {
          text: '编程',
          link: '/website/program',
        },
        {
          text: '工具',
          link: '/website/tool',
        },
      ],
    },
    // {
    //   text: '赞助',
    //   link: '/other/donate',
    // },
  ];
}

function createSidebar() {
  return {
    '/website/': [
      {
        text: '网站',
        children: [
          {
            text: '介绍',
            link: '/website/introduction',
          },
        ],
      },
      {
        text: '编程',
        children: [
          {
            text: '编程工具',
            link: '/website/program',
          },
        ],
      },
      {
        text: '工具',
        children: [
          {
            text: '常用工具',
            link: '/website/tool',
          },
        ],
      },
    ],
    // '/': [
    //   {
    //     text: '指南',
    //     children: [
    //       {
    //         text: '介绍',
    //         link: '/guide/introduction',
    //       },
    //       {
    //         text: '开始',
    //         link: '/guide/',
    //       },
    //       {
    //         text: '项目配置',
    //         link: '/guide/settings',
    //       },
    //       {
    //         text: '路由',
    //         link: '/guide/router',
    //       },
    //       {
    //         text: '菜单',
    //         link: '/guide/menu',
    //       },
    //       {
    //         text: '权限',
    //         link: '/guide/auth',
    //       },
    //       {
    //         text: 'Mock&联调',
    //         link: '/guide/mock',
    //       },
    //       {
    //         text: '组件注册',
    //         link: '/guide/component',
    //       },
    //       {
    //         text: '样式',
    //         link: '/guide/design',
    //       },
    //       {
    //         text: '外部模块',
    //         link: '/guide/lib',
    //       },
    //       {
    //         text: '构建&部署',
    //         link: '/guide/deploy',
    //       },
    //       {
    //         text: 'Electron',
    //         link: '/guide/electron',
    //       },
    //     ],
    //   },
    //   {
    //     text: '深入',
    //     children: [
    //       {
    //         text: '跨域处理',
    //         link: '/dep/cors',
    //       },
    //       {
    //         text: '图标',
    //         link: '/dep/icon',
    //       },
    //       {
    //         text: '国际化',
    //         link: '/dep/i18n',
    //       },
    //       {
    //         text: '项目规范',
    //         link: '/dep/lint',
    //       },
    //       {
    //         text: '黑暗主题',
    //         link: '/dep/dark',
    //       },
    //     ],
    //   },
    //   {
    //     text: '其他',
    //     children: [
    //       {
    //         text: '常见问题',
    //         link: '/other/faq',
    //       },
    //       {
    //         text: '常见疑点',
    //         link: '/other/doubt',
    //       },
    //       {
    //         text: '测试服务',
    //         link: '/other/server',
    //       },
    //       {
    //         text: '相关项目',
    //         link: '/other/project',
    //       },
    //     ],
    //   },
    // ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
