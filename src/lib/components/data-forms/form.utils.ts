import type { _SERVICE as PROVISION_SERVICE } from '$lib/declarations/provision/provision.did';
import type { _SERVICE as NFT_SERVICE } from '$lib/declarations/estate_dao_nft/estate_dao_nft.did';
import { toE8s } from '$lib/utils/icp';
import { Principal } from '@dfinity/principal';
import type { BasicInfoData } from './BasicInfo.svelte';
import type { FinancialInfoData } from './FinancialInfo.svelte';
import type { MarketInfoData } from './MarketInfo.svelte';
import type { PropertyInfoData } from './PropertyInfo.svelte';
import type { CollectionMetadata } from '$lib/types/nftCanister';

export function getNewPropertyFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData
): Parameters<PROVISION_SERVICE['add_property_request']>[0] {
	return {
		name: basicInfoData.name,
		description: basicInfoData.description,
		supply_cap: BigInt(basicInfoData.supplyCap),
		logo: basicInfoData.logo,
		price: BigInt(toE8s(basicInfoData.price)),
		token: Principal.from('2vxsx-fae'),
		symbol: 'ICP',
		treasury: Principal.from('2vxsx-fae'),
		documents: [],
		annual_population_growth: Number(marketInfoData?.annualPopulationGrowth) || 0,
		average_rent: Number(marketInfoData?.averageRent) || 0 || 0,
		median_home_sale_price: Number(marketInfoData?.medianHomeSalePrice) || 0,
		country: marketInfoData?.country || '',
		city: marketInfoData?.city || '',
		state: marketInfoData?.state || '',
		market_description: marketInfoData?.description || '',
		coordinates: marketInfoData?.coordinates || '',
		affordability: Number(propertyInfoData?.affordability) || 0,
		baths: Number(propertyInfoData?.baths) || 0,
		beds: Number(propertyInfoData?.beds) || 0,
		crime_score: Number(propertyInfoData?.crimeScore) || 0,
		flood_zone: propertyInfoData?.floodZone || false,
		last_renovated: Number(propertyInfoData?.lastRenovated) || 0,
		monthly_rent: Number(propertyInfoData?.monthlyRent) || 0,
		occupied: propertyInfoData?.occupied || false,
		price_per_sq_foot: Number(propertyInfoData?.priceSqFt) || 0,
		school_score: Number(propertyInfoData?.schoolScore) || 0,
		square_footage: Number(propertyInfoData?.areaSqFoot) || 0,
		year_built: Number(propertyInfoData?.yearBuilt) || 0,

		expense_to_income_ratio: Number(financialInfoData?.overall.expenseToIncomeRatio) || 0,
		total_monthly_cost: Number(financialInfoData?.overall.totalMonthlyCost) || 0,
		platform_closing_fee: Number(financialInfoData?.investment.platformClosingFee) || 0,
		initial_maintenance_reserve:
			Number(financialInfoData?.investment.initialMaintenanceReserve) || 0,
		underlying_asset_price: Number(financialInfoData?.investment.underlyingAssetPrice) || 0,
		min_investment: BigInt(financialInfoData?.investment.minimumInvestment ?? 0) || BigInt(0),
		monthly_cash_flow: Number(financialInfoData?.overall.monthlyCashFlow) || 0,
		property_insurance: Number(financialInfoData?.overall.propertyInsurance) || 0,
		llc_monthly_franchise_tax: Number(financialInfoData?.rents.llcMonthlyFranchiseTax) || 0,
		monthly_utilities: Number(financialInfoData?.rents.monthlyUtilities) || 0,
		projected_rent: Number(financialInfoData?.rents.projectedRent) || 0,
		property_management_fee: Number(financialInfoData?.rents.propertyManagementFee) || 0,
		property_taxes: Number(financialInfoData?.rents.propertyTaxes) || 0,
		vacancy_rate: Number(financialInfoData?.rents.vacancyRate) || 0,
		average_5_year_roi: Number(financialInfoData?.returns.average5YearROI) || 0,
		cap_rate: Number(financialInfoData?.returns.capRate) || 0,
		projected_appreciation: Number(financialInfoData?.returns.projectedAppreciation) || 0,
		total_5_year_irr: Number(financialInfoData?.returns.total5YearsIrr) || 0,
		yields: Number(financialInfoData?.returns.yields) || 0
	};
}

