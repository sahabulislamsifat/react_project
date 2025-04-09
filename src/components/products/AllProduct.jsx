import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProduct = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./productData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // setLoading(false);
      });
  }, []);

  // console.log(products);

  return (
    <div>
      <h1 className="mb-10 uppercase text-2xl font-bold  text-gray-500">
        All Product
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
