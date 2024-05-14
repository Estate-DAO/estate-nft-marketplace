import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'add_admin' : ActorMethod<
    [Principal],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'add_property_request' : ActorMethod<
    [
      {
        'year_built' : number,
        'monthly_utilities' : number,
        'total_monthly_cost' : number,
        'average_5_year_roi' : number,
        'token' : Principal,
        'documents' : Array<[string, string]>,
        'yields' : number,
        'supply_cap' : bigint,
        'llc_monthly_franchise_tax' : number,
        'country' : string,
        'occupied' : boolean,
        'annual_population_growth' : number,
        'monthly_cash_flow' : number,
        'crime_score' : number,
        'monthly_rent' : number,
        'beds' : number,
        'city' : string,
        'total_5_year_irr' : number,
        'logo' : string,
        'property_insurance' : number,
        'name' : string,
        'affordability' : number,
        'expense_to_income_ratio' : number,
        'square_footage' : number,
        'description' : string,
        'flood_zone' : boolean,
        'initial_maintenance_reserve' : number,
        'vacancy_rate' : number,
        'projected_appreciation' : number,
        'underlying_asset_price' : number,
        'state' : string,
        'property_taxes' : number,
        'price_per_sq_foot' : number,
        'property_management_fee' : number,
        'market_description' : string,
        'cap_rate' : number,
        'baths' : number,
        'platform_closing_fee' : number,
        'school_score' : number,
        'price' : bigint,
        'last_renovated' : number,
        'projected_rent' : number,
        'average_rent' : number,
        'min_investment' : bigint,
        'median_home_sale_price' : number,
        'symbol' : string,
        'coordinates' : string,
        'treasury' : Principal,
      },
    ],
    { 'Ok' : bigint } |
      { 'Err' : string }
  >,
  'approve_request' : ActorMethod<
    [bigint],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'get_asset_canister_wasm' : ActorMethod<
    [],
    {
      'moduleHash' : Uint8Array | number[],
      'chunkHashes' : Array<Uint8Array | number[]>,
    }
  >,
  'get_asset_proxy_canister' : ActorMethod<[], Principal>,
  'get_pending_requests' : ActorMethod<[], Array<bigint>>,
  'get_request_info' : ActorMethod<
    [bigint],
    [] | [
      {
        'metadata' : [] | [
          {
            'year_built' : number,
            'monthly_utilities' : number,
            'total_monthly_cost' : number,
            'average_5_year_roi' : number,
            'token' : Principal,
            'documents' : Array<[string, string]>,
            'yields' : number,
            'supply_cap' : bigint,
            'llc_monthly_franchise_tax' : number,
            'country' : string,
            'occupied' : boolean,
            'annual_population_growth' : number,
            'monthly_cash_flow' : number,
            'crime_score' : number,
            'monthly_rent' : number,
            'beds' : number,
            'city' : string,
            'total_5_year_irr' : number,
            'logo' : string,
            'property_insurance' : number,
            'name' : string,
            'affordability' : number,
            'expense_to_income_ratio' : number,
            'square_footage' : number,
            'description' : string,
            'flood_zone' : boolean,
            'initial_maintenance_reserve' : number,
            'vacancy_rate' : number,
            'projected_appreciation' : number,
            'underlying_asset_price' : number,
            'state' : string,
            'property_taxes' : number,
            'price_per_sq_foot' : number,
            'property_management_fee' : number,
            'market_description' : string,
            'cap_rate' : number,
            'baths' : number,
            'platform_closing_fee' : number,
            'school_score' : number,
            'price' : bigint,
            'last_renovated' : number,
            'projected_rent' : number,
            'average_rent' : number,
            'min_investment' : bigint,
            'median_home_sale_price' : number,
            'symbol' : string,
            'coordinates' : string,
            'treasury' : Principal,
          }
        ],
        'token_canister' : [] | [Principal],
        'approval_status' : { 'Approved' : null } |
          { 'Rejected' : null } |
          { 'Pending' : null },
        'asset_canister' : [] | [Principal],
        'property_owner' : Principal,
      }
    ]
  >,
  'get_token_canister_wasm' : ActorMethod<
    [],
    {
      'moduleHash' : Uint8Array | number[],
      'chunkHashes' : Array<Uint8Array | number[]>,
    }
  >,
  'is_admin' : ActorMethod<[[] | [Principal]], boolean>,
  'list_properties' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'token_canister' : Principal,
        'asset_canister' : Principal,
      }
    >
  >,
  'reject_request' : ActorMethod<
    [bigint],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'remove_admin' : ActorMethod<
    [Principal],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'set_asset_canister_wasm' : ActorMethod<
    [
      {
        'moduleHash' : Uint8Array | number[],
        'chunkHashes' : Array<Uint8Array | number[]>,
      },
    ],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'set_asset_proxy_canister' : ActorMethod<
    [Principal],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'set_token_canister_wasm' : ActorMethod<
    [
      {
        'moduleHash' : Uint8Array | number[],
        'chunkHashes' : Array<Uint8Array | number[]>,
      },
    ],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
