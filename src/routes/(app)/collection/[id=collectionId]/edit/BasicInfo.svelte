<script lang="ts">
	import { nftMinterCanister, type UnionKeyOf } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { getCollectionId } from '../collectionId.context';
	import type {
		CollectionMetadata,
		Status
	} from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';

	export let loading = true;
	export let collectionMetadata: CollectionMetadata | undefined = undefined;

	let name = collectionMetadata?.name || '';
	let description = collectionMetadata?.desc || '';
	type StatusKey = UnionKeyOf<Status>;
	let status: StatusKey = (Object.keys(collectionMetadata?.status || {})[0] ||
		'Draft') as StatusKey;

	const { minterCanId } = getCollectionId();

	export const saveData = async () => {
		loading = true;
		console.log({ minterCanId });
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_basic_details(
				[name],
				[description],
				[
					{
						[status]: null
					} as Status
				]
			);
			console.log('updated', { res });
		} catch (e) {
			console.error('Error update_basic_details data', e);
		} finally {
			loading = false;
		}
	};

	const handleStatusChange = ({ detail }: { detail: string }) => (status = detail as StatusKey);
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Title" bind:value={name} placeholder="Enter a title" />
	<Select
		label="Status"
		on:change={handleStatusChange}
		value={status}
		options={[
			{ value: 'Ended', label: 'Ended' },
			{ value: 'Live', label: 'Live' },
			{ value: 'Draft', label: 'Draft' },
			{ value: 'Upcoming', label: 'Upcoming' }
		]}
	/>
	<Textarea
		disabled={loading}
		bind:value={description}
		label="Description"
		placeholder="Enter a description"
		rows={5}
	/>
</div>
