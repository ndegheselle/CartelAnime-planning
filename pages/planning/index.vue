<script setup>
import { ref } from 'vue';
import DayHeader from './DayHeader.vue';

const users = ref([
    { avatarUrl: 'https://avatar.iran.liara.run/public?rand=1', role: 'Technician', name: 'User 1' },
    { avatarUrl: 'https://avatar.iran.liara.run/public?rand=2', role: 'Manager', name: 'User 2' },
    { avatarUrl: 'https://avatar.iran.liara.run/public?rand=3', role: 'Developer', name: 'User 3' }
]);

const work = {
    total: 0,
    intervales: [
        { from: new Date(), to: new Date() },
    ]
}
</script>

<template>
    <div class="flex">
        <h2 class="w-32"></h2>
        <div class="grid grid-cols-7 w-full my-2">
            <DayHeader title="Lundi" />
            <DayHeader title="Mardi" />
            <DayHeader title="Mercredi" />
            <DayHeader title="Jeudi" />
            <DayHeader title="Vendredi" />
            <DayHeader title="Samedi" />
            <DayHeader title="Dimanche" />
        </div>
    </div>
    <div class="flex"
         v-for="user in users">

        <div class="w-32 flex items-center gap-2">
            <div class="avatar">
                <div class="mask mask-squircle h-10 w-10">
                    <img :src="user.avatarUrl"
                         alt="User Avatar">
                </div>
            </div>
            <div>
                <div class="font-bold">{{ user.name }}</div>
                <div class="text-sm opacity-50">{{ user.role }}</div>
            </div>
        </div>
        <div class="w-full flex items-center">
            <svg class="w-full h-4"
                 viewBox="0 0 10080 100"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect x="120"
                      width="1440"
                      height="100"
                      rx="20"
                      fill="var(--color-primary)" />
            </svg>
        </div>
    </div>
</template>