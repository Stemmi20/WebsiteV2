// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({ injectReset: '' }),
	],
});
