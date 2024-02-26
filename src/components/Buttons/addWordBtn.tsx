import React from 'react'
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa6";

const Wrapper = styled.div`
    all: unset;
  
  border-radius: 30px;
  text-align: center;

    color: #ffffff;
  line-height: 46px;

  cursor: pointer;
  height: 46px;
    background: #efefef;
  padding: 0 20px;
  display: flex;
  svg {
    width: 20px;
    margin: auto auto;
    fill: #5f5f5f;
    height: 20px;
  }

`
export default function AddWordBtn() {
  return (
    <Wrapper><FaPlus /></Wrapper>
  )
}
