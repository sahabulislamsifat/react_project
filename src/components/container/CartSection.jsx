import React from "react";
import AddToCartComponent from "./addToCartComponent";

const CartSection = ({ addToCart, handleDeleteProduct }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {addToCart.map((data) => (
        <AddToCartComponent
          key={data.id}
          data={data}
          onDelete={handleDeleteProduct}
        ></AddToCartComponent>
      ))}
      {/* <h2>This Is cart Section...</h2> */}
    </div>
  );
};

export default CartSection;
