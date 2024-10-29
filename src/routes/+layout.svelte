<script lang="ts">
	import './polyfills.ts';

	import '../app.css';
	import { init, backButton } from '@telegram-apps/sdk';
	import { onDestroy } from 'svelte';
	import Layout from './$source/Layout.svelte';

	init();

	backButton.mount();

	let { children } = $props();

	onDestroy(() => {
		backButton.unmount();
	});
</script>

<div class="app">
	<Layout>
		{@render children()}
	</Layout>
</div>
