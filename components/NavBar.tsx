import { MoveRight } from "lucide-react";

export default function NavBar() {

    return(
        <div className="w-full bg-white text-black flex justify-between items-center h-24 px-8 mt-8">
            <ul className=" flex gap-5 text-base">
                <li>About</li>
                <li>News</li>
                <li>Service</li>
                <li>Our Team</li>
                <li>Make Enquiry</li>
            </ul>
            <button className="flex gap-4 border-2 border-[#111] px-3 py-1.5">Contact us <MoveRight /></button>
        </div>
    )
}