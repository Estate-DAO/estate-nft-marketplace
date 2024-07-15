import type { _SERVICE as PROVISION_SERVICE } from '$lib/declarations/provision/provision.did';
import type { _SERVICE as TOKEN_SERVICE } from '$lib/declarations/token/token.did';
import { fromE8s, toE8s } from '$lib/utils/icp';
import { Principal } from '@dfinity/principal';
import type { BasicInfoData } from './BasicInfo.svelte';
import type { CollectionMetadata } from '$lib/types/nftCanister';
import type { ImagesInfoData } from './ImagesInfo.svelte';
import type { PropertyInfoData } from './PropertyInfo.svelte';
import type { FinancialInfoData } from './FinancialInfo.svelte';
import type { MarketInfoData } from './MarketInfo.svelte';
import { isPrincipal } from '$lib/utils/isPrincipal';

export function getNewCollectionFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData,
	imagesInfoData: ImagesInfoData,
	documents: CollectionMetadata['documents']
): Parameters<PROVISION_SERVICE['add_property_request']>[0] {
	return {
		name: basicInfoData.name,
		description: basicInfoData.description,
		supply_cap: BigInt(basicInfoData.supplyCap),
		logo: imagesInfoData.logo,
		price: BigInt(toE8s(basicInfoData.price)),
		token: Principal.from(process.env.ICP_LEDGER_CANISTER_ID),
		index: Principal.from(process.env.ICP_LEDGER_INDEX_CANISTER_ID),
		symbol: basicInfoData.symbol,
		treasury: Principal.from(basicInfoData.treasury),
		documents,
		images: imagesInfoData.images,
		year_built: Number(propertyInfoData.year_built),
		occupied: propertyInfoData.occupied,
		crime_score: Number(propertyInfoData.crime_score),
		monthly_rent: Number(propertyInfoData.monthly_rent),
		beds: Number(propertyInfoData.beds),
		affordability: Number(propertyInfoData.affordability),
		square_footage: Number(propertyInfoData.square_footage),
		flood_zone: propertyInfoData.flood_zone,
		price_per_sq_foot: Number(propertyInfoData.price_per_sq_foot),
		baths: Number(propertyInfoData.baths),
		school_score: Number(propertyInfoData.school_score),
		last_renovated: Number(propertyInfoData.last_renovated),
		total_monthly_cost: Number(financialInfoData.total_monthly_cost),
		monthly_cash_flow: Number(financialInfoData.monthly_cash_flow),
		property_insurance: Number(financialInfoData.property_insurance),
		initial_maintenance_reserve: Number(financialInfoData.initial_maintenance_reserve),
		underlying_asset_price: Number(financialInfoData.underlying_asset_price),
		platform_closing_fee: Number(financialInfoData.platform_closing_fee),
		min_investment: BigInt(financialInfoData.min_investment),
		expense_to_income_ratio: Number(financialInfoData.expense_to_income_ratio),
		llc_monthly_franchise_tax: Number(financialInfoData.llc_monthly_franchise_tax),
		vacancy_rate: Number(financialInfoData.vacancy_rate),
		property_taxes: Number(financialInfoData.property_taxes),
		property_management_fee: Number(financialInfoData.property_management_fee),
		projected_rent: Number(financialInfoData.projected_rent),
		monthly_utilities: Number(financialInfoData.monthly_utilities),
		average_5_year_roi: Number(financialInfoData.average_5_year_roi),
		yields: Number(financialInfoData.yields),
		total_5_year_irr: Number(financialInfoData.total_5_year_irr),
		projected_appreciation: Number(financialInfoData.projected_appreciation),
		cap_rate: Number(financialInfoData.cap_rate),
		country: marketInfoData.country,
		city: marketInfoData.city,
		market_description: marketInfoData.market_description,
		state: marketInfoData.state,
		average_rent: Number(marketInfoData.average_rent),
		median_home_sale_price: Number(marketInfoData.median_home_sale_price),
		coordinates: marketInfoData.coordinates,
		annual_population_growth: Number(marketInfoData.annual_population_growth),
	};
}

