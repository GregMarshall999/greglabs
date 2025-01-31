<template>
	<div class="hasher">
		<div v-for="(input, index) in props.inputs" :key="index">
			<label>
				<slot :name="`label${index}`">
					Label {{ index }}
				</slot>
			</label>
			<input
				v-if="input.type == 'input'"
				type="text"
				v-model="hashInput[index]"
				@input="hashData"
			/>
			<textarea
				v-if="input.type == 'textarea'"
				type="text"
				v-model="hashInput[index]"
				@input="hashData"
			>
			</textarea>
		</div>

		<div>
			<label>Hash:</label>
			<p>{{ hash }}</p>
		</div>

		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const props = defineProps<{
	inputs: Array<{ type: string, initialValue?: string }>
}>();
const hashInput = ref([...props.inputs.map(i => i.initialValue)]);

const emit = defineEmits(['hashed']);
const hash = ref();
const hashData = async () => {
	hash.value = "";

	const encoder = new TextEncoder();
	const data = encoder.encode(parseData());

	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));

	hash.value = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");

	emit('hashed');
}

const parseData = () => {
	let outData = "";

	for(const d of hashInput.value) {
		if(d) {
			outData += d;
		}
	}

	return outData;
}

const incrementInputValue = (index: number) => {
	const inc = Number(hashInput.value[index]) + 1;
	hashInput.value[index] = inc.toString();

	hashData();
}
const resetInputValue = (index: number, value: string) => {
	hashInput.value[index] = value;
}

onBeforeMount(() => hashData());

defineExpose({
	hash,
	incrementInputValue,
	resetInputValue
})
</script>


<style lang="scss" scoped>

.hasher {
	border: 2px solid #fff;
	border-radius: 1em;
	background: #006666;
	padding: 2em .5em 1em 6em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 80%;

	div {
		display: flex;
		gap: 2em;
		align-items:start;
		width: 100%;

		label {
			font-weight: bold;
			min-width: 5%;
			padding: .2em 0;
		}

		textarea {
			min-height: 10em;
			width: 100%;
			max-width: 100%;
			text-align: start;
			vertical-align: text-top;
			resize: none;
		}

		p {
			border: 1px solid #fff;
			border-radius: .5em;
			background: #003535;
			margin: 0;
			min-height: 1em;
			width: 100%;
			max-width: 100%;
			overflow: hidden;
			padding: .5em;
		}
	}
}

</style>
