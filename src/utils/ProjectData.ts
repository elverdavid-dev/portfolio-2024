export interface ProjectInterface {
  name: string
  description: string
  urlImage: string
  urlGithub: string
  urlWeb: string
}

export const ProjectData: ProjectInterface[] = [
  {
    name: 'GlobalFood',
    description:
      'Una plataforma de recetas desarrollada usando Next.js, TypeScript y Tailwind CSS en el frontend, junto con mi propia API. Ofrece búsquedas por nombre, categoría o país, y brinda información completa de cada receta. Esta creación demuestra mi habilidad para construir soluciones web interactivas y funcionales.',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/gxnlh9gwj5v2obt7eaj9',
    urlGithub: 'https://github.com/ElverDavid07/Project_Recipe_Page',
    urlWeb: 'https://www.globalfood.site'
  },
  {
    name: 'Recipes Api',
    description:
      'Sistema de gestión de recetas, creado con Nest.js y MongoDB, ofrece funciones diversas como visualizar todas las recetas, buscar por nombre, ver recetas por categoría,ver las últimas recetas agregadas. Entre otras más funciones, incluye paginación y validación de datos para una operación segura y eficiente.',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/ljmt4nqma96xphu7iwfc',
    urlGithub: 'https://github.com/ElverDavid07/Recipes-api',
    urlWeb: 'https://www.recipesapi.online/docs'
  },
  {
    name: 'Landing page',
    description:
      'Diseño de Landig page, Con un enfoque en la estética y la experiencia del usuario.El diseño es optimizado y responsive, asegurando una visualización perfecta en diferentes dispositivos. ',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/qakx2xxajxda2xu0kl5b',
    urlGithub: 'https://github.com/ElverDavid07/Landing_Page',
    urlWeb: 'https://landing-page-psi-flax.vercel.app'
  },
  {
    name: 'Página web informativa',
    description:
      'Este proyecto es una página web informativa sobre una compañía exportadora de frutas. En esta página, los usuarios pueden encontrar información sobre la compañía, sus productos y cómo contactarlos. Es importante señalar que esta página no es oficial de la compañía, sino que fue creada por mí como parte de la puesta en práctica de mis conocimientos y habilidades en el desarrollo web.',
    urlImage:
      'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/m7joilzbzayoukxvvqho',
    urlGithub: 'https://github.com/ElverDavid07/static-page',
    urlWeb: 'https://www.colfrutas.site'
  }
]
