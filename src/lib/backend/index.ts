import { createActor as createNftActor } from '../declarations/estate_dao_nft_backend';
import {
	createActor as createProvisionActor,
	canisterId as provisionCanisterId
} from '../declarations/provision_canister_backend';
import type { _SERVICE as NFT_SERVICE } from '../declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
import type { _SERVICE as PROVISION_SERVICE } from '../declarations/provision_canister_backend/provision_canister_backend.did';
import { HttpAgent, type ActorSubclass, type HttpAgentOptions } from '@dfinity/agent';
import { authHelper } from '$lib/stores/auth';
import { get } from 'svelte/store';
import { AssetManager } from '@dfinity/assets';
//v2
import { createActor as createNftCanisterAction } from '../declarations/estate_dao_nft';
import type { _SERVICE as NFT_CAN_SERVICE } from '../declarations/estate_dao_nft/estate_dao_nft.did';
import {
	createActor as createProvisionCanisterActor,
	canisterId as provisionCanId
} from '../declarations/provision';
import type { _SERVICE as PROVISION_CAN_SERVICE } from '../declarations/provision/provision.did';

export const host =
	import.meta.env.NODE_ENV === 'dev'
		? `http://localhost:${import.meta.env.DFX_PORT}`
		: 'https://ic0.app';

export type EstateDaoActor = ActorSubclass<NFT_SERVICE>;
export type ProvisionActor = ActorSubclass<PROVISION_SERVICE>;
export type UnionKeyOf<U> = U extends U ? keyof U : never;

const agentOptions = (_fetch?: typeof fetch): HttpAgentOptions => {
	const authHelperData = get(authHelper);
	return {
		host,
		fetch: _fetch,
		verifyQuerySignatures: false,
		identity: authHelperData?.identity
	};
};

export function nftMinterCanister(
	canisterId: string,
	options?: { fetch?: typeof fetch }
): EstateDaoActor {
	return createNftActor(canisterId, {
		agentOptions: agentOptions(options?.fetch)
	}) as EstateDaoActor;
}

export function provisionCanister(options?: {
	fetch?: typeof fetch;
	canisterId?: string;
}): ProvisionActor {
	return createProvisionActor(options?.canisterId || provisionCanisterId, {
		agentOptions: agentOptions(options?.fetch)
	}) as ProvisionActor;
}

export function assetManager(canisterId: string, options?: { fetch?: typeof fetch }) {
	const agent = new HttpAgent(agentOptions(options?.fetch));
	return new AssetManager({
		canisterId,
		agent
	});
}

export function nftCanister(
	canisterId: string,
	options?: { fetch?: typeof fetch }
): ActorSubclass<NFT_CAN_SERVICE> {
	return createNftCanisterAction(canisterId, {
		agentOptions: agentOptions(options?.fetch)
	}) as ActorSubclass<NFT_CAN_SERVICE>;
}

export function provisionCanisterV2(options?: {
	fetch?: typeof fetch;
}): ActorSubclass<PROVISION_CAN_SERVICE> {
	return createProvisionCanisterActor(provisionCanId, {
		agentOptions: agentOptions(options?.fetch)
	}) as ActorSubclass<PROVISION_CAN_SERVICE>;
}
