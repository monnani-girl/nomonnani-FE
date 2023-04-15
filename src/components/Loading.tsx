import { useState, useEffect } from 'react';
import styled from 'styled-components';
import carrot from '../assets/carrot.png';
import cabbage from '../assets/cabbage.png';
import broccoli from '../assets/broccoli.png';
import potato from '../assets/potato.png';
import pumpkin from '../assets/pumpkin.png';
import tangerine from '../assets/tangerine.png';

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      <Text>닮은꼴 캐릭터 찾는 중...</Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
`;

const CharacterImg = styled.img`
  width: 170px;
`;

const Text = styled.div`
  color: var(--black);
  font-size: 24px;
  margin-top: 24px;
`;
