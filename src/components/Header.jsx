import React from "react";

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <div>
        Cart Items: {cartItems.length}
      </div>
    </header>
  );
};

export default Header;
