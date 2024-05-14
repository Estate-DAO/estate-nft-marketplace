<script lang="ts">
	import { provisionCanister, provisionCanisterV2 } from '$lib/backend';

	async function fetchCollections() {
		const actor = provisionCanisterV2();

		const all = await actor.list_properties();
		console.log(all);
	}
</script>

<button on:click={fetchCollections}>list all</button>
