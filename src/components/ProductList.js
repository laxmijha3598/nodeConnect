import React from "react";

const ProductList = ({ products, onAdd }) => {
  return (
    <div style={{ width: "250px", overflowY: "scroll", borderRight: "1px solid gray" }}>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "1rem" }}>
          <p><strong>{product.title}</strong></p>
          <p>${product.price}</p>
          <button onClick={() => onAdd(product)}>Add as Node</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
