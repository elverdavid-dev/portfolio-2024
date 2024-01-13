/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				onest: ['Onest Variable', 'sans-serif,system-ui'],
			},
			colors: {
				primary: '#06A0F9',
				base: '#0d1117',
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
