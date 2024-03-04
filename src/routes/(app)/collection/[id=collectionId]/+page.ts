import { nftMinterCanister } from '$lib/backend';
import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import { sampleData } from '../../market/sampleData';
import type { PageData } from './$types';

export const load: PageData = async ({ params: { id }, url }) => {
	const _id = id.split('@') || '';
	const minterCanId = _id[0] as string;
	let metadata: CollectionMetadata | undefined = undefined;

	if (url.searchParams.has('sample')) {
		metadata = sampleData.find((d) => d.id.minterCanId === minterCanId);
	} else {
		const minterCanId = _id[0] as string;
		const res = await nftMinterCanister(minterCanId, {
			fetch
		}).get_collection_metadata();
		if ('Ok' in res) {
			metadata = sampleData[0];
		}
	}
	return {
		metadata
	};
};
