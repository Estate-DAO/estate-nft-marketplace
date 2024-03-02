import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

type CollectionId = {
	assetCanId: string;
	minterCanId: string;
};

type CollectionDetails = CollectionMetadata & {
	id: CollectionId;
};

export const staticData = {
	additional_metadata: [
		{
			documents: [],
			property_details: [
				{
					year_built: [1990],
					occupied: [false],
					crime_score: [0],
					monthly_rent: [0],
					beds: [2],
					affordability: [0],
					square_footage: [1610],
					flood_zone: [false],
					price_per_sq_foot: [0],
					baths: [2],
					school_score: [0],
					last_renovated: [2002]
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
							underlying_asset_price: [520000],
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
					country: ['Spain'],
					city: ['Puerto Sotogrande'],
					description: [''],
					state: ['Cadiz'],
					average_rent: [0],
					median_home_sale_price: [0],
					coordinates: [''],
					annual_popullation_growth: [0]
				}
			]
		}
	],
	status: { Draft: null },
	total_supply: BigInt(100),
	supply_cap: BigInt(50),
	price: BigInt(520000),
	owner: 'owner',
	image_uri: '',
	desc: 'The elegant gated development in the heart of Sotogrande.',
	property_images: [],
	is_initialised: true
} satisfies Omit<CollectionMetadata, 'name'>;

export const data = [
	{
		...staticData,
		name: 'Illionis, 1607',
		id: { assetCanId: 'b77ix-eeaaa-aaaaa-qaada-cai', minterCanId: 'by6od-j4aaa-aaaaa-qaadq-cai' }
	},
	{
		...staticData,
		name: 'Mississippi, 1900',
		id: { assetCanId: 'avqkn-guaaa-aaaaa-qaaea-cai', minterCanId: 'asrmz-lmaaa-aaaaa-qaaeq-cai' }
	}
] as CollectionDetails[];
