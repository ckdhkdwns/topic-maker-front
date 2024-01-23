import React from "react";
import StartWord from "./startWords";
import Intro from "./intro";
import styled from "styled-components";

const Wrapper = styled.div`
    scroll-snap-type:y;
    scroll-snap-align:center;

`;

export default function Start() {
  return (
    <Wrapper>
      <Intro />
      <StartWord />
    </Wrapper>
  );
}
