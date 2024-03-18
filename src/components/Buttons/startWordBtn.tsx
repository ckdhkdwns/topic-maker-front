import React from 'react'
import styled from 'styled-components'

import { IoIosArrowForward } from "react-icons/io";

const Wrapper = styled.button`
    all: unset;
    display: flex;
    justify-content: space-between;
  font-size: 17px;
  background: #efefef;
  border-radius: 30px;
  text-align: center;
  min-width: 36px;
  line-height: 46px;
  width: max-content;
  cursor: pointer;
  height: 46px;
  color: #121212;
  padding: 0 20px;
  padding-right: 15px;
  transition: 0.1s all;
 :hover {
  background: #00378845;
  svg {
    fill: #003788;
  }
 }
 svg {
  margin: auto 10px;
  margin-right: 0;
  width: 20px;
  height: 20px;
  fill: #afafaf;
 }
`

const ImageWrapper = styled.div`
  /* background: #0037881f; */
  
  margin: auto 0;
    svg {
      path {
        stroke: #121212;
    fill: #121212;
      }
    
    }
  
  
`

const Title = styled.div`
  display: flex;
    margin: auto 0;
  gap: 0;
  line-height: 20px;
  text-align: left;
`

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* color: #003788; */
`

const English = styled.div`
  font-size: 12px;
  color: #6f6f6f;
`
type StartWordBtnProps = {
    word: any;
    handleBtnClick: Function;
}
export default function StartWordBtn({ word, handleBtnClick }: StartWordBtnProps) {
  return (
    <Wrapper onClick={() => handleBtnClick(word)}>
      
      <Title>{word}</Title>
      <IoIosArrowForward />
      {/* <ImageWrapper> */}
        {/* <img src={word.source} alt={word.name} style={{width: word.width, height: word.height}} /> */}
        
      {/* </ImageWrapper>   */}
    </Wrapper>
  )
}
