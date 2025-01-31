<template>
	<div class="crypto-page">
		<h1>SHA256 Hashing</h1>

		<DataHasher
			:inputs="[{ type: 'textarea' }]"
		>
			<template #label0>
				Data:
			</template>
		</DataHasher>
	</div>
</template>

<script setup lang="ts">
import DataHasher from '@/components/crypto-currency/DataHasher.vue';
</script>

<style lang="scss" scoped>
@use '@/scss/Crypto.scss';

.crypto-page {
	@include Crypto.page;
}

</style>
