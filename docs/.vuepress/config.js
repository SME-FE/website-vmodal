module.exports = {
  base: '/website-vmodal/',
  title: 'smv-modal',
  theme: 'one',
  description: 'use modal with no tear 😂',
  // TODO: add google ana
  // ga: '',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'smv-modal',
      description: 'use modal with no tear 😂'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'smv-modal',
      description: 'use modal with no tear 😂'
    }
  },
  themeConfig: {
    repo: 'SME-FE/smv-modal',
    docsRepo: 'SME-FE/website-vmodal',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Guide',
            link: '/basic'
          }
        ],
        sidebar: [
          {
            title: 'Guide',
            children: [
              '/basic',
              '/sfc',
              '/jsx',
              '/theme'
            ]
          },
          '/api'
        ]
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '主页',
            link: '/zh/',
          },
          {
            text: '教程',
            link: '/zh/basic'
          }
        ],
        sidebar: [
          {
            title: '教程',
            children: [
              '/zh/basic',
              '/zh/sfc',
              '/zh/jsx',
              '/zh/theme'
            ]
          },
          '/zh/api'
        ]
      }
    }  
  }
}