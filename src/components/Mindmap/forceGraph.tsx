import React, { useEffect, useState } from "react";

import ForceGraph2D from "react-force-graph-2d";
import { data } from "components/data";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid green; // debug only
  width: fit-content;
`;

type ForceGraph = {
  startWord : string;
}
export default function ForceGraph({ startWord }:ForceGraph) {
  const location = useLocation();

  const [mindmapData, setMindmapData] = useState({
    nodes: [
      {
        id: "0",
        color: 'black',
        name: startWord,
        val: 20,
      },
      // {
      //   id: "1",
      //   isClusterNode: true,
      //   name: "Transport",
      //   val: 5,
      // },
    ],

    links: [],
  });

  return (
    <Wrapper>
      <ForceGraph2D
      // backgroundColor="black"
      width={500}
        graphData={mindmapData}
        nodeAutoColorBy="group"
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 42 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(
            (n) => n + fontSize * 0.5
          ); // some padding
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y - bckgDimensions[1] / 2,
            bckgDimensions[0],
            bckgDimensions[1]
          );
          
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = node.color;
          ctx.fillText(label, node.x, node.y);

          node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, bckgDimensions[0], bckgDimensions[1]);
        }}
      />
    </Wrapper>
  );
}
