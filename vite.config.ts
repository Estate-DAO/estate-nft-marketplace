import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import 'dotenv/config';

const DFX_PORT = 8080;
const prod = process.env.NODE_ENV === 'production';

export default defineConfig({
	define: {
		'process.env.CANISTER_ID_PROVISION_CANISTER_BACKEND': JSON.stringify(
			'be2us-64aaa-aaaaa-qaabq-cai'
		),
		'process.env.INTERNET_IDENTITY_CANISTER_ID': JSON.stringify('bw4dl-smaaa-aaaaa-qaacq-cai'),
		'import.meta.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'dev'),
		'import.meta.env.DFX_PORT': JSON.stringify(DFX_PORT),
		'process.env.DFX_NETWORK': JSON.stringify(prod ? 'ic' : 'local')
	},
	server: {
		proxy: {
			// This proxies all http requests made to /api to our running dfx instance
			'/api': {
				target: `http://0.0.0.0:${DFX_PORT}`,
				changeOrigin: true
			}
		},
		port: 5180
	},
	plugins: [
		sveltekit(),
		nodePolyfills({
			protocolImports: true
		})
	]
});
