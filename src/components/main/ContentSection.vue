<template>
	<section>
		<h2>
			<slot name="title"></slot>
		</h2>

		<article v-for="count in props.articleCount" :key="count">
			<slot :name="`article${count}`">Article {{ count }}</slot>
		</article>

		<slot></slot>
	</section>
</template>

<script setup lang="ts">

const props = defineProps({
	articleCount: Number
});

</script>
