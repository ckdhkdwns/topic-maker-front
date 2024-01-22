import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Index from "./pages";
import Test from "./pages/test";
import StartWord from "pages/startWords";
import Mindmap from "pages/mindmap";



const Wrapper = styled.div`
  all: unset;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;


function App() {
  let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    scrollBar:            false,
    navigation:           true,
    verticalAlign:        false,
    sectionPaddingTop:    '50px',
    sectionPaddingBottom: '50px',
    arrowNavigation:      true
  };
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} ></Route>
          <Route path="/start-word" element={<StartWord />} ></Route>
          <Route path="/mindmap" element={<Mindmap />} ></Route>
          <Route path="/test" element={<Test />} ></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
