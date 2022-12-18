import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess()
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
