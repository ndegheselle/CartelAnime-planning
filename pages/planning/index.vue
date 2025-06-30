<script setup>
import { ref } from 'vue';

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
        <h2 class="w-32">Gens</h2>
        <div class="grid grid-cols-7 w-full">
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Lundi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Mardi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Mercredi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Jeudi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Vendredi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Samedi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Dimanche</h2>
                </div>
            </div>
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
        <div class="grid grid-cols-7 w-full">
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Lundi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Mardi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Mercredi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Jeudi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Vendredi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Samedi</h2>
                </div>
            </div>
            <div class="card bg-base-100 card-border">
                <div class="card-body">
                    <h2>Dimanche</h2>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
table td,
table,
th {
    border-left-width: 1px;
    border-color: color-mix(in oklab, var(--color-base-content) 5%, transparent);
}
</style>