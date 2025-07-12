<template>
    <fieldset class="m-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Login</legend>

        <label class="fieldset-legend">Login</label>
        <input class="input" placeholder="Login" :class="{ 'input-error': !!error }" v-model="credentials.login" />

        <label class="fieldset-legend">Password</label>
        <input type="password" class="input" :class="{ 'input-error': !!error }" placeholder="Password"
            v-model="credentials.password" />
        <p class="label text-error w-xs text-wrap" :class="{ hidden: !error }">{{ error }}</p>

        <button class="btn mt-4" :disabled="loading" @click="handleLogin">
            <span :class="{ hidden: !loading }" class="loading loading-spinner"></span>
            Login
        </button>
    </fieldset>
</template>

<script setup lang="ts">
const { signIn } = useAuth()

const loading = ref(false);
const error = ref('');
const credentials = ref({
    login: '',
    password: ''
});

async function handleLogin() {
    loading.value = true;
    error.value = '';

    try {
        await signIn(credentials.value);
        await navigateTo('/dashboard');
    } catch (err: any) {
        error.value = err.message || err.data?.message || 'Login failed';
    } finally {
        loading.value = false;
    }
}
</script>