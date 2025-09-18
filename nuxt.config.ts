// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Universidad Mondragón México. Campus Querétaro.',
      meta: [
        { name: 'description', content: 'Universidad Mondragón México. Campus Querétaro' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css',
  ],
});
