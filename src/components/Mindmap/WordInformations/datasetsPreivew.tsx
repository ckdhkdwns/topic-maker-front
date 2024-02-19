import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`

`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const DatasetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SourceLink = styled(motion.a)`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
`;

type DatasetsPreiviewProps = {
  datasets: any[];
};
export default function DatasetsPreview({ datasets }: DatasetsPreiviewProps) {
  if (datasets.length == 0) return <></>;
  return (
    <Wrapper>
      <Title>Datasets</Title>
      <DatasetsWrapper>
        {datasets.map((data) => {
          return (
            <SourceLink
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
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
