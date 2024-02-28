import { data } from '../../market/data';
import { sampleData } from '../../market/sampleData';
import type { PageData } from './$types';

export const load: PageData = async ({ params: { id } }) => {
	const _id = id.split('@') || '';
	const minterCanId = _id[0] as string;
	// const res = await nftMinterCanister(minterCanId, {
	// 	fetch
	// }).get_collection_metadata();
	// let metadata: CollectionMetadata | undefined = undefined;
	// if ('Ok' in res) {
	// 	metadata = data[0];
	// }

	return {
		metadata: [...data, ...sampleData].find((d) => d.id.minterCanId === minterCanId)
	};
};
