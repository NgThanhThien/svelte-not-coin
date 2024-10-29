<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	const { children } = $props();
</script>

<div>
	<Header />
	<main>{@render children?.()}</main>
	<Footer />
</div>

