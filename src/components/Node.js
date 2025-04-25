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
        width: "150px",
        padding: "10px",
        background: "#fff",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "move",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <div><strong>{node.product.title}</strong></div>
      <div>${node.product.price}</div>
      <div style={{ marginTop: 5 }}>
        <button onClick={onStartConnect}>Connect</button>
        <button onClick={onFinishConnect}>To</button>
        <button onClick={onRemove}>X</button>
      </div>
    </div>
  );
};

export default Node;
