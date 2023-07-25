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
  ionic: {
    css: {
      utilities: true
    }
  },
})
