import ForceGraph from "components/Mindmap/forceGraph";

// eslint-disable-next-line
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;
export default function Mindmap() {
  const location = useLocation();
  const startWord = location.state.word;
  
  return <Wrapper>
    <ForceGraph startWord={startWord} />
  </Wrapper>;
}
