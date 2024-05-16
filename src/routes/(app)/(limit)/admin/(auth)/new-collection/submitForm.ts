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
	_propertyImages: string[] = []
): FormData {
	return {
		name: basicInfoData.name,
		description: basicInfoData.description,
		// property_images: propertyImages,
		// status: {
		// 	[basicInfoData.status]: null
		// } as Status,
		supply_cap: BigInt(basicInfoData.supplyCap),
		logo: basicInfoData.logo,
		price: BigInt(toE8s(basicInfoData.price)),
		token: Principal.from('2vxsx-fae'),
		symbol: 'ICP',
		treasury: Principal.from('2vxsx-fae'),
		// images: [],
		documents: [],
		annual_population_growth: marketInfoData?.annualPopulationGrowth || 0,
		average_rent: marketInfoData?.averageRent || 0 || 0,
		median_home_sale_price: marketInfoData?.medianHomeSalePrice || 0,
		country: marketInfoData?.country || '',
		city: marketInfoData?.city || '',
		state: marketInfoData?.state || '',
		market_description: marketInfoData?.description || '',
		coordinates: marketInfoData?.coordinates || '',
		affordability: propertyInfoData?.affordability || 0,
		baths: propertyInfoData?.baths || 0,
		beds: propertyInfoData?.beds || 0,
		crime_score: propertyInfoData?.crimeScore || 0,
		flood_zone: propertyInfoData?.floodZone || false,
		last_renovated: propertyInfoData?.lastRenovated || 0,
		monthly_rent: propertyInfoData?.monthlyRent || 0,
		occupied: propertyInfoData?.occupied || false,
		price_per_sq_foot: propertyInfoData?.priceSqFt || 0,
		school_score: propertyInfoData?.schoolScore || 0,
		square_footage: propertyInfoData?.areaSqFoot || 0,
		year_built: propertyInfoData?.yearBuilt || 0,

		expense_to_income_ratio: financialInfoData?.overall.expenseToIncomeRatio || 0,

		total_monthly_cost: financialInfoData?.overall.totalMonthlyCost || 0,

		platform_closing_fee: financialInfoData?.investment.platformClosingFee || 0,

		initial_maintenance_reserve: financialInfoData?.investment.initialMaintenanceReserve || 0,

		underlying_asset_price: financialInfoData?.investment.underlyingAssetPrice || 0,

		min_investment: BigInt(financialInfoData?.investment.mininumInvestment ?? 0) || BigInt(0),

		monthly_cash_flow: financialInfoData?.overall.montlyCashFlow || 0,
		property_insurance: financialInfoData?.overall.propertyInsurance || 0,

		llc_monthly_franchise_tax: financialInfoData?.rents.llcMonthlyFranchiseTax || 0,

		monthly_utilities: financialInfoData?.rents.monthlyUtilities || 0,

		projected_rent: financialInfoData?.rents.projectedRent || 0,
		property_management_fee: financialInfoData?.rents.propertyManagementFee || 0,

		property_taxes: financialInfoData?.rents.propertyTaxes || 0,
		vacancy_rate: financialInfoData?.rents.vacancyRate || 0,

		average_5_year_roi: financialInfoData?.returns.average5YearROI || 0,

		cap_rate: financialInfoData?.returns.capRate || 0,
		projected_appreciation: financialInfoData?.returns.projectedAppreciation || 0,

		total_5_year_irr: financialInfoData?.returns.total5YearsIrr || 0,
		yields: financialInfoData?.returns.yields || 0
	};
}
