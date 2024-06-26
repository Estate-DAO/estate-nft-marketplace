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
export interface CollectionMetadata {
  'status' : Status,
  'supply_cap' : bigint,
  'image_uri' : string,
  'owner' : string,
  'desc' : string,
  'additional_metadata' : [] | [AdditionalMetadata],
  'name' : string,
  'property_images' : Array<string>,
  'treasury_account' : string,
  'primary_sale_happened' : boolean,
  'price' : bigint,
  'is_initialised' : boolean,
  'total_supply' : bigint,
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
export type Result_1 = { 'Ok' : Principal } |
  { 'Err' : string };
export type Result_10 = { 'Ok' : SaleData } |
  { 'Err' : string };
export type Result_11 = { 'Ok' : [bigint, bigint] } |
  { 'Err' : string };
export type Result_12 = { 'Ok' : Account } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : bigint } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : CollectionMetadata } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : Status } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : FinancialDetails } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : MarketDetails } |
  { 'Err' : string };
export type Result_7 = { 'Ok' : Metadata } |
  { 'Err' : string };
export type Result_8 = { 'Ok' : [string, bigint, bigint] } |
  { 'Err' : string };
export type Result_9 = { 'Ok' : PropertyDetails } |
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
  'add_collection_image' : ActorMethod<[string], Result>,
  'get_NNS_account' : ActorMethod<[], Result_1>,
  'get_balance' : ActorMethod<[Principal], Result_2>,
  'get_collection_image' : ActorMethod<[], Array<string>>,
  'get_collection_metadata' : ActorMethod<[], Result_3>,
  'get_collection_status' : ActorMethod<[], Result_4>,
  'get_financial_details' : ActorMethod<[], Result_5>,
  'get_market_details' : ActorMethod<[], Result_6>,
  'get_metadata' : ActorMethod<[string], Result_7>,
  'get_payment_details' : ActorMethod<[], Result_8>,
  'get_property_details' : ActorMethod<[], Result_9>,
  'get_reprocess_mint' : ActorMethod<[], Array<Principal>>,
  'get_reprocess_refund' : ActorMethod<[], Array<Principal>>,
  'get_reprocess_transfer' : ActorMethod<[], Array<Principal>>,
  'get_sale_data' : ActorMethod<[string], Result_10>,
  'get_total_invested' : ActorMethod<[], bigint>,
  'get_user_sale_balance' : ActorMethod<[Principal], Result_11>,
  'icrc7_description' : ActorMethod<[], string>,
  'icrc7_image' : ActorMethod<[], string>,
  'icrc7_name' : ActorMethod<[], string>,
  'icrc7_owner_of' : ActorMethod<[string], Result_12>,
  'icrc7_total_supply' : ActorMethod<[], bigint>,
  'init_collection' : ActorMethod<[FormMetadata], Result>,
  'mint' : ActorMethod<[string, string, string, Principal], Result>,
  'mint_approved_nfts' : ActorMethod<[Principal], Result>,
  'primary_sale' : ActorMethod<[], Result>,
  'refund_for_user_by_controller' : ActorMethod<[Principal], Result>,
  'refund_user_tokens' : ActorMethod<[Principal], Result>,
  'reprocess_accept_transfer' : ActorMethod<[], Result>,
  'reprocess_refund' : ActorMethod<[], Result>,
  'sale_accepted' : ActorMethod<[], Result>,
  'sale_confirmed_mint' : ActorMethod<[], Result>,
  'sale_confirmed_transfer' : ActorMethod<[], Result>,
  'sale_rejected' : ActorMethod<[], Result>,
  'transfer_user_tokens' : ActorMethod<[Principal], Result>,
  'update_NNS_account' : ActorMethod<[Principal], Result>,
  'update_financial_details' : ActorMethod<[FinancialDetails], Result>,
  'update_market_details' : ActorMethod<[MarketDetails], Result>,
  'update_property_details' : ActorMethod<[PropertyDetails], Result>,
  'update_status' : ActorMethod<[Status], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
