// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@huntersofbook/naive-ui-nuxt",
    "@nuxtjs/tailwindcss",
  ],

  naiveUI: {
    themeOverrides: {
      common: {
        primaryColor: "#4a6cf7",
        primaryColorHover: "#293d96",
      },
    },
  },
});
