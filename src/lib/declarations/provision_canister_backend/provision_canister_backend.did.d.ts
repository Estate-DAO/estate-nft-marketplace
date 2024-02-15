import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AdditionalMetadata {
  'documents' : Array<Array<[string, string]>>,
  'property_details' : [] | [PropertyDetails],
  'financial_details' : [] | [FinancialDetails],
  'market_details' : [] | [MarketDetails],
}
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
  'supply_cap' : number,
  'owner' : string,
  'desc' : string,
  'additional_metadata' : [] | [AdditionalMetadata],
  'name' : string,
  'property_images' : Array<string>,
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
export type Result = { 'Ok' : CanisterIds } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Array<Principal> } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Array<CanisterIds> } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Uint8Array | number[] } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : FormMetadata } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : string } |
  { 'Err' : string };
export interface ReturnsFinancials {
  'average_5_year_roi' : [] | [number],
  'yields' : [] | [number],
  'total_5_year_irr' : [] | [number],
  'projected_appreciation' : [] | [number],
  'cap_rate' : [] | [number],
}
export type Status = { 'Ended' : null } |
  { 'Live' : null } |
  { 'Draft' : null } |
  { 'Upcoming' : null };
export interface _SERVICE {
  'approve_collection' : ActorMethod<[number, boolean], Result>,
  'filter_status' : ActorMethod<[Status], Result_1>,
  'get_all_canisters' : ActorMethod<[], Result_2>,
  'get_all_minter_canisters' : ActorMethod<[], Result_1>,
  'get_asset_wasm' : ActorMethod<[], Result_3>,
  'get_form_list' : ActorMethod<[], Array<[number, FormMetadata]>>,
  'get_form_metadata' : ActorMethod<[number], Result_4>,
  'get_minter_wasm' : ActorMethod<[], Result_3>,
  'grant_commit_permission' : ActorMethod<[Principal, Principal], Result_5>,
  'init_asset_wasm' : ActorMethod<[Uint8Array | number[]], Result_5>,
  'init_form_metadata' : ActorMethod<[FormMetadata], Result_5>,
  'init_minter_wasm' : ActorMethod<[Uint8Array | number[]], Result_5>,
  'revoke_commit_permission' : ActorMethod<[Principal, Principal], Result_5>,
  'test_auth_user' : ActorMethod<[], Result_1>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
