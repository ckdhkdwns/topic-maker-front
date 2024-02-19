import React from "react";
import styled from "styled-components";
import RelatedWords from "../Mindmap/WordInformations/relatedWords";
import DatasetsPreview from "../Mindmap/WordInformations/datasetsPreivew";
import NewsPreview from "../Mindmap/WordInformations/news";
import { motion } from "framer-motion";
import ReposPreview from "components/Mindmap/WordInformations/repos";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 20px;
  margin: 0 30px;
  border-bottom: 1px solid #dfdfdf;
`;

const DoneButton = styled.button`
  all: unset;
  font-size: 17px;

  background: #003788;
  border-radius: 30px;
  text-align: center;
  line-height: 46px;
  width: fit-content;
  height: 46px;
  margin: auto 0;
  padding: 0 20px;
  color: #ffffff;
`;
const MainWord = styled.div`
  font-size: 34px;
  font-weight: 600;
  color: #000000;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: fit-content;
  padding: 0 40px 30px;
  margin-right: 5px;
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background: #cfcfcf;
    border: 8px solid #fafafa;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    margin: 4px 0;
  }
`;
type MakePhaseProps = {
  handleRelatedBtnClick: Function;
  mainWord: string;

  handleMindmapEnd: Function;
  wordInformations: any;
};
export default function MakePhase({
  handleRelatedBtnClick,
  mainWord,
  handleMindmapEnd,
  wordInformations,
}: MakePhaseProps) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
        },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <MainWord>{mainWord}</MainWord>
        <DoneButton onClick={() => handleMindmapEnd()}>다음</DoneButton>
      </Header>
      <Informations>
        <RelatedWords
          handleRelatedBtnClick={handleRelatedBtnClick}
          relatedWords={wordInformations.words}
          handleMindmapEnd={handleMindmapEnd}
        />
        <DatasetsPreview datasets={wordInformations.datasets} />
        <NewsPreview news={wordInformations.news} />
        <ReposPreview repos = {wordInformations.repos} />
      </Informations>
    </Wrapper>
  );
}
