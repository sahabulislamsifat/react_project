import React from "react";
import CartSection from "./CartSection";
import AboutSection from "./AboutSection";

const Container = ({ handleActive, isActive }) => {
  //   const [activeButton, setActiveButton] = React.useState("cart");

  return (
    <div>
      <div>
        <div className="flex gap-5 justify-between items-center ">
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
          <button
            onClick={() => handleActive("cart")}
            className={`btn px-4 rounded-sm cursor-pointer btn-sm ${
              isActive.cart
                ? "bg-sky-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleActive("about")}
            className={`btn px-4 rounded-sm cursor-pointer btn-sm ${
              isActive.cart
                ? "bg-gray-200 text-gray-600"
                : "bg-sky-500 text-white"
            }`}
          >
            About
          </button>
        </div>
        {/* Section  */}
        <div className="mt-5">
          {isActive.cart ? (
            <CartSection></CartSection>
          ) : (
            <AboutSection></AboutSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
