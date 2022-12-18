import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},
	target: '#svelte',
	vite: {
		resolve: {
			alias: {
				// these are the aliases and paths to them
				$components: path.resolve('./src/lib/components'),
				'$components/*': path.resolve(
					'./src/lib/components/*'
				),
				$lib: path.resolve('./src/lib'),
				'$lib/*': path.resolve('./src/lib/*'),
				$img: path.resolve('./src/lib/assets/img'),
				$routes: path.resolve('./src/routes')
			}
		}
	}
};

export default config;
