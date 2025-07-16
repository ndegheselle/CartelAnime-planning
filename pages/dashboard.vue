<script setup lang="ts">
const { status, data } = useAuth();
</script>

<template>
    <div class="container mx-auto mt-2">
        <div class="flex flex-wrap gap-4">
            <div v-for="index in 10" class="flex w-52 flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div class="flex flex-col gap-4">
                        <div class="skeleton h-4 w-20"></div>
                        <div class="skeleton h-4 w-28"></div>
                    </div>
                </div>
                <div class="skeleton h-32 w-full"></div>
            </div>
        </div>
    </div>
</template>
