import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  all: unset;
  font-size: 22px;
  background: #f0f0f0;
  border-radius: 30px;
  text-align: center;
  line-height: 56px;
  width: fit-content;
  height: 56px;
  padding: 0 20px;
`;

type RelatedWordBtnProps = {
  word: string;
  onBtnClick: Function;
};
export default function RelatedWordBtn({ word, onBtnClick }: RelatedWordBtnProps) {
  return <Wrapper onClick={() => onBtnClick(word)}>{word}</Wrapper>;
}
