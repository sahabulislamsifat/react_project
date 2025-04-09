import React from "react";
import { Star, CheckCircle, XCircle } from "lucide-react";

const ProductCard = ({ product, handleAddToCart }) => {
  const { category, description, inStock, name, image, price, rating } =
    product;

  return (
    <div>
      <div className=" rounded-sm shadow-sm border border-slate-100 px-2 py-1 overflow-hidden hover:shadow-md transition duration-300 w-full max-w-xs ">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <span
            className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            } flex items-center gap-1`}
          >
            {inStock ? <CheckCircle size={14} /> : <XCircle size={14} />}
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1 truncate" title={name}>
            {name}
          </h2>
          <p className="text-gray-600 text-sm mb-1 capitalize">{category}</p>

          <p
            className="text-gray-500 text-sm mb-3 line-clamp-2"
            title={description}
          >
            {description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-sky-600">
              ${price.toFixed(2)}
            </span>
            <span className="flex items-center text-yellow-500 text-sm">
              <Star size={16} className="mr-1 fill-yellow-400" />
              {rating}
            </span>
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            disabled={!inStock}
            className={`w-full py-2 transition font-medium cursor-pointer ${
              inStock
                ? "bg-sky-600 text-white hover:bg-sky-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {inStock ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
