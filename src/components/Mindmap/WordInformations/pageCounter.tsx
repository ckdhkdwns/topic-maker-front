import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  font-size: 17px;
  height: 100%;
  margin-right: 15px;
  align-items: center;
`;

const Btn = styled.button`
  all: unset;
  display: flex;
  width: 50px;
  height: 50px;
  cursor: pointer;
  svg {
    width: 28px;
    height: 28px;
    fill: #9f9f9f;
    margin: auto auto;
    :hover {
      fill: #003788;
    }
  }
`;
const Divider = styled.div`
  background: #dfdfdf;
  width: 1px;
  height: 50%;
  margin: auto 0;
`;
const T = styled.div`
  margin: auto auto;
  display: flex;
  line-height: 20px;
`;

const MainT = styled.div`
  color: #3f3f3f;
  font-weight: 700;
`;

const SubT = styled.div`
  color: #9f9f9f;
`;
type pageCounterProps = {
  currentPage: number;
  maxPage: number;
  setCurrentPage: Function;
};
export default function PageCounter({
  currentPage,
  maxPage,
  setCurrentPage,
}: pageCounterProps) {
  return (
    <Wrapper>

      
    </Wrapper>
  );
}
