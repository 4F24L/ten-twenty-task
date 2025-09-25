import heroImg from '../public/hero-img.jpg'
import heroImg2 from '../public/hero-img2.jpg'
import heroImg3 from '../public/hero-img3.jpg'
import { StaticImageData } from 'next/image'

export interface ImageData {
    id: number
    img: StaticImageData,
    alt: string
}

export const heroData: ImageData[] = [
    {
        id: 1,
        img: heroImg,
        alt: "First Image"
    },
    {
        id: 2,
        img: heroImg2,
        alt: "Second Image"
    },
    {
        id: 3,
        img: heroImg3,
        alt: "Third Image"
    },
]