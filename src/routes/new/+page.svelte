<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import { provisionCanister } from '$lib/backend';

	let name = '';
	let location = '';

	async function createCollection() {
		const actor = provisionCanister({ canisterId: 'be2us-64aaa-aaaaa-qaabq-cai' });
		const res = await actor.all_canister_create(name, location);
		console.log({ res });
	}
</script>

<div class="flex">
	<div class="flex flex-col grow gap-4">
		<Input bind:value={name} label="Collection name" placeholder="Enter name" />
		<Input bind:value={location} label="Location" placeholder="Enter location" />
	</div>
	<div class="shrink-0 border rounded-xl flex flex-col gap-8 p-6 h-fit">
		<div class="text-3xl font-thin">Creating new collection</div>

		<button
			on:click={createCollection}
			class="bg-black font-bold text-2xl rounded-xl w-min py-1 px-8 text-white"
		>
			Create
		</button>
	</div>
</div>
