import axios from 'axios';
import React, { useEffect } from 'react'
import styled from "styled-components";
import RelatedWordBtn from './relatedWordBtn';


const Wrapper = styled.div`
  all: unset;
  font-size: 16px;
`;

const MainWord = styled.div`
  font-size: 50px;
  color: #003788;
`
const RelatedWordsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`
type RelatedWordsProps = {
  mainWord: string;
    relatedWords: string[];
    onRelatedBtnClick: Function;
}
export default function RelatedWords({ mainWord, relatedWords, onRelatedBtnClick }:RelatedWordsProps) {
  return (
    <Wrapper>
      <MainWord>{mainWord}</MainWord>
      <RelatedWordsWrapper>
      {relatedWords.map(word => {
        return <RelatedWordBtn onBtnClick={onRelatedBtnClick}word={word}/>
      })}
      </RelatedWordsWrapper>
      
      
    </Wrapper>
  )
}
