import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, request }) => {
	// const ip = request.headers.get('x-forwarded-for') || '';
	// console.log('headers', request.headers);
	return {
		ipAddress: locals.ipAddress,
	};
}) satisfies LayoutServerLoad;
