import styled from 'styled-components';
import mainImage from '../assets/main.png';
import LogoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Body>
      <Image src={mainImage} alt="main-character" />
      <IntroContainer>
        <SubTitle>내가 제주 농산물이라면?</SubTitle>
        <Title src={LogoImage} alt="logo" />
        <Description>
          나와 닮은 귀여운 제주 못나니 <br />
          농산물 캐릭터를 찾아보세요!
        </Description>
        <Button to="/select">닮은꼴 찾으러 가기</Button>
      </IntroContainer>
    </Body>
  );
}

export default Home;

const Body = styled.div`
  text-align: center;
  margin-top: 80px;
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
  width: 152px;
  height: 60px;
  margin-top: 12px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  margin-top: 32px;
`;

const Description = styled.div`
  font-size: 18px;
  margin: 32px 0;
`;

const Button = styled(Link)`
  font-family: 'Gmarket Sans';
  width: 250px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border: none;
  background: #379100;
  color: #ffffff;
  border-radius: 100px;
  cursor: pointer;
`;
