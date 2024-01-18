<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import Avatar from '../avatar/Avatar.svelte';

	$: onCollectionPage = $page.url.pathname.includes('collection');

	$: console.log({ p: $page.url.pathname });
</script>

<div
	class="w-full h-20 shadow-lg flex items-center justify-between px-8 font-light rounded-b-2xl transition-all"
>
	{#if onCollectionPage}
		<a href="/market">← All listings</a>
	{/if}
	<a href="/"> <img alt="Estate DAO" class="h-10" src={logo} /></a>
	<div class="flex items-center gap-8">
		<a href="/market">Marketplace</a>
		{#if !onCollectionPage}
			<div>Whitepaper</div>
			<div>About Us</div>
		{/if}
		<Avatar initalLetter="U" />
	</div>
</div>
