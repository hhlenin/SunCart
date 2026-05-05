import ProductCard from "@/app/(main)/components/ProductCard";
import fetchData from "@/app/lib/fetchData";
import {commonDivClass} from "@/app/lib/css";

const ProductsPage = async () => {

    const products = await fetchData("http://localhost:3004/products")
    return (
        <div className={`popular-products space-y-2 ${commonDivClass("bg-transparent", false)} mt-20`}>
            <h2 className="text-5xl font-extrabold">All Products</h2>
            <p className="text-gray-500 text-xl font-medium">Three featured cards drawn from the static product dataset.</p>
            <div className="mt-8 grid grid-cols-4 gap-8">
                {
                    products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;