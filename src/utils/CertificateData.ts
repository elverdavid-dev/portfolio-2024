export interface CertificateInterface {
	name: string
	urlImage: string
	urlPdf: string
	nameUniversity: string
	course: string
}

export const CertificatesData: CertificateInterface[] = [
	{
		name: 'certificate all course',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/certificates_images/vyigzzqagciro3ljmqnh',
		urlPdf:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/pdf-portafolio/ehmcg0sq10dbf4ozemrk',
		nameUniversity: 'Universidad autonoma de bucaramanga',
		course: 'diplomado mision tic 2022',
	},
	{
		name: 'certificate web developer',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/certificates_images/bt9hgpe7p3fqvq6hxh52',
		urlPdf:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/pdf-portafolio/jrreimmxlgteiovjxgs9',
		nameUniversity: 'Universidad autonoma de bucaramanga',
		course: 'Desarrollo web',
	},
	{
		name: 'certificate tecnico laboral',
		urlImage:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/certificates_images/wrqlafxtcgimzegdky52',
		urlPdf:
			'https://res.cloudinary.com/dnbdpnvz1/image/upload/f_auto,q_auto/v1/images_project/portafolio-images/pdf-portafolio/qxtriurb9o3nqb0iyni9',
		nameUniversity: 'Universidad autonoma de bucaramanga',
		course:
			'Tecnico laboral en habilidades en programacion con enfasis en aplicaciones web',
	},
]
