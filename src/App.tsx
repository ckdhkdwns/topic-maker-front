import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { LOADING, MAKE, RESULT, SELECT, START } from "constants/phaseIndex";
import StartPhase from "components/Phases/startPhase";
import ForceGraph from "components/Mindmap/forceGraph";
import { AnimatePresence } from "framer-motion";
import SelectKeywords from "components/Phases/selectPhase";
import MakePhase from "components/Phases/makePhase";
import Loading from "pages/loading";
import ResultTopics from "components/Phases/resultPhase";
import axios from "axios";
import StartKeywordTitle from "components/Left/startKeywordTitle";
import Intro from "pages/intro";

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background: #dfdfdf;

  box-sizing: border-box;
  gap: 1px;
`;

const Left = styled.div`
  width: fit-content;
  margin: auto 0;
  width: fit-content;
  display: flex;
  justify-content: right;
`;

const Right = styled.div`
  margin: auto 0;
  background: #ffffff;
  position: relative;
  display: flex;
  background: #fafafa;
  flex-direction: column;
  margin: auto 0;
  width: 40%;
  height: 100vh;

  box-sizing: border-box;

  margin: auto 0;

`;

const Body = styled.div`
  display: flex;

  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  gap: 50px;
  width: 38vw;
  height: 90vh;

  box-sizing: border-box;
  border-radius: 20px;
  margin: auto 0;
  margin-right: 30px;
  border: 1px #dfdfdf solid;
`;

const MakeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  overflow: overlay;

  &::-webkit-scrollbar {
    width: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background: #cfcfcf;
    border: 8px solid #ffffff;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    margin: 4px 0;
  }
`;

type Node = {
  id: string;
  color: string;
  val: number;
  isRoot: boolean;
  isFocused: boolean;
};

type Link = {
  source: string;
  target: string;
};

type Data = {
  nodes: Node[];
  links: Link[];
};

type InformationType = {
  words: string[];
  datasets: [];
  news: [];
  repos: []
};

function App() {
  const [mainWordId, setMainWordId] = useState(0);
  const [process, setProcess] = useState(0);
  const [mainWord, setMainWord] = useState("");
  const [wordInformations, setWordInformations] = useState<InformationType>({
    words: [],
    datasets: [],
    news: [],
    repos: []
  });

  const [wordInformationCache, setWordInformationCache] = useState<any>({});
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const [phase, setPhase] = useState(START);

  const [isLoading, setIsLoading] = useState(false);
  const [resultTopics, setResultTopics] = useState<string[]>([]);
  const [mindmapData, setMindmapData] = useState<Data>({
    nodes: [
      {
        id: mainWord,
        color: "black",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
    ],

    links: [],
  });

  const getWordInformations = async (word: string) => {
    // 캐시에 단어의 정보가 있을 경우 api 호출 안 함
    if (Object.keys(wordInformationCache).includes(word)) {
      setWordInformations(wordInformationCache[word]);
      return;
    }
    if (word.length == 0) return;
    try {
      const exceptWords = mindmapData.nodes.map((node) => node.id).join(",");
      const res = await axios.get(
        `http://127.0.0.1:5000/words?topicWord=${word}&exceptWords=${exceptWords}`,
        { withCredentials: false }
      );
      setWordInformations(res.data);

      // var as key
      const copied = JSON.parse(JSON.stringify(wordInformationCache));
      copied[word] = res.data;
      setWordInformationCache(copied);
    } catch (e) {}
  };

  // 마인드맵 데이터 추가
  const appendData = (word: string) => {
    setMindmapData(({ nodes, links }) => {
      return {
        nodes: [
          ...nodes,
          {
            id: word,
            color: "black",
            val: 10,
            isRoot: false,
            isFocused: false,
          },
        ],
        links: [...links, { source: mainWord, target: word }],
      };
    });
  };

  const initMainWord = (word: string) => {
    setMainWord(word);
    setMainWordId(mindmapData.nodes.length);
    // let copied = JSON.parse(JSON.stringify(mindmapData));
    // for(let i=0;i<copied.nodes.length;i++) {
    //   copied.nodes[i].isFocused = copied.nodes[i].id == word
    // }
    // setMindmapData(copied)
  };

  const handleRelatedBtnClick = (word: string) => {
    appendData(word);
    setWordInformations({
      words: [],
      datasets: [],
      news: [],
      repos: []
    });
    getWordInformations(word);
    initMainWord(word);
  };

  const handleNodeClick = (node: Node) => {
    if (phase == MAKE) {
      initMainWord(node.id);
      getWordInformations(node.id);

      return;
    }
    if (phase == SELECT) {
      if (selectedKeywords.includes(node.id)) return;
      setSelectedKeywords([...selectedKeywords, node.id]);
    }
  };

  const handleMindmapEnd = () => {
    setPhase(SELECT);
    setProcess(75);
  };

  const handleGetTopics = async () => {
    if (selectedKeywords.length == 0) return;
    setPhase(LOADING);
    setIsLoading(true);
    
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/topics?words=${selectedKeywords.join(",")}`
      );
      setPhase(RESULT);
      setProcess(100);
      setResultTopics(res.data.ideas);
    } catch (e) {}
  };

  useEffect(() => {
    getWordInformations(mainWord);
    setProcess(50);
  }, []);

  return (
    <Wrapper>
      <Left>
        {phase == START && <Intro />}

        {phase != START && (
          <ForceGraph
            mindmapData={mindmapData}
            handleNodeClick={handleNodeClick}
          />
        )}
      </Left>
      <Right>
        <AnimatePresence>
          {phase == START && (
            <StartPhase
              setProcess={setProcess}
              setPhase={setPhase}
              setMainWord={setMainWord}
              setMindmapData={setMindmapData}
              getWordInformations={getWordInformations}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {phase == MAKE && (
            <MakePhase
              handleRelatedBtnClick={handleRelatedBtnClick}
              mainWord={mainWord}
              handleMindmapEnd={handleMindmapEnd}
              wordInformations={wordInformations}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {phase == SELECT && (
            <SelectKeywords
              selectedKeyWords={selectedKeywords}
              handleGetTopics={handleGetTopics}
              isLoading={isLoading}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>{phase == LOADING && <Loading />}</AnimatePresence>
        <AnimatePresence>
          {phase == RESULT && <ResultTopics resultTopics={resultTopics} />}
        </AnimatePresence>
      </Right>
    </Wrapper>
  );
}

export default App;
