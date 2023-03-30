import styled from 'styled-components';
import testCarrot from '../assets/carrot.png';

function Result() {
  return (
    <div>
      <div>
        <Title>나의 못난이</Title>
        <ResultImage src={testCarrot} alt="result-image" />
        <ResultName>당근 근육맨</ResultName>
        <ResultDescription>당근 근육맨</ResultDescription>
      </div>
      <CommonDescription>못난이 문제 소개</CommonDescription>
      <div>
        <SaleButton>못난이 파는 곳</SaleButton>
        <SaleButton>못난이의 재탄생</SaleButton>

        <SaleContainer>
          <SaleImage src={testCarrot} alt="sale-image" />
          <SalePlace>어글리어스</SalePlace>
          <SaleName>못난이 당근 주스 500ml</SaleName>
          <SalePrice>12,000원</SalePrice>
        </SaleContainer>
      </div>
    </div>
  );
}

export default Result;

const Title = styled.div``;

const ResultImage = styled.img``;

const ResultName = styled.div``;

const ResultDescription = styled.div``;

const CommonDescription = styled.div``;

const SaleButton = styled.button``;

const SaleContainer = styled.div``;

const SaleImage = styled.img``;

const SalePlace = styled.div``;

const SaleName = styled.div``;

const SalePrice = styled.div``;
