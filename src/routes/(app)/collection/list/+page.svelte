<script lang="ts">
	import { provisionCanister } from '$lib/backend';

	async function fetchCollections() {
		const actor = provisionCanister();

		const all = await actor.get_all_minter_canisters();
		if ('Ok' in all) {
			console.log({ all: all.Ok.map((o) => o.toText()) });
		}
	}
</script>

<button on:click={fetchCollections}>list all</button>
