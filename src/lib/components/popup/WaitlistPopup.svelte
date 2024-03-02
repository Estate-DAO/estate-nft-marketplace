<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import PlusIcon from '../icons/PlusIcon.svelte';
	import Input from '../input/Input.svelte';
	import { onMount, tick } from 'svelte';
	import { isRegisteredWaitlist, registerForWaitlist } from '$lib/backend/waitlist';
	import { authState } from '$lib/stores/auth';

	export let show = false;

	let init = false;
	let submitted = false;
	let loading = false;

	let firstName = '';
	let lastName = '';
	let email = '';
	let residenceCountry = '';
	let citizenshipCountry = '';
	let annualIncome: number;

	async function checkIfSubmitted() {
		await tick();
		if (!$authState.idString) return;
		submitted = await isRegisteredWaitlist($authState.idString);
		init = true;
	}

	async function submitData(e: SubmitEvent) {
		e.preventDefault();
		if (!$authState.idString) return;
		loading = true;
		try {
			submitted = await registerForWaitlist($authState.idString, {
				firstName,
				lastName,
				email,
				residenceCountry,
				citizenshipCountry,
				annualIncome
			});
		} catch {
			console.log('Something went wrong');
		} finally {
			loading = false;
			return false;
		}
	}

	onMount(checkIfSubmitted);
</script>

<div
	transition:fade={{ duration: 100 }}
	class="fixed inset-0 flex items-center justify-center h-full w-full z-[100]"
>
	<div class="absolute inset-0 bg-black/50 z-[1]"></div>
	<div
		in:scale={{ start: 0.9, delay: 100, duration: 100 }}
		class="bg-white z-[2] px-16 py-12 flex flex-col items-center gap-12 relative shadow-xl rounded-lg"
	>
		<button on:click={() => (show = false)} class="absolute top-4 right-4 z-[2]">
			<PlusIcon class="h-5 w-5 rotate-45" />
		</button>
		<div class="text-3xl">Register for waitlist</div>
		{#if submitted}
			<div
				class="inset-0 absolute flex flex-col items-center justify-center gap-4 h-full w-full z-[1]"
			>
				<div
					class="bg-green-200 h-16 w-16 rounded-full flex items-center justify-center text-white"
				>
					✅
				</div>
				<div>Your entry has been submitted</div>
				<div>
					Thank you for registering on EstateDAO, we will reach back shortly via email confirmation
				</div>
			</div>
		{/if}
		{#if !init}
			<div
				class="inset-0 absolute flex flex-col items-center justify-center gap-4 h-full w-full z-[1]"
			>
				<PlusIcon class="h-5 w-5 animate-spin" />
			</div>
		{/if}
		{#if $authState.isLoggedIn}
			<form
				class:opacity-0={submitted || !init}
				on:submit={submitData}
				class="flex flex-col items-center gap-12"
			>
				<div class="w-full grid lg:grid-cols-3 gap-8">
					<Input
						bind:value={firstName}
						disabled={loading}
						required
						label="First Name"
						placeholder="Enter you name"
					/>
					<Input
						bind:value={lastName}
						disabled={loading}
						required
						label="Last name"
						placeholder="Enter you surname"
					/>
					<Input
						bind:value={email}
						disabled={loading}
						required
						type="email"
						label="Email"
						placeholder="example@gmail.com"
					/>
					<Input
						bind:value={residenceCountry}
						disabled={loading}
						required
						label="Country of Residence"
						placeholder="Your country"
					/>
					<Input
						bind:value={citizenshipCountry}
						disabled={loading}
						required
						label="Country of Citizenship"
						placeholder="Your country"
					/>
					<Input
						bind:value={annualIncome}
						disabled={loading}
						required
						label="Annual Income"
						type="number"
						placeholder="(in USD)"
					/>
				</div>
				<Button disabled={loading} submit>Register</Button>
			</form>
		{:else}
			<div class="flex flex-col items-center justify-center gap-4 h-full w-full z-[1]">
				<div>You need to login before registering for the waitlist</div>
				<Button href="/login">Login</Button>
			</div>{/if}
	</div>
</div>
