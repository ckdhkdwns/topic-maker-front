import React from "react";
import styled from "styled-components";
import { SectionsContainer, Section } from "react-fullpage";

const Wrapper = styled.div`
  background: #003788;
  height: 100vh;
  display: flex;
  position: relative;

  scroll-snap-align: start;
  height: 100vh;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: auto 56px;
`;
const Title = styled.div`
  font-size: 7vh;
  color: #ffffff;
  font-weight: bold;
`;

const Footer = styled.div`
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
    <Section>
      <Wrapper>
        <Titles>
          {title_sentences.map((sentence, idx) => {
            return <Title key={idx}>{sentence}</Title>;
          })}
        </Titles>
        <Footer>{footer_sentence}</Footer>
      </Wrapper>
    </Section>
  );
}
