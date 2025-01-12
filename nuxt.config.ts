// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "Toufique Elahi",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});
