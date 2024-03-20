import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import { staticData } from './data';

type CollectionId = {
	assetCanId: string;
	minterCanId: string;
};

type CollectionDetails = CollectionMetadata & {
	id: CollectionId;
	sample: boolean;
};

export const sampleData = [
	{
		...staticData,
		name: 'Puerto Sotogrande, San Roque, 11311 Cadiz',
		id: { assetCanId: 'b77iv-eeaaa-aaaaa-qaada-cai', minterCanId: 'by6oe-j4aaa-aaaaa-qaadq-cai' },
		sample: true
	}
	// {
	// 	...staticData,
	// 	name: 'Vancouver, 2042',
	// 	id: { assetCanId: 'avqkm-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrma-lmaaa-aaaaa-qaaeq-cai' },
	// 	sample: true
	// },
	// {
	// 	...staticData,
	// 	name: 'Georgia, 1800',
	// 	id: { assetCanId: 'avqko-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrmb-lmaaa-aaaaa-qaaeq-cai' },
	// 	sample: true
	// },
	// {
	// 	...staticData,
	// 	name: 'Fairbanks, Road St.',
	// 	id: { assetCanId: 'avqkp-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrmc-lmaaa-aaaaa-qaaeq-cai' },
	// 	sample: true
	// },
	// {
	// 	...staticData,
	// 	name: 'California, Mount View',
	// 	id: { assetCanId: 'avqkq-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrmd-lmaaa-aaaaa-qaaeq-cai' },
	// 	sample: true
	// },
	// {
	// 	...staticData,
	// 	name: 'Rhode Island, Bark St.',
	// 	id: { assetCanId: 'avqkr-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrme-lmaaa-aaaaa-qaaeq-cai' },
	// 	sample: true
	// }
] as CollectionDetails[];
