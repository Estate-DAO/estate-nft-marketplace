import {
	createActor as createNftActor,
	canisterId as nftCanisterId
} from '../declarations/estate_dao_nft_backend';
import { createActor as createProvisionActor } from '../declarations/provision_canister_backend';
import type { _SERVICE as NFT_SERVICE } from '../declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import type { _SERVICE as PROVISION_SERVICE } from '../declarations/provision_canister_backend/provision_canister_backend.did';
import type { ActorSubclass } from '@dfinity/agent';

// export const host = import.meta.env.NODE_ENV === 'dev' ? 'http://localhost:8080' : 'https://ic0.app';
export const host = 'http://localhost:8080';

export type EstateDaoActor = ActorSubclass<NFT_SERVICE>;
export type ProvisionActor = ActorSubclass<PROVISION_SERVICE>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function nftMinterCanister(options?: { fetch?: any; canisterId?: string }): EstateDaoActor {
	return createNftActor(options?.canisterId || nftCanisterId, {
		agentOptions: { host, fetch: options?.fetch, verifyQuerySignatures: false }
	}) as EstateDaoActor;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function provisionCanister(options?: { fetch?: any; canisterId?: string }): ProvisionActor {
	return createProvisionActor(options?.canisterId || nftCanisterId, {
		agentOptions: { host, fetch: options?.fetch, verifyQuerySignatures: false }
	}) as ProvisionActor;
}
