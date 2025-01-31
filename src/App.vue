<template>
	<MainNav />

    <RouterView />
</template>

<script setup lang="ts">
import MainNav from './components/main/MainNav.vue';
</script>

<style lang="scss">
@use '@/scss/General';

html {
	@include General.theme;
}

</style>
