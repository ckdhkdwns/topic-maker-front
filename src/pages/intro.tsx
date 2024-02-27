import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import background from "assets/intro-background.png"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 60vw;
  background: transparent;
  flex-direction: column;
  justify-content: center;
`;

const Titles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Title = styled.div`
  font-size: 7vh;
  color: #000000;
  margin-left: 30px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Footer = styled(motion.div)`
  font-size: 20px;
  color: #292929;
  /* font-family: "Nanum Sqaure"; */
  font-weight: normal;
  margin-left: 50px;
  width: 90%;
`;

const title_sentences = ["앱 개발 주제는 어디서?"];

const footer_sentence =
  "앱 선택에 고민이신가요? 우리는 여러분을 위해 다양한 주제의 앱을 추천합니다! 건강, 학습, 여가 등 여러 분야에서 여러분의 삶을 더욱 풍요롭게 해줄 앱을 찾아보세요.";

export default function Intro() {
  return (
    <Wrapper
    >
      <div style={{
        position: "absolute",
        // backgroundSize: "100%",

        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      // backgroundImage: `url(${background})`
    }}></div>
      {/* <Titles
        initial={{ opacity: 0 }}
        animate={{ x: 20, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.0 }}
      >
        {title_sentences.map((sentence, idx) => {
          return <Title key={idx}>{sentence}</Title>;
        })}
      </Titles>
      <Footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.0, delay: 1.0 }}
      >
        {footer_sentence}
      </Footer> */}
    </Wrapper>
  );
}
