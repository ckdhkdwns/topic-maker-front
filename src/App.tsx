import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Index from "./pages";
import Test from "./pages/test";


const Wrapper = styled.div`
  all: unset;
`;
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} ></Route>
          <Route path="/test" element={<Test />} ></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
