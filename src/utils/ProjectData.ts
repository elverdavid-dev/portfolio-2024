export interface ProjectInterface {
  name: string
  description: string
  urlImage: string
  urlGithub: string
  urlWeb: string | null
  stack?:string[]
}

export const ProjectData: ProjectInterface[] = [
  {
    name: 'ChathubAi',
    description:
      'Estoy trabajando en el desarrollo de un chatbot que utiliza la tecnología de inteligencia artificial de OpenAI. Aunque todavía está en proceso de desarrollo, este chatbot utiliza el modelo GPT-4 para interactuar y responder preguntas de manera inteligente. ¡Estoy emocionado por seguir mejorándolo!',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/aq5mly6klp2grdmz1few',
    urlGithub: 'https://github.com/ElverDavid07/chathub-ai',
    urlWeb: null,
    stack:["icons/next.svg","icons/tailwind.svg","icons/typescript.svg"]
  },
  {
    name: 'GlobalFood',
    description:
      'Desarrollé una plataforma donde puedes encontrar recetas deliciosas de todo el mundo. Puedes buscar recetas por su nombre, el tipo de comida o el país de origen. Cada receta viene con detalles completos, como los ingredientes y las instrucciones paso a paso para cocinarla.',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/gxnlh9gwj5v2obt7eaj9',
    urlGithub: 'https://github.com/ElverDavid07/Project_Recipe_Page',
    urlWeb: 'https://www.globalfood.site',
    stack:["icons/next.svg","icons/tailwind.svg","icons/typescript.svg"]
  },
  {
    name: 'Recipes Api',
    description:
      'Desarrollé un sistema en línea para gestionar recetas de cocina. Con esta herramienta, puedes buscar recetas por nombre, explorar diferentes categorías de platos y ver las últimas recetas agregadas. Además, incluye características como paginación para navegar fácilmente por las recetas y validación de datos para garantizar que la información sea precisa y segura.',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/ljmt4nqma96xphu7iwfc',
    urlGithub: 'https://github.com/ElverDavid07/Recipes-api',
    urlWeb: 'https://www.recipesapi.online/docs',
    stack:["icons/nestjs.svg","icons/mongodb.svg","icons/typescript.svg"]
  },
  {
    name: 'Landing page',
    description:
      'Página de inicio con un diseño enfocado en la apariencia y la facilidad de uso. Esta página está diseñada para ser atractiva visualmente y brindar una experiencia óptima para los visitantes. Fue uno de mis primeros proyectos ',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/qakx2xxajxda2xu0kl5b',
    urlGithub: 'https://github.com/ElverDavid07/Landing_Page',
    urlWeb: 'https://landing-page-psi-flax.vercel.app',
    stack:["icons/astro.svg","icons/tailwind.svg","icons/typescript.svg"]
  },

]
