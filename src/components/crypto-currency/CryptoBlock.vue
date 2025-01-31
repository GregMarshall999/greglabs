<template>
	<DataHasher
		:inputs="[
			{ type: 'input', initialValue: '1' },
			{ type: 'input', initialValue: '0' },
			{ type: 'textarea' }
		]"
		ref="hash"
		@hashed="mine"
	>
		<template #label0>
			Block:
		</template>
		<template #label1>
			Nonce:
		</template>
		<template #label2>
			Data:
		</template>

		<button @click="startMining">Mine</button>
	</DataHasher>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataHasher from './DataHasher.vue';

const hash = ref();

let mining = false;
const startMining = () => {
	mining = true;

	hash.value.resetInputValue(1, '0');

	mine();
}

const mine = async () => {
	if(hash.value.hash.substring(0, 1) != '0' && mining) {
		hash.value.incrementInputValue(1);
	}
	else {
		mining = false;
	}
}
</script>
