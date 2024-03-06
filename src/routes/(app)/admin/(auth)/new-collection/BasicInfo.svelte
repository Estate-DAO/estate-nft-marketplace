<script lang="ts" context="module">
	type StatusKey = UnionKeyOf<Status>;

	export type BasicInfoData = {
		name: string;
		description: string;
		status: StatusKey;
		supplyCap: number;
		price: number;
		coverImage: string;
		userNNsPrincipal: string;
	};
</script>

<script lang="ts">
	import { type UnionKeyOf } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import type { Status } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';
	import { isPrincipal } from '$lib/utils/isPrincipal';

	export let loading = true;
	export let data: BasicInfoData = {
		name: '',
		description: '',
		status: 'Draft',
		supplyCap: 1000,
		price: 1,
		coverImage: '',
		userNNsPrincipal: ''
	};

	const handleStatusChange = ({ detail }: { detail: string }) =>
		(data.status = detail as StatusKey);
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Title" bind:value={data.name} placeholder="Enter a title" />
	<Select
		label="Status"
		on:change={handleStatusChange}
		value={data.status}
		options={[
			{ value: 'Ended', label: 'Ended' },
			{ value: 'Live', label: 'Live' },
			{ value: 'Draft', label: 'Draft' },
			{ value: 'Upcoming', label: 'Upcoming' }
		]}
	/>
	<Input
		disabled={loading}
		label="Thumbnail Image"
		bind:value={data.coverImage}
		placeholder="Enter an image url"
	/>
	<div class="flex flex-col gap-1 w-full">
		<Input
			disabled={loading}
			label="Owner's NNS Principal ID"
			bind:value={data.userNNsPrincipal}
			placeholder="Enter NNS Principal ID"
		/>
		{#await isPrincipal(data.userNNsPrincipal) then isPrincipal}
			{#if !isPrincipal}
				<div class="text-red-500 text-xs">
					Invalid NNS Principal ID. Please correct this before submitting the form
				</div>
			{:else}
				<div class="text-green-500 text-xs">NNS Principal ID is valid</div>
			{/if}
		{/await}
		<div class="text-xs">
			Note: You can get your NNS Principal ID from <a
				class="underline"
				target="_blank"
				href="https://nns.ic0.app/settings/">here</a
			>
		</div>
	</div>
	<Input
		disabled={loading}
		type="number"
		label="Price (in ICP)"
		bind:value={data.price}
		placeholder="Price (in ICP)"
	/>
	<Input
		disabled={loading}
		type="number"
		label="Supply cap (number of NFTs)"
		bind:value={data.supplyCap}
		placeholder="Supply cap"
	/>
	<Textarea
		disabled={loading}
		bind:value={data.description}
		label="Description"
		placeholder="Enter a description"
		rows={5}
	/>
</div>
