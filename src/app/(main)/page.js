import Link from "next/link";
import {commonDivClass} from "@/app/lib/css";
import Image from "next/image";
import Hero from "@/app/(main)/components/Hero";
import SummerCare from "@/app/(main)/components/SummerCare";

export default function Home() {
  return (
      <div className="">
          <Hero />
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
              </div>
          </div>

          <SummerCare/>
      </div>



  );
}
