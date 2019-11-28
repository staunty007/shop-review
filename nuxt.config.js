
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet", href: "/guest/css/core-style.css"},
    ],
    script: [
      {src: '/guest/js/rocket-loader.min.js', 'data-cf-settings':'d4635608c93806addfac3c50-|49', defer: true},
      {src: '/guest/js/jquery/jquery-2.2.4.min.js', defer: true},
      {src: '/guest/js/bootstrap.min.js', defer: true},
      {src: '/guest/js/popper.min.js', defer: true},
      {src: '/guest/js/plugins.js', defer: true},
      {src: '/guest/js/active.js', defer: true},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fbb710' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fragment.js',
    '~/plugins/firebase.js',
    '~/plugins/localStorage.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
