import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CanisterIds {
  'minter_canister' : Principal,
  'asset_canister' : Principal,
}
export interface NFT_Metadata {
  'supply_cap' : number,
  'nft_token_id' : string,
  'desc' : string,
  'collection_id' : string,
  'collection_name' : string,
  'royalty_percent' : number,
  'nft_uri' : string,
  'total_supply' : number,
  'nft_symbol' : string,
}
export interface PropDetails {
  'year_built' : [] | [number],
  'purchase_price' : [] | [number],
  'yields' : [] | [number],
  'projected_rent' : [] | [number],
  'min_investment' : [] | [number],
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
export type Result_6 = { 'Ok' : Array<CanisterIds> } |
  { 'Err' : string };
export type Status = { 'Ended' : null } |
  { 'Live' : null } |
  { 'Draft' : null } |
  { 'Upcoming' : null };
export interface _SERVICE {
  'all_canister_create' : ActorMethod<[string, string], Result>,
  'filter_status' : ActorMethod<[Status], Result_2>,
  'get_all_canisters' : ActorMethod<[], Result_6>,
  'get_all_minter_canisters' : ActorMethod<[], Result_2>,
  'grant_commit_permission' : ActorMethod<[Principal, Principal], Result_5>,
  'revoke_commit_permission' : ActorMethod<[Principal, Principal], Result_5>,
  'test_auth_user' : ActorMethod<[], Result_2>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
