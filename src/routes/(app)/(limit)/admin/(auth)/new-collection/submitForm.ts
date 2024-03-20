import type {
	FormMetadata,
	Status
} from '$lib/declarations/provision_canister_backend/provision_canister_backend.did';
import { toE8s } from '$lib/utils/icp';
import type { BasicInfoData } from './BasicInfo.svelte';
import type { FinancialInfoData } from './FinancialInfo.svelte';
import type { MarketInfoData } from './MarketInfo.svelte';
import type { PropertyInfoData } from './PropertyInfo.svelte';

export function optional<T>(val: T, type: 'string' | 'number' | 'bigint' | 'boolean'): [] | [T] {
	if (val === undefined || val === null) return [];
	switch (type) {
		case 'string':
			return val ? [val] : [];
		case 'bigint':
			return [BigInt(Number(val)) as T];
		case 'number':
			return [Number(val) as T];
		default:
			return [val];
	}
}

export function getFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData,
	propertyImages: string[] = [],
	userId: string = ''
): FormMetadata {
	return {
		name: basicInfoData.name,
		desc: basicInfoData.description,
		owner: userId || 'owner',
		property_images: propertyImages,
		treasury: basicInfoData.userNNsPrincipal,
		status: {
			[basicInfoData.status]: null
		} as Status,
		supply_cap: BigInt(basicInfoData.supplyCap),
		image_uri: basicInfoData.coverImage,
		price: BigInt(toE8s(basicInfoData.price)),
		additional_metadata: [
			{
				documents: [],
				market_details: [
					{
						annual_popullation_growth: optional<number>(
							marketInfoData?.annualPopulationGrowth,
							'number'
						),
						average_rent: optional<number>(marketInfoData?.averageRent, 'number'),
						median_home_sale_price: optional<number>(marketInfoData?.medianHomeSalePrice, 'number'),
						country: optional<string>(marketInfoData?.country, 'string'),
						city: optional<string>(marketInfoData?.city, 'string'),
						state: optional<string>(marketInfoData?.state, 'string'),
						description: optional<string>(marketInfoData?.description, 'string'),
						coordinates: optional<string>(marketInfoData?.coordinates, 'string')
					}
				],
				property_details: [
					{
						affordability: optional<number>(propertyInfoData?.affordability, 'string'),
						baths: optional<number>(propertyInfoData?.baths, 'string'),
						beds: optional<number>(propertyInfoData?.beds, 'string'),
						crime_score: optional<number>(propertyInfoData?.crimeScore, 'string'),
						flood_zone: optional<boolean>(propertyInfoData?.floodZone, 'string'),
						last_renovated: optional<number>(propertyInfoData?.lastRenovated, 'string'),
						monthly_rent: optional<number>(propertyInfoData?.monthlyRent, 'string'),
						occupied: optional<boolean>(propertyInfoData?.occupied, 'string'),
						price_per_sq_foot: optional<number>(propertyInfoData?.priceSqFt, 'string'),
						school_score: optional<number>(propertyInfoData?.schoolScore, 'string'),
						square_footage: optional<number>(propertyInfoData?.areaSqFoot, 'string'),
						year_built: optional<number>(propertyInfoData?.yearBuilt, 'string')
					}
				],
				financial_details: [
					{
						expense_to_income_ratio: optional<number>(
							financialInfoData?.overall.expenseToIncomeRatio,
							'number'
						),
						total_monthly_cost: optional<number>(
							financialInfoData?.overall.totalMonthlyCost,
							'number'
						),
						investment: [
							{
								platform_closing_fee: optional<number>(
									financialInfoData?.investment.platformClosingFee,
									'number'
								),
								initial_maintenance_reserve: optional<number>(
									financialInfoData?.investment.initialMaintenanceReserve,
									'number'
								),
								underlying_asset_price: optional<number>(
									financialInfoData?.investment.underlyingAssetPrice,
									'number'
								),
								min_investment: optional<bigint>(
									BigInt(financialInfoData?.investment.mininumInvestment ?? 0),
									'bigint'
								)
							}
						],
						monthly_cash_flow: optional<number>(
							financialInfoData?.overall.montlyCashFlow,
							'number'
						),
						property_insurance: optional<number>(
							financialInfoData?.overall.propertyInsurance,
							'number'
						),
						rents: [
							{
								llc_monthly_franchise_tax: optional<number>(
									financialInfoData?.rents.llcMonthlyFranchiseTax,
									'number'
								),
								monthly_utiliiies: optional<number>(
									financialInfoData?.rents.monthlyUtilities,
									'number'
								),
								projected_rent: optional<number>(financialInfoData?.rents.projectedRent, 'number'),
								property_managment_fee: optional<number>(
									financialInfoData?.rents.propertyManagementFee,
									'number'
								),
								property_taxes: optional<number>(financialInfoData?.rents.propertyTaxes, 'number'),
								vacancy_rate: optional<number>(financialInfoData?.rents.vacancyRate, 'number')
							}
						],
						returns: [
							{
								average_5_year_roi: optional<number>(
									financialInfoData?.returns.average5YearROI,
									'number'
								),
								cap_rate: optional<number>(financialInfoData?.returns.capRate, 'number'),
								projected_appreciation: optional<number>(
									financialInfoData?.returns.projectedAppreciation,
									'number'
								),
								total_5_year_irr: optional<number>(
									financialInfoData?.returns.total5YearsIrr,
									'number'
								),
								yields: optional<number>(financialInfoData?.returns.yields, 'number')
							}
						]
					}
				]
			}
		]
	};
}
