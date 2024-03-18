import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";

import background from "assets/intro-background.png";
import ForceGraph from "components/Mindmap/forceGraph";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 60vw;
  background: transparent;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* justify-content: center; */
`;

const FGWrapper = styled.div`
  position: absolute;
  opacity: 0.5;
  z-index: -1;
  top: 0;
`
const Titles = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 25px;
`;
const Title = styled.div`
  font-size: 7vh;
  color: #003788;
  margin-left: 30px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10vh;
`;
const Footer = styled(motion.div)`
  font-size: 22px;
  color: #787878;
  /* font-family: "Nanum Sqaure"; */
  font-weight: normal;
  margin-left: 50px;
  width: 90%;
`;

const title_sentences = ["keyword2idea"];

const footer_sentence = [
  "마인드 맵으로 다양한 키워드를 시각화하고 키워드를 선택해 주제를 생성해보세요"
];

export default function Intro() {
  const graphRef = useRef<ForceGraphMethods>();

  const [tempData, setTempData] = useState({
    nodes: [
      {
        id: "1",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
      {
        id: "2",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
      {
        id: "3",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
      {
        id: "4",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
      {
        id: "5",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
      {
        id: "6",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
    ],

    links: [
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "2", target: "4" },
      { source: "2", target: "5" },
      { source: "5", target: "6" },
    ],
  });

  const nodePaint = (node: any, ctx: any, globalScale: any) => {
    // if(node.isRoot) {
    //   node.fx = node.x;
    //   node.fy = node.y;
    // }
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    const r = 15 / globalScale < 6 ? 7 : 5 / globalScale;
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
    ctx.fill(); // circle

    // ctx.fillStyle = node.id == mainWord ? "red": "red";

    ctx.strokeStyle = node.id == "1" ? "#003788" : "#cfcfcf";
    ctx.lineWidth = node.id == "1" ? 3 / globalScale : 2 / globalScale;
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.stroke();

    const label = node.id;
    const fontSize = 10 / globalScale < 3 ? 3 : 10 / globalScale;
    ctx.font = `${fontSize}px Noto Sans KR`;
    const textWidth = ctx.measureText(label).width;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = node.color;
    ctx.fillText(label, node.x, node.y);

    // node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
  };
  
  useEffect(() => {
    // graphRef.current?.zoomToFit(1000, 20);
  }, [])
  return (
    <Wrapper>
      {/* <FGWrapper>
      <ForceGraph2D
      ref={graphRef}
      minZoom={5}
        height={window.innerHeight * 1}
        width={window.innerWidth * 0.5}
        graphData={tempData}
        nodeCanvasObject={nodePaint}
        // onEngineStop={() => graphRef.current?.zoomToFit(10, 2)}
      />
      </FGWrapper> */}
      

      <Titles
        initial={{ opacity: 0 }}
        animate={{ x: 20, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.0 }}
      >
        {title_sentences.map((sentence, idx) => {
          return <Title key={idx}>{sentence}</Title>;
        })}
      </Titles>
      <FooterWrapper>
        {footer_sentence.map((footer) => {
          return (
            <Footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.0, delay: 1.0 }}
            >
              {footer}
            </Footer>
          );
        })}
      </FooterWrapper>
    </Wrapper>
  );
}
