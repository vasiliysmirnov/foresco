module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'foresco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    vendor: ['directus-sdk-javascript', 'vue-parallax-js', 'vue-in-viewport-directive']
  },
  plugins: [
    '~/plugins/vue-in-viewport-directive.js',
    { src: '~plugins/directus-sdk-javascript' },
    { src: '~/plugins/vue-parallax-js.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  css: [
    'swiper/dist/css/swiper.css',
    'assets/main.styl'
  ]

}

