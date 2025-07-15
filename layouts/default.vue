<script setup>
import { useI18n } from '#imports';
const { locales, setLocale, locale } = useI18n();
const { status, data, signOut } = useAuth();
const isAuthenticated = computed(() => status.value === 'authenticated');

function logout()
{
    signOut({ callbackUrl: '/login' });
}

</script>

<template>
    <div class="min-h-screen h-full flex flex-col">
        <div class="navbar bg-base-200 shadow-sm">
            <div class="flex-1">
                <NuxtLink to="/"
                          class="btn btn-ghost text-xl">Ohohme</NuxtLink>
            </div>
            <div class="flex">
                <div v-if="isAuthenticated" class="dropdown dropdown-end">
                    <div tabindex="0"
                         role="button"
                         class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Avatar image"
                                 src="https://i.pravatar.cc" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box shadow z-1 mt-3 w-52 p-2">
                        <li class="menu-title">{{ data.user.name }}</li>
                        <li>
                            <a @click="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <main class="h-full flex flex-col">
            <slot />
        </main>
        <footer class="footer sm:footer-horizontal bg-base-200 text-neutral-content items-center p-4">
            <aside class="grid-flow-col items-center">
                <i class="text-3xl fa-solid fa-hashtag"></i>
                <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
            </aside>
            <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                    <i class="text-xl fa-brands fa-twitter"></i>
                </a>
                <a>
                    <i class="text-xl fa-brands fa-youtube"></i>
                </a>
                <a>
                    <i class="text-xl fa-brands fa-facebook"></i>
                </a>
            </nav>
        </footer>
    </div>
</template>