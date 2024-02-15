export const idlFactory = ({ IDL }) => {
  const CanisterIds = IDL.Record({
    'minter_canister' : IDL.Principal,
    'asset_canister' : IDL.Principal,
  });
  const Result = IDL.Variant({ 'Ok' : CanisterIds, 'Err' : IDL.Text });
  const Status = IDL.Variant({
    'Ended' : IDL.Null,
    'Live' : IDL.Null,
    'Draft' : IDL.Null,
    'Upcoming' : IDL.Null,
  });
  const Result_1 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Principal),
    'Err' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'Ok' : IDL.Vec(CanisterIds),
    'Err' : IDL.Text,
  });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Vec(IDL.Nat8), 'Err' : IDL.Text });
  const PropertyDetails = IDL.Record({
    'year_built' : IDL.Opt(IDL.Nat32),
    'occupied' : IDL.Opt(IDL.Bool),
    'crime_score' : IDL.Opt(IDL.Nat32),
    'monthly_rent' : IDL.Opt(IDL.Float32),
    'beds' : IDL.Opt(IDL.Nat32),
    'affordability' : IDL.Opt(IDL.Float32),
    'square_footage' : IDL.Opt(IDL.Float32),
    'flood_zone' : IDL.Opt(IDL.Bool),
    'price_per_sq_foot' : IDL.Opt(IDL.Float32),
    'baths' : IDL.Opt(IDL.Nat32),
    'school_score' : IDL.Opt(IDL.Nat32),
    'last_renovated' : IDL.Opt(IDL.Float32),
  });
  const InvestmentFinancials = IDL.Record({
    'initial_maintenance_reserve' : IDL.Opt(IDL.Float32),
    'underlying_asset_price' : IDL.Opt(IDL.Float32),
    'platform_closing_fee' : IDL.Opt(IDL.Float32),
    'min_investment' : IDL.Opt(IDL.Nat64),
  });
  const RentFinancials = IDL.Record({
    'llc_monthly_franchise_tax' : IDL.Opt(IDL.Float32),
    'vacancy_rate' : IDL.Opt(IDL.Float32),
    'property_taxes' : IDL.Opt(IDL.Float32),
    'property_managment_fee' : IDL.Opt(IDL.Float32),
    'projected_rent' : IDL.Opt(IDL.Float32),
    'monthly_utiliiies' : IDL.Opt(IDL.Float32),
  });
  const ReturnsFinancials = IDL.Record({
    'average_5_year_roi' : IDL.Opt(IDL.Float32),
    'yields' : IDL.Opt(IDL.Float32),
    'total_5_year_irr' : IDL.Opt(IDL.Float32),
    'projected_appreciation' : IDL.Opt(IDL.Float32),
    'cap_rate' : IDL.Opt(IDL.Float32),
  });
  const FinancialDetails = IDL.Record({
    'total_monthly_cost' : IDL.Opt(IDL.Float32),
    'monthly_cash_flow' : IDL.Opt(IDL.Float32),
    'property_insurance' : IDL.Opt(IDL.Float32),
    'investment' : IDL.Opt(InvestmentFinancials),
    'expense_to_income_ratio' : IDL.Opt(IDL.Float32),
    'rents' : IDL.Opt(RentFinancials),
    'returns' : IDL.Opt(ReturnsFinancials),
  });
  const MarketDetails = IDL.Record({
    'country' : IDL.Opt(IDL.Text),
    'city' : IDL.Opt(IDL.Text),
    'description' : IDL.Opt(IDL.Text),
    'state' : IDL.Opt(IDL.Text),
    'average_rent' : IDL.Opt(IDL.Nat32),
    'median_home_sale_price' : IDL.Opt(IDL.Nat32),
    'coordinates' : IDL.Opt(IDL.Text),
    'annual_popullation_growth' : IDL.Opt(IDL.Nat32),
  });
  const AdditionalMetadata = IDL.Record({
    'documents' : IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
    'property_details' : IDL.Opt(PropertyDetails),
    'financial_details' : IDL.Opt(FinancialDetails),
    'market_details' : IDL.Opt(MarketDetails),
  });
  const FormMetadata = IDL.Record({
    'supply_cap' : IDL.Nat16,
    'owner' : IDL.Text,
    'desc' : IDL.Text,
    'additional_metadata' : IDL.Opt(AdditionalMetadata),
    'name' : IDL.Text,
    'property_images' : IDL.Vec(IDL.Text),
  });
  const Result_4 = IDL.Variant({ 'Ok' : FormMetadata, 'Err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  return IDL.Service({
    'approve_collection' : IDL.Func([IDL.Nat16, IDL.Bool], [Result], []),
    'filter_status' : IDL.Func([Status], [Result_1], []),
    'get_all_canisters' : IDL.Func([], [Result_2], ['query']),
    'get_all_minter_canisters' : IDL.Func([], [Result_1], []),
    'get_asset_wasm' : IDL.Func([], [Result_3], ['query']),
    'get_form_list' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat16, FormMetadata))],
        [],
      ),
    'get_form_metadata' : IDL.Func([IDL.Nat16], [Result_4], []),
    'get_minter_wasm' : IDL.Func([], [Result_3], ['query']),
    'grant_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [Result_5],
        [],
      ),
    'init_asset_wasm' : IDL.Func([IDL.Vec(IDL.Nat8)], [Result_5], []),
    'init_form_metadata' : IDL.Func([FormMetadata], [Result_5], []),
    'init_minter_wasm' : IDL.Func([IDL.Vec(IDL.Nat8)], [Result_5], []),
    'revoke_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [Result_5],
        [],
      ),
    'test_auth_user' : IDL.Func([], [Result_1], []),
  });
};
export const init = ({ IDL }) => { return []; };
