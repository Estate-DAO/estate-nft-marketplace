import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'owner' : Principal,
  'subaccount' : [] | [Uint8Array | number[]],
}
export interface AdditionalMetadata {
  'documents' : Array<Array<[string, string]>>,
  'property_details' : [] | [PropertyDetails],
  'financial_details' : [] | [FinancialDetails],
  'market_details' : [] | [MarketDetails],
}
export type ApprovedResponse = { 'StrResp' : string } |
  { 'CanisterId' : CanisterIds };
export interface CanisterIds {
  'minter_canister' : Principal,
  'asset_canister' : Principal,
}
export interface FinancialDetails {
  'total_monthly_cost' : [] | [number],
  'monthly_cash_flow' : [] | [number],
  'property_insurance' : [] | [number],
  'investment' : [] | [InvestmentFinancials],
  'expense_to_income_ratio' : [] | [number],
  'rents' : [] | [RentFinancials],
  'returns' : [] | [ReturnsFinancials],
}
export interface FormMetadata {
  'status' : Status,
  'supply_cap' : bigint,
  'image_uri' : string,
  'owner' : string,
  'desc' : string,
  'additional_metadata' : [] | [AdditionalMetadata],
  'name' : string,
  'property_images' : Array<string>,
  'price' : bigint,
  'treasury' : string,
}
export interface InvestmentFinancials {
  'initial_maintenance_reserve' : [] | [number],
  'underlying_asset_price' : [] | [number],
  'platform_closing_fee' : [] | [number],
  'min_investment' : [] | [bigint],
}
export interface MarketDetails {
  'country' : [] | [string],
  'city' : [] | [string],
  'description' : [] | [string],
  'state' : [] | [string],
  'average_rent' : [] | [number],
  'median_home_sale_price' : [] | [number],
  'coordinates' : [] | [string],
  'annual_popullation_growth' : [] | [number],
}
export interface Metadata {
  'supply_cap' : bigint,
  'nft_token_id' : string,
  'desc' : string,
  'collection_name' : string,
  'nft_uri' : string,
  'total_supply' : bigint,
  'symbol' : string,
}
export interface PropertyDetails {
  'year_built' : [] | [number],
  'occupied' : [] | [boolean],
  'crime_score' : [] | [number],
  'monthly_rent' : [] | [number],
  'beds' : [] | [number],
  'affordability' : [] | [number],
  'square_footage' : [] | [number],
  'flood_zone' : [] | [boolean],
  'price_per_sq_foot' : [] | [number],
  'baths' : [] | [number],
  'school_score' : [] | [number],
  'last_renovated' : [] | [number],
}
export interface RentFinancials {
  'llc_monthly_franchise_tax' : [] | [number],
  'vacancy_rate' : [] | [number],
  'property_taxes' : [] | [number],
  'property_managment_fee' : [] | [number],
  'projected_rent' : [] | [number],
  'monthly_utiliiies' : [] | [number],
}
export type Result = { 'Ok' : string } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : ApprovedResponse } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Array<Principal> } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Array<CanisterIds> } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : bigint } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : FormMetadata } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : Metadata } |
  { 'Err' : string };
export type Result_7 = { 'Ok' : [bigint, bigint] } |
  { 'Err' : string };
export type Result_8 = { 'Ok' : SaleData } |
  { 'Err' : string };
export interface ReturnsFinancials {
  'average_5_year_roi' : [] | [number],
  'yields' : [] | [number],
  'total_5_year_irr' : [] | [number],
  'projected_appreciation' : [] | [number],
  'cap_rate' : [] | [number],
}
export interface SaleData {
  'status' : SaleStatus,
  'nft_token_id' : string,
  'time' : Timestamp,
  'buyer' : Account,
  'amount' : bigint,
}
export type SaleStatus = { 'Init' : null } |
  { 'Complete' : null } |
  { 'Incomplete' : null };
export type Status = { 'Ended' : null } |
  { 'Refunded' : null } |
  { 'Live' : null } |
  { 'Draft' : null } |
  { 'Minted' : null } |
  { 'Upcoming' : null };
export interface Timestamp { 'timestamp_nanos' : bigint }
export interface _SERVICE {
  'add_known_principals' : ActorMethod<[Principal], Result>,
  'approve_collection' : ActorMethod<[number, boolean], Result_1>,
  'filter_status' : ActorMethod<[Status], Result_2>,
  'get_all_canisters' : ActorMethod<[], Result_3>,
  'get_all_minter_canisters' : ActorMethod<[], Result_2>,
  'get_escrow_balance' : ActorMethod<[Principal, Principal], Result_4>,
  'get_form_list' : ActorMethod<[], Array<[number, FormMetadata]>>,
  'get_form_metadata' : ActorMethod<[number], Result_5>,
  'get_nft_metadata' : ActorMethod<[Principal, string], Result_6>,
  'get_sale_balance' : ActorMethod<[Principal, Principal], Result_7>,
  'get_sale_data' : ActorMethod<[Principal, string], Result_8>,
  'get_total_invested' : ActorMethod<[Principal], Result_2>,
  'grant_commit_permission' : ActorMethod<[Principal, Principal], Result>,
  'init_asset_wasm' : ActorMethod<[Uint8Array | number[]], Result>,
  'init_form_metadata' : ActorMethod<[FormMetadata], Result>,
  'init_minter_wasm' : ActorMethod<[Uint8Array | number[]], Result>,
  'reprocess_sale_accept' : ActorMethod<[Principal], Result>,
  'reprocess_sale_refund' : ActorMethod<[Principal], Result>,
  'revoke_commit_permission' : ActorMethod<[Principal, Principal], Result>,
  'sale_accept' : ActorMethod<[Principal], Result>,
  'sale_confirmed_refund' : ActorMethod<[Principal], Result>,
  'update_key' : ActorMethod<[string], Result>,
  'verify_admin' : ActorMethod<[Principal], boolean>,
  'verify_key' : ActorMethod<[string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
