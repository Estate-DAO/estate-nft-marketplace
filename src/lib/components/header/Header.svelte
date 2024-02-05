<script lang="ts">
	import { page } from '$app/stores';
	import Avatar from '../avatar/Avatar.svelte';
	import EstateDaoLogo from '../icons/EstateDaoLogo.svelte';

	$: onCollectionPage = $page.url.pathname.includes('collection');
</script>

<div
	class="w-full fixed z-50 h-20 shadow-sm flex items-center justify-between px-8 font-light transition-all bg-white/75 backdrop-blur-xl"
>
	{#if onCollectionPage}
		<a href="/market" class="z-[1]">← All listings</a>
	{/if}

	<div class="absolute z-0 inset-x-0 flex justify-center">
		<EstateDaoLogo class="h-10" />
	</div>
	<div class="absolute z-[1] right-8 flex items-center gap-8">
		<a href="/collection/new">Create collection</a>
		<a href="/market">Marketplace</a>
		{#if !onCollectionPage}
			<a href="https://www.estatedao.org/">About Us</a>
		{/if}
		<Avatar href="/login" initalLetter="U" />
	</div>
</div>
