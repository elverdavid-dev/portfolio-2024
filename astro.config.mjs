import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), sitemap()],
	site: 'https://www.elvportafolio.website',
	image: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.cloudinary.com/**',
			},
		],
	},
})
