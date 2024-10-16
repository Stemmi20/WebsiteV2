// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { redirect } from '@sveltejs/kit';
import { sveltekit } from '@sveltejs/kit/vite';
// import Unlighthouse from '@unlighthouse/vite';
import { defineConfig } from 'vite';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({ injectReset: '' }),
	],
});