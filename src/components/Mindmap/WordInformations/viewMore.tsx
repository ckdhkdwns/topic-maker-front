import { motion } from "framer-motion";
import React from "react";
import { FiDatabase } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  padding: 30px 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #dfdfdf; */
  padding-bottom: 10px;
  margin-bottom: 10px;
  gap: 15px;
  position: relative;
`;

const SvgWrapper = styled.div`
  background: #0037882f;
  /* background: #efefef; */
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    stroke: #003788;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

const MainName = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const SubName = styled.div`
  color: #afafaf;
  font-size: 14px;
`;

const BackBtn = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 10px;
  transition: 0.1s all;
  cursor: pointer;
  :hover {
    background: #efefef;
  }
  svg {
    margin: auto auto;
    stroke: #dfdfdf;
    fill: #afafaf;
    width: 30px;
    height: 30px;
  }
`;
const InfoWrapper = styled.div`
      display: flex;
  flex-direction: column;

`

const SourceLink = styled(motion.a)`
  all: unset;
  border-bottom: 1px solid #dfdfdf;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: #3f3f3f;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    color: #003788;
    font-weight: bold;
    text-decoration: underline;
  }
`;
type ViewMoreProps = {
  setIsViewMore: Function;
  infoType: number;
  infoList: any[];
};
export default function ViewMore({
  setIsViewMore,
  infoType,
  infoList,
}: ViewMoreProps) {
  const handleBackBtnClick = () => {
    setIsViewMore(false);
  };


  return (
    <Wrapper initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
      <Header>
        <Title>
          <BackBtn onClick={handleBackBtnClick}>
            <IoIosArrowBack />
          </BackBtn>
          <SvgWrapper>
            <FiDatabase />
          </SvgWrapper>
          <Name>
            <MainName>데이터셋</MainName>
            <SubName>공공데이터포털에서 제공하는 데이터셋입니다.</SubName>
          </Name>
        </Title>
      </Header>
      <InfoWrapper>
      {infoList.map((data) => {
          return (
            <SourceLink
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.data.go.kr${data.link}`}
            >
              {data.title}
            </SourceLink>
          );
        })}
      </InfoWrapper>
    </Wrapper>
  );
}
