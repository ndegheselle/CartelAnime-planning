<template>
    <h1>Dashboard</h1>
    <p>You are currently {{ status }}.</p>
    <div v-if="data">
    Hello {{ data.name }}!
  </div>
</template>

<script setup lang="ts">
const { status, data } = useAuth();
</script>