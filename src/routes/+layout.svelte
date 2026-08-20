<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
</svelte:head>


<div class="bg-gray-700 flex justify-around w-4/5 mx-auto my-2 py-1 rounded-3xl">
	<a class="bg-cyan-400 hover:bg-cyan-500 p-4 px-6 rounded-3xl" href="/">Home</a>
	<a class="bg-amber-500 hover:bg-amber-600 p-4 px-6 rounded-3xl" href="/blog">Blog</a>
</div>

{@render children()}
