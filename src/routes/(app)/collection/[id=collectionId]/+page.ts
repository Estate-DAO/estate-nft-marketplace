import { nftMinterCanister } from '$lib/backend';
import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import type { PageData } from './$types';

export const load: PageData = async ({ params: { id }, fetch }) => {
	const _id = id.split('@') || '';
	const minterCanId = _id[0] as string;
	const res = await nftMinterCanister(minterCanId, {
		fetch
	}).get_collection_metadata();
	let metadata: CollectionMetadata | undefined = undefined;
	if ('Ok' in res) {
		metadata = res.Ok;
	}

	return {
		metadata
	};
};
