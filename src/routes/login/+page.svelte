<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DfinityIcon from '$lib/components/icons/DfinityIcon.svelte';
	import EstateDaoLogo from '$lib/components/icons/EstateDaoLogo.svelte';
	import LandingBg from '$lib/components/landing-bg/LandingBg.svelte';
	import { authState, authHelper } from '$lib/stores/auth';
	import { initializeAuthClient } from '$lib/auth/init';
	import { tick } from 'svelte';

	const APPLICATION_NAME = encodeURI('Hot or Not');
	const IDENTITY_PROVIDER = 'https://identity.ic0.app/#authorize'; //`http://${process.env.INTERNET_IDENTITY_CANISTER_ID}.localhost:4943`

	let error = '';

	async function handleSuccessfulLogin() {
		try {
			const principal = $authHelper.client?.getIdentity()?.getPrincipal();
			await initializeAuthClient();
			await tick();

			console.log('logged in', { principal });

			$authState.showLogin = false;
		} catch (_) {
			error = 'Something went wrong. Please refresh the page and try login again.';
		} finally {
			$authHelper.init = true;
		}
	}

	function handleError(e?: string) {
		error = 'Error while logging in. Please try again or use a different method';
		console.warn('Error while logging in using, Details: ', e);
		$authHelper.init = true;
	}

	async function handleLogin() {
		$authHelper.init = false;
		await $authHelper.client?.login({
			maxTimeToLive: BigInt(30 * 24 * 60 * 60 * 1000 * 1000 * 1000),
			onSuccess: () => handleSuccessfulLogin(),
			onError: (e) => handleError(e),
			identityProvider: IDENTITY_PROVIDER
		});
	}

	async function logout() {
		$authHelper.init = false;
		await $authHelper?.client?.logout();
		initializeAuthClient();
	}
</script>

<div
	class="flex flex-col overflow-hidden h-screen w-full items-center justify-center pb-20 gap-4 relative"
>
	<LandingBg />

	<div class="flex z-[3] min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div
			class="bg-white/75 backdrop-blur-xl flex flex-col items-center gap-8 px-6 py-12 shadow sm:rounded-lg sm:px-12"
		>
			<EstateDaoLogo class="h-10 mx-auto" />
			{#if !$authState.isLoggedIn}
				<h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in or join
				</h2>

				<Button
					disabled={!$authHelper?.init}
					loading={!$authHelper?.init}
					on:click={handleLogin}
					secondary
					class="w-min"
				>
					<div class="flex items-center justify-center gap-2">
						<DfinityIcon class="h-4" />
						<span class="text-nowrap">Login using internet identity</span>
					</div>
				</Button>
				<p class="text-center text-sm text-gray-500 max-w-xs">
					By creating an account you agree to our
					<a href="#t&c" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Terms and conditions
					</a>
				</p>
			{:else}
				<h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					You are already logged in!
				</h2>
				<Button href="/market" class="w-min">Go to the marketplace</Button>
				<Button on:click={logout} loading={!$authHelper?.init} secondary class="w-min"
					>Logout</Button
				>
			{/if}
		</div>
	</div>
</div>
