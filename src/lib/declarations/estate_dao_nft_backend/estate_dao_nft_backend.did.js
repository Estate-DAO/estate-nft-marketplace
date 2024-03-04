export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Vec(IDL.Nat8), 'Err' : IDL.Text });
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  const Status = IDL.Variant({
    'Ended' : IDL.Null,
    'Live' : IDL.Null,
    'Draft' : IDL.Null,
    'Upcoming' : IDL.Null,
  });
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
  const CollectionMetadata = IDL.Record({
    'status' : Status,
    'supply_cap' : IDL.Nat64,
    'image_uri' : IDL.Text,
    'owner' : IDL.Text,
    'desc' : IDL.Text,
    'additional_metadata' : IDL.Opt(AdditionalMetadata),
    'name' : IDL.Text,
    'property_images' : IDL.Vec(IDL.Text),
    'price' : IDL.Nat64,
    'is_initialised' : IDL.Bool,
    'total_supply' : IDL.Nat64,
  });
  const Result_3 = IDL.Variant({ 'Ok' : CollectionMetadata, 'Err' : IDL.Text });
  const Result_4 = IDL.Variant({ 'Ok' : Status, 'Err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'Ok' : MarketDetails, 'Err' : IDL.Text });
  const Result_6 = IDL.Variant({ 'Ok' : FinancialDetails, 'Err' : IDL.Text });
  const Metadata = IDL.Record({
    'supply_cap' : IDL.Nat64,
    'nft_token_id' : IDL.Text,
    'desc' : IDL.Text,
    'collection_name' : IDL.Text,
    'nft_uri' : IDL.Text,
    'total_supply' : IDL.Nat64,
    'symbol' : IDL.Text,
  });
  const Result_7 = IDL.Variant({ 'Ok' : Metadata, 'Err' : IDL.Text });
  const Result_8 = IDL.Variant({
    'Ok' : IDL.Tuple(IDL.Text, IDL.Nat64, IDL.Nat64),
    'Err' : IDL.Text,
  });
  const Result_9 = IDL.Variant({ 'Ok' : PropertyDetails, 'Err' : IDL.Text });
  const SaleStatus = IDL.Variant({
    'Init' : IDL.Null,
    'Complete' : IDL.Null,
    'Incomplete' : IDL.Null,
  });
  const Timestamp = IDL.Record({ 'timestamp_nanos' : IDL.Nat64 });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const SaleData = IDL.Record({
    'status' : SaleStatus,
    'nft_token_id' : IDL.Text,
    'time' : Timestamp,
    'buyer' : Account,
    'amount' : IDL.Nat64,
  });
  const Result_10 = IDL.Variant({ 'Ok' : SaleData, 'Err' : IDL.Text });
  const Result_11 = IDL.Variant({
    'Ok' : IDL.Tuple(IDL.Nat64, IDL.Nat64),
    'Err' : IDL.Text,
  });
  const Result_12 = IDL.Variant({ 'Ok' : Account, 'Err' : IDL.Text });
  const FormMetadata = IDL.Record({
    'supply_cap' : IDL.Nat64,
    'image_uri' : IDL.Text,
    'owner' : IDL.Text,
    'desc' : IDL.Text,
    'additional_metadata' : IDL.Opt(AdditionalMetadata),
    'name' : IDL.Text,
    'property_images' : IDL.Vec(IDL.Text),
    'price' : IDL.Nat64,
  });
  return IDL.Service({
    'add_collection_image' : IDL.Func([IDL.Text], [Result], []),
    'collection_image' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'create_accountid' : IDL.Func(
        [IDL.Principal],
        [Result_1],
        ['composite_query'],
      ),
    'create_escrow_accountid' : IDL.Func(
        [IDL.Principal],
        [Result_1],
        ['composite_query'],
      ),
    'get_balance' : IDL.Func([IDL.Principal], [Result_2], ['composite_query']),
    'get_collection_metadata' : IDL.Func([], [Result_3], ['query']),
    'get_collection_status' : IDL.Func([], [Result_4], ['query']),
    'get_financial_details' : IDL.Func([], [Result_5], ['query']),
    'get_market_details' : IDL.Func([], [Result_6], ['query']),
    'get_metadata' : IDL.Func([IDL.Text], [Result_7], ['query']),
    'get_payment_details' : IDL.Func(
        [IDL.Principal],
        [Result_8],
        ['composite_query'],
      ),
    'get_property_details' : IDL.Func([], [Result_9], ['query']),
    'get_sale_data' : IDL.Func([IDL.Text], [Result_10], ['query']),
    'get_total_invested' : IDL.Func([], [IDL.Nat64], ['query']),
    'get_user_sale_balance' : IDL.Func(
        [IDL.Principal],
        [Result_11],
        ['composite_query'],
      ),
    'icrc7_description' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_image' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc7_owner_of' : IDL.Func([IDL.Text], [Result_12], []),
    'icrc7_total_supply' : IDL.Func([], [IDL.Nat64], ['query']),
    'init_collection' : IDL.Func([FormMetadata], [Result], []),
    'mint' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Principal],
        [Result],
        [],
      ),
    'mint_approved_nfts' : IDL.Func([IDL.Principal], [Result], []),
    'primary_sale' : IDL.Func([IDL.Principal], [Result], []),
    'refund_user_tokens' : IDL.Func([IDL.Principal], [Result], []),
    'sale_confirmed_mint' : IDL.Func([], [Result], []),
    'sale_confirmed_refund' : IDL.Func([], [Result], []),
    'update_basic_details' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text), IDL.Opt(Status)],
        [Result],
        [],
      ),
    'update_doc_details' : IDL.Func(
        [IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)))],
        [Result],
        [],
      ),
    'update_financial_details' : IDL.Func([FinancialDetails], [Result], []),
    'update_market_details' : IDL.Func([MarketDetails], [Result], []),
    'update_property_details' : IDL.Func([PropertyDetails], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
