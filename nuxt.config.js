module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'foresco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Foresco project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    cssSourceMap: false,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.devtool = false
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['directus-sdk-javascript', 'axios', 'jquery', 'slick-carousel', 'vue-parallax-js', 'vue-in-viewport-directive', 'vue-yandex-maps']
  },
  plugins: [
    { src: '~plugins/directus-sdk-javascript' },
    '~/plugins/vue-in-viewport-directive.js',
    { src: '~/plugins/vue-parallax-js.js', ssr: false },
    { src: '~/plugins/slick-carousel.js', ssr: false },
    { src: '~/plugins/owl-carousel.js', ssr: false },
    '~/plugins/yandexMap.js'
  ],
  css: [
    'node_modules/slick-carousel/slick/slick.css',
    'assets/main.styl'
  ]

}

