import React, { useState } from "react";
import styled from "styled-components";
import SelectedKeywordBtn from "../Buttons/selectedKeywordBtn";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  flex-direction: column;
  height: 100%;

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 20px;
  margin: 0 30px;
  border-bottom: 1px solid #dfdfdf;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 600;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
`;

const Description = styled.div`
  color: #6a6a6a;
  font-size: 17px;
  margin: 10px 0 20px;
`;
const SelectedKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 10px;
`;
const DoneButton = styled.button`
  all: unset;
  font-size: 17px;
  background: #003788;
  border-radius: 30px;
  text-align: center;
  line-height: 46px;
  width: fit-content;
  height: 46px;
  margin: auto 0;
  padding: 0 20px;
  color: #ffffff;
`;

const Footer = styled.div`
  border-top: 1px solid #dfdfdf;

  font-size: 14px;
  color: #7f7f7f;
  position: absolute;
  bottom: 20px;
  padding-top: 20px;
  padding-left: 5px;
  width: 90%;
  left: 50%;
  transform: translate(-50%, 0%);
  box-sizing: border-box;
`;
type SelectPhaseProps = {
  selectedKeyWords: string[];
  handleGetTopics: Function;
  isLoading: boolean;
};
export default function SelectPhase({
  selectedKeyWords,
  handleGetTopics,
  isLoading,
}: SelectPhaseProps) {
  if (isLoading) return <AnimatePresence></AnimatePresence>;
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
        },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Title>키워드 선택</Title>
        <DoneButton onClick={() => handleGetTopics()}>다음</DoneButton>
      </Header>
      <Body>
        <Description>
          {selectedKeyWords.length}개의 키워드가 선택되었어요.
        </Description>
        <SelectedKeywords>
          {selectedKeyWords.map((word) => {
            return <SelectedKeywordBtn word={word} />;
          })}
        </SelectedKeywords>
      </Body>
      <Footer>
        너무 연관이 없는 단어들을 선택하면 의미없는 결과가 나올 수 있어요.
      </Footer>
    </Wrapper>
  );
}
