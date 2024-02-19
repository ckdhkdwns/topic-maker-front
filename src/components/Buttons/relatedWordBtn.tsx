import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.button)`
  all: unset;
  font-size: 17px;
  background: #efefef;
  border-radius: 30px;
  text-align: center;
  line-height: 46px;
  width: max-content;
  cursor: pointer;
  height: 46px;
  color: #121212;
  padding: 0 20px;
  transition: 0.1s;
  :hover {
    background: #00378838;
  }
`;

type RelatedWordBtnProps = {
  word: string;
  onBtnClick: Function;
};
export default function RelatedWordBtn({ word, onBtnClick }: RelatedWordBtnProps) {
  return <Wrapper 
  initial={{opacity: 0.1}}
  animate={{ opacity: 1 }}
  transition={{ duration: 1}}
  onClick={() => onBtnClick(word)}>{word}</Wrapper>;
}
