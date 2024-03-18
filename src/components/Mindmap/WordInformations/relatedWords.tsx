import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RelatedWordBtn from "../../Buttons/relatedWordBtn";
import AddWordBtn from "components/Buttons/addWordBtn";

import { TbReload, TbPlus } from "react-icons/tb";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  all: unset;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0px 30px 0px;
  padding-right: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  margin-bottom: 6px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const Btn = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  svg {
    transition: 0.1s all;
    width: 20px;
    height: 20px;
    margin: auto auto;
    stroke: #9f9f9f;
  }
  :hover {
    background: #efefef;
    /* svg {
      transform: scale(1.1);
      stroke: #003788;
    } */
  }
`;

const Divider = styled.div`
  height: 30px;
  width: 1px;
  background: #dfdfdf;
`;
const ReloadBtn = styled(Btn)``;

const AddBtn = styled(Btn)``;

const AddWordInput = styled(motion.input)`
  all: unset;
  background: #efefef;

  box-sizing: border-box;
  border-radius: 36px;
  height: 46px;
  font-size: 17px;
`;
const RelatedWordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  gap: 10px;
`;
const Description = styled.div`
  color: #6a6a6a;
  font-size: 17px;
  margin: 10px 0 20px;
`;

type RelatedWordsProps = {
  relatedWords: string[];
  handleRelatedBtnClick: Function;
  handleMindmapEnd: Function;
  reloadWords: Function;
};
export default function RelatedWords({
  relatedWords,
  handleRelatedBtnClick,
  handleMindmapEnd,
  reloadWords,
}: RelatedWordsProps) {
  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const addWordInputRef = useRef<HTMLInputElement>(null);
  const handleAddBtnClick = () => {
    if (!isAdding) addWordInputRef.current?.focus();
    else {
      if (inputValue != "") {
        handleRelatedBtnClick(inputValue);
        setInputValue("")
      }
    }
    setIsAdding(!isAdding);
  };
  const temp = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <Wrapper>
      <Header>
        <Description>키워드를 선택하세요.</Description>
        <Buttons>
          <ReloadBtn onClick={() => reloadWords()}>
            <TbReload />
          </ReloadBtn>
          <Divider />
          <AddWordInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={addWordInputRef}
            initial={{width: 0}}
            animate={
              isAdding
                ? {
                    width: 200,
                    marginLeft: 10,
                    paddingLeft: 20,
                  }
                : { width: 0 }
            }
          />
          <AddBtn onClick={handleAddBtnClick}>
            <TbPlus />
          </AddBtn>
        </Buttons>
      </Header>

      <RelatedWordsWrapper>
        {relatedWords.length > 0
          ? relatedWords.map((word, idx) => {
              if (idx > 10) return;
              return (
                <RelatedWordBtn
                  onBtnClick={handleRelatedBtnClick}
                  word={word}
                />
              );
            })
          : temp.map(() => {
              return (
                <RelatedWordBtn onBtnClick={handleRelatedBtnClick} word="" />
              );
            })}
      </RelatedWordsWrapper>
    </Wrapper>
  );
}
