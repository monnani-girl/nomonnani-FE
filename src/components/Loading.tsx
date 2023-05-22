import styled from 'styled-components';
import loadingGif from '../assets/loading.gif';

const Loading = () => {
  return (
    <Container>
      <LoadingGif src={loadingGif} alt="loading" />
      <Text>
        잠시만요!<br />
        닮은꼴 캐릭터를 찾고 있어요
        <SubText>남은 시간 최대 5초</SubText>
      </Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const LoadingGif = styled.img`
  width: 170px;
`;

const Text = styled.div`
  color: var(--black);
  font-size: 24px;
  margin-top: 24px;
  text-align: center;
`;

const SubText = styled.div`
  color: var(--sub-black); 
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;