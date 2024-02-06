import { createActor as createNftActor } from '../declarations/estate_dao_nft_backend';
import {
	createActor as createProvisionActor,
	canisterId as provisionCanisterId
} from '../declarations/provision_canister_backend';
import type { _SERVICE as NFT_SERVICE } from '../declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import type { _SERVICE as PROVISION_SERVICE } from '../declarations/provision_canister_backend/provision_canister_backend.did';
import type { ActorSubclass } from '@dfinity/agent';
import { authHelper } from '$lib/stores/auth';
import { get } from 'svelte/store';

// export const host = import.meta.env.NODE_ENV === 'dev' ? 'http://localhost:8080' : 'https://ic0.app';
export const host = 'http://localhost:8080';

export type EstateDaoActor = ActorSubclass<NFT_SERVICE>;
export type ProvisionActor = ActorSubclass<PROVISION_SERVICE>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function nftMinterCanister(canisterId: string, options?: { fetch?: any }): EstateDaoActor {
	const authHelperData = get(authHelper);
	return createNftActor(canisterId, {
		agentOptions: {
			host,
			fetch: options?.fetch,
			verifyQuerySignatures: false,
			identity: authHelperData?.identity
		}
	}) as EstateDaoActor;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function provisionCanister(options?: { fetch?: any; canisterId?: string }): ProvisionActor {
	const authHelperData = get(authHelper);
	return createProvisionActor(options?.canisterId || provisionCanisterId, {
		agentOptions: {
			host,
			fetch: options?.fetch,
			verifyQuerySignatures: false,
			identity: authHelperData?.identity
		}
	}) as ProvisionActor;
}
