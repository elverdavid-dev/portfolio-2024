import astroIcon from '@/assets/icons/astro.svg'
import mongodbIcon from '@/assets/icons/mongodb.svg'
import nestIcon from '@/assets/icons/nestjs.svg'
import nextIcon from '@/assets/icons/next.svg'
import tailwindIcon from '@/assets/icons/tailwind.svg'
import typescriptIcon from '@/assets/icons/typescript.svg'

import type { ImageMetadata } from 'astro'
export interface ProjectInterface {
	name: string
	description: string
	urlImage: string
	urlGithub?: string
	urlWeb?: string
	stack?: ImageMetadata[]
}

export const ProjectData: ProjectInterface[] = [
	{
		name: 'Delivery food page',
		description:
			'Este es un proyecto personal en desarrollo, una plataforma de delivery de alimentos, diseñada específicamente para un restaurante. En esta plataforma, los usuarios podrán explorar el menú del restaurante y realizar pedidos directamente desde la comodidad de su hogar.',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/sh9kvs69jigy4fwyhjro',
		stack: [nextIcon, tailwindIcon, typescriptIcon],
	},
	{
		name: 'GlobalFood',
		description:
			'Desarrollé una plataforma donde puedes encontrar recetas deliciosas de todo el mundo. Puedes buscar recetas por su nombre, el tipo de comida o el país de origen. Cada receta viene con detalles completos, como los ingredientes y las instrucciones paso a paso para cocinarla.',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/enhone6togoeczjwslsk',
		urlGithub: 'https://github.com/ElverDavid07/Project_Recipe_Page',
		urlWeb: 'https://www.globalfood.site',
		stack: [nextIcon, tailwindIcon, typescriptIcon],
	},
	{
		name: 'Recipes Api',
		description:
			'Desarrollé un sistema en línea para gestionar recetas de cocina. Con esta herramienta, puedes buscar recetas por nombre, explorar diferentes categorías de platos y ver las últimas recetas agregadas. Además, incluye características como paginación para navegar fácilmente por las recetas y validación de datos para garantizar que la información sea precisa y segura.',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/ljmt4nqma96xphu7iwfc',
		urlGithub: 'https://github.com/ElverDavid07/Recipes-api',
		urlWeb: 'https://www.recipesapi.online/docs',
		stack: [nestIcon, mongodbIcon, typescriptIcon],
	},
	{
		name: 'Landing page',
		description:
			'Página de inicio con un diseño enfocado en la apariencia y la facilidad de uso. Esta página está diseñada para ser atractiva visualmente y brindar una experiencia óptima para los visitantes. Fue uno de mis primeros proyectos ',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/qakx2xxajxda2xu0kl5b',
		urlGithub: 'https://github.com/ElverDavid07/Landing_Page',
		urlWeb: 'https://landing-page-psi-flax.vercel.app',
		stack: [astroIcon, tailwindIcon, typescriptIcon],
	},
]
