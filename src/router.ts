import { RouteRecordRaw } from '@vue-router';
import {
	createRouter,
	createWebHistory,
	createMemoryHistory,
} from '@vue-router';

import { setupLayouts } from 'virtual:generated-layouts';
//@ts-ignore
import routes from '~pages';

export let extendedRoutes: RouteRecordRaw[] = setupLayouts(routes);
export const router = createRouter({
	history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
	// You don't need to pass the routes anymore,
	// the plugin writes it for you 🤖
	//@ts-ignore
	routes: extendedRoutes,
});
