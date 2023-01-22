import { ViteSetupModule } from '@/types/ViteSetupModule';
import naive from 'naive-ui';
// Setup naive
export const install: ViteSetupModule = ({ isClient, initialState, app }) => {
	app.use(naive);
	// Refer to
	// https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
	// for other serialization strategies.
};
