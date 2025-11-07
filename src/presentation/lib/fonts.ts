import {Inter, Gowun_Dodum} from 'next/font/google'

// Sample font
export const inter = Inter ({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    variable: '--font-inter',
    display: 'swap'
})

export const gowunDodum = Gowun_Dodum ({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    variable: '--font-gowun',
    display: 'swap'
})