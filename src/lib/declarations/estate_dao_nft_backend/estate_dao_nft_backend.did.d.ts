import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface AdditionalDetails {
  'year_built' : [] | [number],
  'occupied' : [] | [string],
  'crime_score' : [] | [number],
  'monthly_rent' : [] | [number],
  'beds' : [] | [number],
  'affordability' : [] | [number],
  'last_renovation' : [] | [string],
  'square_footage' : [] | [number],
  'flood_zone' : [] | [string],
  'price_per_sq_foot' : [] | [number],
  'baths' : [] | [number],
  'school_score' : [] | [number],
}
export interface AdditionalMetadata {
  'documents' : Array<Array<[string, string]>>,
  'additional_details' : [] | [AdditionalDetails],
  'financial_details' : [] | [FinancialDetails],
  'market_details' : [] | [MarketDetails],
}
export interface CollectionMetadata {
  'status' : Status,
  'supply_cap' : number,
  'owner' : string,
  'desc' : string,
  'additional_metadata' : [] | [AdditionalMetadata],
  'name' : string,
  'collection_id' : string,
  'property_images' : Array<string>,
  'prop_data' : [] | [PropertyData],
  'prop_details' : [] | [PropDetails],
  'total_supply' : number,
}
export interface FinancialDetails {
  'total_investement_value' : [] | [TotalInvestmentValue],
  'total_returns' : [] | [TotalReturns],
  'monthly_gross_rents' : [] | [MonthlyGrossRents],
}
export interface MarketDetails {
  'average_rent' : [] | [number],
  'location' : [] | [string],
  'median_home_sale_price' : [] | [number],
  'annual_popullation_growth' : [] | [number],
}
export interface Metadata {
  'supply_cap' : number,
  'nft_token_id' : string,
  'desc' : string,
  'logo' : string,
  'collection_id' : string,
  'collection_name' : string,
  'nft_uri' : string,
  'total_supply' : number,
  'nft_symbol' : string,
}
export interface MonthlyGrossRents {
  'llc_monthly_franchise_tax' : [] | [number],
  'monthly_cash_flow' : [] | [number],
  'property_insurance' : [] | [number],
  'expense_to_income_ratio' : [] | [number],
  'vacancy_rate' : [] | [number],
  'property_taxes' : [] | [number],
  'property_managment_fee' : [] | [number],
  'monthly_utiliiies' : [] | [number],
}
export interface PropDetails {
  'year_built' : [] | [string],
  'purchase_price' : [] | [string],
  'yields' : [] | [string],
  'projected_rent' : [] | [string],
  'min_investment' : [] | [string],
}
export interface PropertyData {
  'bed' : number,
  'area' : number,
  'bath' : number,
}
export type Result = { 'Ok' : CollectionMetadata } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : MarketDetails } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Metadata } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : Status } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : PropertyData } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : Principal } |
  { 'Err' : string };
export type Status = { 'Ended' : null } |
  { 'Live' : null } |
  { 'Upcoming' : null };
export interface TotalInvestmentValue {
  'homebase_closing_fee' : [] | [string],
  'initial_mainatance_reserve' : [] | [number],
  'underlying_asset_price' : [] | [number],
}
export interface TotalReturns {
  'average_5_year_roi' : [] | [number],
  'projected_appreciation' : [] | [number],
  'cap_rate' : [] | [number],
}
export interface _SERVICE {
  'collection_image' : ActorMethod<[], Array<string>>,
  'get_collection_metadata' : ActorMethod<[], Result>,
  'get_collection_status' : ActorMethod<[], Result_4>,
  'get_market_details' : ActorMethod<[], Result_1>,
  'get_metadata' : ActorMethod<[string], Result_2>,
  'get_prop_data' : ActorMethod<[], Result_5>,
  'init_collection' : ActorMethod<[string, string, Principal], Result_3>,
  'mint' : ActorMethod<[string, string, Principal], Result_3>,
  'update_additional_details' : ActorMethod<[AdditionalDetails], Result_3>,
  'update_doc_details' : ActorMethod<
    [Array<Array<[string, string]>>],
    Result_3
  >,
  'update_financial_details' : ActorMethod<[FinancialDetails], Result_3>,
  'update_market_details' : ActorMethod<[MarketDetails], Result_3>,
  'update_prop_data' : ActorMethod<[PropertyData], Result_3>,
  'update_prop_det' : ActorMethod<[PropDetails], Result_3>,
}
