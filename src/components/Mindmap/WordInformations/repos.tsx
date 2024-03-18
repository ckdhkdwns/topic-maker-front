import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImGithub } from "react-icons/im";
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
    width: 30px;
    height: 30px;
    stroke: #003788;
    fill: #003788;
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
type ReposPreview = {
  repos: any[];
};

export default function ReposPreview({ repos }: ReposPreview) {
  const [viewCount, setViewCount] = useState(5);
  const [leftCount, setLeftCount] = useState(
    repos.length - 5 > 0 ? repos.length - 5 : 0
  );
  const handleMoreBtnClick = () => {
    const temp = repos.length - viewCount > 5 ? 5 : repos.length - viewCount;
    setViewCount(viewCount + temp);
    setLeftCount(leftCount - temp);
  };

  const removeEmojis = (str: string) => {
    const emojiRegex =
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
    return str.replace(emojiRegex, "");
  };
  const decodeHtmlEntities = (str: string) => {
    const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;

    return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(regex, '')
  };
  useEffect(() => {
    setViewCount(5);
    setLeftCount(repos.length - 5 > 0 ? repos.length - 5 : 0);
  }, [repos]);

  if (repos.length == 0) return <></>;
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <SvgWrapper>
          <ImGithub />
        </SvgWrapper>
        <Name>
          <MainName>저장소</MainName>
          <SubName>Github의 레포지토리입니다.</SubName>
        </Name>
      </Title>
      <DatasetsWrapper>
        {repos.slice(0, viewCount).map((data, idx) => {
          return (
            <SourceLink
              target="_blank"
              rel="noopener noreferrer"
              href={`${data.link}`}
            >
              {decodeHtmlEntities(removeEmojis(data.title))}
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
