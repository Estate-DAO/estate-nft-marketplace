<script lang="ts">
	import type { LayoutData } from './$types';
	import { setCollectionId } from './collectionId.context';

	export let data: LayoutData;

	$: console.log('haha', setCollectionId(data.assetCanId, data.minterCanId));
</script>

<slot />
