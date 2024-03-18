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
import Intro from "pages/intro";
import Header from "components/header";
import { ForceGraphMethods } from "react-force-graph-2d";

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 10px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
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
  border-left: 1px solid #dfdfdf;
  position: relative;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  margin: auto 0;
  width: 40%;
  height: 100vh;

  box-sizing: border-box;

  margin: auto 0;
`;

const Body = styled.div`
  display: flex;
`;

type Node = {
  id: string;
  prevId: string;
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
  repos: [];
  seq: Number;
};

function App() {
  const graphRef = useRef<ForceGraphMethods>();
  const [process, setProcess] = useState(25);
  const [mainWord, setMainWord] = useState("");
  const [mainWordPrev, setMainWordPrev] = useState("")
  const [wordInformations, setWordInformations] = useState<InformationType>({
    words: [],
    datasets: [],
    news: [],
    repos: [],
    seq: 0,
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
        prevId: "",
        color: "black",
        val: 10,
        isRoot: true,
        isFocused: true,
      },
    ],

    links: [],
  });

  const getWordInformations = async (word: string, prevId?: string) => {
    // 캐시에 단어의 정보가 있을 경우 api 호출 안 함
    if (Object.keys(wordInformationCache).includes(word)) {
      setWordInformations(wordInformationCache[word]);
      return;
    }
    if (word.length === 0) return;
    try {
      const exceptWords = mindmapData.nodes.map((node) => node.id).join(",");

      const param = mainWordPrev != "" ? `${word},${mainWordPrev}` : word
      console.log('params : ', param)
      const wordRes = await axios.get(
        `http://127.0.0.1:5000/words?topicWord=${param}&exceptWords=${exceptWords}&seq=0`,
        { withCredentials: false }
      );
      const datasetRes = await axios.get(
        `http://127.0.0.1:5000/datasets?topicWord=${word}`,
        { withCredentials: false }
      );
      const newsRes = await axios.get(
        `http://127.0.0.1:5000/news?topicWord=${word}`,
        { withCredentials: false }
      );
      const repoRes = await axios.get(
        `http://127.0.0.1:5000/repositories?topicWord=${word}`,
        { withCredentials: false }
      );
      const infoObj = {
        words: wordRes.data["words"],
        datasets: datasetRes.data["datasets"],
        news: newsRes.data["news"],
        repos: repoRes.data["repos"],
        seq: 0,
      };
      setWordInformations(infoObj);

      // var as key
      const copied = JSON.parse(JSON.stringify(wordInformationCache));

      copied[word] = infoObj;
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
            prevId: mainWord,
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


  const handleRelatedBtnClick = (word: string) => {
    if (word === "") return;
    appendData(word);

    setWordInformations({
      words: [],
      datasets: [],
      news: [],
      repos: [],
      seq: 0,
    });
    setMainWordPrev(mainWord);
    setMainWord(word);
  };

  const handleNodeClick = (node: Node) => {
    if (phase === MAKE) {
      setMainWordPrev(node.prevId);
      setMainWord(node.id);
      getWordInformations(node.id, node.prevId);
      return;
    }
    if (phase === SELECT) {
      if (selectedKeywords.includes(node.id)) return;
      setSelectedKeywords([...selectedKeywords, node.id]);
    }
  };

  const handleMindmapEnd = () => {
    setPhase(SELECT);
    setProcess(75);
    graphRef.current?.zoomToFit(1000, 100);
  };

  const handleGetTopics = async () => {
    if (selectedKeywords.length === 0) return;
    setPhase(LOADING);
    setIsLoading(true);

    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/topics?words=${selectedKeywords.join(",")}`
      );
      console.log(res.data);
      setPhase(RESULT);
      setProcess(100);
      setResultTopics(res.data.ideas);
    } catch (e) {}
  };

  const reloadWords = async () => {
    const seq = wordInformationCache[mainWord]["seq"];
    try {
      const exceptWords = mindmapData.nodes.map((node) => node.id).join(",");
      const res = await axios.get(
        `http://127.0.0.1:5000/words?topicWord=${mainWord}&exceptWords=${exceptWords}&seq=${
          seq + 1
        }`,
        { withCredentials: false }
      );
      console.log(res.data);
      setWordInformations({
        ...wordInformations,
        words: res.data["words"],
        seq: seq + 1,
      });

      // var as key
      const copied = JSON.parse(JSON.stringify(wordInformationCache));
      copied[mainWord]["words"] = res.data["words"];
      copied[mainWord]["seq"] = seq + 1;
      setWordInformationCache(copied);
      console.log("copied: ", copied);
    } catch (e) {}
  };

  useEffect(() => {
    console.log('prev: ', mainWordPrev)
    getWordInformations(mainWord);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainWordPrev]);

  return (
    <Wrapper>
      <Header process={process} />
      <Body>
        <Left>
          {phase == START && <Intro />}

          {phase != START && (
            <ForceGraph
              graphRef={graphRef}
              mainWord={mainWord}
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
                reloadWords={reloadWords}
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
      </Body>
    </Wrapper>
  );
}

export default App;
