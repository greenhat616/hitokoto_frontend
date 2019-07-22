
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    titleTemplate: '%s - 一言',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Hitokoto,一言,Api,免费Api,一言网,Hitokoto.cn,感动,动漫,二次元,台词,语句,一句话,Offical,官方,ヒトコト' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/gh/MoePlayer/APlayer@latest/dist/APlayer.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/highlight.js@9.12.0/styles/solarized-dark.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/default.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/marked',
    // '@/plugins/sw.js'
    '@/plugins/lazyload'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/auth',
    'nuxt-vuex-localstorage'
  ],
  /*
  ** Auth module configuration
  ** See https://auth.nuxtjs.org/api/options.html
  */
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/',
      callback: '/login'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  manifest: {
    crossorigin: 'use-credentials'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      ctx.loaders.less.javascriptEnabled = true
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  },
  loaders: {
  }
}
