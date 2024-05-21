import type { _SERVICE } from '$lib/declarations/estate_dao_nft/estate_dao_nft.did';

export type CollectionMetadata = Awaited<ReturnType<_SERVICE['get_property_metadata']>>;