export function getUpdatePropertyFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData,
	assetCanisterId: Principal,
	collectionMetadata: CollectionMetadata
): Parameters<NFT_SERVICE['update_metadata']> {
	return [
		{
			asset_canister: [assetCanisterId],
			name: [basicInfoData.name],
			description: [basicInfoData.description],
			supply_cap: [BigInt(basicInfoData.supplyCap)],
			logo: [basicInfoData.logo],
			price: [BigInt(toE8s(basicInfoData.price))],
			token: [collectionMetadata.token],
			symbol: [collectionMetadata.symbol],
			treasury: [collectionMetadata.treasury],
			documents: [],
			annual_population_growth: [Number(marketInfoData?.annualPopulationGrowth)],
			average_rent: [Number(marketInfoData?.averageRent) || 0],
			median_home_sale_price: [Number(marketInfoData?.medianHomeSalePrice)],
			country: [marketInfoData?.country || ''],
			city: [marketInfoData?.city || ''],
			state: [marketInfoData?.state || ''],
			market_description: [marketInfoData?.description || ''],
			coordinates: [marketInfoData?.coordinates || ''],
			affordability: [Number(propertyInfoData?.affordability) || 0],
			baths: [Number(propertyInfoData?.baths) || 0],
			beds: [Number(propertyInfoData?.beds) || 0],
			crime_score: [Number(propertyInfoData?.crimeScore) || 0],
			flood_zone: [propertyInfoData?.floodZone || false],
			last_renovated: [Number(propertyInfoData?.lastRenovated) || 0],
			monthly_rent: [Number(propertyInfoData?.monthlyRent) || 0],
			occupied: [propertyInfoData?.occupied || false],
			price_per_sq_foot: [Number(propertyInfoData?.priceSqFt) || 0],
			school_score: [Number(propertyInfoData?.schoolScore) || 0],
			square_footage: [Number(propertyInfoData?.areaSqFoot) || 0],
			year_built: [Number(propertyInfoData?.yearBuilt) || 0],
			expense_to_income_ratio: [Number(financialInfoData?.overall.expenseToIncomeRatio) || 0],
			total_monthly_cost: [Number(financialInfoData?.overall.totalMonthlyCost) || 0],
			platform_closing_fee: [Number(financialInfoData?.investment.platformClosingFee) || 0],
			initial_maintenance_reserve: [
				Number(financialInfoData?.investment.initialMaintenanceReserve) || 0
			],
			underlying_asset_price: [Number(financialInfoData?.investment.underlyingAssetPrice) || 0],
			min_investment: [
				BigInt(Number(financialInfoData?.investment.minimumInvestment) ?? BigInt(0))
			],
			monthly_cash_flow: [Number(financialInfoData?.overall.monthlyCashFlow) || 0],
			property_insurance: [Number(financialInfoData?.overall.propertyInsurance) || 0],
			llc_monthly_franchise_tax: [Number(financialInfoData?.rents.llcMonthlyFranchiseTax) || 0],
			monthly_utilities: [Number(financialInfoData?.rents.monthlyUtilities) || 0],
			projected_rent: [Number(financialInfoData?.rents.projectedRent) || 0],
			property_management_fee: [Number(financialInfoData?.rents.propertyManagementFee) || 0],
			property_taxes: [Number(financialInfoData?.rents.propertyTaxes) || 0],
			vacancy_rate: [Number(financialInfoData?.rents.vacancyRate) || 0],
			average_5_year_roi: [Number(financialInfoData?.returns.average5YearROI) || 0],
			cap_rate: [Number(financialInfoData?.returns.capRate) || 0],
			projected_appreciation: [Number(financialInfoData?.returns.projectedAppreciation) || 0],
			total_5_year_irr: [Number(financialInfoData?.returns.total5YearsIrr) || 0],
			yields: [Number(financialInfoData?.returns.yields) || 0]
		}
	];
}

export function initUpdateFormData(data: CollectionMetadata) {
	return {
		basicInfoData: {
			name: data.name,
			description: data.description,
			logo: data.logo,
			price: Number(data.price),
			supplyCap: Number(data.supply_cap),
			status: 'Live'
		} as BasicInfoData,
		propertyInfoData: {
			affordability: Number(data.affordability) || 0,
			baths: Number(data.baths) || 0,
			beds: Number(data.beds) || 0,
			crimeScore: Number(data.crime_score) || 0,
			floodZone: data.flood_zone,
			lastRenovated: Number(data.last_renovated) || 0,
			monthlyRent: Number(data.monthly_rent) || 0,
			occupied: data.occupied,
			priceSqFt: Number(data.price_per_sq_foot) || 0,
			schoolScore: Number(data.school_score) || 0,
			areaSqFoot: Number(data.square_footage) || 0,
			yearBuilt: Number(data.year_built) || 0
		} satisfies PropertyInfoData,
		financialInfoData: {
			overall: {
				totalMonthlyCost: Number(data?.total_monthly_cost) || 0,
				monthlyCashFlow: Number(data?.monthly_cash_flow) || 0,
				propertyInsurance: Number(data?.property_insurance) || 0,
				expenseToIncomeRatio: Number(data?.expense_to_income_ratio) || 0
			},
			investment: {
				initialMaintenanceReserve: Number(data?.initial_maintenance_reserve) || 0,
				underlyingAssetPrice: Number(data?.underlying_asset_price) || 0,
				platformClosingFee: Number(data?.platform_closing_fee) || 0,
				minimumInvestment: Number(data?.min_investment) || 0
			},
			returns: {
				average5YearROI: Number(data?.average_5_year_roi) || 0,
				projectedAppreciation: Number(data?.projected_appreciation) || 0,
				capRate: Number(data?.cap_rate) || 0,
				total5YearsIrr: Number(data?.total_5_year_irr) || 0,
				yields: Number(data?.yields) || 0
			},
			rents: {
				vacancyRate: Number(data?.vacancy_rate) || 0,
				propertyTaxes: Number(data?.property_taxes) || 0,
				propertyManagementFee: Number(data?.property_management_fee) || 0,
				monthlyUtilities: Number(data?.monthly_utilities) || 0,
				llcMonthlyFranchiseTax: Number(data?.llc_monthly_franchise_tax) || 0,
				projectedRent: Number(data?.projected_rent) || 0
			}
		} satisfies FinancialInfoData,
		marketInfoData: {
			annualPopulationGrowth: Number(data?.annual_population_growth) || 0,
			averageRent: Number(data?.average_rent) || 0,
			medianHomeSalePrice: Number(data?.median_home_sale_price) || 0,
			country: data?.country || '',
			city: data?.city || '',
			state: data?.state || '',
			description: data?.market_description || '',
			coordinates: data?.coordinates || ''
		} satisfies MarketInfoData
	};
}
