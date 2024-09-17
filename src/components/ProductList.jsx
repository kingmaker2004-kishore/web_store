import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
