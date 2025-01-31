<template>
	<nav>
		<RouterLink :to="{ name: 'Crypto-Hash' }">Data Hash</RouterLink>
		<RouterLink :to="{ name: 'Crypto-Block' }">Block</RouterLink>
	</nav>
</template>

<style lang="scss" scoped>

nav {
	position: fixed;
	top: 0;
	background: #181820;
	width: 100%;
	height: 4em;

	display: flex;
	align-items: center;

	a {
		color: #fff;
		text-decoration: none;
		font-weight: bold;
		font-size: larger;

		&:after {
			border-left: 1px solid white;
			content: '';
			margin: 0 1em;
		}

		&:last-child:after {
			display: none;
		}
	}

	.router-link-exact-active {
		color: red;
	}
}

</style>
