
const ProductCard = ({product}) => {
     const { name, category, price, image, rating } = product
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <p className="badge badge-lg badge-primary font-bold">{category}</p>
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <div className="flex justify-between">
                    <p className="text-2xl font-medium text-gray-500">
                        ⭐ {rating}
                    </p>
                    <p className="text-right font-medium text-2xl text-gray-500">${price}</p>
                </div>
                <button className="btn btn-primary block btn-lg">View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;