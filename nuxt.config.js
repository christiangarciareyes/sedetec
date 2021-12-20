export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'sedetc',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  css: [],

  plugins: [],

  googleFonts: {
    display: 'swap',
    families: {
      Raleway: {
        wght: [100, 400, 600],
        ital: [100],
      },
    },
  },

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {},
}
