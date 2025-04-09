import React from "react";
import CartSection from "./CartSection";
import AboutSection from "./AboutSection";

const Container = ({
  price,
  handleActive,
  isActive,
  addToCart,
  handleDeleteProduct,
}) => {
  //   const [activeButton, setActiveButton] = React.useState("cart");

  return (
    <div>
      <h1 className="uppercase text-2xl font-bold text-gray-500 mb-5 mr-56">
        Container
      </h1>
      {/* <button
          onClick={() => setActiveButton("cart")}
          className={`btn px-4 rounded-sm cursor-pointer btn-sm ${
            activeButton === "cart"
            ? "bg-sky-500 text-white"
            : "bg-gray-200 text-gray-600"
            }`}
            >
            Cart
            </button>
            <button
            onClick={() => setActiveButton("about")}
            className={`btn btn-sm px-4 rounded-sm cursor-pointer ${
              activeButton === "about"
              ? "bg-slate-500 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
              >
              About
              </button> */}
      <div className="flex justify-end gap-5 items-center ">
        <button
          onClick={() => handleActive("cart")}
          className={`btn px-6 rounded-none cursor-pointer transition-all btn-sm ${
            isActive.cart
              ? "bg-sky-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleActive("about")}
          className={`btn px-4 rounded-none transition-all cursor-pointer btn-sm ${
            isActive.cart
              ? "bg-gray-200 text-gray-600"
              : "bg-sky-500 text-white"
          }`}
        >
          About
        </button>
      </div>
      {/* Section  */}
      <div className="mt-5 ">
        {isActive.cart ? (
          <CartSection
            handleDeleteProduct={handleDeleteProduct}
            addToCart={addToCart}
          ></CartSection>
        ) : (
          <AboutSection></AboutSection>
        )}
      </div>
    </div>
  );
};

export default Container;
