import {commonDivClass} from "@/app/lib/css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className={`hero grid grid-cols-5 gap-8 container`}>
            <div className={`col-span-2 space-y-5 h-180 ${commonDivClass()} `}>
                <p className="badge badge-xl badge-warning badge-soft">☀️ Summer Sale 50% OFF</p>
                <h2 className="text-7xl font-extrabold">Hot deals for sunny days and weekend escapes.</h2>
                <p className="text-xl text-gray-500">
                    A clean summer e-commerce concept with a persistent navbar and footer, product cards, protected details route, BetterAuth login flow, Google auth CTA, profile view, and update-info screens.
                </p>
                <div className="space-x-5">
                    <button className="btn btn-xl btn-primary">Shop Now</button>
                    <Link href="/products">
                        <button className="btn btn-xl border-gray-500">View Products</button>
                    </Link>
                </div>
            </div>
            <div className={`col-span-3 h-180 w-full ${commonDivClass("bg-[#ffe6c6]")} `}>
                <div className="carousel rounded-box w-full">
                    <div className="carousel-item h-180 w-full">
                        <Image
                            height={0}
                            width={100}
                            style={{ width: "100%", height: "80" }}
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                            className="rounded-box"
                            alt="Tailwind CSS Carousel component" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Hero;