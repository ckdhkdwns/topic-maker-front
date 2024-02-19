import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  all: unset;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 20px;
  margin: 0 30px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 34px;
  font-weight: 600;
`;

const Topics = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: fit-content;
  gap: 1px;
  background: #dfdfdf;
  margin: 0px 30px;
  margin-right: 10px;
  &::-webkit-scrollbar {
    width: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background: #cfcfcf;
    border: 8px solid #fafafa;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    /* margin: 4px 0; */
    background-color: #fafafa;
  }
`;

const TopicWrapper = styled.div`
  padding: 30px 20px;
  
  /* border: 1px solid #dfdfdf; */
  background: #fafafa;


  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  color: #7f7f7f;  
`

const Description = styled.div``;

type ResultPhaseProps = {
  resultTopics: any[];
};
export default function ResultPhase({ resultTopics }: ResultPhaseProps) {
  useEffect(() => {
    console.log(resultTopics);
  }, []);

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
      <Header>주제 생성</Header>
      <Topics>
        {resultTopics.map((result) => (
          <TopicWrapper>
            <Title>{result.title}</Title>
            <Subtitle>{result.subtitle}</Subtitle>
            <Description>{result.description}</Description>
          </TopicWrapper>
        ))}
      </Topics>
    </Wrapper>
  );
}
