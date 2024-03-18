import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiDatabase } from "react-icons/fi";
import PageCounter from "./pageCounter";
import { IoIosArrowDown } from "react-icons/io";

const Wrapper = styled(motion.div)`
  background: #ffffff;
  width: 100%;
  padding: 0px 30px 30px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfdfdf;
  height: fit-content;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #dfdfdf; */
  padding-bottom: 10px;
  margin-bottom: 0px;
  gap: 15px;
  position: relative;
`;

const SvgWrapper = styled.div`
  background: #0037881f;
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
const DatasetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SourceLink = styled(motion.a)`
  all: unset;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  color: #4f4f4f;
  /* text-decoration: underline; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    /* background: #efefef; */
    text-decoration: underline;

    font-weight: bold;
  }
`;

const AlterSource = styled(SourceLink)`
  /* background: #00378811; */
`;
const MoreBtn = styled.button`
  all: unset;
  gap: 10px;
  margin: 0px auto;
  cursor: pointer;
  width: fit-content;
  padding: 2px 30px;
  margin-top: 10px;
  border-radius: 15px;
  text-align: center;
  height: 40px;
  transition: 0.1s all;
  display: flex;
  svg {
    margin: auto 0;
    width: 20px;
    height: 20px;
    fill: #8f8f8f;
  }
  :hover {
    background: #efefef;
  }
  :hover > div {
    color: #000000;
  }
  :hover > svg {
    fill: #000000;
  }
`;

const MoreT = styled.div`
  color: #8f8f8f;
  font-size: 16px;
  margin: auto 0;
`;

const AllDatasets = styled(motion.div)``;
type DatasetsPreiviewProps = {
  datasets: any[];
  setIsViewMore: Function;
};
export default function DatasetsPreview({
  datasets,
  setIsViewMore,
}: DatasetsPreiviewProps) {
  const [viewCount, setViewCount] = useState(5);
  const [leftCount, setLeftCount] = useState(
    datasets.length - 5 > 0 ? datasets.length - 5 : 0
  );
  const handleMoreBtnClick = () => {
    const temp = datasets.length - viewCount > 5 ? 5 : datasets.length - viewCount;
    setViewCount(viewCount + temp);
    setLeftCount(leftCount - temp);
  };

  useEffect(() => {
    setViewCount(5);
    setLeftCount(datasets.length - 5 > 0 ? datasets.length - 5 : 0)
  }, [datasets]);

  if (datasets.length == 0) {
    return <></>;
  }
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Title>
          <SvgWrapper>
            <FiDatabase />
          </SvgWrapper>
          <Name>
            <MainName>데이터셋</MainName>
            <SubName>공공데이터포털에서 제공하는 데이터셋입니다.</SubName>
          </Name>
        </Title>
      </Header>

      <DatasetsWrapper>
        {datasets.slice(0, viewCount).map((data, idx) => {
          if (idx % 2 == 0)
            return (
              <AlterSource
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.data.go.kr${data.link}`}
              >
                {data.title}
              </AlterSource>
            );
          else
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
      </DatasetsWrapper>
      {leftCount > 0 && (
        <MoreBtn onClick={handleMoreBtnClick}>
          <IoIosArrowDown />{" "}
          <MoreT>{leftCount > 5 ? 5 : leftCount}개 더 보기</MoreT>
        </MoreBtn>
      )}
    </Wrapper>
  );
}
