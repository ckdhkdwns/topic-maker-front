import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: auto 0;
  background: #fafafa;
  height: 100vh;
  padding-bottom: 10vh;
  justify-content: center;

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
  color: #b1b1b1;
`;

export default function StartKeywordTitle() {
  return (
    <Wrapper>
      <TitleWrapper>
        <BlueTitle>시작 키워드</BlueTitle>
        <WhiteTitle>입력</WhiteTitle>
      </TitleWrapper>
      <SubTitle>
        여러분의 마인드맵을 그리기 위해 키워드를 입력해보세요.
      </SubTitle>
    </Wrapper>
  );
}
