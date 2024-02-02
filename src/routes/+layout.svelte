<script lang="ts">
	import { browser } from '$app/environment';
	import { initializeAuthClient } from '$lib/auth/init';
	import Header from '$lib/components/header/Header.svelte';
	import '$lib/css/app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			initializeAuthClient();
		}
	});
</script>

<svelte:head>
	<title>EstateDAO</title>
</svelte:head>

<div class="w-full flex justify-center">
	<Header />
	<div class="w-full max-w-6xl pt-24">
		<slot />
	</div>
</div>
