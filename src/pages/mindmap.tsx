import axios from "axios";
import ForceGraph from "components/Mindmap/forceGraph";
import RelatedWords from "components/Mindmap/relatedWords";

// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

type Node = {
  id: string;
  color: string;
}

type Link = {
  source: string;
  target: string;
}

type Data = {
  nodes: Node[],
  links: Link[]
}
export default function Mindmap() {
  const location = useLocation();
  const [mainWord, setMainWord] = useState(location.state.word);
  const [mainWordId, setMainWordId] = useState(0);
  const [realtedWords, setRelatedWords] = useState([]);

  const [mindmapData, setMindmapData] = useState<Data>({
    nodes: [
      {
        id: mainWord,
        color: "black"
      },
    ],

    links: [],
  });

  const getRelatedWords = async (word: string) => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/words?word=${word}`);
      setRelatedWords(res.data.words);
    } catch (e) {}
  };

  const appendData = (word: string) => {
    // let copied = JSON.parse(JSON.stringify(mindmapData));
    // copied.nodes = [...copied.nodes, { id: word, color: "black" }];
    // copied.links = [...copied.links, { source: mainWord, target: word }];
    // initMainWord(word);
    // setMindmapData(copied);
    setMindmapData(({ nodes, links }) => {
      
      return {
        nodes: [...nodes, { id: word, color: "black" }],
        links: [...links, { source: mainWord, target:  word}]
      };
    });
  };

  const initMainWord = (word: string) => {
    setMainWord(word);
    setMainWordId(mindmapData.nodes.length);
  };
  const onRelatedBtnClick = (word: string) => {
    appendData(word);
    initMainWord(word);
    getRelatedWords(word);
  };

  const handleNodeClick = (node: Node) => {
    initMainWord(node.id);
    getRelatedWords(node.id);
  }

  useEffect(() => {
    getRelatedWords(mainWord);
  }, []);

  useEffect(() => {
    console.log(mindmapData);
  }, [mindmapData]);

  return (
    <Wrapper>
      <ForceGraph mindmapData={mindmapData} handleNodeClick={handleNodeClick} />
      <RelatedWords
        onRelatedBtnClick={onRelatedBtnClick}
        mainWord={mainWord}
        relatedWords={realtedWords}
      />
    </Wrapper>
  );
}
