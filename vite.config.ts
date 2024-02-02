import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const DFX_PORT = 8080;

export default defineConfig({
	define: {
		'process.env.CANISTER_ID_ESTATE_DAO_NFT_BACKEND': JSON.stringify('bkyz2-fmaaa-aaaaa-qaaaq-cai'),
		'process.env.CANISTER_ID_PROVISION_CANISTER_BACKEND': JSON.stringify(
			'be2us-64aaa-aaaaa-qaabq-cai'
		),
		'process.env.INTERNET_IDENTITY_CANISTER_ID': JSON.stringify('qhbym-qaaaa-aaaaa-aaafq-cai'),
		'process.env.DFX_NETWORK': JSON.stringify('local')
	},
	server: {
		proxy: {
			// This proxies all http requests made to /api to our running dfx instance
			'/api': {
				target: `http://0.0.0.0:${DFX_PORT}`
			}
		}
	},
	plugins: [
		sveltekit(),
		nodePolyfills({
			protocolImports: true
		})
	]
});
