export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ssaam-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css'
  ],

  router: {
    middleware: 'guard'
  },

  axios: {
    baseURL: 'https://119.92.169.226', // Used as fallback if no runtime config is provided
    withCredentials: true,
    debug: true,
    headers: {
      common: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJUWVAiOiJKV1QiLCJBTEciOiJIUzI1NiJ9.eyJSRUNPUkQiOiJleUpWYzJWeWMxOUJZMk52.STZJbEp2ZDJWdVlTQlRZV2QxYVc0aUxDSl',
        'API-Key': 'JMCS8280C000HaS9448da4501hBaa62295b187HaS4a060cfd05hjM47fcc96a38HaS9448da45',
        'Identity': '477466316933354762314336524167685337385278304B664A624C6A5250507A6331556C50723047675F4D',
        'user-agent': 'CCS Creative',
      },
      
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/qrcode.js',
    { src: '~/plugins/vuex-persist.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
