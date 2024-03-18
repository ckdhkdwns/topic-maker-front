import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background: #ffffff;

  border-radius: 10px;
  height: 100vh;
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

const Body = styled.div`
  overflow: auto;
  width: 100%;
`;
const Topics = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: fit-content;

  z-index: 1;

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
  padding: 30px 40px;

  /* border: 1px solid #dfdfdf; */
  background: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.1s all;
  position: relative;
  cursor: pointer;
  :hover {
    background: #fafafa;
  }
  svg {
    position: absolute;
    right: 40px;
    top: 50px;
    fill: #afafaf;
    height: 30px;
    width: 30px;
  }
`;
const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: #dfdfdf;
  left: 5%;
  position: absolute;
  bottom: 0;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  color: #7f7f7f;
`;

const DetailBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
  svg {
  }
`;

const Description = styled.div`
  font-size: 16px;
`;

type ResultPhaseProps = {
  resultTopics: any[];
};
export default function ResultPhase({ resultTopics }: ResultPhaseProps) {
  const [isTopicFocused, setIsTopicFocused] = useState([false, false,  false, false]); // index
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
      <Header>추천 주제</Header>
      <Body>
        <Topics>
          {(resultTopics.map((result, idx) => (
            <TopicWrapper onClick={() => setIsTopicFocused(prev => {
              const copied = JSON.parse(JSON.stringify(prev))
              copied[idx] = !copied[idx]
              return copied;
            })}>
              <Title>{result.title}</Title>
              <Subtitle>{result.subtitle}</Subtitle>
              {isTopicFocused[idx] ? <IoIosArrowDown style={{top: "45px"}}/> : <IoIosArrowForward />}
              {isTopicFocused[idx] && <Description>{result.description}</Description>}
              <Divider />
            </TopicWrapper>
          )))}
        </Topics>
        
      </Body>
    </Wrapper>
  );
}
