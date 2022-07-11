/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  数字花园: [
    'Home',
    {
      type: 'category',
      label: '⚙️理论篇',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '理论篇/什么是数字花园？',
        '理论篇/为什么要有自己的数字花园？',
        '理论篇/数字花园的六大特点'
      ],
    },
    {
      type: 'category',
      label: '🏡实践篇',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '实践篇/带着问题找答案-实践篇',
        '实践篇/设定你关注的领域',
        '实践篇/熵减：我们管理知识的目的',
      ],
    },
    {
      type: 'category',
      label: '🌀输入篇',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'Input/带着问题找答案--输入篇',
        'Input/互联网信息分发简史',
        'Input/信息品位是什么？',
        'Input/好问题源自哪里？',
        'Input/我们提问的对象有哪些？',
        'Input/搜索之道',
        'Input/搜索之法',
        'Input/建立自己的信息渠道库',
        'Input/给自己一个“停止”按钮'
      ],
    },
    {
      type: 'category',
      label: '🛠️工具使用篇',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'Tools/我的知识生产工具流',
        'Tools/obsidian 插件安装指南',
      ],
    },
    {
      type: 'category',
      label: '🪄让记录成为习惯',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'Mycards/如何实现无压式记录？',
        'Mycards/无压记录的工作流',
      ],
    },
    {
      type: 'category',
      label: '🗃️MyCards',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'Mycards/必要难度理论',
        'Mycards/组块思维',
        'Mycards/写卡片时的工作流',
        'Mycards/知识卡片的好处',
        'Mycards/卡片写作原则',
        'Mycards/Zettelkasten 卡片盒笔记法',
      ],
    },
  ],

  成长笔记: [
    'Life/2022fall申请总结'
  ],
   
};

module.exports = sidebars;
