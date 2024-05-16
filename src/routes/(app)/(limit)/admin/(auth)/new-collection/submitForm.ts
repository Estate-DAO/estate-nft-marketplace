import type { _SERVICE } from '$lib/declarations/provision/provision.did';
import { toE8s } from '$lib/utils/icp';
import { Principal } from '@dfinity/principal';
import type { BasicInfoData } from './BasicInfo.svelte';
import type { FinancialInfoData } from './FinancialInfo.svelte';
import type { MarketInfoData } from './MarketInfo.svelte';
import type { PropertyInfoData } from './PropertyInfo.svelte';

type FormData = Parameters<_SERVICE['add_property_request']>[0];

export function getFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData,
	propertyImages: string[] = []
): FormData {
	return {
		name: basicInfoData.name,
		description: basicInfoData.description,
		// property_images: propertyImages,
		// status: {
		// 	[basicInfoData.status]: null
		// } as Status,
		supply_cap: BigInt(basicInfoData.supplyCap),
		logo: basicInfoData.coverImage,
		price: BigInt(toE8s(basicInfoData.price)),
		token: Principal.from(''),
		symbol: 'ICP',
		treasury: Principal.from(''),
		images: [],
		documents: [],
		annual_population_growth: marketInfoData?.annualPopulationGrowth,
		average_rent: marketInfoData?.averageRent || 0,
		median_home_sale_price: marketInfoData?.medianHomeSalePrice,
		country: marketInfoData?.country,
		city: marketInfoData?.city,
		state: marketInfoData?.state,
		market_description: marketInfoData?.description,
		coordinates: marketInfoData?.coordinates,
		affordability: propertyInfoData?.affordability,
		baths: propertyInfoData?.baths,
		beds: propertyInfoData?.beds,
		crime_score: propertyInfoData?.crimeScore,
		flood_zone: propertyInfoData?.floodZone,
		last_renovated: propertyInfoData?.lastRenovated,
		monthly_rent: propertyInfoData?.monthlyRent,
		occupied: propertyInfoData?.occupied,
		price_per_sq_foot: propertyInfoData?.priceSqFt,
		school_score: propertyInfoData?.schoolScore,
		square_footage: propertyInfoData?.areaSqFoot,
		year_built: propertyInfoData?.yearBuilt,

		expense_to_income_ratio: financialInfoData?.overall.expenseToIncomeRatio,

		total_monthly_cost: financialInfoData?.overall.totalMonthlyCost,

		platform_closing_fee: financialInfoData?.investment.platformClosingFee,

		initial_maintenance_reserve: financialInfoData?.investment.initialMaintenanceReserve,

		underlying_asset_price: financialInfoData?.investment.underlyingAssetPrice,

		min_investment: BigInt(financialInfoData?.investment.mininumInvestment ?? 0),

		monthly_cash_flow: financialInfoData?.overall.montlyCashFlow,
		property_insurance: financialInfoData?.overall.propertyInsurance,

		llc_monthly_franchise_tax: financialInfoData?.rents.llcMonthlyFranchiseTax,

		monthly_utilities: financialInfoData?.rents.monthlyUtilities,

		projected_rent: financialInfoData?.rents.projectedRent,
		property_management_fee: financialInfoData?.rents.propertyManagementFee,

		property_taxes: financialInfoData?.rents.propertyTaxes,
		vacancy_rate: financialInfoData?.rents.vacancyRate,

		average_5_year_roi: financialInfoData?.returns.average5YearROI,

		cap_rate: financialInfoData?.returns.capRate,
		projected_appreciation: financialInfoData?.returns.projectedAppreciation,

		total_5_year_irr: financialInfoData?.returns.total5YearsIrr,
		yields: financialInfoData?.returns.yields
	};
}
