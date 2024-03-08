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

		<div class="flex flex-col items-center justify-center gap-4 h-full w-full z-[1]">
			<div>
				The waitlist is now closed. The invites for completion of KYC would be sent out to selected
				users. We will notify you for further process. Thank you for registering for the waitlist!
			</div>
			<Button on:click={() => (show = false)}>Close</Button>
		</div>
	</div>
</div>
