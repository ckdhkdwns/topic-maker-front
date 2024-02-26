import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi";


const Wrapper = styled(motion.div)`
  background: #ffffff;
  width: 90%;

  border-radius: 10px;
  padding: 5px 30px 20px;
  box-sizing: border-box;

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
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 28px;
    height: 28px;
    stroke: #003788;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SourceLink = styled(motion.a)`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  color: #333333;
  text-decoration: underline;
`;

type NewsPreiviewProps = {
  news: any[];
};
export default function NewsPreview({ news }: NewsPreiviewProps) {
  const removeTags = (text: string) => {
    const resultText = text
      .replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "")
      .replace(/(&quot\;)/g, '"');
    return resultText;
  };
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
        <Name>뉴스</Name>
      </Title>
      <NewsWrapper>
        {news.map((data) => {
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
    </Wrapper>
  );
}
