import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    all: unset;
 font-size: 25px;
 width: 132px;
 height: 60px;
 border-radius: 60px;
 background: #f8f8ff;
 border: 2px solid #AAAABC;
 text-align: center;
 line-height: 60px;
`

type StartWordBtnProps = {
    word: string;
    onBtnClick: Function;
}
export default function StartWordBtn({ word, onBtnClick }: StartWordBtnProps) {
  return (
    <Wrapper onClick={() => onBtnClick(word)}>
        {word}
    </Wrapper>
  )
}
