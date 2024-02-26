import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

type CollectionId = {
	assetCanId: string;
	minterCanId: string;
};

type CollectionDetails = CollectionMetadata & {
	id: CollectionId;
};

export const data = [
	{
		status: { Draft: null },
		supply_cap: 5000,
		owner: 'owner',
		desc: 'Situated in the heart of the city, this property is a great investment!',
		additional_metadata: [
			{
				documents: [],
				property_details: [
					{
						year_built: [0],
						occupied: [false],
						crime_score: [0],
						monthly_rent: [0],
						beds: [0],
						affordability: [0],
						square_footage: [0],
						flood_zone: [false],
						price_per_sq_foot: [0],
						baths: [0],
						school_score: [0],
						last_renovated: [0]
					}
				],
				financial_details: [
					{
						total_monthly_cost: [0],
						monthly_cash_flow: [0],
						property_insurance: [0],
						investment: [
							{
								initial_maintenance_reserve: [0],
								underlying_asset_price: [0],
								platform_closing_fee: [0],
								min_investment: [BigInt(0)]
							}
						],
						expense_to_income_ratio: [0],
						rents: [
							{
								llc_monthly_franchise_tax: [0],
								vacancy_rate: [0],
								property_taxes: [0],
								property_managment_fee: [0],
								projected_rent: [0],
								monthly_utiliiies: [0]
							}
						],
						returns: [
							{
								average_5_year_roi: [0],
								yields: [0],
								total_5_year_irr: [0],
								projected_appreciation: [0],
								cap_rate: [0]
							}
						]
					}
				],
				market_details: [
					{
						country: [''],
						city: [''],
						description: [''],
						state: [''],
						average_rent: [0],
						median_home_sale_price: [0],
						coordinates: [''],
						annual_popullation_growth: [0]
					}
				]
			}
		],
		name: 'Illionis, 1607',
		property_images: [],
		is_initialised: true,
		total_supply: 0,
		id: { assetCanId: 'b77ix-eeaaa-aaaaa-qaada-cai', minterCanId: 'by6od-j4aaa-aaaaa-qaadq-cai' }
	} as CollectionDetails,
	{
		status: { Draft: null },
		supply_cap: 5000,
		owner: 'owner',
		desc: 'Situated in the heart of the city, this property is a great investment!',
		additional_metadata: [
			{
				documents: [],
				property_details: [
					{
						year_built: [0],
						occupied: [false],
						crime_score: [0],
						monthly_rent: [0],
						beds: [0],
						affordability: [0],
						square_footage: [0],
						flood_zone: [false],
						price_per_sq_foot: [0],
						baths: [0],
						school_score: [0],
						last_renovated: [0]
					}
				],
				financial_details: [
					{
						total_monthly_cost: [0],
						monthly_cash_flow: [0],
						property_insurance: [0],
						investment: [
							{
								initial_maintenance_reserve: [0],
								underlying_asset_price: [0],
								platform_closing_fee: [0],
								min_investment: [BigInt(0)]
							}
						],
						expense_to_income_ratio: [0],
						rents: [
							{
								llc_monthly_franchise_tax: [0],
								vacancy_rate: [0],
								property_taxes: [0],
								property_managment_fee: [0],
								projected_rent: [0],
								monthly_utiliiies: [0]
							}
						],
						returns: [
							{
								average_5_year_roi: [0],
								yields: [0],
								total_5_year_irr: [0],
								projected_appreciation: [0],
								cap_rate: [0]
							}
						]
					}
				],
				market_details: [
					{
						country: [''],
						city: [''],
						description: [''],
						state: [''],
						average_rent: [0],
						median_home_sale_price: [0],
						coordinates: [''],
						annual_popullation_growth: [0]
					}
				]
			}
		],
		name: 'Mississippi, 1900',
		property_images: [],
		is_initialised: true,
		total_supply: 0,
		id: { assetCanId: 'avqkn-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrmz-lmaaa-aaaaa-qaaeq-cai' }
	} as CollectionDetails
];