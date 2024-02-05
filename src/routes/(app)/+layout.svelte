<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
</script>

<svelte:head>
	<title>EstateDAO</title>
</svelte:head>

<div class="w-full flex justify-center">
	<Header />
	<div class="w-full max-w-6xl pt-32 px-8 6xl:px-0">
		<slot />
	</div>
</div>
