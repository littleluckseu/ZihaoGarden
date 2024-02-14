// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zihao\'s Garden',
  tagline: 'Dinosaurs are cool',
  url: 'https://www.wiki-hao.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["zh", "en"],
        indexBlog: false,
        indexDocs: true,
        indexPages: true
        // ```
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),

        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Zihao\'s Garden',
        hideOnScroll: false,

        items: [
          {
            type: 'dropdown',
            label: '📞通信学习',
            position: 'left',
            items: [
              {
                type:'docSidebar',
                label: '通信基础',
                sidebarId:'通信基础',
              },

            ],
          },
          {
            type:'docSidebar',
            label: '☘️数字花园',
            sidebarId:'数字花园',
            position: 'right',
          },
        {
          type:'docSidebar',
          label: '🪄成长笔记',
          sidebarId:'成长笔记',
          position: 'right',
        },
        {
          type:'docSidebar',
          label: '🚀AILearning',
          sidebarId:'AILearning',
          position: 'right',
        },
        {
          type:'docSidebar',
          label: '❇️ChatGPT专题',
          sidebarId:'ChatGPT专题',
          position: 'right',
        },
        {
          type:'docSidebar',
          label: '🎲德州扑克',
          sidebarId:'德州扑克',
          position: 'right',
        },
        {
          type:'docSidebar',
          label: '🌅留学专题',
          sidebarId:'留学专题',
          position: 'right',
        },
          {
            href: 'https://github.com/littleluckseu/ZihaoGarden',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            href: "https://www.zhihu.com/people/littleluck-18",
            label: "知乎主页",
          },
          {
            label: '资源仓库',
            href: 'https://github.com/linyuxuanlin/File-host',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
