import styled from 'styled-components';
import loadingGif from '../assets/loading.gif';

const Loading = () => {
  return (
    <Container>
      <LoadingGif src={loadingGif} alt="loading" />
      <Text>닮은꼴 캐릭터 찾는 중...</Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const LoadingGif = styled.img`
  width: 170px;
`;

const Text = styled.div`
  color: var(--black);
  font-size: 24px;
  margin-top: 24px;
`;
