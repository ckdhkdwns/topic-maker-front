import React from "react";
import ReactFlow, { Controls, Panel, NodeOrigin } from "reactflow";
import useStore, { RFState } from "hooks/useStore";
import { shallow } from 'zustand/shallow';


const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
  });
   
  // this places the node origin in the center of a node
  const nodeOrigin: NodeOrigin = [0.5, 0.5];

export default function Test() {
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeOrigin={nodeOrigin}
      fitView
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">배포됐나?</Panel>
    </ReactFlow>
  );
}
