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
  height: 100vh;
  overflow: auto;
  scrollbar-gutter: stable;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.1s all;

  border-radius: 10px;

  /* margin-right: 0; */
  margin-bottom: 20px;
`;

const Divider = styled.div`
  background-color: #dfdfdf;
  height: 1px;
  width: 95%;
  margin: 0 auto;
`;
const Head = styled.div`
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

  margin: 10px;
`;
type MakePhaseProps = {
  handleRelatedBtnClick: Function;
  mainWord: string;

  handleMindmapEnd: Function;
  wordInformations: any;
  reloadWords: Function;
};
export default function MakePhase({
  handleRelatedBtnClick,
  mainWord,
  handleMindmapEnd,
  wordInformations,
  reloadWords
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
        <Head>
          <MainWord>{mainWord}</MainWord>
          <DoneButton onClick={() => handleMindmapEnd()}>다음</DoneButton>
        </Head>
        <RelatedWords
          handleRelatedBtnClick={handleRelatedBtnClick}
          relatedWords={wordInformations.words}
          handleMindmapEnd={handleMindmapEnd}
          reloadWords={reloadWords}
        />
      </Header>

      <Informations>
        <Divider />
        <DatasetsPreview datasets={wordInformations.datasets} />
        {wordInformations.datasets.length > 0 && <Divider /> }
        <NewsPreview news={wordInformations.news} />
        {wordInformations.news.length > 0 && <Divider /> }
        <ReposPreview repos={wordInformations.repos} />
      </Informations>
    </Wrapper>
  );
}
