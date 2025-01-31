<template>
	<section>
		<h2>
			<slot name="title"></slot>
		</h2>

		<article v-for="count in props.articleCount" :key="count">
			<slot :name="`article${count}`">Article {{ count }}</slot>
		</article>

		<slot></slot>

		<button @click="emit('prevClicked')"><slot name="prevButtonText"></slot></button>
		<button @click="emit('nextClicked')"><slot name="nextButtonText"></slot></button>
	</section>
</template>

<script setup lang="ts">

const props = defineProps({
	articleCount: Number
});

const emit = defineEmits(['prevClicked', 'nextClicked']);

</script>

<style lang="scss">



</style>
