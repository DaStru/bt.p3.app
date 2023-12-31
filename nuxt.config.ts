const path = require('path');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    "plugins/mqtt.js"
  ],
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/ionic',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  ssr: false,
  ionic: {
    css: {
      utilities: true
    }
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  }
})
