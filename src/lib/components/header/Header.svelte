<script lang="ts">
	import { page } from '$app/stores';
	import { adminStore } from '$lib/stores/admin';
	import { authState } from '$lib/stores/auth';
	import Avatar from '../avatar/Avatar.svelte';
	import EstateDaoLogo from '../icons/EstateDaoLogo.svelte';
	import MenuIcon from '../icons/MenuIcon.svelte';
	import UserIcon from '../icons/UserIcon.svelte';
	import HeaderMenu from './HeaderMenu.svelte';

	let menuOpen = false;

	$: onCollectionPage = $page.url.pathname.includes('collection');
</script>

<div
	class="w-full fixed z-50 h-20 shadow-sm flex items-center justify-between px-8 font-light transition-all bg-white/75 backdrop-blur-xl"
>
	{#if onCollectionPage}
		<button on:click={() => history.back()} class="z-[1] hidden lg:block">← Go back</button>
		<button on:click={() => history.back()} class="z-[1] lg:hidden pr-4">←</button>
	{/if}

	<div class="absolute z-0 inset-x-0 flex justify-center">
		<a href="/">
			<EstateDaoLogo class="h-10" />
		</a>
	</div>
	<div class="lg:hidden absolute right-8">
		<button on:click={() => (menuOpen = !menuOpen)}>
			<MenuIcon class="h-6 w-6" />
		</button>
		{#if menuOpen}
			<HeaderMenu on:selected={() => (menuOpen = false)} />
		{/if}
	</div>
	<div class="absolute z-[1] lg:flex hidden right-8 items-center gap-8">
		{#if $adminStore.isLoggedIn}
			<a href="/admin">Admin</a>
		{/if}
		<a href="/market">Marketplace</a>
		{#if !onCollectionPage}
			<a href="/about">About Us</a>
		{/if}
		<Avatar href="/login">
			{#if $authState.isLoggedIn}
				U
			{:else}
				<UserIcon class="h-4 w-4" />
			{/if}
		</Avatar>
	</div>
</div>
