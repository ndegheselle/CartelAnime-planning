<script setup>
import { useI18n, useLocalePath } from '#imports'
</script>

<template>
    <div class="min-h-screen h-full flex flex-col">
        <div class="navbar bg-base-200 shadow-sm">
            <div class="flex-1">
                <NuxtLink to="/" class="btn btn-ghost text-xl">Ohohme</NuxtLink>
            </div>
            <div class="flex gap-2">
                <ul class="menu menu-horizontal my-auto">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul class="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
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
                    <i class="text-3xl fa-brands fa-twitter"></i>
                </a>
                <a>
                    <i class="text-3xl fa-brands fa-youtube"></i>
                </a>
                <a>
                    <i class="text-3xl fa-brands fa-facebook"></i>
                </a>
            </nav>
        </footer>
    </div>
</template>