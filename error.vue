<script setup>
</script>

<template>
    <NuxtLayout>
        <div class="flex m-auto">
            <i class="fa-solid fa-bugs text-6xl my-auto"></i>
            <div class="divider divider-horizontal "></div>
            <div>
                <h1 class="text-4xl">Ooops...</h1>
                <p class="text-base-content/50">{{ $t('errors.message') }}</p>
            </div>
        </div>
    </NuxtLayout>
</template>