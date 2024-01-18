<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '$lib/css/app.css';
</script>

<svelte:head>
	<title>EstateDAO</title>
</svelte:head>

<Header />
<slot />
