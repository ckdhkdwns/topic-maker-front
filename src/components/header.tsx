import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const Main = styled.div`
  padding-top: 2vh;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 20px auto;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const BlueTitle = styled(Title)`
  color: #003788;
`;

const WhiteTitle = styled(Title)``;

const SubTitle = styled.div`
  font-size: 23px;
  text-align: center;
`;

const Bar = styled.div`
  position: relative;
`;
const ProcessBar = styled.div<{ width: number }>`
  position: absolute;
  left: 0;
  background: #003788;
  width: ${(props) => props.width}vw;
  height: 8px;
  /* border-radius: 0 3px 3px 0; */
  transition: 0.5s width;
`;

const BackgroundBar = styled.div`
  height: 8px;
  position: absolute;

  background: #efefef;
  border-bottom: 1px solid #dfdfdf;
  width: 100vw;
`;

type HeaderProps = {
  process: number;
};
export default function Header({ process }: HeaderProps) {
  return (
    <Wrapper>
      <Bar>
        <BackgroundBar />
        <ProcessBar width={process} />
      </Bar>
    </Wrapper>
  );
}
