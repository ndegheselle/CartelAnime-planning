import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    vite: {
        plugins: [tailwindcss()],
    },

    css: ["~/assets/app.css"],
    modules: [
        "@nuxtjs/i18n"
    ],
    i18n: {
        locales: [
            { code: 'fr', name: "Français", language: 'fr-FR', file: 'fr.json' },
            { code: 'en', name: "English", language: 'en-EN', file: 'en.json' },
        ],
        defaultLocale: 'fr',
    }
})