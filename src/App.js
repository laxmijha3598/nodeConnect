import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import FlowEditor from "./components/FlowEditor";

const App = () => {
  const [products, setProducts] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addNode = (product) => {
    setNodes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        x: 100 + prev.length * 100,
        y: 100,
        product,
      },
    ]);
  };

  const updateNodePosition = (id, x, y) => {
    setNodes((prev) =>
      prev.map((node) => (node.id === id ? { ...node, x, y } : node))
    );
  };

  const addEdge = (from, to) => {
    if (from === to) return;
    setEdges((prev) => [...prev, { id: Date.now().toString(), from, to }]);
  };

  const removeNode = (id) => {
    setNodes((prev) => prev.filter((node) => node.id !== id));
    setEdges((prev) => prev.filter((edge) => edge.from !== id && edge.to !== id));
  };

  const removeEdge = (id) => {
    setEdges((prev) => prev.filter((edge) => edge.id !== id));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ProductList products={products} onAdd={addNode} />
      <FlowEditor
        nodes={nodes}
        edges={edges}
        onMove={updateNodePosition}
        onConnect={addEdge}
        onRemoveNode={removeNode}
        onRemoveEdge={removeEdge}
      />
    </div>
  );
};

export default App;