export function getUpdateCollectionFormData(
	basicInfoData: BasicInfoData,
	propertyInfoData: PropertyInfoData,
	financialInfoData: FinancialInfoData,
	marketInfoData: MarketInfoData,
	imagesInfoData: ImagesInfoData,
	documents: CollectionMetadata['documents'],
	assetCanisterId: Principal,
	collectionMetadata: CollectionMetadata
): Parameters<TOKEN_SERVICE['update_metadata']> {
	return [
		{
			asset_canister: [assetCanisterId],
			name: [basicInfoData.name],
			description: [basicInfoData.description],
			supply_cap: [BigInt(basicInfoData.supplyCap)],
			logo: [imagesInfoData.logo],
			price: [BigInt(toE8s(basicInfoData.price))],
			token: [collectionMetadata.token],
      		index: [Principal.from("qhbym-qaaaa-aaaaa-aaafq-cai")],
			symbol: [basicInfoData.symbol],
			treasury: [collectionMetadata.treasury],
			documents: [documents],
			images: [imagesInfoData.images],
			year_built: [Number(propertyInfoData.year_built) || 0],
			occupied: [propertyInfoData.occupied || false],
			crime_score: [Number(propertyInfoData.crime_score) || 0],
			monthly_rent: [Number(propertyInfoData.monthly_rent) || 0],
			beds: [Number(propertyInfoData.beds) || 0],
			affordability: [Number(propertyInfoData.affordability) || 0],
			square_footage: [Number(propertyInfoData.square_footage) || 0],
			flood_zone: [propertyInfoData.flood_zone || false],
			price_per_sq_foot: [Number(propertyInfoData.price_per_sq_foot) || 0],
			baths: [Number(propertyInfoData.baths) || 0],
			school_score: [Number(propertyInfoData.school_score) || 0],
			last_renovated: [Number(propertyInfoData.last_renovated) || 0],
			total_monthly_cost: [Number(financialInfoData.total_monthly_cost) || 0],
			monthly_cash_flow: [Number(financialInfoData.monthly_cash_flow) || 0],
			property_insurance: [Number(financialInfoData.property_insurance) || 0],
			initial_maintenance_reserve: [Number(financialInfoData.initial_maintenance_reserve) || 0],
			underlying_asset_price: [Number(financialInfoData.underlying_asset_price) || 0],
			platform_closing_fee: [Number(financialInfoData.platform_closing_fee) || 0],
			min_investment: [BigInt(financialInfoData.min_investment) || BigInt(0)],
			expense_to_income_ratio: [Number(financialInfoData.expense_to_income_ratio) || 0],
			llc_monthly_franchise_tax: [Number(financialInfoData.llc_monthly_franchise_tax) || 0],
			vacancy_rate: [Number(financialInfoData.vacancy_rate) || 0],
			property_taxes: [Number(financialInfoData.property_taxes) || 0],
			property_management_fee: [Number(financialInfoData.property_management_fee) || 0],
			projected_rent: [Number(financialInfoData.projected_rent) || 0],
			monthly_utilities: [Number(financialInfoData.monthly_utilities) || 0],
			average_5_year_roi: [Number(financialInfoData.average_5_year_roi) || 0],
			yields: [Number(financialInfoData.yields) || 0],
			total_5_year_irr: [Number(financialInfoData.total_5_year_irr) || 0],
			projected_appreciation: [Number(financialInfoData.projected_appreciation) || 0],
			cap_rate: [Number(financialInfoData.cap_rate) || 0],
			country: [marketInfoData.country || ''],
			city: [marketInfoData.city || ''],
			market_description: [marketInfoData.market_description || ''],
			state: [marketInfoData.state || ''],
			average_rent: [Number(marketInfoData.average_rent) || 0],
			median_home_sale_price: [Number(marketInfoData.median_home_sale_price) || 0],
			coordinates: [marketInfoData.coordinates || ''],
			annual_population_growth: [Number(marketInfoData.annual_population_growth) || 0],
		}
	];
}

export function getInitialUpdateCollectionFormData(data: CollectionMetadata) {
	return {
		basicInfoData: {
			name: data.name,
			symbol: data.symbol,
			description: data.description,
			treasury: data.treasury && isPrincipal(data.treasury) ? data.treasury.toText() : '',
			price: Number(fromE8s(data.price)),
			supplyCap: Number(data.supply_cap)
			// status: 'Live'
		} satisfies BasicInfoData,
		imagesInfoData: {
			logo: data.logo,
			images: data.images
		} satisfies ImagesInfoData,
		documents: data.documents,
		propertyInfoData: {
			year_built: data.year_built || 0,
			occupied: data.occupied || false,
			crime_score: data.crime_score || 0,
			monthly_rent: data.monthly_rent || 0,
			beds: data.beds || 0,
			affordability: data.affordability || 0,
			square_footage: data.square_footage || 0,
			flood_zone: data.flood_zone || false,
			price_per_sq_foot: data.price_per_sq_foot || 0,
			baths: data.baths || 0,
			school_score: data.school_score || 0,
			last_renovated: data.last_renovated || 0,
		} satisfies PropertyInfoData,
		financialInfoData: {
			total_monthly_cost: data.total_monthly_cost || 0,
			monthly_cash_flow: data.monthly_cash_flow || 0,
			property_insurance: data.property_insurance || 0,
			initial_maintenance_reserve: data.initial_maintenance_reserve || 0,
			underlying_asset_price: data.underlying_asset_price || 0,
			platform_closing_fee: data.platform_closing_fee || 0,
			min_investment: Number(data.min_investment) || 0,
			expense_to_income_ratio: data.expense_to_income_ratio || 0,
			llc_monthly_franchise_tax: data.llc_monthly_franchise_tax || 0,
			vacancy_rate: data.vacancy_rate || 0,
			property_taxes: data.property_taxes || 0,
			property_management_fee: data.property_management_fee || 0,
			projected_rent: data.projected_rent || 0,
			monthly_utilities: data.monthly_utilities || 0,
			average_5_year_roi: data.average_5_year_roi || 0,
			yields: data.yields || 0,
			total_5_year_irr: data.total_5_year_irr || 0,
			projected_appreciation: data.projected_appreciation || 0,
			cap_rate: data.cap_rate || 0,
		} satisfies FinancialInfoData,
		marketInfoData: {
			country: data.country || '',
			city: data.city || '',
			market_description: data.market_description || '',
			state: data.state || '',
			average_rent: data.average_rent || 0,
			median_home_sale_price: data.median_home_sale_price || 0,
			coordinates: data.coordinates || '',
			annual_population_growth: data.annual_population_growth || 0,
		} satisfies MarketInfoData,
	};
}
