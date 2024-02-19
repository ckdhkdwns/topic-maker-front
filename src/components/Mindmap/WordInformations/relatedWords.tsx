import axios from 'axios';
import React, { useEffect } from 'react'
import styled from "styled-components";
import RelatedWordBtn from '../../Buttons/relatedWordBtn';


const Wrapper = styled.div`
  all: unset;
  font-size: 16px;
  margin-top: 15px;
  margin-right: 30px;
`;


const RelatedWordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  gap: 10px;
`
const Description = styled.div`
  color: #6a6a6a;
  font-size: 17px;
  margin: 10px 0 20px;;
`


type RelatedWordsProps = {

    relatedWords: string[];
    handleRelatedBtnClick: Function;
    handleMindmapEnd: Function;
}
export default function RelatedWords({ relatedWords, handleRelatedBtnClick, handleMindmapEnd }:RelatedWordsProps) {
  if(relatedWords.length == 0) return <></>
  return (
    <Wrapper>
      
      <Description>키워드를 선택하세요.</Description>
      <RelatedWordsWrapper>
      {relatedWords.map((word, idx) => {
        if(idx > 10) return
        return <RelatedWordBtn onBtnClick={handleRelatedBtnClick}word={word}/>
      })}
      </RelatedWordsWrapper>
      
      
    </Wrapper>
  )
}
