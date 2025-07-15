import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/app.css"],
    modules: ["@nuxtjs/i18n", '@sidebase/nuxt-auth', '@pinia/nuxt'],
    i18n: {
        locales: [
            { code: 'fr', name: "Français", language: 'fr-FR', file: 'fr.json' },
            { code: 'en', name: "English", language: 'en-EN', file: 'en.json' },
        ],
        defaultLocale: 'fr',
    },
    auth: {
        baseURL: process.env.AUTH_ORIGIN,
        globalAppMiddleware: true,
        provider: {
            type: 'local',
            endpoints: {
                signIn: { path: '/login', method: 'post' },
                signOut: { path: '/logout', method: 'post' },
                getSession: { path: '/session', method: 'get' },
                signUp: false
            },
            token: {
                signInResponseTokenPointer: '/token/accessToken'
            }
        }
    },
    runtimeConfig: {
        authSecret: process.env.NUXT_AUTH_SECRET,
        public: {
            authUrl: process.env.NUXT_AUTH_URL || 'http://localhost:3000/api/auth'
        }
    }
})