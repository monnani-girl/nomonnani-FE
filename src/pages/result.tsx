import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import testCarrot from '../assets/main.png';
import introImage from '../assets/introduction.svg';
import { handleKaKaoShareBtn } from '../utils/kakaoShare';

function Result() {
  const [originActive, setOriginActive] = useState(true);

  const onClickSaleButton = () => {
    setOriginActive((prev) => !prev);
  };

  return (
    <div>
      <div>
        <ResultImage src={testCarrot} alt="result-image" />
        <Title>나의 못난이</Title>
        <ResultName>당근 근육맨</ResultName>
        <ResultDescription>
          튼튼한 제 알통이 보이시나요? 사람들은 제 팔다리가 곧게 뻗지 않았다는
          이유로 못난이 당근이라며 먹지 않아요. 은은한 단맛과 아삭한 식감,
          비타민이 가득한 제 매력을 몰라주지만, 저는 각양각색 개성만점인 못난이
          당근 친구들이 자랑스러워요!
        </ResultDescription>
      </div>
      <CommonDescription>
        <img src={introImage} />
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

        <SaleBox
          to="https://www.ssg.com/item/itemView.ssg?itemId=1000532302549"
          target="_blank"
        >
          <SaleImage src={testCarrot} alt="sale-image" />
          <SaleTextBox>
            <div>
              <SalePlace>어글리어스</SalePlace>
              <SaleName>못난이 당근 주스 500ml</SaleName>
            </div>
            <SalePrice>12,000원</SalePrice>
          </SaleTextBox>
        </SaleBox>
        <SaleBox
          to="https://www.ssg.com/item/itemView.ssg?itemId=1000532302549"
          target="_blank"
        >
          <SaleImage src={testCarrot} alt="sale-image" />
          <SaleTextBox>
            <div>
              <SalePlace>어글리어스</SalePlace>
              <SaleName>못난이 당근 주스 500ml</SaleName>
            </div>
            <SalePrice>12,000원</SalePrice>
          </SaleTextBox>
        </SaleBox>
        <SaleBox
          to="https://www.ssg.com/item/itemView.ssg?itemId=1000532302549"
          target="_blank"
        >
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
        <SaveShareButton bgColor="#F5F2F0">다시하기</SaveShareButton>
        <SaveShareButton bgColor="#E3F2FF">저장하기</SaveShareButton>
        <SaveShareButton
          bgColor="#4AE7A4"
          onClick={() =>
            handleKaKaoShareBtn({
              title: '못나니 근육 당근',
              description: '나와 닮은꼴인 제주 못난이 농작물을 찾아보세요!!!!!',
              imageUrl: 'https://ifh.cc/g/NzSxkR.png',
            })
          }
        >
          공유하기
        </SaveShareButton>
      </SaveShareButtonContainer>
    </div>
  );
}

export default Result;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 35px;
  color: #656565;
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
  margin: 6px 0 16px 0;
`;

const ResultDescription = styled.div`
  font-size: 16px;
  width: 340px;
  margin: 0 auto;
`;

const CommonDescription = styled.div`
  display: flex;
  padding: 10px;
  margin: 48px 0 68px 0;
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
  font-size: ${(props) => (props.active ? '21px' : '20px')};
  font-weight: 600;
  padding: 14px 32px;
  background: ${(props) => (props.active ? '#ffffff' : '#F8F8F8')};
  color: ${(props) => (props.active ? '#379100' : '#818181')};
  cursor: pointer;
  border-style: none;
  ${(props) => props.loc === 'right' && 'border-top-left-radius: 10px'};
  ${(props) => props.loc === 'left' && 'border-top-right-radius: 10px'};
`;

const SaleContainer = styled.div`
  padding: 32px 20px;
  background: #ffffff;
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

const SaleBox = styled(Link)`
  display: flex;
  height: 150px;
  padding: 12px;
  margin-bottom: 14px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  color: inherit;
  text-decoration: none;
  &:hover {
    border: 2px solid #27df91;
  }
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
  cursor: pointer;
`;
