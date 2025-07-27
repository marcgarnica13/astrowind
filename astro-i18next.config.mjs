/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "de", "es"],
  namespaces: ["common", "navigation", "home", "about", "services"],
  defaultNamespace: "common",
  routes: {
    de: {
      about: "ueber-uns",
      services: "dienstleistungen",
      policies: "richtlinien",
    },
    es: {
      about: "acerca-de",
      services: "servicios",
      policies: "politicas",
    },
  },
};