<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';

	const collectionId = '1';

	async function fetchCollectionDetails() {
		const actor = nftMinterCanister({
			canisterId: 'c5kvi-uuaaa-aaaaa-qaaia-cai'
		});
		// await actor
		// 	.get_market_details()
		// 	.then((data) => console.log('get_market_details', data))
		// 	.catch(() => console.error('Error fetching get_market_details data'));
		await actor
			.get_collection_metadata()
			.then((data) => console.log('get_collection_metadata', data))
			.catch((e) => console.error('Error fetching get_collection_metadata data', e));
		await actor
			.get_collection_status()
			.then((data) => console.log('get_collection_status', data))
			.catch((e) => console.error('Error fetching get_collection_status data', e));
		// await actor
		// 	.get_metadata(collectionId)
		// 	.then((data) => console.log('get_metadata', data))
		// 	.catch(() => console.error('Error fetching get_metadata data'));
		// await actor
		// 	.get_prop_data()
		// 	.then((data) => console.log('get_prop_data', data))
		// 	.catch(() => console.error('Error fetching get_prop_data data'));
	}
</script>

<button on:click={fetchCollectionDetails}>fetch</button>
