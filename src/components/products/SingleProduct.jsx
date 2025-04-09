import React from "react";
import ProductCard from "./ProductCard";

const SingleProduct = ({ product, handleAddToCart }) => {
  //   const { name } = product;
  //   console.log(product);

  return (
    <div>
      <ProductCard
        product={product}
        handleAddToCart={handleAddToCart}
      ></ProductCard>
    </div>
  );
};

export default SingleProduct;
