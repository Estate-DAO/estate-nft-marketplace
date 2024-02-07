<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { getCollectionId } from '../collectionId.context';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let loading = true;
	export let collectionMetadata: CollectionMetadata;

	const { minterCanId } = getCollectionId();

	export const saveData = async () => {
		console.log('saveData called');
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_name_desc([name], [description]);
			console.log({ res });
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let name = collectionMetadata?.name || '';
	let description = collectionMetadata?.desc || '';
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Title" bind:value={name} placeholder="Enter a title" />
	<Textarea
		disabled={loading}
		bind:value={description}
		label="Description"
		placeholder="Enter a description"
		rows={5}
	/>
</div>
