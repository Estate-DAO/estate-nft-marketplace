import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'change_ownership' : ActorMethod<
    [Principal],
    { 'Ok' : bigint } |
      { 'Err' : string }
  >,
  'get_property_metadata' : ActorMethod<
    [],
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
      'asset_canister' : Principal,
      'state' : string,
      'property_taxes' : number,
      'price_per_sq_foot' : number,
      'property_management_fee' : number,
      'market_description' : string,
      'cap_rate' : number,
      'baths' : number,
      'platform_closing_fee' : number,
      'property_owner' : Principal,
      'school_score' : number,
      'price' : bigint,
      'last_renovated' : number,
      'projected_rent' : number,
      'average_rent' : number,
      'min_investment' : bigint,
      'median_home_sale_price' : number,
      'total_supply' : bigint,
      'symbol' : string,
      'coordinates' : string,
      'treasury' : Principal,
    }
  >,
  'icrc61_supported_standards' : ActorMethod<
    [],
    Array<{ 'url' : string, 'name' : string }>
  >,
  'icrc7_atomic_batch_transfers' : ActorMethod<[], [] | [boolean]>,
  'icrc7_balance_of' : ActorMethod<
    [
      Array<
        { 'owner' : Principal, 'subaccount' : [] | [Uint8Array | number[]] }
      >,
    ],
    Array<bigint>
  >,
  'icrc7_collection_metadata' : ActorMethod<
    [],
    Array<
      [
        string,
        { 'Int' : bigint } |
          {
            'Map' : Array<
              [
                string,
                { 'Int' : bigint } |
                  { 'Nat' : bigint } |
                  { 'Blob' : Uint8Array | number[] } |
                  { 'Text' : string },
              ]
            >
          } |
          { 'Nat' : bigint } |
          { 'Blob' : Uint8Array | number[] } |
          { 'Text' : string } |
          {
            'Array' : Array<
              { 'Int' : bigint } |
                { 'Nat' : bigint } |
                { 'Blob' : Uint8Array | number[] } |
                { 'Text' : string }
            >
          },
      ]
    >
  >,
  'icrc7_description' : ActorMethod<[], [] | [string]>,
  'icrc7_logo' : ActorMethod<[], [] | [string]>,
  'icrc7_max_default_take_value' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_memo_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_query_batch_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_take_value' : ActorMethod<[], [] | [bigint]>,
  'icrc7_max_update_batch_size' : ActorMethod<[], [] | [bigint]>,
  'icrc7_name' : ActorMethod<[], string>,
  'icrc7_owner_of' : ActorMethod<
    [Array<bigint>],
    Array<
      [] | [
        { 'owner' : Principal, 'subaccount' : [] | [Uint8Array | number[]] }
      ]
    >
  >,
  'icrc7_permitted_drift' : ActorMethod<[], [] | [bigint]>,
  'icrc7_supply_cap' : ActorMethod<[], [] | [bigint]>,
  'icrc7_symbol' : ActorMethod<[], string>,
  'icrc7_token_metadata' : ActorMethod<
    [Array<bigint>],
    Array<
      [] | [
        Array<
          [
            string,
            { 'Int' : bigint } |
              {
                'Map' : Array<
                  [
                    string,
                    { 'Int' : bigint } |
                      { 'Nat' : bigint } |
                      { 'Blob' : Uint8Array | number[] } |
                      { 'Text' : string },
                  ]
                >
              } |
              { 'Nat' : bigint } |
              { 'Blob' : Uint8Array | number[] } |
              { 'Text' : string } |
              {
                'Array' : Array<
                  { 'Int' : bigint } |
                    { 'Nat' : bigint } |
                    { 'Blob' : Uint8Array | number[] } |
                    { 'Text' : string }
                >
              },
          ]
        >
      ]
    >
  >,
  'icrc7_tokens' : ActorMethod<[[] | [bigint], [] | [bigint]], Array<bigint>>,
  'icrc7_tokens_of' : ActorMethod<
    [
      { 'owner' : Principal, 'subaccount' : [] | [Uint8Array | number[]] },
      [] | [bigint],
      [] | [bigint],
    ],
    Array<bigint>
  >,
  'icrc7_total_supply' : ActorMethod<[], bigint>,
  'icrc7_transfer' : ActorMethod<
    [
      Array<
        {
          'to' : {
            'owner' : Principal,
            'subaccount' : [] | [Uint8Array | number[]],
          },
          'token_id' : bigint,
          'memo' : [] | [Uint8Array | number[]],
          'from_subaccount' : [] | [Uint8Array | number[]],
          'created_at_time' : [] | [bigint],
        }
      >,
    ],
    Array<
      [] | [
        { 'Ok' : bigint } |
          {
            'Err' : {
                'GenericError' : { 'message' : string, 'error_code' : bigint }
              } |
              { 'Duplicate' : { 'duplicate_of' : bigint } } |
              { 'NonExistingTokenId' : null } |
              { 'Unauthorized' : null } |
              { 'CreatedInFuture' : { 'ledger_time' : bigint } } |
              { 'InvalidRecipient' : null } |
              {
                'GenericBatchError' : {
                  'message' : string,
                  'error_code' : bigint,
                }
              } |
              { 'TooOld' : null }
          }
      ]
    >
  >,
  'icrc7_tx_window' : ActorMethod<[], [] | [bigint]>,
  'mint' : ActorMethod<
    [{ 'subaccount' : [] | [Uint8Array | number[]] }],
    { 'Ok' : bigint } |
      { 'Err' : string }
  >,
  'refund' : ActorMethod<
    [{ 'subaccount' : [] | [Uint8Array | number[]] }],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'update_metadata' : ActorMethod<
    [
      {
        'year_built' : [] | [number],
        'monthly_utilities' : [] | [number],
        'total_monthly_cost' : [] | [number],
        'average_5_year_roi' : [] | [number],
        'token' : [] | [Principal],
        'documents' : [] | [Array<[string, string]>],
        'yields' : [] | [number],
        'supply_cap' : [] | [bigint],
        'llc_monthly_franchise_tax' : [] | [number],
        'country' : [] | [string],
        'occupied' : [] | [boolean],
        'annual_population_growth' : [] | [number],
        'monthly_cash_flow' : [] | [number],
        'crime_score' : [] | [number],
        'monthly_rent' : [] | [number],
        'beds' : [] | [number],
        'city' : [] | [string],
        'total_5_year_irr' : [] | [number],
        'logo' : [] | [string],
        'property_insurance' : [] | [number],
        'name' : [] | [string],
        'affordability' : [] | [number],
        'expense_to_income_ratio' : [] | [number],
        'square_footage' : [] | [number],
        'description' : [] | [string],
        'flood_zone' : [] | [boolean],
        'initial_maintenance_reserve' : [] | [number],
        'vacancy_rate' : [] | [number],
        'projected_appreciation' : [] | [number],
        'underlying_asset_price' : [] | [number],
        'asset_canister' : [] | [Principal],
        'state' : [] | [string],
        'property_taxes' : [] | [number],
        'price_per_sq_foot' : [] | [number],
        'property_management_fee' : [] | [number],
        'market_description' : [] | [string],
        'cap_rate' : [] | [number],
        'baths' : [] | [number],
        'platform_closing_fee' : [] | [number],
        'school_score' : [] | [number],
        'price' : [] | [bigint],
        'last_renovated' : [] | [number],
        'projected_rent' : [] | [number],
        'average_rent' : [] | [number],
        'min_investment' : [] | [bigint],
        'median_home_sale_price' : [] | [number],
        'symbol' : [] | [string],
        'coordinates' : [] | [string],
        'treasury' : [] | [Principal],
      },
    ],
    { 'Ok' : bigint } |
      { 'Err' : string }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
