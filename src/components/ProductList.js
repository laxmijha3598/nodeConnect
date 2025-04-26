import React from "react";

const ProductList = ({ products, onAdd }) => {
  return (
    <div
      style={{
        width: "300px",
        overflowY: "scroll",
        borderRight: "2px solid #ccc",
        padding: "16px",
        background: "#f0f2f5",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Product List</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            marginBottom: "1.5rem",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <p><strong>{product.title}</strong></p>
          <p>${product.price}</p>
          <button
            onClick={() => onAdd(product)}
            style={{
              marginTop: "8px",
              padding: "6px 12px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add as Node
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
