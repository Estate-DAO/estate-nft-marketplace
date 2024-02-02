import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface CanisterIds {
  'minter_canister' : Principal,
  'asset_canister' : Principal,
}
export interface NFT_Metadata {
  'supply_cap' : number,
  'nft_token_id' : string,
  'desc' : string,
  'logo' : string,
  'collection_id' : string,
  'collection_name' : string,
  'royalty_percent' : number,
  'nft_uri' : string,
  'total_supply' : number,
  'nft_symbol' : string,
}
export type Result = { 'Ok' : CanisterIds } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Principal } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Array<Principal> } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Array<string> } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : NFT_Metadata } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : string } |
  { 'Err' : string };
export interface _SERVICE {
  'all_canister_create' : ActorMethod<[string, string], Result>,
  'create_new_canister' : ActorMethod<[], Result_1>,
  'filter_status' : ActorMethod<[], Result_2>,
  'get_all_minter_canisters' : ActorMethod<[], Result_2>,
  'grant_commit_permission' : ActorMethod<[Principal, Principal], string>,
  'init_collection' : ActorMethod<[Principal], Result_5>,
  'mint_NFT' : ActorMethod<[Principal, string, string], Result_5>,
  'revoke_commit_permission' : ActorMethod<[Principal, Principal], string>,
}
