import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    all: unset;
    /* opacity: 40%; */
 font-size: 18px;
 width: 100%;
 height: 52px;
 border-radius: 60px;
 /* background: #f8f8ff; */
 background: #f5f5f5;
 /* border: 1px solid #dfdfdf; */
 text-align: center;
 line-height: 60px;
 display: flex;
  padding-left: 23px;
  justify-content: space-between;
 box-sizing: border-box;
 align-items: center;
 gap: 10px;
 position: relative;
 cursor: pointer;
 transition: 0.2s all;
 :hover {
  background-color: #bacae3;
 }
 
`

const ImageWrapper = styled.div`
  /* background: #0037881f; */
  width: 45px;
  height: 45px;
  border-radius: 40px;
  margin-right: 10px;
  
    svg {
      path {
        stroke: #121212;
    fill: #121212;
      }
    
    }
  
  
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 20px;
  text-align: left;
`

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
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
    <Wrapper onClick={() => handleBtnClick(word.name)}>
      
      <Title>
        <Name>{word.name}</Name>
        <English>{word.engName}</English>
      </Title>
      {/* <ImageWrapper>
        <img src={word.source} alt={word.name} style={{width: word.width, height: word.height}} />
      </ImageWrapper>   */}
    </Wrapper>
  )
}
