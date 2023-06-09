import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { getVisitors } from '../api';
import { selectedAtom } from '../atoms';
import Error from '../components/Error';
import useCountUp from '../hooks/useCountUp';
import mainImage from '../assets/main.png';
import LogoImage from '../assets/logo.png';

import type { Visitor } from '../api/types';


function Home() {
  const countUp = useCountUp({ end: 1000 });
  const resetSelected = useResetRecoilState(selectedAtom);
  const {
    data: visitor,
    isLoading: visitorLoading,
    isError: visitorError,
  } = useQuery<Visitor>('visitor', getVisitors);

  useEffect(() => {
    resetSelected();
  }, []);

  if (visitorError) return <Error />;

  return (
    <Body>
      <Image src={mainImage} alt="main-character" />
      <IntroContainer>
        <SubTitle>내가 제주 농산물이라면?</SubTitle>
        <Title src={LogoImage} alt="logo" />
        <Description>
          나와 닮은 귀여운 제주 못난이
          <br />
          농산물 캐릭터를 찾아보세요!
        </Description>
        <Button to="/select/1">닮은꼴 찾으러 가기</Button>
        <VisitorText>
          지금까지 {visitorLoading ? countUp : visitor?.session_count}명이
          닮은꼴을 찾았어요
        </VisitorText>
      </IntroContainer>
    </Body>
  );
}

export default Home;

const Body = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  height: 320px;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.img`
  width: 158px;
  height: 60px;
  margin-top: 12px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  margin-top: 28px;
  color: var(--secondary);
`;

const Description = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  margin-top: 28px;
  line-height: 26px;
`;

const Button = styled(Link)`
  width: 250px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 30px;
  border: none;
  background: var(--primary);
  color: var(--white);
  border-radius: 100px;
  cursor: pointer;
`;

const VisitorText = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: var(--primary);
  margin-top: 20px;
`;
