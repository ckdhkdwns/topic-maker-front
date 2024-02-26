import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 60vw;
  background: #f6f6f6;
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

const title_sentences = ["마인드맵"];

const footer_sentence =
  "새로운 앱을 찾고 계시나요? 우리는 여러분을 위해 다양한 앱 주제를 추천해드립니다! 삶을 더욱 편리하고 재미있게 만들어줄 혁신적인 앱을 탐색해보세요. 우리의 웹사이트에서는 여러분의 관심사와 필요에 맞는 앱을 발견할 수 있도록 도와드립니다. 건강, 학습, 먹거리, 여가활동, 소셜네트워킹, 그리고 더 많은 주제를 다루는 다양한 앱들을 소개합니다. 지금 바로 시작해 새로운 디지털 경험을 만나보세요!";

export default function Intro() {
  return (
    <Wrapper>
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
