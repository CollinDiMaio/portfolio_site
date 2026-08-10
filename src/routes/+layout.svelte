<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


	
<div class="topnav">
	<a class="nav" href="/">Home</a>
	<a class="nav" href="/blog">Blog</a>
</div>

{@render children()}




<style>
	.topnav {
		background-color: #474747;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 50px;
		padding: 15px;
		border-radius: 15px;
	}

	.nav {
		color: #b8b8b8;
		text-decoration: none;
	}
</style>