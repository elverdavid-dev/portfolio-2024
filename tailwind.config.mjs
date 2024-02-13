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
			animation: {
				'background-shine': 'background-shine 2s linear infinite',
			},
			keyframes: {
				'background-shine': {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
