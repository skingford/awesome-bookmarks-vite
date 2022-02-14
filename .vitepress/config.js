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
    {
      text: 'Web',
      link: '/web/',
    },
    {
      text: 'GoLang',
      link: '/go/',
    },
    {
      text: 'Python',
      link: '/python/',
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

    '/go/': [
      {
        text: 'go',
        children: [
          {
            text: '文档',
            link: '/go/',
          },
        ],
      },
    ],
    '/python/': [
      {
        text: 'python',
        children: [
          {
            text: '文档',
            link: '/python/',
          },
          {
            text: 'pip | pipenv',
            link: '/python/pipenv',
          },
        ],
      },
    ],
    '/': [
      {
        text: 'FrontEnd',
        children: [
          {
            text: '文档',
            link: '/web/',
          },
          {
            text: '库',
            link: '/web/repository',
          },
        ],
      },
    ],
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
