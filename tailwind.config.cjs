/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		theme: {
			fontFamily: {
				sans: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans],
				monospace: ['"Nanum Gothic Coding"', ...defaultTheme.fontFamily.sans],
			}
		},
		extend: {},
	},
	plugins: [
		addDynamicIconSelectors(),
	],
};
