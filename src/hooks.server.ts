import type { Handle } from '@sveltejs/kit';

const handle: Handle = async ({ event, resolve }) => {
	const ipAddress = event.getClientAddress();
    console.log('ipAddress', ipAddress);
	event.locals.ipAddress = ipAddress;
	return await resolve(event);
};

export { handle };
