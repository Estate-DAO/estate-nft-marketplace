export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'change_ownership' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text })],
        [],
      ),
    'get_property_metadata' : IDL.Func(
        [],
        [
          IDL.Record({
            'year_built' : IDL.Nat32,
            'monthly_utilities' : IDL.Float32,
            'total_monthly_cost' : IDL.Float32,
            'average_5_year_roi' : IDL.Float32,
            'token' : IDL.Principal,
            'documents' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
            'yields' : IDL.Float32,
            'supply_cap' : IDL.Nat,
            'llc_monthly_franchise_tax' : IDL.Float32,
            'country' : IDL.Text,
            'occupied' : IDL.Bool,
            'annual_population_growth' : IDL.Nat32,
            'monthly_cash_flow' : IDL.Float32,
            'crime_score' : IDL.Nat32,
            'monthly_rent' : IDL.Float32,
            'beds' : IDL.Nat32,
            'city' : IDL.Text,
            'total_5_year_irr' : IDL.Float32,
            'logo' : IDL.Text,
            'property_insurance' : IDL.Float32,
            'name' : IDL.Text,
            'affordability' : IDL.Float32,
            'expense_to_income_ratio' : IDL.Float32,
            'square_footage' : IDL.Float32,
            'description' : IDL.Text,
            'flood_zone' : IDL.Bool,
            'initial_maintenance_reserve' : IDL.Float32,
            'vacancy_rate' : IDL.Float32,
            'projected_appreciation' : IDL.Float32,
            'underlying_asset_price' : IDL.Float32,
            'asset_canister' : IDL.Principal,
            'state' : IDL.Text,
            'property_taxes' : IDL.Float32,
            'price_per_sq_foot' : IDL.Float32,
            'property_management_fee' : IDL.Float32,
            'market_description' : IDL.Text,
            'cap_rate' : IDL.Float32,
            'baths' : IDL.Nat32,
            'platform_closing_fee' : IDL.Float32,
            'property_owner' : IDL.Principal,
            'school_score' : IDL.Nat32,
            'price' : IDL.Nat,
            'last_renovated' : IDL.Float32,
            'projected_rent' : IDL.Float32,
            'average_rent' : IDL.Nat32,
            'min_investment' : IDL.Nat64,
            'median_home_sale_price' : IDL.Nat32,
            'total_supply' : IDL.Nat,
            'symbol' : IDL.Text,
            'coordinates' : IDL.Text,
            'treasury' : IDL.Principal,
          }),
        ],
        ['query'],
      ),
    'icrc61_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text }))],
        ['query'],
      ),
    'icrc7_atomic_batch_transfers' : IDL.Func(
        [],
        [IDL.Opt(IDL.Bool)],
        ['query'],
      ),
    'icrc7_balance_of' : IDL.Func(
        [
          IDL.Vec(
            IDL.Record({
              'owner' : IDL.Principal,
              'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
            })
          ),
        ],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_collection_metadata' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              IDL.Text,
              IDL.Variant({
                'Int' : IDL.Int,
                'Map' : IDL.Vec(
                  IDL.Tuple(
                    IDL.Text,
                    IDL.Variant({
                      'Int' : IDL.Int,
                      'Nat' : IDL.Nat,
                      'Blob' : IDL.Vec(IDL.Nat8),
                      'Text' : IDL.Text,
                    }),
                  )
                ),
                'Nat' : IDL.Nat,
                'Blob' : IDL.Vec(IDL.Nat8),
                'Text' : IDL.Text,
                'Array' : IDL.Vec(
                  IDL.Variant({
                    'Int' : IDL.Int,
                    'Nat' : IDL.Nat,
                    'Blob' : IDL.Vec(IDL.Nat8),
                    'Text' : IDL.Text,
                  })
                ),
              }),
            )
          ),
        ],
        ['query'],
      ),
    'icrc7_description' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_logo' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'icrc7_max_default_take_value' : IDL.Func(
        [],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'icrc7_max_memo_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_query_batch_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_take_value' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_max_update_batch_size' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_owner_of' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [
          IDL.Vec(
            IDL.Opt(
              IDL.Record({
                'owner' : IDL.Principal,
                'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
              })
            )
          ),
        ],
        ['query'],
      ),
    'icrc7_permitted_drift' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_supply_cap' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'icrc7_symbol' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_token_metadata' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [
          IDL.Vec(
            IDL.Opt(
              IDL.Vec(
                IDL.Tuple(
                  IDL.Text,
                  IDL.Variant({
                    'Int' : IDL.Int,
                    'Map' : IDL.Vec(
                      IDL.Tuple(
                        IDL.Text,
                        IDL.Variant({
                          'Int' : IDL.Int,
                          'Nat' : IDL.Nat,
                          'Blob' : IDL.Vec(IDL.Nat8),
                          'Text' : IDL.Text,
                        }),
                      )
                    ),
                    'Nat' : IDL.Nat,
                    'Blob' : IDL.Vec(IDL.Nat8),
                    'Text' : IDL.Text,
                    'Array' : IDL.Vec(
                      IDL.Variant({
                        'Int' : IDL.Int,
                        'Nat' : IDL.Nat,
                        'Blob' : IDL.Vec(IDL.Nat8),
                        'Text' : IDL.Text,
                      })
                    ),
                  }),
                )
              )
            )
          ),
        ],
        ['query'],
      ),
    'icrc7_tokens' : IDL.Func(
        [IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_tokens_of' : IDL.Func(
        [
          IDL.Record({
            'owner' : IDL.Principal,
            'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
          }),
          IDL.Opt(IDL.Nat),
          IDL.Opt(IDL.Nat),
        ],
        [IDL.Vec(IDL.Nat)],
        ['query'],
      ),
    'icrc7_total_supply' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc7_transfer' : IDL.Func(
        [
          IDL.Vec(
            IDL.Record({
              'to' : IDL.Record({
                'owner' : IDL.Principal,
                'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
              }),
              'token_id' : IDL.Nat,
              'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
              'from_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
              'created_at_time' : IDL.Opt(IDL.Nat64),
            })
          ),
        ],
        [
          IDL.Vec(
            IDL.Opt(
              IDL.Variant({
                'Ok' : IDL.Nat,
                'Err' : IDL.Variant({
                  'GenericError' : IDL.Record({
                    'message' : IDL.Text,
                    'error_code' : IDL.Nat,
                  }),
                  'Duplicate' : IDL.Record({ 'duplicate_of' : IDL.Nat }),
                  'NonExistingTokenId' : IDL.Null,
                  'Unauthorized' : IDL.Null,
                  'CreatedInFuture' : IDL.Record({ 'ledger_time' : IDL.Nat64 }),
                  'InvalidRecipient' : IDL.Null,
                  'GenericBatchError' : IDL.Record({
                    'message' : IDL.Text,
                    'error_code' : IDL.Nat,
                  }),
                  'TooOld' : IDL.Null,
                }),
              })
            )
          ),
        ],
        [],
      ),
    'icrc7_tx_window' : IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    'mint' : IDL.Func(
        [IDL.Record({ 'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)) })],
        [IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text })],
        [],
      ),
    'refund' : IDL.Func(
        [IDL.Record({ 'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)) })],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'update_metadata' : IDL.Func(
        [
          IDL.Record({
            'year_built' : IDL.Opt(IDL.Nat32),
            'monthly_utilities' : IDL.Opt(IDL.Float32),
            'total_monthly_cost' : IDL.Opt(IDL.Float32),
            'average_5_year_roi' : IDL.Opt(IDL.Float32),
            'token' : IDL.Opt(IDL.Principal),
            'documents' : IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
            'yields' : IDL.Opt(IDL.Float32),
            'supply_cap' : IDL.Opt(IDL.Nat),
            'llc_monthly_franchise_tax' : IDL.Opt(IDL.Float32),
            'country' : IDL.Opt(IDL.Text),
            'occupied' : IDL.Opt(IDL.Bool),
            'annual_population_growth' : IDL.Opt(IDL.Nat32),
            'monthly_cash_flow' : IDL.Opt(IDL.Float32),
            'crime_score' : IDL.Opt(IDL.Nat32),
            'monthly_rent' : IDL.Opt(IDL.Float32),
            'beds' : IDL.Opt(IDL.Nat32),
            'city' : IDL.Opt(IDL.Text),
            'total_5_year_irr' : IDL.Opt(IDL.Float32),
            'logo' : IDL.Opt(IDL.Text),
            'property_insurance' : IDL.Opt(IDL.Float32),
            'name' : IDL.Opt(IDL.Text),
            'affordability' : IDL.Opt(IDL.Float32),
            'expense_to_income_ratio' : IDL.Opt(IDL.Float32),
            'square_footage' : IDL.Opt(IDL.Float32),
            'description' : IDL.Opt(IDL.Text),
            'flood_zone' : IDL.Opt(IDL.Bool),
            'initial_maintenance_reserve' : IDL.Opt(IDL.Float32),
            'vacancy_rate' : IDL.Opt(IDL.Float32),
            'projected_appreciation' : IDL.Opt(IDL.Float32),
            'underlying_asset_price' : IDL.Opt(IDL.Float32),
            'asset_canister' : IDL.Opt(IDL.Principal),
            'state' : IDL.Opt(IDL.Text),
            'property_taxes' : IDL.Opt(IDL.Float32),
            'price_per_sq_foot' : IDL.Opt(IDL.Float32),
            'property_management_fee' : IDL.Opt(IDL.Float32),
            'market_description' : IDL.Opt(IDL.Text),
            'cap_rate' : IDL.Opt(IDL.Float32),
            'baths' : IDL.Opt(IDL.Nat32),
            'platform_closing_fee' : IDL.Opt(IDL.Float32),
            'school_score' : IDL.Opt(IDL.Nat32),
            'price' : IDL.Opt(IDL.Nat),
            'last_renovated' : IDL.Opt(IDL.Float32),
            'projected_rent' : IDL.Opt(IDL.Float32),
            'average_rent' : IDL.Opt(IDL.Nat32),
            'min_investment' : IDL.Opt(IDL.Nat64),
            'median_home_sale_price' : IDL.Opt(IDL.Nat32),
            'symbol' : IDL.Opt(IDL.Text),
            'coordinates' : IDL.Opt(IDL.Text),
            'treasury' : IDL.Opt(IDL.Principal),
          }),
        ],
        [IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text })],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  return [
    IDL.Variant({
      'Upgrade' : IDL.Null,
      'Init' : IDL.Record({
        'year_built' : IDL.Nat32,
        'monthly_utilities' : IDL.Float32,
        'total_monthly_cost' : IDL.Float32,
        'average_5_year_roi' : IDL.Float32,
        'token' : IDL.Principal,
        'documents' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
        'yields' : IDL.Float32,
        'supply_cap' : IDL.Nat,
        'llc_monthly_franchise_tax' : IDL.Float32,
        'country' : IDL.Text,
        'occupied' : IDL.Bool,
        'annual_population_growth' : IDL.Nat32,
        'monthly_cash_flow' : IDL.Float32,
        'crime_score' : IDL.Nat32,
        'monthly_rent' : IDL.Float32,
        'beds' : IDL.Nat32,
        'city' : IDL.Text,
        'total_5_year_irr' : IDL.Float32,
        'logo' : IDL.Text,
        'property_insurance' : IDL.Float32,
        'name' : IDL.Text,
        'affordability' : IDL.Float32,
        'expense_to_income_ratio' : IDL.Float32,
        'square_footage' : IDL.Float32,
        'description' : IDL.Text,
        'flood_zone' : IDL.Bool,
        'initial_maintenance_reserve' : IDL.Float32,
        'vacancy_rate' : IDL.Float32,
        'projected_appreciation' : IDL.Float32,
        'underlying_asset_price' : IDL.Float32,
        'asset_canister' : IDL.Principal,
        'state' : IDL.Text,
        'property_taxes' : IDL.Float32,
        'price_per_sq_foot' : IDL.Float32,
        'property_management_fee' : IDL.Float32,
        'market_description' : IDL.Text,
        'cap_rate' : IDL.Float32,
        'baths' : IDL.Nat32,
        'platform_closing_fee' : IDL.Float32,
        'property_owner' : IDL.Principal,
        'school_score' : IDL.Nat32,
        'price' : IDL.Nat,
        'last_renovated' : IDL.Float32,
        'projected_rent' : IDL.Float32,
        'average_rent' : IDL.Nat32,
        'min_investment' : IDL.Nat64,
        'median_home_sale_price' : IDL.Nat32,
        'symbol' : IDL.Text,
        'coordinates' : IDL.Text,
        'treasury' : IDL.Principal,
      }),
    }),
  ];
};
