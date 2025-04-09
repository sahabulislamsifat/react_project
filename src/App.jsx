import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import AllProduct from "./components/products/AllProduct";
import Container from "./components/container/container";

const App = () => {
  const [isActive, setIsActive] = useState({
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

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [price, setPrice] = useState(0);

  const handleIncrement = (pr) => {
    setPrice(pr + price);
    // setPrice((prev) => prev + price);
  };

  const handleDecrement = (id) => {
    const productPrice = selectedProduct.find((item) => item.id === id);
    if (productPrice) {
      setPrice(price - productPrice.price);
    }
    // setPrice((prev) => prev - price);
  };

  const handleAddToCart = (product) => {
    // const isProductInCart = selectedProduct.find(
    //   (item) => item.id === product.id
    // );
    // if (!isProductInCart) {
    //   setSelectedProduct((prev) => [...prev, product]);
    // }
    handleIncrement(product.price);

    const isProductInCart = selectedProduct.find(
      (item) => item.id === product.id
    );

    if (isProductInCart) {
      alert("Already added to cart");
    } else {
      setSelectedProduct((previous) => [...previous, product]);
    }

    // const addToNewProduct = [...selectedProduct, product];
    // setSelectedProduct(addToNewProduct);

    // console.log(product);
    // console.log(isProductInCart);
  };

  const handleDeleteProduct = (id) => {
    handleDecrement(id);
    // const remainingProduct = selectedProduct.filter((item) => item.id !== id);
    // setSelectedProduct(remainingProduct);
    const remainingProduct = selectedProduct.filter((item) => item.id !== id);
    setSelectedProduct(remainingProduct);
  };

  // console.log(selectedProduct);

  return (
    <>
      <nav>
        <Navbar
          price={price.toFixed(2)}
          selectedProduct={selectedProduct.length}
        />
      </nav>

      <div className="container mx-auto my-10 px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* All Products */}
          <div className="w-full md:w-2/3">
            <AllProduct handleAddToCart={handleAddToCart} />
          </div>

          {/* Cart Container */}
          <div className="w-full md:w-1/3">
            <Container
              handleDeleteProduct={handleDeleteProduct}
              addToCart={selectedProduct}
              isActive={isActive}
              handleActive={toggleActive}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
