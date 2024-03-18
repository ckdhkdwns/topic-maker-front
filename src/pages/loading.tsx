import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Spinner from "assets/tube-spinner.svg";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 10px;
  background: #ffffff;
  border-radius: 10px;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items  :center ;
  img{
    width: 120px;
    height: 120px;
  }
`;
const Description = styled.div`
  color: #6a6a6a;
  font-size: 17px;
  margin: 10px 0 20px;
`;


export default function Loading() {
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
      <Center>
        <img src={Spinner} alt="로딩" />
        <Description>주제를 생성하고 있어요...</Description>
      </Center>
    </Wrapper>
  );
}
