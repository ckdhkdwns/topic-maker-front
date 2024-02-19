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


type SelectedKeywordBtnProps = {
  word: string;
};

export default function SelectedKeywordBtn({ word }: SelectedKeywordBtnProps) {
  return <Wrapper>{word}</Wrapper>;
}
