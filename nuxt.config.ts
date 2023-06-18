// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/ionic',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  ionic: {
    css: {
      utilities: true
    }
  }
})
