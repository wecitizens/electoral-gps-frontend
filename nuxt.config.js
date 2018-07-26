// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/electoral-gps-frontend/'
  }
} : {}

module.exports = {
  ...routerBase,	
  modules: [
    ['nuxt-i18n', {
      locales: ['en', 'fr', 'nl'],
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
		en: {
		    app: {
		      title: 'Electoral GPS'
		    },
		    district: {
		    	what_is_your_postcode: 'What is your postal code?',
		    	help_customise_survey: 'This will help us customize your survey',
		    	your_postcode: 'Your postal code'
		    },
		    button: {
		    	lets_go: 'Let\'s go'
		    },
		    input: {
		    	place_holder: {
		    		your_postcode: 'Your postal code'
		    	}
		    }
		  },
		  fr: {
		    app: {
		      title: 'GPS électoral'
		    },
		    district: {
		    	what_is_your_postcode: 'Quel est ton code postal ?',
		    	help_customise_survey: 'Ceci nous aidera à personnaliser ton questionnaire'
		    },
		    button: {
		    	lets_go: 'C\'est parti'
		    },
		    input: {
		    	place_holder: {
		    		your_postcode: 'Ton code postal'
		    	}
		    }
		  },
		  nl: {
		    app: {
		      title: 'Electoral GPS'
		    },
		    district: {
		    	what_is_your_postcode: 'Wat is jouw postcode?',
		    	help_customise_survey: 'Dit helpt ons om uw enquête aan te passen'
		    },
		    button: {
		    	lets_go: 'Laten we gaan'
		    },
		    input: {
		    	place_holder: {
		    		your_postcode: 'Je post code'
		    	}
		    }
		  }  
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
