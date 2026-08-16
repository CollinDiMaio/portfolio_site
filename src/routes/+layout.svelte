<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
</svelte:head>


<div class="bg-slate-700">
	<a class="bg-cyan-400 hover:bg-cyan-500" href="/">Home</a>
	<a class="bg-amber-500 hover:bg-amber-600" href="/blog">Blog</a>
</div>

{@render children()}
