import { StaticImageData } from "next/image"
import slide1 from '../public/slide1.png' 
import slide2 from '../public/slide2.png' 
import slide3 from '../public/slide3.png' 

export interface clientData {
    id: number
    name: string
    img: StaticImageData
    location: string
}

export const slidesData : clientData[] = [
    {
        id:1,
        name: "Client 1",
        img: slide1,
        location: "Dubai, United Arab Emirates"
    },
    {
        id:2,
        name: "Client 2",
        img: slide2,
        location: "Kolkata, India"
    },
    {
        id:3,
        name: "Client 3",
        img: slide3,
        location: "London, England"
    },
]