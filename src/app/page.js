import {Facebook, Instagram, LinkedIn, ShoppingCart, Star, X} from "@deemlol/next-icons";
import Link from "next/link";
import {commonDivClass} from "@/app/lib/css";
import Image from "next/image";
import footer from "daisyui/components/footer";

export default function Home() {
  return (
      <div className="container mx-auto">
        <nav className={`navbar flex justify-between items-center  ${commonDivClass()} `}>
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
          <div className={`hero grid grid-cols-3 gap-8 container`}>
              <div className={`col-span-1 space-y-5 h-180 ${commonDivClass()} `}>
                  <p className="badge badge-xl badge-warning badge-soft">☀️ Summer Sale 50% OFF</p>
                  <h2 className="text-7xl font-extrabold">Hot deals for sunny days and weekend escapes.</h2>
                  <p className="text-xl text-gray-500">
                      A clean summer e-commerce concept with a persistent navbar and footer, product cards, protected details route, BetterAuth login flow, Google auth CTA, profile view, and update-info screens.
                  </p>
                  <div className="space-x-5">
                      <button className="btn btn-xl btn-primary">Shop Now</button>
                      <button className="btn btn-xl border-gray-500">View Products</button>
                  </div>
              </div>
              <div className={`col-span-2 h-180 w-full ${commonDivClass("bg-[#ffe6c6]")} `}>
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

          <div className={`popular-products space-y-2 ${commonDivClass("bg-transparent", false)} mt-30`}>
              <h2 className="text-5xl font-extrabold">Popular Products</h2>
              <p className="text-gray-500 text-xl font-medium">Three featured cards drawn from the static product dataset.</p>
              <div className="mt-8 grid grid-cols-3 gap-8">
                  <div className="card bg-base-100 shadow-sm">
                      <figure>
                          <img
                              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                              alt="Shoes" />
                      </figure>
                      <div className="card-body space-y-2">
                          <p className="badge badge-lg badge-primary font-bold">Accessories</p>
                          <h2 className="card-title text-3xl font-bold">Card Title</h2>
                          <div className="flex justify-between">
                              <p className="text-2xl font-medium text-gray-500">
                                  ⭐ 4.7
                              </p>
                              <p className="text-right font-medium text-2xl text-gray-500">$15</p>
                          </div>
                          <button className="btn btn-primary block btn-lg">View Details</button>
                      </div>
                  </div>
                  <div className="card bg-base-100 shadow-sm">
                      <figure>
                          <img
                              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                              alt="Shoes" />
                      </figure>
                      <div className="card-body space-y-2">
                          <p className="badge badge-lg badge-primary font-bold">Accessories</p>
                          <h2 className="card-title text-3xl font-bold">Card Title</h2>
                          <div className="flex justify-between">
                              <p className="text-2xl font-medium text-gray-500">
                                  ⭐ 4.7
                              </p>
                              <p className="text-right font-medium text-2xl text-gray-500">$15</p>
                          </div>
                          <button className="btn btn-primary block btn-lg">View Details</button>
                      </div>
                  </div>
                  <div className="card bg-base-100 shadow-sm">
                      <figure>
                          <img
                              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                              alt="Shoes" />
                      </figure>
                      <div className="card-body space-y-2">
                          <p className="badge badge-lg badge-primary font-bold">Accessories</p>
                          <h2 className="card-title text-3xl font-bold">Card Title</h2>
                          <div className="flex justify-between">
                              <p className="text-2xl font-medium text-gray-500">
                                  ⭐ 4.7
                              </p>
                              <p className="text-right font-medium text-2xl text-gray-500">$15</p>
                          </div>
                          <button className="btn btn-primary block btn-lg">View Details</button>
                      </div>
                  </div>
              </div>
          </div>

          <div className={`popular-products space-y-2 ${commonDivClass("bg-transparent", false)} mt-30`}>
              <h2 className="text-5xl font-extrabold">Summer Care Tips</h2>
              <p className="text-gray-500 text-xl font-medium">
                  Helpful lifestyle blocks to enrich the home page below the product section.
              </p>
              <div className="mt-8 grid grid-cols-4 gap-5">
                  <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                      <div className="card-body space-y-2">
                          <div className="h-20 w-20 text-5xl bg-blue-200 flex justify-center items-center rounded-lg">💧</div>
                          <h2 className="text-2xl font-bold">Stay Hydrated</h2>
                          <p className="text-2xl font-medium text-gray-500">
                              Feature quick hydration reminders and bottle-focused products for hot weather routines.
                          </p>
                      </div>
                  </div>
                  <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                      <div className="card-body space-y-2">
                          <div className="h-20 w-20 text-5xl bg-blue-400 flex justify-center items-center rounded-lg">🧴</div>
                          <h2 className="text-2xl font-bold">Use Sunscreen</h2>
                          <p className="text-2xl font-medium text-gray-500">
                              Highlight SPF essentials with trusted ratings, short descriptions, and clear stock details.
                          </p>
                      </div>
                  </div>
                  <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                      <div className="card-body space-y-2">
                          <div className="h-20 w-20 text-5xl bg-amber-300 flex justify-center items-center rounded-lg">🕶️</div>
                          <h2 className="text-2xl font-bold">Protect your eyes</h2>
                          <p className="text-2xl font-medium text-gray-500">
                              Promote UV-protection accessories in clean cards with bold pricing and accessible CTAs.
                          </p>
                      </div>
                  </div>
                  <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                      <div className="card-body space-y-2">
                          <div className="h-20 w-20 text-5xl bg-green-300 flex justify-center items-center rounded-lg">🌿</div>
                          <h2 className="text-2xl font-bold">After-Sun Care</h2>
                          <p className="text-2xl font-medium text-gray-500">
                              Add soothing gel and skin-repair products under a calm, wellness-style section.
                          </p>
                      </div>
                  </div>

              </div>
          </div>


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
      </div>



  );
}
