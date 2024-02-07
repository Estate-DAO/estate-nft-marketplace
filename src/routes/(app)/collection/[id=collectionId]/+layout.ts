import type { LayoutData } from './$types';

export const load: LayoutData = async ({ params }) => {
	const id = params.id.split('@');

	return {
		assetCanId: id[0] as string,
		minterCanId: id[0] as string
	};
};
