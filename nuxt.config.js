const langEn = require('./lang/en-BE')
const langFr = require('./lang/fr-BE')
const langNl = require('./lang/nl-BE')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/electoral-gps-frontend/'
  }
} : {}

module.exports = {
  ...routerBase,
  content: {
    page: '/page/_slug',
    permalink: ':slug',
    isPost: false,
    generate: [
      'get',
      'getAll'
    ]
  },
  modules: [
    'nuxtent',
    ['nuxt-i18n', {
      seo: false,
      locales: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'fr',
          name: 'Français'
        },
        {
          code: 'nl',
          name: 'Nederlands'
        }
      ],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: langEn,
          nl: langNl,
          fr: langFr
        }
      }
    }]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'wecitizens-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Dosis:500,700|Noto+Sans:400,700' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/element-ui'],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '@/assets/style/main.scss'
  ]
}
