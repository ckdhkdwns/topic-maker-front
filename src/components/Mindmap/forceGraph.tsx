// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";

import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid green; // debug only */
  width: fit-content;
  height: fit-content;
  
  background-color: #fafafa;
  
`;

type ForceGraphProps = {
  mindmapData: any;
  handleNodeClick: Function;
};

export default function ForceGraph({
  mindmapData,
  handleNodeClick,
}: ForceGraphProps) {
  // eslint-disable-next-line
  // const location = useLocation();

  const nodePaint = (node: any, ctx: any, globalScale: any) => {
    // if(node.isRoot) {
    //   node.fx = node.x;
    //   node.fy = node.y;
    // }
    ctx.fillStyle = "#fafafa";
    ctx.beginPath();
    const r = 15/globalScale < 6 ? 6 : 15/globalScale;
    ctx.arc(node.x, node.y, r+2, 0, 2 * Math.PI, false);
    ctx.fill(); // circle

    ctx.fillStyle = node.isFocused ? "red": "red";
    ctx.strokeStyle=node.isFocused ? "#003788": "#cfcfcf";
    ctx.lineWidth = node.isFocused ? 3 / globalScale : 2/globalScale;
    ctx.beginPath();
    ctx.arc(node.x, node.y, r , 0, 2 * Math.PI);
    ctx.stroke();

    const label = node.id;
    const fontSize = 10/globalScale < 3 ? 3 : 10/globalScale;
    ctx.font = `${fontSize}px Noto Sans KR`;
    const textWidth = ctx.measureText(label).width;
    // const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.5); // some padding

    // ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    // ctx.fillRect(
    //   node.x - bckgDimensions[0] / 2,
    //   node.y - bckgDimensions[1] / 2,
    //   bckgDimensions[0],
    //   bckgDimensions[1]
    // );
    // ctx.lineWidth = 1 /globalScale;

    // ctx.beginPath();
    // ctx.arc(node.x, node.y, node.val * 2/globalScale , 0, 2 * Math.PI);
    // ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = node.color;
    ctx.fillText(label, node.x, node.y);

    // node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
  };
  const graphRef = useRef<ForceGraphMethods>();
  return (
    <Wrapper>
      <ForceGraph2D
        // backgroundColor="black"
        // enableNodeDrag={false}
        enableZoomInteraction={false}
        ref={graphRef}
        width={window.innerWidth * 0.60}
        height={window.innerHeight * 10/10}
        cooldownTicks={100}
        onEngineStop={() => graphRef.current?.zoomToFit(1000, 100)}
        graphData={mindmapData}
        onNodeClick={(node) => handleNodeClick(node)}
        nodeCanvasObject={(node, ctx, globalScale) => nodePaint(node, ctx, globalScale)}
      />
    </Wrapper>
  );
}
