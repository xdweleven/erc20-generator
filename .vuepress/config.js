module.exports = {
  description: '使用最常用的ERC20令牌智能合约生成器，在不到一分钟的时间内创建一个ERC20令牌。无需登录，无需安装，无需编码。',
  base: '/erc20-generator/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'Content-Type', content: 'text/html; charset=utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://vittominacori.github.io/erc20-generator' }],
    ['meta', { property: 'og:image', content: 'https://vittominacori.github.io/erc20-generator/assets/images/erc20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://vittominacori.github.io/erc20-generator/assets/images/erc20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'ERC20代币生成器（test）' }],
    ['script', { src: '/assets/js/web3.min.js' }],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-115756440-2',
      },
    ],
  ],
  defaultNetwork: 'mainnet',
  infuraProjectId: '12ca5f4d25964a428951747cf4cd5660',
};
