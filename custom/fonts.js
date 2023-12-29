import { Roboto, Roboto_Serif } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans-roboto', weight: ["100", "300", "400", "500", "700", "900"] })
const roboto_serif = Roboto_Serif({ subsets: ['latin'], variable: '--font-serif-roboto', weight: ["100", "300", "400", "500", "700", "900"] })

export const Fonts = { 
    roboto,
    roboto_serif
}