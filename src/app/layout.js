import { PrismicPreview } from '@prismicio/next'
import { Fonts } from '../../custom/fonts';

import './globals.css'
import Footer from './common/footer';
import domain from '../../custom/domain';


let titlePage = 'Blog do Ramils | Tudo do Desenvolvimento Web: Dicas e Carreira'
let metaDescriptionPage = 'Explore o mundo do desenvolvimento web com o blog do Ramils repleto de dicas valiosas. Desvende os segredos das últimas tecnologias e aprimore suas habilidades.'
let faviconUrl = `${domain}/favicon.ico`

export const metadata = {
  title: titlePage,
  description: metaDescriptionPage,
  twitter: {
    card: 'summary_image',
    title: titlePage,
    description: metaDescriptionPage,
    creator: 'Ramilson Silva',
    images: faviconUrl
},
openGraph: {
    type: "article",
    url: `${domain}/`,
    title: titlePage,
    description: metaDescriptionPage,
    images: [{url: faviconUrl, width: 320, height: 320}],
}
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${Fonts.roboto.variable} ${Fonts.roboto_serif.variable} bg-white`}>
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={'blog-ramils'} />
    </html>
  )
}
