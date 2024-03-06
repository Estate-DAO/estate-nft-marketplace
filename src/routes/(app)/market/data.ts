import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

export const staticData = {
	additional_metadata: [
		{
			documents: [],
			property_details: [
				{
					year_built: [1990],
					occupied: [false],
					crime_score: [0],
					monthly_rent: [2166],
					beds: [2],
					affordability: [0],
					square_footage: [1610],
					flood_zone: [false],
					price_per_sq_foot: [323],
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
							min_investment: [BigInt(100)]
						}
					],
					expense_to_income_ratio: [0],
					rents: [
						{
							llc_monthly_franchise_tax: [0],
							vacancy_rate: [0],
							property_taxes: [0],
							property_managment_fee: [0],
							projected_rent: [2166],
							monthly_utiliiies: [0]
						}
					],
					returns: [
						{
							average_5_year_roi: [0],
							yields: [5],
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
					description: [
						`Located at a crossroads of cultures on the Costa del Sol and bathed by the Mediterranean Sea, Puerto Sotogrande greets the Strait of Gibraltar and the Atlantic Ocean majestically every morning.
						Very well connected, you can reach the area through the international airports of Jerez de la Frontera, Gibraltar and Malaga. The seaports of Algeciras and Cádiz offer the possibility of doing it by sea. The communications network is completed with excellent roads, among which are several highways, highways or trains to the cities of Malaga and Algeciras.
						PST Puerto Sotogrande is a benchmark port in the Mediterranean, committed to providing quality and differentiated services by applying the best available technologies with environmentally sustainable criteria.`
					],
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
	total_supply: BigInt(4000),
	supply_cap: BigInt(50),
	price: BigInt(520000),
	owner: 'owner',
	image_uri: 'https://i.ibb.co/hX6HG15/1.jpg',
	treasury_account: '3nhwi-bzr6v-ifvra-2wtz7-6cf6r-tgtez-vblz5-zjrmw-bkawc-iyxal-bqe',
	desc: `Situated in the heart of Puerto Sotogrande, this attractive vacation property is available. Featuring two generously sized bedrooms and baths, with a total area of 1610.40 square meters, including a pleasant terrace of about 15 square meters, this residence effortlessly combines comfort, sophistication, and a touch of Mediterranean charm.
	The terrace serves as an additional living space, perfect for outdoor meals, evening drinks, or simply relaxing with a good book.
	Indoors, the atmosphere is classic and welcoming. The living area has an open design, seamlessly connecting the cozy lounge, dining area, and modern kitchen. Natural light streams through large windows, highlighting the warm wooden floors and tasteful details. Envision hosting intimate gatherings with friends, the sound of laughter blending with the backdrop of sea views.
	The master suite offers a peaceful sanctuary, complete with a marble-adorned en-suite bath. The second bedroom is equally inviting, suitable for guests or as a home office. Additionally, practical amenities include ample storage, secure parking, and access to a community pool for leisurely afternoons.`,
	property_images: [
		'https://i.ibb.co/hX6HG15/1.jpg',
		'https://i.ibb.co/FsYy5fY/2.jpg',
		'https://i.ibb.co/jVhVgJY/3.jpg',
		'https://i.ibb.co/0DnkvY9/4.jpg',
		'https://i.ibb.co/vz7ZtM2/5.jpg',
		'https://i.ibb.co/LCBNGSC/6.jpg',
		'https://i.ibb.co/yQPBPkC/7.jpg',
		'https://i.ibb.co/NNtmHd6/8.jpg',
		'https://i.ibb.co/8YKkWft/9.jpg',
		'https://i.ibb.co/sjmSsLp/10.jpg'
	],
	is_initialised: true
} satisfies Omit<CollectionMetadata, 'name'>;
