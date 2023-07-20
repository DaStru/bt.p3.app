// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    "plugins/mqtt.js"
  ],
  devtools: { enabled: true },
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
})
