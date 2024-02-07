import type { LayoutData } from './$types';

export const load: LayoutData = async ({ params }) => {
	const id = params.id.split('@') || '';

	return {
		minterCanId: id[0] as string,
		assetCanId: id[1] as string
	};
};
