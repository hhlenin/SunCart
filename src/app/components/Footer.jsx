import {commonDivClass} from "@/app/lib/css";
import {Facebook, Instagram, LinkedIn, ShoppingCart, X} from "@deemlol/next-icons";

const Footer = () => {
    return (
        <footer className={`grid grid-cols-5 gap-8 ${commonDivClass()} mb-10`}>
            <div className="col-span-2 space-y-4">
                <div className="flex items-center">
                    <ShoppingCart size={32} color="#ec4899" strokeWidth={2.5} />
                    <p className="text-2xl font-extrabold">SunCart</p>
                </div>
                <p className="text-gray-500">SunCart
                    Summer-ready storefront concept with clean auth flows, protected pages, and assignment-friendly structure.
                </p>
                <p className="badge badge-lg badge-success badge-soft font-bold">Privacy policy included</p>
            </div>
            <div className="space-y-4">
                <p className="text-2xl font-bold">Contact</p>

                <div className="text-gray-500">
                    <p>hello@summernest.store</p>
                    <p>+1 (404) 555-0192</p>
                    <p>Chamblee, Georgia</p>
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-2xl font-bold">Social</p>
                <div className="text-gray-500 space-y-2">
                    <a className="flex items-center gap-1"><div className="border border-gray-500 p-1 rounded-full"><Instagram size={16}></Instagram></div> Instagram</a>
                    <a className="flex items-center gap-1"><div className="border border-gray-500 p-1 rounded-full"><Facebook size={16}></Facebook></div> Facebook</a>
                    <a className="flex items-center gap-1"><div className="border border-gray-500 p-1 rounded-full"><X size={16}></X></div> X</a>
                    <a className="flex items-center gap-1"><div className="border border-gray-500 p-1 rounded-full"><LinkedIn size={16}></LinkedIn></div> LinkedIn</a>
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-2xl font-bold">Links</p>
                <div className="text-gray-500">
                    <p>Home</p>
                    <p>Products</p>
                    <p>My Profile</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;