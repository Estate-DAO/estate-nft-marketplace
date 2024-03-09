import type {
	FormMetadata,
	Status
} from '$lib/declarations/provision_canister_backend/provision_canister_backend.did';
import { toE8s } from '$lib/utils/icp';
import type { BasicInfoData } from './BasicInfo.svelte';
import type { FinancialInfoData } from './FinancialInfo.svelte';
import type { MarketInfoData } from './MarketInfo.svelte';
import type { PropertyInfoData } from './PropertyInfo.svelte';

export function optional<T>(val: T | undefined | null, string = false): [] | [T] {
	if (val === undefined || val === null) return [];
	if (typeof val === 'boolean') return [val];
	if (string) return val ? [val] : [];
	else return [typeof val === 'bigint' ? (BigInt(val) as T) : (Number(val) as T)];
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
						annual_popullation_growth: optional(marketInfoData?.annualPopulationGrowth),
						average_rent: optional(marketInfoData?.averageRent),
						median_home_sale_price: optional(marketInfoData?.medianHomeSalePrice),
						country: optional(marketInfoData?.country, true),
						city: optional(marketInfoData?.city, true),
						state: optional(marketInfoData?.state, true),
						description: optional(marketInfoData?.description, true),
						coordinates: optional(marketInfoData?.coordinates, true)
					}
				],
				property_details: [
					{
						affordability: optional(propertyInfoData?.affordability),
						baths: optional(propertyInfoData?.baths),
						beds: optional(propertyInfoData?.beds),
						crime_score: optional(propertyInfoData?.crimeScore),
						flood_zone: optional(propertyInfoData?.floodZone),
						last_renovated: optional(propertyInfoData?.lastRenovated),
						monthly_rent: optional(propertyInfoData?.monthlyRent),
						occupied: optional(propertyInfoData?.occupied),
						price_per_sq_foot: optional(propertyInfoData?.priceSqFt),
						school_score: optional(propertyInfoData?.schoolScore),
						square_footage: optional(propertyInfoData?.areaSqFoot),
						year_built: optional(propertyInfoData?.yearBuilt)
					}
				],
				financial_details: [
					{
						expense_to_income_ratio: optional(financialInfoData?.overall.expenseToIncomeRatio),
						total_monthly_cost: optional(financialInfoData?.overall.totalMonthlyCost),
						investment: [
							{
								platform_closing_fee: optional(financialInfoData?.investment.platformClosingFee),
								initial_maintenance_reserve: optional(
									financialInfoData?.investment.initialMaintenanceReserve
								),
								underlying_asset_price: optional(
									financialInfoData?.investment.underlyingAssetPrice
								),
								min_investment: optional(
									BigInt(financialInfoData?.investment.mininumInvestment ?? 0)
								)
							}
						],
						monthly_cash_flow: optional(financialInfoData?.overall.montlyCashFlow),
						property_insurance: optional(financialInfoData?.overall.propertyInsurance),
						rents: [
							{
								llc_monthly_franchise_tax: optional(
									financialInfoData?.rents.llcMonthlyFranchiseTax
								),
								monthly_utiliiies: optional(financialInfoData?.rents.monthlyUtilities),
								projected_rent: optional(financialInfoData?.rents.projectedRent),
								property_managment_fee: optional(financialInfoData?.rents.propertyManagementFee),
								property_taxes: optional(financialInfoData?.rents.propertyTaxes),
								vacancy_rate: optional(financialInfoData?.rents.vacancyRate)
							}
						],
						returns: [
							{
								average_5_year_roi: optional(financialInfoData?.returns.average5YearROI),
								cap_rate: optional(financialInfoData?.returns.capRate),
								projected_appreciation: optional(financialInfoData?.returns.projectedAppreciation),
								total_5_year_irr: optional(financialInfoData?.returns.total5YearsIrr),
								yields: optional(financialInfoData?.returns.yields)
							}
						]
					}
				]
			}
		]
	};
}
