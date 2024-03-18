import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi";
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

const Title = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 10px;
  margin-bottom: 10px;
  gap: 15px;
`;

const SvgWrapper = styled.div`
  background: #0037882f;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
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
`
const SubName = styled.div`
  color: #afafaf;
  font-size: 14px;
`
const NewsWrapper = styled.div`
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

type NewsPreiviewProps = {
  news: any[];
};
export default function NewsPreview({ news }: NewsPreiviewProps) {
  const [viewCount, setViewCount] = useState(5);
  const [leftCount, setLeftCount] = useState(
    news.length - 5 > 0 ? news.length - 5 : 0
  );
  const handleMoreBtnClick = () => {
    const temp = news.length - viewCount > 5 ? 5 : news.length - viewCount;
    setViewCount(viewCount + temp);
    setLeftCount(leftCount - temp);
  };

  const removeTags = (text: string) => {
    const resultText = text
      .replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "")
      .replace(/(&quot\;)/g, '"');
    return resultText;
  };

  useEffect(() => {
    setViewCount(5);
    setLeftCount(news.length - 5 > 0 ? news.length - 5 : 0)
  }, [news]);
  if (news.length == 0) return <></>;
  return (
    <Wrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
      <Title>
        <SvgWrapper>
          <HiOutlineNewspaper />
        </SvgWrapper>
        <Name>
          <MainName>
            뉴스
          </MainName>
          <SubName>
            각종 뉴스 포털에서 제공하는 정보입니다.
          </SubName>
        </Name>
      </Title>
      <NewsWrapper>
        {news.slice(0, viewCount).map((data) => {
          return (
            <SourceLink
              target="_blank"
              rel="noopener noreferrer"
              href={`${data.link}`}
            >
              {removeTags(data.title)}
            </SourceLink>
          );
        })}
      </NewsWrapper>
      {leftCount > 0 && (
        <MoreBtn onClick={handleMoreBtnClick}>
          <IoIosArrowDown />{" "}
          <MoreT>{leftCount > 5 ? 5 : leftCount}개 더 보기</MoreT>
        </MoreBtn>
      )}
    </Wrapper>
  );
}
