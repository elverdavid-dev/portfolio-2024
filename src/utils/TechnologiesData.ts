import astroIcon from '@/assets/icons/astro.svg'
import cssIcon from '@/assets/icons/css.svg'
import gitIcon from '@/assets/icons/git.svg'
import htmlIcon from '@/assets/icons/html.svg'
import javascriptIcon from '@/assets/icons/js.svg'
import mongodbIcon from '@/assets/icons/mongodb.svg'
import nestIcon from '@/assets/icons/nestjs.svg'
import nextIcon from '@/assets/icons/next.svg'
import nodeIcon from '@/assets/icons/node.svg'
import reactIcon from '@/assets/icons/react.svg'
import tailwindIcon from '@/assets/icons/tailwind.svg'
import typescriptIcon from '@/assets/icons/typescript.svg'

import type { ImageMetadata } from 'astro'
export interface TechnologiesInterface {
	name: string
	icon: ImageMetadata
}

export const TechnologiesData: TechnologiesInterface[] = [
	{
		name: 'Typescript',
		icon: typescriptIcon,
	},
	{
		name: 'Next.js',
		icon: nextIcon,
	},
	{
		name: 'Nest.js',
		icon: nestIcon,
	},
	{
		name: 'Tailwind css',
		icon: tailwindIcon,
	},
	{
		name: 'Astro.js',
		icon: astroIcon,
	},
	{
		name: 'React.js',
		icon: reactIcon,
	},
	{
		name: 'Node.js',
		icon: nodeIcon,
	},
	{
		name: 'Javascript',
		icon: javascriptIcon,
	},
	{
		name: 'Css3',
		icon: cssIcon,
	},
	{
		name: 'Html5',
		icon: htmlIcon,
	},

	{
		name: 'Mongodb',
		icon: mongodbIcon,
	},

	{
		name: 'Git',
		icon: gitIcon,
	},

]
