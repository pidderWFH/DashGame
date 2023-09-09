// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    'nuxt-icon'
  ],
  "imports": {
    "dirs": ['stores']
},
css: ['~/assets/style/tailwind.css'],
app: {
  baseURL: '/Dash/'
},
})