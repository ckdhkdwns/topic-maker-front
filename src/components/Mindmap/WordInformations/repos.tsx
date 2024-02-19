import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

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
  color: #333333;
  text-decoration: underline;
`;

type ReposPreview = {
  repos: any[];
};
export default function ReposPreview({ repos }: ReposPreview) {
  if (repos.length == 0) return <></>;
  return (
    <Wrapper>
      <Title>Repositories</Title>
      <DatasetsWrapper>
        {repos.map((data) => {
          return (
            <SourceLink
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
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
