import {commonDivClass} from "@/app/lib/css";
import {ShoppingCart} from "@deemlol/next-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <nav className={`navbar flex justify-between items-center  ${commonDivClass()} `}>
            <div className="flex items-center">
                <ShoppingCart size={64} color="#ec4899" strokeWidth={2.5} />
                <p className="text-4xl font-extrabold">SunCart</p>
            </div>
            <div>
                <ul className="flex items-center text-xl gap-8">
                    <li><Link href={'/public'}>Home</Link></li>
                    <li><Link href={'/products'}>Products</Link></li>
                    <li><Link href={'/profile'}>My Profile</Link></li>
                </ul>
            </div>
            <div className="flex gap-3">
                <button className="btn btn-lg">Login</button>
                <button className="btn btn-lg btn-primary">Register</button>
                <button className="btn btn-lg rounded-full">
                    <Image src={"https://static.wikitide.net/mashuptourneyswiki/8/8e/GOM_-_John_Doe_-_dreamingFIFI.png"} alt={"dsggg"} width={20} height={20}></Image>
                </button>
            </div>
        </nav>


    );
};

export default Footer;