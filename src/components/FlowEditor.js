import React, { useRef, useState } from "react";
import Node from "./Node";

const FlowEditor = ({ nodes, edges, onMove, onConnect, onRemoveNode, onRemoveEdge }) => {
  const [connecting, setConnecting] = useState(null);
  const editorRef = useRef();

  const startConnect = (from) => setConnecting(from);

  const finishConnect = (to) => {
    if (connecting) {
      onConnect(connecting, to);
      setConnecting(null);
    }
  };

  const getNodeById = (id) => nodes.find((n) => n.id === id);

  return (
    <div
      ref={editorRef}
      style={{
        flex: 1,
        position: "relative",
        background: "#eef2f7",
        border: "3px dashed #4a90e2",
        margin: "10px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <svg style={{ position: "absolute", width: "100%", height: "100%" }}>
        {edges.map((edge) => {
          const from = getNodeById(edge.from);
          const to = getNodeById(edge.to);
          if (!from || !to) return null;
          const x1 = from.x + 90;
          const y1 = from.y + 40;
          const x2 = to.x + 90;
          const y2 = to.y + 40;
          return (
            <g key={edge.id}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#555"
                strokeWidth={2}
                markerEnd="url(#arrow)"
              />
              <circle
                cx={(x1 + x2) / 2}
                cy={(y1 + y2) / 2}
                r="6"
                fill="#ff4d4f"
                onClick={() => onRemoveEdge(edge.id)}
                style={{ cursor: "pointer" }}
              />
            </g>
          );
        })}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#555" />
          </marker>
        </defs>
      </svg>

      {nodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          onMove={onMove}
          onStartConnect={() => startConnect(node.id)}
          onFinishConnect={() => finishConnect(node.id)}
          onRemove={() => onRemoveNode(node.id)}
        />
      ))}
    </div>
  );
};

export default FlowEditor;
