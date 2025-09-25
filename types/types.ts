import { StaticImageData } from "next/image"


export interface ImageData {
    id: number
    img: StaticImageData,
    alt: string
}

export interface clientData {
    id: number
    name: string
    img: StaticImageData
    location: string
}

