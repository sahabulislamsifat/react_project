import React from "react";
import Navbar from "./shared/Navbar";
import AllProduct from "./components/products/AllProduct";
import Container from "./components/container/container";

const App = () => {
  const [isActive, setIsActive] = React.useState({
    cart: true,
    status: "cart",
  });

  const toggleActive = (status) => {
    if (status === "cart") {
      setIsActive({ cart: true, status: "cart" });
    } else {
      setIsActive({ cart: false, status: "about" });
    }
  };

  // console.log(isActive);

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="container mx-auto flex justify-between my-10">
        {/* All Product  */}
        <AllProduct></AllProduct>
        {/* Container  */}

        <div>
          <h1 className="uppercase text-2xl font-semibold italic text-gray-600 my-5">
            Container
          </h1>
          <Container
            isActive={isActive}
            handleActive={toggleActive}
          ></Container>
        </div>
      </div>
    </>
  );
};

export default App;
