import {Facebook, Instagram, LinkedIn, ShoppingCart, X} from "@deemlol/next-icons";
import Link from "next/link";
import {commonDivClass} from "@/app/lib/css";
import Image from "next/image";
import footer from "daisyui/components/footer";

export default function Home() {
  return (
      <div className="container mx-auto">
        <nav className={`navbar flex justify-between items-center ${commonDivClass}`}>
          <div className="flex items-center">
              <ShoppingCart size={64} color="#ec4899" strokeWidth={2.5} />
              <p className="text-4xl font-extrabold">SunCart</p>
          </div>
          <div>
              <ul className="flex items-center text-xl gap-8">
                <li><Link href={'/'}>Home</Link></li>
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
          <footer className={`grid grid-cols-5 gap-8 ${commonDivClass}`}>
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
                  <div className="text-gray-500">
                      <a className="flex items-center gap-1"><Instagram size={16}></Instagram> Instagram</a>
                      <a className="flex items-center gap-1"><Facebook size={16}></Facebook> Facebook</a>
                      <a className="flex items-center gap-1"><X size={16}></X> X</a>
                      <a className="flex items-center gap-1"><LinkedIn size={16}></LinkedIn> LinkedIn</a>
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
      </div>



  );
}
