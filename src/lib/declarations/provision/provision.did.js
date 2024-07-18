export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add_admin' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'add_property_request' : IDL.Func(
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
            'state' : IDL.Text,
            'property_taxes' : IDL.Float32,
            'price_per_sq_foot' : IDL.Float32,
            'property_management_fee' : IDL.Float32,
            'market_description' : IDL.Text,
            'cap_rate' : IDL.Float32,
            'baths' : IDL.Nat32,
            'platform_closing_fee' : IDL.Float32,
            'index' : IDL.Principal,
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
            'images' : IDL.Vec(IDL.Text),
          }),
        ],
        [IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text })],
        [],
      ),
    'approve_request' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat,
              'token_canister' : IDL.Principal,
              'asset_canister' : IDL.Principal,
            }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'delete_property' : IDL.Func(
        [IDL.Nat],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'get_asset_canister_wasm' : IDL.Func(
        [],
        [
          IDL.Record({
            'moduleHash' : IDL.Vec(IDL.Nat8),
            'chunkHashes' : IDL.Vec(IDL.Vec(IDL.Nat8)),
          }),
        ],
        ['query'],
      ),
    'get_asset_proxy_canister' : IDL.Func([], [IDL.Principal], ['query']),
    'get_pending_requests' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'get_request_info' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Opt(
            IDL.Record({
              'metadata' : IDL.Opt(
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
                  'state' : IDL.Text,
                  'property_taxes' : IDL.Float32,
                  'price_per_sq_foot' : IDL.Float32,
                  'property_management_fee' : IDL.Float32,
                  'market_description' : IDL.Text,
                  'cap_rate' : IDL.Float32,
                  'baths' : IDL.Nat32,
                  'platform_closing_fee' : IDL.Float32,
                  'index' : IDL.Principal,
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
                  'images' : IDL.Vec(IDL.Text),
                })
              ),
              'token_canister' : IDL.Opt(IDL.Principal),
              'approval_status' : IDL.Variant({
                'Approved' : IDL.Null,
                'Rejected' : IDL.Null,
                'Pending' : IDL.Null,
              }),
              'asset_canister' : IDL.Opt(IDL.Principal),
              'property_owner' : IDL.Principal,
            })
          ),
        ],
        ['query'],
      ),
    'get_token_canister_wasm' : IDL.Func(
        [],
        [
          IDL.Record({
            'moduleHash' : IDL.Vec(IDL.Nat8),
            'chunkHashes' : IDL.Vec(IDL.Vec(IDL.Nat8)),
          }),
        ],
        ['query'],
      ),
    'is_admin' : IDL.Func([IDL.Opt(IDL.Principal)], [IDL.Bool], ['query']),
    'list_properties' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat,
              'token_canister' : IDL.Principal,
              'asset_canister' : IDL.Principal,
            })
          ),
        ],
        ['query'],
      ),
    'reject_request' : IDL.Func(
        [IDL.Nat],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'remove_admin' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'set_asset_canister_wasm' : IDL.Func(
        [
          IDL.Record({
            'moduleHash' : IDL.Vec(IDL.Nat8),
            'chunkHashes' : IDL.Vec(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'set_asset_proxy_canister' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'set_token_canister_wasm' : IDL.Func(
        [
          IDL.Record({
            'moduleHash' : IDL.Vec(IDL.Nat8),
            'chunkHashes' : IDL.Vec(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'upgrade_token_canister' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
    'upgrade_token_canisters' : IDL.Func(
        [],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text })],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  return [IDL.Opt(IDL.Variant({ 'Upgrade' : IDL.Null, 'Init' : IDL.Null }))];
};
