<template>
	<div class="page">
		<!--Todo Animate article display with GSAP-->

		<h1>Welcome to the GregLabs</h1>

		<ContentSection
			id="introduction"
			:article-count="2"
		>
			<template #title>
				Who are you?
			</template>

			<template #article1>
				<p>Hi! My name is Gregory Marshall. You can call me Greg!</p>
				<p>I'm an IT expert focused on web technologies and a crazy scientist, owner of <span><!--Todo link to here-->GregLabs.com</span></p>
				<!--Todo insert clickable show face-->
				<p v-show="false">Here's me face! (Warning scary guy ahead)</p>
				<img v-show="false" src="" alt="Greg's Mug" />
			</template>

			<template #article2>
				<p>What am I good at?</p>
				<ul>
					<li>As mentioned above, web tech</li>
					<li>More precisely, fullstack development</li>
					<li>Frontend: <span><!--Todo link to https://vuejs.org/-->Vue.js</span> (yes this site was made with Vue)</li>
					<li>Backend: <span><!--Todo link to https://spring.io/projects/spring-boot-->Java Spring</span></li>
					<li>AI, just scraping the surface for now</li>
					<li>Oh and an aviation enthusiast</li>
				</ul>
			</template>

			<p>Anyway, enough about me. Welcome to the lab! Hope you learn something cool here!</p>
		</ContentSection>

		<ContentSection
			id="greg-labs"
			:article-count="3"
		>
			<template #title>
				What is this place?
			</template>

			<template #article1>
				<p>This is the Lab. My digital portfolio.</p>
				<p>Over the years I came up with hundreds of ideas and projects, never finish them, rinse and repeat...</p>
				<p>I had enough of seeing them collecting dust, so I thought I'd host them here, completing them one at a time.</p>
			</template>

			<template #article2>
				<p>This place thus serves 2 purposes.</p>
				<ul>
					<li>One. I get to satisfy my never ending thinking brain not having to worry about project starts.</li>
					<li>Two. For You, the visitors! Browse this place freely, maybe learn some stuff! And for the particular kind, here is my card!</li>
				</ul>
			</template>

			<template #article3>
				<p>That's pretty much it! You can find the finished projects <span>here</span> and the <span>one</span> I'm working on.</p>
				<p>Hope you enjoy your stay! If you have any <span>questions or comments</span> go ahead!</p>
				<p>Greg out! o7 ~ o/</p>
			</template>
		</ContentSection>

		<!--Todo Article Component with SASS-->
		<article class="project-history">

		</article>

		<article class="current-project">
			<h2>Project Board</h2>
		</article>

		<article class="questions-comments">

		</article>
	</div>
</template>

<script setup lang="ts">
import ContentSection from '@/components/main/ContentSection.vue';
</script>

<style lang="scss">
@use '@/scss/General';

.page {
	@include General.page;
}
</style>
