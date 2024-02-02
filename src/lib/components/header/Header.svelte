<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import Avatar from '../avatar/Avatar.svelte';

	$: onCollectionPage = $page.url.pathname.includes('collection');
</script>

<div
	class="w-full fixed z-50 h-20 shadow-lg flex items-center justify-between px-8 font-light rounded-b-2xl transition-all bg-white"
>
	{#if onCollectionPage}
		<a href="/market">← All listings</a>
	{/if}
	<a href="/"> <img alt="Estate DAO" class="h-10" src={logo} /></a>
	<div class="flex items-center gap-8">
		<a href="/new">Create collection</a>
		<a href="/market">Marketplace</a>
		{#if !onCollectionPage}
			<a href="https://www.estatedao.org/">About Us</a>
		{/if}
		<Avatar initalLetter="U" />
	</div>
</div>
