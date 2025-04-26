import React, { useState } from "react";

const Node = ({ node, onMove, onStartConnect, onFinishConnect, onRemove }) => {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - node.x,
      y: e.clientY - node.y,
    });
  };

  const onMouseMove = (e) => {
    if (dragging) {
      onMove(node.id, e.clientX - offset.x, e.clientY - offset.y);
    }
  };

  const onMouseUp = () => setDragging(false);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={() => setDragging(false)}
      style={{
        position: "absolute",
        left: node.x,
        top: node.y,
        width: "180px",
        padding: "12px",
        background: "#ffffff",
        border: "2px solid #4a90e2",
        borderRadius: "8px",
        cursor: "move",
        boxShadow: "3px 3px 10px rgba(0,0,0,0.15)",
        userSelect: "none",
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <strong>{node.product.title}</strong>
      </div>
      <div style={{ marginBottom: 10 }}>${node.product.price}</div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
        <button onClick={onStartConnect}>Connect</button>
        <button onClick={onFinishConnect}>To</button>
        <button onClick={onRemove} style={{ color: "red" }}>X</button>
      </div>
    </div>
  );
};

export default Node;
