// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  vite:{
    plugins: [tailwindcss()]
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/seo',
    'nuxt-vitalizer',
  ],
  ui: {
    colorMode: false, 
  },
  nitro: {
    externals: {
      inline: ['unhead']
    }
  },

  app:{
    head:{
      title: 'Betselot Abraham- Personal Website',
      meta:[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to my personal website! I am Betselot Abraham, a passionate software developer and tech enthusiast. Here, you can explore my projects, read my blog posts, and learn more about my journey in the world of technology.' },
        { name: 'keywords', content: 'Betselot Abraham, personal website, software developer, tech enthusiast, projects, blog, technology, AI, Offshoring, Storytelling, Film, Technology, Pan-African Network, Zeleman Academy, MeliaCRED, Software Development, Coding, GitHub, LinkedIn, Betselot Resume, Betselot Skills' },
      ],
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://www.betselot.com' },

      ]
    }
  },

  site:{
    name: 'Betselot Abraham- Personal Website',
    // url:'',
    description: 'Welcome to my personal website! I am Betselot Abraham, a passionate software developer and tech enthusiast. Here, you can explore my projects, read my blog posts, and learn more about my journey in the world of technology.',
    indexable: true,
  },
  vitalizer: {
    // Remove the render-blocking entry CSS
    disableStylesheets: 'entry'
  }
})