import StartWordBtn from "components/Buttons/startWordBtn";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IoMdSearch } from "react-icons/io";
import Header from "components/header";
import { MAKE } from "constants/phaseIndex";
import { AnimatePresence, motion } from "framer-motion";

// words' vector images
import Health from "assets/WordIcons/health.svg";
import Game from "assets/WordIcons/game.svg";
import Science from "assets/WordIcons/science.svg";
import Stock from "assets/WordIcons/stock.svg";
import Education from "assets/WordIcons/education.svg";
import News from "assets/WordIcons/news.svg";
import Book from "assets/WordIcons/book.svg";
import Animal from "assets/WordIcons/animal.svg";
import Beauty from "assets/WordIcons/beauty.svg";
import RealEstate from "assets/WordIcons/realEstate.svg";
import Business from "assets/WordIcons/business.svg";
import Social from "assets/WordIcons/social.svg";
import Sports from "assets/WordIcons/sports.svg";
import Shopping from "assets/WordIcons/shopping.svg";
import Internet from "assets/WordIcons/internet.svg";
import Art from "assets/WordIcons/art.svg";
import Trip from "assets/WordIcons/trip.svg";
import Car from "assets/WordIcons/car.svg";
import Electronic from "assets/WordIcons/electronic.svg";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div``;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  margin: 0 30px 30px;
  border-bottom: 1px solid #dfdfdf;

  position: relative;
  svg {
    position: absolute;
    fill: #aaaabc;
    left: 20px;
    top: 39px;

    width: 25px;
    height: 25px;
  }
`;

const KeywordInput = styled.input`
  all: unset;
  background: #f1f1f1;
  height: 50px;
  padding-left: 55px;
  border-radius: 20px;
  font-size: 16px;
  width: 100%;
`;

const Words = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;

  margin: 0px auto;
  overflow: overlay;

  padding: 0 30px;
  box-sizing: border-box;

  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    /* margin: 4px 0; */
  }
  /* @media only screen and (max-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const NextButton = styled.button`
  all: unset;
  font-size: 17px;
  right: 7px;
  background: #003788af;
  border-radius: 15px;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  position: absolute;
  height: 39px;
  width: 8%;
  margin: auto 0;
  padding: 0 20px;
  color: #ffffff;
  top: 50%;
  transform: translate(0%, -50%);
`;

const wordObjects = [
  { name: "건강", engName: "Health", source: Health, width: 30, height: 30 },
  { name: "게임", engName: "Game", source: Game, width: 35, height: 35 },
  { name: "과학", engName: "Science", source: Science, width: 30, height: 30 },
  { name: "금융", engName: "Stock", source: Stock, width: 30, height: 30 },
  {
    name: "교육",
    engName: "Education",
    source: Education,
    width: 30,
    height: 30,
  },
  { name: "뉴스", engName: "News", source: News, width: 30, height: 30 },
  { name: "도서", engName: "Book", source: Book, width: 30, height: 30 },

  { name: "동물", engName: "Animal", source: Animal, width: 30, height: 30 },

  { name: "미용", engName: "Beauty", source: Beauty, width: 30, height: 30 },
  {
    name: "부동산",
    engName: "Real Estate",
    source: RealEstate,
    width: 30,
    height: 30,
  },
  {
    name: "사업",
    engName: "Business",
    source: Business,
    width: 30,
    height: 30,
  },
  { name: "사회", engName: "Social", source: Social, width: 30, height: 30 },
  { name: "운동", engName: "Sports", source: Sports, width: 30, height: 30 },
  {
    name: "쇼핑",
    engName: "Shopping",
    source: Shopping,
    width: 30,
    height: 30,
  },
  {
    name: "인터넷",
    engName: "Internet",
    source: Internet,
    width: 30,
    height: 30,
  },
  { name: "예술", engName: "Art", source: Art, width: 30, height: 30 },
  { name: "여행", engName: "Trip", source: Trip, width: 30, height: 30 },
  { name: "자동차", engName: "Car", source: Car, width: 30, height: 30 },
  {
    name: "전자제품",
    engName: "Electronic",
    source: Electronic,
    width: 30,
    height: 30,
  },
];

type StartPhaseProps = {
  setProcess: Function;
  setPhase: Function;
  setMainWord: Function;
  setMindmapData: Function;
  getWordInformations: Function;
};
export default function StartPhase({
  setProcess,
  setPhase,
  setMainWord,
  setMindmapData,
  getWordInformations,
}: StartPhaseProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const initMake = (word: string) => {
    if (word.length == 0) return;
    setMainWord(word);
    setMindmapData({
      nodes: [
        {
          id: word,
          color: "black",
          val: 10,
          isRoot: true,
          isFocused: true,
        },
      ],

      links: [],
    });
    getWordInformations(word);
    setPhase(MAKE);
  };

  //handle enter pressed
  useEffect(() => {
    const onEnterPressed = (e: any) => {
      if (e.keyCode != 13) return;
      e.preventDefault();    
      initMake(inputValue);
    };
    document.addEventListener("keydown", onEnterPressed);
    return () => {
      document.removeEventListener("keydown", onEnterPressed);
    };
  }, [inputValue]);

  useEffect(() => {
    setProcess(25);
  }, []);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InputWrapper>
        <IoMdSearch />
        <KeywordInput
          onChange={handleInputChange}
          placeholder="키워드를 입력해주세요."
          value={inputValue}
        />
        {/* <NextButton onClick={() => initMake(inputValue)}>시작</NextButton> */}
      </InputWrapper>

      {/* <Line>생각나는 키워드가 없다면,</Line>
        <Line>
          <AccentWord>카테고리별 키워드</AccentWord>로 확인해보세요.
        </Line> */}
      <Words>
        {wordObjects.map((obj) => {
          return (
            <StartWordBtn
              word={obj}
              handleBtnClick={(w: string) => initMake(w)}
            />
          );
        })}
      </Words>
    </Wrapper>
  );
}
