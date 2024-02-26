import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ImGithub } from "react-icons/im";

const Wrapper = styled(motion.div)`
  background: #ffffff;
  width: 100%;

  border-radius: 10px;
  padding: 0 30px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #dfdfdf;
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
    width: 25px;
    height: 25px;
    stroke: #003788;
    fill: #003788;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const DatasetsWrapper = styled.div`
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

type ReposPreview = {
  repos: any[];
};
export default function ReposPreview({ repos }: ReposPreview) {
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
        <Name>레포지토리</Name>
      </Title>
      <DatasetsWrapper>
        {repos.map((data, idx) => {
          if (idx > 3) return;
          return (
            <SourceLink
              target="_blank"
              rel="noopener noreferrer"
              href={`${data.link}`}
            >
              {data.title}
            </SourceLink>
          );
        })}
      </DatasetsWrapper>
    </Wrapper>
  );
}
