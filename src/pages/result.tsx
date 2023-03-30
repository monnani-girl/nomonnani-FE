import { useState } from 'react';
import styled from 'styled-components';
import testCarrot from '../assets/carrot.png';

function Result() {
  const [originActive, setOriginActive] = useState(true);

  const onClickSaleButton = () => {
    setOriginActive((prev) => !prev);
  };

  return (
    <div>
      <div>
        <Title>나의 못난이</Title>
        <ResultImage src={testCarrot} alt="result-image" />
        <ResultName>당근 근육맨</ResultName>
        <ResultDescription>
          당신의 닮은 꼴은 당근 근육맨입니다! 어쩌구 저쩌구 못난이 당근은 사실
          못나지 않았어요. 영양소도 똑같고 맛도 똑같고 식감도 똑같고 마트에서
          파는 당근과 차이가 없는 모양새만 특별한 당근이에요~ 어쩌구 저쩌구
        </ResultDescription>
      </div>
      <CommonDescription>
        <CommonText>'못난이'를 아시나요?</CommonText>
        <CommonSubText>
          '못난이'는 어쩌구 저쩌구 더미 데이터 더미 데이터 더미 데이터 더미
          데이터 더미 데이터 더미 데이터 더미 데이터 더미 데이터 더미 데이
          데이터 더미 데이터 더미 데이터 더미 데이 데이터 더미{' '}
        </CommonSubText>
      </CommonDescription>
      <ButtonContainer>
        <SaleButton
          loc="right"
          active={originActive}
          onClick={onClickSaleButton}
        >
          못난이 파는 곳
        </SaleButton>
        <SaleButton
          loc="left"
          active={!originActive}
          onClick={onClickSaleButton}
        >
          못난이의 재탄생
        </SaleButton>
      </ButtonContainer>

      <SaleContainer>
        <SaleText>못난이 '당근'의 판매처에요</SaleText>
        <SaleSubText>다양한 못난이 제품을 만나보세요</SaleSubText>

        <SaleBox>
          <SaleImage src={testCarrot} alt="sale-image" />
          <SaleTextBox>
            <div>
              <SalePlace>어글리어스</SalePlace>
              <SaleName>못난이 당근 주스 500ml</SaleName>
            </div>
            <SalePrice>12,000원</SalePrice>
          </SaleTextBox>
        </SaleBox>
        <SaleBox>
          <SaleImage src={testCarrot} alt="sale-image" />
          <SaleTextBox>
            <div>
              <SalePlace>어글리어스</SalePlace>
              <SaleName>못난이 당근 주스 500ml</SaleName>
            </div>
            <SalePrice>12,000원</SalePrice>
          </SaleTextBox>
        </SaleBox>
        <SaleBox>
          <SaleImage src={testCarrot} alt="sale-image" />
          <SaleTextBox>
            <div>
              <SalePlace>어글리어스</SalePlace>
              <SaleName>못난이 당근 주스 500ml</SaleName>
            </div>
            <SalePrice>12,000원</SalePrice>
          </SaleTextBox>
        </SaleBox>
      </SaleContainer>

      <SaveShareButtonContainer>
        <SaveShareButton bgColor="#E3F2FF">저장하기</SaveShareButton>
        <SaveShareButton bgColor="#4AE7A4">공유하기</SaveShareButton>
      </SaveShareButtonContainer>
    </div>
  );
}

export default Result;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 44px;
`;

const ResultImage = styled.img`
  width: 333px;
  height: 333px;
  display: block;
  margin: auto;
`;

const ResultName = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 40px 0 18px 0;
`;

const ResultDescription = styled.div`
  font-size: 14px;
  color: #555555;
`;

const CommonDescription = styled.div`
  border: 2px solid #27df91;
  border-radius: 32px;
  background: #f8f8f8;
  padding: 40px;
  margin: 36px 0 55px 0;
`;

const CommonText = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CommonSubText = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const SaleButton = styled.button<{ loc: string; active: boolean }>`
  font-size: 18px;
  font-weight: 600;
  padding: 14px 32px;
  background: ${(props) => (props.active ? '#27DF91' : '#F8F8F8')};
  cursor: pointer;
  border-style: none;
  ${(props) => props.loc === 'right' && 'border-top-left-radius: 10px'};
  ${(props) => props.loc === 'left' && 'border-top-right-radius: 10px'};
`;

const SaleContainer = styled.div`
  padding: 32px 20px;
  background: #f8f8f8;
`;

const SaleText = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SaleSubText = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SaleBox = styled.div`
  display: flex;
  height: 150px;
  padding: 12px;
  margin-bottom: 14px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
`;

const SaleImage = styled.img`
  margin-right: 18px;
`;

const SaleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SalePlace = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
`;

const SaleName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const SalePrice = styled.div`
  font-size: 16px;
`;

const SaveShareButtonContainer = styled(ButtonContainer)`
  gap: 20px;
  margin-top: 40px;
  border-radius: 65px;
`;

const SaveShareButton = styled.button<{ bgColor: string }>`
  font-size: 18px;
  font-weight: 600;
  padding: 24px 36px;
  border: none;
  border-radius: 65px;
  background-color: ${(props) => props.bgColor};
`;
