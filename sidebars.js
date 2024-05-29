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
      label: '🎆实践篇',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '实践篇/带着问题找答案-实践篇',
        '实践篇/设定你关注的领域',
        '实践篇/熵减：我们管理知识的目的',
        '实践篇/怎么搭建自己的知识体系',
        '实践篇/知识卡片',
        'Mycards/知识卡片实践案例'
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
        'Input/给自己一个“停止”按钮',
        'Input/信息搜集与处理之全面了解一个行业&职业',
        
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
    'Life/我的2023',
    'Life/2022的吉光片羽',
    'Life/2021年复盘',
    'Life/2020年复盘'
  ],
  ChatGPT专题: [
    'ChatGPT/谈谈 Chatgpt 的奇技淫巧'
  ],
  德州扑克: [
    'TexasPoker/必读！关于德扑系列文章和进交流群',
    {
      type: 'category',
      label: '⚙️Single Raised Pot(SRP)',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'TexasPoker/BTN vs BB 高牌面攻防策略 Part1',
        'TexasPoker/BTN vs BB 高牌面攻防策略 Part2',
        'TexasPoker/BTN vs BB 中低张彩虹面攻防'
      ],
    },
    {
      type: 'category',
      label: '🎲3B pot',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'TexasPoker/SB vs BTN 3OA 攻防策略',
        'TexasPoker/SB vs BTN 3OA 公对彩虹面',
        'TexasPoker/BTN vs CO 3IA 攻防策略',
      ],
    },
    'TexasPoker/K72彩虹面转牌策略分析',
    'TexasPoker/德扑低级别剥削弃牌和抓鸡策略',
    'TexasPoker/利用Solver系统研究 GTO 策略',
  ],
  AILearning: [
    'AILearning/VScode+Anaconda+Pytorch环境搭建指南'
  ],
  通信基础: [
    'TeleCommunication/信道容量与香农公式',
    'TeleCommunication/一文讲透无线信道衰落',
    'TeleCommunication/OFDM系统详解',
    'TeleCommunication/WiFi 802.11n Link-level Simulation MATLAB',
    'TeleCommunication/MIMO详解（1）分集技术',
    'TeleCommunication/MIMO 详解系列（2）：ZF 和 MMSE 算法',
    'TeleCommunication/MIMO详解系列（3）：MU-MIMO',
    'TeleCommunication/802.11协议族简介和学习资源推荐',
    'TeleCommunication/802.11n协议精读（1）从 SISO 到 MIMO',
    'TeleCommunication/802.11n协议精读（2）信道带宽和MCS',
    'TeleCommunication/802.11n协议精读（3）PLCP Header 结构',
    'TeleCommunication/802.11协议精读（4）Transmitter Block Diagram'
  ],
  留学专题:[
    'Studyabroad/青临的留学小店', 
    'Studyabroad/必读！为什么我推荐你留学diy', 
    'Studyabroad/辨别中介是否套模板写作', 
    {
      type: 'category',
      label: '📚文书准备',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'Studyabroad/Diy文书之前期准备', 
        'Studyabroad/Diy文书：SoP写作指南',
      ],
    },
    'Studyabroad/EE方向背景提升', 
    'Studyabroad/美国EE方向梳理',
    {
      type: 'category',
      label: '🌀CV写作指北',
      link: {
        type: 'generated-index',
        description: '一本极简的 CV 写作指南，适合申请季的学生自己 Diy。',
        keywords: ['x', 'x'],
      },
      items: [
        'Studyabroad/CV guidebook/序言', 
        'Studyabroad/CV guidebook/CV 写作流程一览',
        'Studyabroad/CV guidebook/Part1 Personal Information', 
        'Studyabroad/CV guidebook/Part2 Education',
        'Studyabroad/CV guidebook/Part3 Experience',
        'Studyabroad/CV guidebook/Part4 Additional Information',
        'Studyabroad/CV guidebook/FAQ',
        'Studyabroad/CV guidebook/附录'
      ],
    },
  ],
};

module.exports = sidebars;
