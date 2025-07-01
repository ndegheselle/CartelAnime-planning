<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
    <div>
        <h2 class="text-center">{{ title }}</h2>
        <div class="grid grid-cols-2 text-xs opacity-50 content-center">
            <span class="text-center">MATIN</span>
            <span class="text-center border-l-1">APRES MIDI</span>
        </div>
    </div>
</template>