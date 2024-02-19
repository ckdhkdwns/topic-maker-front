import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`

  display: flex;
  position: relative;
  height: 100vh;
  width: 60vw;
  background: #fafafa;
`;

const Titles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: auto 56px;
`;
const Title = styled.div`
  font-size: 7vh;
  color: #003788;
  font-weight: bold;
`;

const Footer = styled(motion.div)`
  position: absolute;
  font-size: 25px;
  right: 45px;
  bottom: 40px;
  color: #ffffff;
  font-family: "Nanum Sqaure";
  font-weight: normal;
`;

const title_sentences = [
  "마인드맵으로",
  "아이디어, 주제를",
  "찾아보세요.",
  "무한한 가능성을",
  "탐험하세요.",
];

const footer_sentence =
  "여러분의 아이디어를 시각적으로 탐험하고, 새로운 주제를 찾아보세요.";

export default function Intro() {
  return (
    <Wrapper>
      <Titles
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
      >{footer_sentence}</Footer>
    </Wrapper>
  );
}
