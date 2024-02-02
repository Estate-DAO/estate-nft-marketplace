export const idlFactory = ({ IDL }) => {
	const Status = IDL.Variant({
		Ended: IDL.Null,
		Live: IDL.Null,
		Upcoming: IDL.Null
	});
	const AdditionalDetails = IDL.Record({
		year_built: IDL.Opt(IDL.Nat32),
		occupied: IDL.Opt(IDL.Text),
		crime_score: IDL.Opt(IDL.Nat32),
		monthly_rent: IDL.Opt(IDL.Float32),
		beds: IDL.Opt(IDL.Nat32),
		affordability: IDL.Opt(IDL.Float32),
		last_renovation: IDL.Opt(IDL.Text),
		square_footage: IDL.Opt(IDL.Float32),
		flood_zone: IDL.Opt(IDL.Text),
		price_per_sq_foot: IDL.Opt(IDL.Float32),
		baths: IDL.Opt(IDL.Nat32),
		school_score: IDL.Opt(IDL.Nat32)
	});
	const TotalInvestmentValue = IDL.Record({
		homebase_closing_fee: IDL.Opt(IDL.Text),
		initial_mainatance_reserve: IDL.Opt(IDL.Float32),
		underlying_asset_price: IDL.Opt(IDL.Float32)
	});
	const TotalReturns = IDL.Record({
		average_5_year_roi: IDL.Opt(IDL.Float32),
		projected_appreciation: IDL.Opt(IDL.Float32),
		cap_rate: IDL.Opt(IDL.Float32)
	});
	const MonthlyGrossRents = IDL.Record({
		llc_monthly_franchise_tax: IDL.Opt(IDL.Float32),
		monthly_cash_flow: IDL.Opt(IDL.Float32),
		property_insurance: IDL.Opt(IDL.Float32),
		expense_to_income_ratio: IDL.Opt(IDL.Float32),
		vacancy_rate: IDL.Opt(IDL.Float32),
		property_taxes: IDL.Opt(IDL.Float32),
		property_managment_fee: IDL.Opt(IDL.Float32),
		monthly_utiliiies: IDL.Opt(IDL.Float32)
	});
	const FinancialDetails = IDL.Record({
		total_investement_value: IDL.Opt(TotalInvestmentValue),
		total_returns: IDL.Opt(TotalReturns),
		monthly_gross_rents: IDL.Opt(MonthlyGrossRents)
	});
	const MarketDetails = IDL.Record({
		average_rent: IDL.Opt(IDL.Nat32),
		location: IDL.Opt(IDL.Text),
		median_home_sale_price: IDL.Opt(IDL.Nat32),
		annual_popullation_growth: IDL.Opt(IDL.Nat32)
	});
	const AdditionalMetadata = IDL.Record({
		documents: IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))),
		additional_details: IDL.Opt(AdditionalDetails),
		financial_details: IDL.Opt(FinancialDetails),
		market_details: IDL.Opt(MarketDetails)
	});
	const PropertyData = IDL.Record({
		bed: IDL.Nat16,
		area: IDL.Nat16,
		bath: IDL.Nat16
	});
	const PropDetails = IDL.Record({
		year_built: IDL.Opt(IDL.Text),
		purchase_price: IDL.Opt(IDL.Text),
		yields: IDL.Opt(IDL.Text),
		projected_rent: IDL.Opt(IDL.Text),
		min_investment: IDL.Opt(IDL.Text)
	});
	const CollectionMetadata = IDL.Record({
		status: Status,
		supply_cap: IDL.Nat16,
		owner: IDL.Text,
		desc: IDL.Text,
		additional_metadata: IDL.Opt(AdditionalMetadata),
		name: IDL.Text,
		collection_id: IDL.Text,
		property_images: IDL.Vec(IDL.Text),
		prop_data: IDL.Opt(PropertyData),
		prop_details: IDL.Opt(PropDetails),
		total_supply: IDL.Nat16
	});
	const Result = IDL.Variant({ Ok: CollectionMetadata, Err: IDL.Text });
	const Result_4 = IDL.Variant({ Ok: Status, Err: IDL.Text });
	const Result_1 = IDL.Variant({ Ok: MarketDetails, Err: IDL.Text });
	const Metadata = IDL.Record({
		supply_cap: IDL.Nat16,
		nft_token_id: IDL.Text,
		desc: IDL.Text,
		logo: IDL.Text,
		collection_id: IDL.Text,
		collection_name: IDL.Text,
		nft_uri: IDL.Text,
		total_supply: IDL.Nat16,
		nft_symbol: IDL.Text
	});
	const Result_2 = IDL.Variant({ Ok: Metadata, Err: IDL.Text });
	const Result_5 = IDL.Variant({ Ok: PropertyData, Err: IDL.Text });
	const Result_3 = IDL.Variant({ Ok: IDL.Text, Err: IDL.Text });
	return IDL.Service({
		collection_image: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
		get_collection_metadata: IDL.Func([], [Result], ['query']),
		get_collection_status: IDL.Func([], [Result_4], ['query']),
		get_market_details: IDL.Func([], [Result_1], ['query']),
		get_metadata: IDL.Func([IDL.Text], [Result_2], ['query']),
		get_prop_data: IDL.Func([], [Result_5], ['query']),
		init_collection: IDL.Func([IDL.Text, IDL.Text, IDL.Principal], [Result_3], []),
		mint: IDL.Func([IDL.Text, IDL.Text, IDL.Principal], [Result_3], []),
		update_additional_details: IDL.Func([AdditionalDetails], [Result_3], []),
		update_doc_details: IDL.Func([IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)))], [Result_3], []),
		update_financial_details: IDL.Func([FinancialDetails], [Result_3], []),
		update_market_details: IDL.Func([MarketDetails], [Result_3], []),
		update_prop_data: IDL.Func([PropertyData], [Result_3], []),
		update_prop_det: IDL.Func([PropDetails], [Result_3], [])
	});
};
export const init = ({ IDL }) => {
	return [];
};
