<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';

	async function editData() {
		const actor = nftMinterCanister({
			canisterId: 'ctiya-peaaa-aaaaa-qaaja-cai'
		});
		const res = await actor.update_prop_data({
			area: 500,
			bath: 2,
			bed: 3
		});
		console.log({ res });
	}
</script>

<button
	on:click={editData}
	class="bg-black font-bold text-2xl rounded-xl w-min py-1 px-8 text-white"
>
	Edit
</button>
