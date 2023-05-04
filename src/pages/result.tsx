import { FormEvent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handleKaKaoShareBtn } from '../utils/kakaoShare';
import { handleImageDownload } from '../utils/ImageDownload';
import introductionImg from '../assets/introduction.svg';
import { PRODUCT_NAME_ENG2KOR } from '../static/product';
import { IMAGE_URLS, PRODUCT_IMAGES } from '../static/image';
import Header from '../components/Header';
import styled from 'styled-components';

import type { ResultProps } from '../api/types';

type LocationType = {
  state: ResultProps;
};

const RANDOM_COUNT = 3;

function Result() {
  const { state: result } = useLocation() as LocationType;
  const [saleType, setSaleType] = useState('origin');

  const resultImageIdx = Math.floor(Math.random() * RANDOM_COUNT);

  const onClickSaleButton = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSaleType(value);
  };

  return (
    <FlexBox>
      <Header />
      <ResultImage
        src={PRODUCT_IMAGES[result.type][resultImageIdx]}
        alt="result-image"
      />

      <ResultSubName>나의 닮은꼴 농산물은...</ResultSubName>
      <ResultName>{result.nickname}</ResultName>
      <ResultDescription>{result.quote}</ResultDescription>
      <DescriptionImage src={introductionImg} alt="introduction" />

      <SaleContainer>
        <ButtonContainer>
          <SaleButton
            value="origin"
            active={saleType === 'origin'}
            onClick={onClickSaleButton}
          >
            못난이 만나보기
          </SaleButton>
          <SaleButton
            value="upcycling"
            active={saleType === 'upcycling'}
            onClick={onClickSaleButton}
          >
            못난이의 재탄생
          </SaleButton>
        </ButtonContainer>

        <SaleBoxContainer>
          <SaleText>
            못난이 '{PRODUCT_NAME_ENG2KOR[result.type]}'의 판매처에요
          </SaleText>
          <SaleSubText>다양한 못난이 제품을 만나보세요!</SaleSubText>

          {result?.products
            .filter(
              (product) =>
                product.type ===
                (saleType === 'origin' ? '원물판매자' : '업사이클링'),
            )
            .map((product) => (
              <SaleBox key={product.id} to={product.site} target="_blank">
                <SaleImage src={product.image} alt="sale-image" />
                <SaleTextBox>
                  <div>
                    <SalePlace>{product.place}</SalePlace>
                    <SaleName>{product.name}</SaleName>
                  </div>
                  <SalePrice>{product.price}원</SalePrice>
                </SaleTextBox>
              </SaleBox>
            ))}
        </SaleBoxContainer>
      </SaleContainer>

      <SaveShareButtonContainer>
        <Button to="/">다시하기</Button>
        <SaveShareButton
          bgColor="var(--primary-opacity)"
          color="var(--primary)"
          border="2px solid var(--primary)"
          onClick={() =>
            handleImageDownload({
              src: PRODUCT_IMAGES[result.type][resultImageIdx],
              fileName: 'ddokdarman.png',
            })
          }
        >
          저장하기
        </SaveShareButton>
        <SaveShareButton
          bgColor="var(--primary)"
          color="var(--white)"
          border="none"
          style={{ padding: '24px 120px', marginTop: '28px' }}
          onClick={() =>
            handleKaKaoShareBtn({
              title: result.nickname,
              description: '나와 닮은꼴인 제주 못난이 농작물을 찾아보세요!',
              imageUrl: IMAGE_URLS[result.type][resultImageIdx],
            })
          }
        >
          공유하기
        </SaveShareButton>
      </SaveShareButtonContainer>
    </FlexBox>
  );
}

export default Result;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultImage = styled.img`
  width: 100%;
  height: 410px;
  display: block;
  align-self: center;
  margin-top: 30px;
`;

const ResultSubName = styled.div`
  font-size: 16px;
  margin-top: 28px;
  color: var(--darkgrey);
`;

const ResultName = styled.div`
  font-size: 24px;
  font-family: 'GmarketSansBold';
  text-align: center;
  color: var(--black);
  margin: 6px 0 16px 0;
`;

const ResultDescription = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans KR';
  line-height: 24px;
  color: var(--black);
`;

const DescriptionImage = styled.img`
  width: 100%;
  height: 400px;
  margin: 48px 0 68px 0;
`;

const SaleContainer = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const SaleButton = styled.button<{ value: string; active: boolean }>`
  height: 52px;
  font-size: 17px;
  padding: 12px auto;
  font-family: ${(props) =>
    props.active ? 'GmarketSansBold' : 'GmarketSansMedium'};
  background: ${(props) => (props.active ? 'var(--white)' : 'var(--grey)')};
  color: ${(props) => (props.active ? 'var(--primary)' : 'var(--darkgrey)')};
  cursor: pointer;
  border-style: none;
  ${(props) => props.value === 'origin' && 'border-top-left-radius: 10px'};
  ${(props) => props.value === 'upcycling' && 'border-top-right-radius: 10px'};
`;

const SaleBoxContainer = styled.div`
  width: inherit;
  padding: 32px 20px;
  background: var(--white);
`;

const SaleText = styled.div`
  font-size: 20px;
  font-family: 'GmarketSansBold';
  margin-bottom: 4px;
`;

const SaleSubText = styled.div`
  font-size: 16px;
  font-family: 'Pretendard';
  margin-bottom: 20px;
`;

const SaleBox = styled(Link)<{ last?: boolean }>`
  display: flex;
  align-items: center;
  height: 140px;
  padding: 12px;
  background: var(--white);
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #dddddf;
  &:hover {
    border: 2px solid var(--primary);
    border-radius: 10px;
  }
`;

const SaleImage = styled.img`
  width: 88px;
  height: 95px;
  border-radius: 4px;
  margin-right: 13px;
`;

const SaleTextBox = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SalePlace = styled.div`
  font-size: 14px;
  font-family: 'Pretendard';
  color: #373737;
`;

const SaleName = styled.div`
  font-family: 'Pretendard';
  color: var(--black);
  font-size: 16px;
  font-weight: 700;
`;

const SalePrice = styled.div`
  color: var(--secondary);
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;

const SaveShareButtonContainer = styled(ButtonContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

const SaveShareButton = styled.button<{
  bgColor: string;
  color: string;
  border: string;
}>`
  font-family: 'GmarketSansMedium';
  font-size: 18px;
  padding: 24px 30px;
  border: ${(props) => props.border};
  border-radius: 65px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  opacity: 0.8;
  cursor: pointer;
`;

const Button = styled(Link)`
  font-family: 'GmarketSansMedium';
  font-size: 18px;
  padding: 24px 30px;
  border: 1px solid #e1e1e1;
  border-radius: 65px;
  background-color: var(--background);
  color: var(--darkgrey);
  opacity: 0.8;
  cursor: pointer;
`;
