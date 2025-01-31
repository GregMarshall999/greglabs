<template>
	<div class="crypto-page">
		<h1>Block</h1>

		<CryptoBlock />
	</div>
</template>

<script setup lang="ts">
import CryptoBlock from '@/components/crypto-currency/CryptoBlock.vue';
</script>

<style lang="scss" scoped>
@use '@/scss/Crypto.scss';

.crypto-page {
	@include Crypto.page;
}

</style>
