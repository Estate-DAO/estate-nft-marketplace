import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import 'dotenv/config';

const DFX_PORT = 8080;
const prod = process.env.NODE_ENV === 'production';

export default defineConfig({
	define: {
		'process.env.CANISTER_ID_ESTATE_DAO_NFT_BACKEND': JSON.stringify('bkyz2-fmaaa-aaaaa-qaaaq-cai'),
		'process.env.CANISTER_ID_PROVISION_CANISTER_BACKEND': JSON.stringify(
			'tu3je-fyaaa-aaaap-abymq-cai'
		),
		'import.meta.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'dev'),
		'import.meta.env.DFX_PORT': JSON.stringify(DFX_PORT),
		'process.env.DFX_NETWORK': JSON.stringify(prod ? 'ic' : 'local')
	},
	server: {
		proxy: {
			// This proxies all http requests made to /api to our running dfx instance
			'/api': {
				target: `http://0.0.0.0:${DFX_PORT}`
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
