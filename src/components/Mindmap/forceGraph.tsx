// eslint-disable-next-line
import React, { useCallback, useEffect, useRef, useState } from "react";

import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";
import { FiMinimize2 } from "react-icons/fi";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid green; // debug only */
  width: fit-content;
  height: fit-content;
  
  background-color: #ffffff;
  
`;


const ZoomtoFitBtn = styled.button`
all: unset;
cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 30px;
  top: 30px;
  border-radius: 10px;
  background: #003788;
  display: flex;
  
  :hover {
    svg{
      width: 20px;
      height: 20px;
    }
  }
  svg {
    transition: 0.2s all;
    width: 25px;
    height: 25px;
    margin: auto auto;
    stroke: #ffffff;
  }
`
type ForceGraphProps = {
  mainWord: string;
  mindmapData: any;
  handleNodeClick: Function;
};

export default function ForceGraph({
  mainWord,
  mindmapData,
  handleNodeClick,
}: ForceGraphProps) {
  // eslint-disable-next-line
  // const location = useLocation();
  const graphRef = useRef<ForceGraphMethods>();

  const [cameraPosition, setCameraPosition] = useState({x: 0, y: 0})
  const nodePaint = useCallback((node: any, ctx: any, globalScale: any) => {
    // if(node.isRoot) {
    //   node.fx = node.x;
    //   node.fy = node.y;
    // }
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    const r = 15/globalScale < 6 ? 6 : 15/globalScale;
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
    ctx.fill(); // circle

    
    // ctx.fillStyle = node.id == mainWord ? "red": "red";
    if(node.id == mainWord) {
      
      if(!graphRef) return;
      setCameraPosition({x: node.x, y: node.y})
    }
    ctx.strokeStyle=node.id == mainWord ? "#003788": "#cfcfcf";
    ctx.lineWidth = node.id == mainWord ? 3 / globalScale : 2/globalScale;
    ctx.beginPath();
    ctx.arc(node.x, node.y, r , 0, 2 * Math.PI);
    ctx.stroke(); 

    const label = node.id;
    const fontSize = 10/globalScale < 3 ? 3 : 10/globalScale;
    ctx.font = `${fontSize}px Noto Sans KR`;
    const textWidth = ctx.measureText(label).width;
    

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = node.color;
    ctx.fillText(label, node.x, node.y);

    // node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
  }, [mainWord]);


  const handleEngineStop = () => {
    graphRef.current?.centerAt(cameraPosition.x , cameraPosition.y, 1000);
    graphRef.current?.zoom(10, 1000);
  }

  

  return (
    <Wrapper>
      
      <ForceGraph2D
        // backgroundColor="black"
        // enableNodeDrag={false}
        enableZoomInteraction={false}
        ref={graphRef}
        width={window.innerWidth* 6/10}
        height={window.innerHeight}
        cooldownTicks={100}
        onEngineStop={handleEngineStop}
        graphData={mindmapData}
        onNodeClick={(node) => handleNodeClick(node)}
        nodeCanvasObject={nodePaint}
      />
      <ZoomtoFitBtn onClick={() => {
        graphRef.current?.zoomToFit(1000, 100)

        }}><FiMinimize2 /></ZoomtoFitBtn>
    </Wrapper>
  );
}
