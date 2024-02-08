export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const AdditionalDetails = IDL.Record({
    'year_built' : IDL.Opt(IDL.Nat32),
    'occupied' : IDL.Opt(IDL.Bool),
    'crime_score' : IDL.Opt(IDL.Nat32),
    'monthly_rent' : IDL.Opt(IDL.Float32),
    'beds' : IDL.Opt(IDL.Nat32),
    'affordability' : IDL.Opt(IDL.Float32),
    'last_renovation' : IDL.Opt(IDL.Text),
    'square_footage' : IDL.Opt(IDL.Float32),
    'flood_zone' : IDL.Opt(IDL.Bool),
    'price_per_sq_foot' : IDL.Opt(IDL.Float32),
    'baths' : IDL.Opt(IDL.Nat32),
    'school_score' : IDL.Opt(IDL.Nat32),
  });
  const Result_1 = IDL.Variant({ 'Ok' : AdditionalDetails, 'Err' : IDL.Text });
  const Status = IDL.Variant({
    'Ended' : IDL.Null,
    'Live' : IDL.Null,
    'Draft' : IDL.Null,
    'Upcoming' : IDL.Null,
  });
  const InvestmentFinancials = IDL.Record({
    'initial_mainatance_reserve' : IDL.Opt(IDL.Float32),
    'underlying_asset_price' : IDL.Opt(IDL.Float32),
    'platform_closing_fee' : IDL.Opt(IDL.Float32),
    'min_investment' : IDL.Opt(IDL.Float32),
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
    'additional_details' : IDL.Opt(AdditionalDetails),
    'financial_details' : IDL.Opt(FinancialDetails),
    'market_details' : IDL.Opt(MarketDetails),
  });
  const CollectionMetadata = IDL.Record({
    'status' : Status,
    'supply_cap' : IDL.Nat16,
    'owner' : IDL.Text,
    'desc' : IDL.Text,
    'additional_metadata' : IDL.Opt(AdditionalMetadata),
    'name' : IDL.Text,
    'collection_id' : IDL.Text,
    'property_images' : IDL.Vec(IDL.Text),
    'total_supply' : IDL.Nat16,
  });
  const Result_2 = IDL.Variant({ 'Ok' : CollectionMetadata, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'Ok' : Status, 'Err' : IDL.Text });
  const Result_4 = IDL.Variant({ 'Ok' : MarketDetails, 'Err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'Ok' : FinancialDetails, 'Err' : IDL.Text });
  const Metadata = IDL.Record({
    'supply_cap' : IDL.Nat16,
    'nft_token_id' : IDL.Text,
    'desc' : IDL.Text,
    'collection_id' : IDL.Text,
    'collection_name' : IDL.Text,
    'nft_uri' : IDL.Text,
    'total_supply' : IDL.Nat16,
    'nft_symbol' : IDL.Text,
  });
  const Result_6 = IDL.Variant({ 'Ok' : Metadata, 'Err' : IDL.Text });
  const Result_7 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : IDL.Text });
  return IDL.Service({
    'add_collection_image' : IDL.Func([IDL.Text], [Result], []),
    'collection_image' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'get_additional_details' : IDL.Func([], [Result_1], ['query']),
    'get_collection_metadata' : IDL.Func([], [Result_2], ['query']),
    'get_collection_status' : IDL.Func([], [Result_3], ['query']),
    'get_financial_details' : IDL.Func([], [Result_4], ['query']),
    'get_market_details' : IDL.Func([], [Result_5], ['query']),
    'get_metadata' : IDL.Func([IDL.Text], [Result_6], ['query']),
    'get_owner_of_NFT' : IDL.Func([IDL.Text], [Result_7], []),
    'init_collection' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Principal],
        [Result],
        [],
      ),
    'mint' : IDL.Func([IDL.Text, IDL.Text, IDL.Principal], [Result], []),
    'update_additional_details' : IDL.Func([AdditionalDetails], [Result], []),
    'update_doc_details' : IDL.Func(
        [IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)))],
        [Result],
        [],
      ),
    'update_financial_details' : IDL.Func([FinancialDetails], [Result], []),
    'update_market_details' : IDL.Func([MarketDetails], [Result], []),
    'update_name_desc' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text)],
        [Result],
        [],
      ),
    'update_status' : IDL.Func([Status], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
