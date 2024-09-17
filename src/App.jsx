import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
