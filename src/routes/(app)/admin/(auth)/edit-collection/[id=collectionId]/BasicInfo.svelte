<script lang="ts">
	import { nftMinterCanister, type UnionKeyOf } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { getCollectionId } from './collectionId.context';
	import type {
		CollectionMetadata,
		Status
	} from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';
	import { fromE8s } from '$lib/utils/icp';

	export let loading = true;
	export let collectionMetadata: CollectionMetadata | undefined = undefined;

	let name = collectionMetadata?.name || '';
	let description = collectionMetadata?.desc || '';
	let images = collectionMetadata?.property_images || [];
	let thumbnail = collectionMetadata?.image_uri || '';
	let supplyCap = collectionMetadata?.supply_cap || 0;
	let price = collectionMetadata?.price || 0;
	let totalSupply = collectionMetadata?.total_supply || 0;
	// let imgValue = '';
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

	// function addDoc() {
	// 	if (imgValue) {
	// 		images.push(imgValue);
	// 		images = images;
	// 		imgValue = '';
	// 	}
	// }

	// function removeDoc(idx: number) {
	// 	images.splice(idx, 1);
	// 	images = [...images];
	// }
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

	<div class="flex flex-col">
		<div class="text-sm pb-2 font-medium leading-6 text-gray-900">Images</div>
		<div
			class="h-[14rem] border rounded p-2 bg-gray-50 items-center w-full overflow-hidden overflow-x-auto flex gap-2"
		>
			{#each images as src, i}
				<div class="p-1 shrink-0 border rounded-md w-52 h-52 relative bg-white">
					<img {src} class="h-full w-full rounded-md object-contain" alt={i + ' image'} />
				</div>
			{:else}
				<div class="flex flex-1 items-center justify-center">No images added yet</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		<div class="text-sm pb-2 font-medium leading-6 text-gray-900">Thumbnail URL</div>
		<div class="bg-gray-50 border border-gray-200 rounded-md p-2">{thumbnail}</div>
	</div>

	<div class="flex flex-col">
		<div class="text-sm pb-2 font-medium leading-6 text-gray-900">Price</div>
		<div class="bg-gray-50 border border-gray-200 rounded-md p-2">{fromE8s(price)}</div>
	</div>

	<div class="flex flex-col">
		<div class="text-sm pb-2 font-medium leading-6 text-gray-900">Supply cap</div>
		<div class="bg-gray-50 border border-gray-200 rounded-md p-2">{supplyCap}</div>
	</div>

	<div class="flex flex-col">
		<div class="text-sm pb-2 font-medium leading-6 text-gray-900">Total supply</div>
		<div class="bg-gray-50 border border-gray-200 rounded-md p-2">{totalSupply}</div>
	</div>
</div>
