
import {commonDivClass} from "@/app/lib/css";
import Hero from "@/app/(main)/components/Hero";
import SummerCare from "@/app/(main)/components/SummerCare";

import fetchData from "@/app/lib/fetchData";
import ProductCard from "@/app/(main)/components/ProductCard";

export default async function Home() {

  const products =  await fetchData("http://localhost:3004/products?popular=true")
  return (
      <div className="">
          <Hero />
          <div className={`popular-products space-y-2 ${commonDivClass("bg-transparent", false)} mt-30`}>
              <h2 className="text-5xl font-extrabold">Popular Products</h2>
              <p className="text-gray-500 text-xl font-medium">Three featured cards drawn from the static product dataset.</p>
              <div className="mt-8 grid grid-cols-3 gap-8">
                  {
                    products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                  }
              </div>
          </div>

          <SummerCare/>
      </div>



  );
}
