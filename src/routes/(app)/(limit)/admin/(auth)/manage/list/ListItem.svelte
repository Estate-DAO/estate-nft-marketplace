<script lang="ts" context="module">
	import type { FormMetadata } from '$lib/declarations/provision_canister_backend/provision_canister_backend.did';

	export interface FormMetadataWithId extends FormMetadata {
		id: number;
	}
</script>

<script lang="ts">
	export let formData: FormMetadataWithId;
</script>

<a href="/admin/manage/{formData.id}" class="flex justify-between gap-x-6 py-5">
	<div class="flex min-w-0 gap-x-4">
		{#if formData.image_uri}
			<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={formData.image_uri} alt="" />
		{:else}
			<div class="h-12 w-12 bg-gray-200 rounded-full" />
		{/if}

		<div class="min-w-0 flex-auto">
			<p class="text-sm font-semibold leading-6 text-gray-900">{formData.name}</p>
			<p class="mt-1 truncate line-clamp-2 text-xs leading-5 text-gray-500">{formData.desc}</p>
		</div>
	</div>
	<div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
		<p class="text-sm leading-6 text-gray-900">Submitted by: {formData.owner}</p>
		<p class="mt-1 text-xs leading-5 text-gray-500">
			Created at {new Date().toDateString()}
		</p>
	</div>
</a>
