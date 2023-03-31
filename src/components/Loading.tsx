import { useState, useEffect } from 'react';
import styled from 'styled-components';
import carrot from '../assets/carrot.png';
import cabbage from '../assets/cabbage.png';
import broccoli from '../assets/broccoli.png';
import potato from '../assets/potato.png';
import pumpkin from '../assets/pumpkin.png';
import tangerine from '../assets/tangerine.png';

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const images: string[] = [
    carrot,
    cabbage,
    broccoli,
    potato,
    pumpkin,
    tangerine,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <CharacterImg
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <Text>캐릭터 찾는 중...</Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 20px;
  margin-top: 120px;
`;

const CharacterImg = styled.img`
  width: 149px;
`;

const Text = styled.div`
  color: #000000;
  width: 171px;
  height: 33px;

  font-family: 'Gmarket Sans';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
`;
