<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import PlusIcon from '../icons/PlusIcon.svelte';
	import Input from '../input/Input.svelte';

	export let show = false;

	let submitted = false;

	function submitData() {
		submitted = true;
	}
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
					class="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center text-white"
				>
					✔︎
				</div>
				<div>Thank you for submitting the form</div>
			</div>
		{/if}

		<form
			class:opacity-0={submitted}
			on:submit={submitData}
			class="flex flex-col items-center gap-12"
		>
			<div class="w-full grid grid-cols-3 gap-8">
				<Input required label="First Name" placeholder="Enter you name" />
				<Input required label="Last name" placeholder="Enter you surname" />
				<Input required label="Email" placeholder="example@gmail.com" />
				<Input required label="Country of Residence" placeholder="Your country" />
				<Input required label="Country of Citizenship" placeholder="Your country" />
				<Input required label="Annual Income" type="number" placeholder="(in USD)" />
			</div>
			<Button submit>Register</Button>
		</form>
	</div>
</div>
