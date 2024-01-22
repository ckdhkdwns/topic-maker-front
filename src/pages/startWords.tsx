import StartWordBtn from 'components/startWordBtn';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    height: 100vh;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin: 8vh auto 34px;
`

const TitleWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin: 0 auto;
`

const Title = styled.div`
    font-size: 4vh;
    font-weight: 600;
`

const BlueTitle = styled(Title)`
    color: #003788;
`

const WhiteTitle = styled(Title)`
    
`
const SubTitle = styled.div`
    font-size: 2.5vh;
`

const Divider = styled.div`
    background: #003788;
    width: 70vw;
    height: 2px;
    margin: 0 auto;
`

const Words = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: min-content;
    gap: 10px;
    margin: 20px auto;
`

const words = [
    '건강',
    '게임',
    '과학',
    '금융',
    '뉴스',
    '도서',
    '미용',
    '부동산',
    '사업',
    '쇼핑',
    '스포츠',
    '음식',
    '동물',
    '여행',
    '예술',
    '커뮤니티',
    '인터넷',
    '자동차',
    '직업',
    '집단',
    '취미',
    '컴퓨터',
    '홈'
]

export default function StartWord() {
    const navigate = useNavigate();

    const onBtnClick = (word: string) => {
        navigate("/mindmap", {state: {
            word: word
        }});
    }
  return (
    <Wrapper>
        <Header>
            <TitleWrapper>
                <BlueTitle>시작 키워드</BlueTitle>
                <WhiteTitle>입력</WhiteTitle>
            </TitleWrapper>
            <SubTitle>여러분의 마인드맵을 그리기 위해 키워드를 입력해보세요.</SubTitle>
        </Header>
        
        <Divider />
        <Words>
            {words.map(word => {
                return <StartWordBtn word={word} onBtnClick={onBtnClick}/>
            })}
        </Words>
    </Wrapper>
  )
}
