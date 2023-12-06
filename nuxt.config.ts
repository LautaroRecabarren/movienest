export default {
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/global.css'
        }
      ]
    }
  },
  build: {
    extend(config, ctx) {
    },
  },
}