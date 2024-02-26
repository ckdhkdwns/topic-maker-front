import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { FiDatabase } from "react-icons/fi";

const Wrapper = styled(motion.div)`
  background: #ffffff;
  width: 100%;
  border-radius: 10px;
  padding: 5px 30px 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #dfdfdf; */
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
  color: #1f1f1f;
  text-decoration: underline;
`;

type DatasetsPreiviewProps = {
  datasets: any[];
};
export default function DatasetsPreview({ datasets }: DatasetsPreiviewProps) {
  if (datasets.length == 0) return <></>;
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <SvgWrapper>
          <FiDatabase />
        </SvgWrapper>
        <Name>데이터셋</Name>
      </Title>
      <DatasetsWrapper>
        {datasets.map((data) => {
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
    </Wrapper>
  );
}
