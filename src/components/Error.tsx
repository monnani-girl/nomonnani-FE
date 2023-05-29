import styled from 'styled-components';

const Error = () => {
  return (
    <Container>
      <Text>앗! 일시적인 오류가 발생했어요.</Text>
      <SubText>기존 화면으로 돌아가서 다시 시도해주세요.</SubText>
      <Button onClick={() => window.location.reload()}>
        닮은꼴 계속 찾아보기
      </Button>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  text-align: center;
  margin-top: 35vh;
`;

const Text = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
`;

const SubText = styled.div`
  font-size: 16px;
  color: var(--sub-black);
  margin-bottom: 48px;
`;

const Button = styled.button`
  width: 260px;
  height: 64px;
  font-size: 22px;
  font-family: 'GmarketSansMedium';
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 65px;
  cursor: pointer;
`;
