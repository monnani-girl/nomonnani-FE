import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getResult } from '../api';
import { selectedAtom } from '../atoms';
import { QUOTE } from '../static/quote';
import { handleKaKaoShareBtn } from '../utils/kakaoShare';
import { handleImageDownload } from '../utils/ImageDownload';
import Loading from '../components/Loading';
import { ResultProps } from '../api/types';

import pumpkinImg from '../assets/pumpkin.png';
import broccoliImg from '../assets/broccoli.png';
import potatoImg from '../assets/potato.png';
import tangerineImg from '../assets/tangerine.png';
import carrotImg from '../assets/carrot.png';
import cabbageImg from '../assets/cabbage.png';
import introductionImg from '../assets/introduction.svg';

function Result() {
  const selected = useRecoilValue(selectedAtom);
  const [result, setResult] = useState<ResultProps>();
  const [resultType, setResultType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [saleType, setSaleType] = useState('origin');

  useEffect(() => {
    getResult(selected).then((res) => {
      setResult(res);
      setResultType(res.type);
      setIsLoading(false);
    });
  }, [selected]);

  const onClickSaleButton = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSaleType(value);
  };

  const getProductImage = () => {
    if (resultType === 'pumpkin') return pumpkinImg;
    else if (resultType === 'broccoli') return broccoliImg;
    else if (resultType === 'potato') return potatoImg;
    else if (resultType === 'tangerine') return tangerineImg;
    else if (resultType === 'cabbage') return cabbageImg;
    else if (resultType === 'carrot') return carrotImg;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <Title>나의 못난이</Title>
            <ResultImage src={getProductImage()} alt="result-image" />

            <ResultName>{QUOTE[resultType].name}</ResultName>
            <ResultDescription>{QUOTE[resultType].quote}</ResultDescription>
          </div>
          <CommonDescription>
            <img src={introductionImg} alt="introduction" />
          </CommonDescription>
          <ButtonContainer>
            <SaleButton
              value="origin"
              active={saleType === 'origin'}
              onClick={onClickSaleButton}
            >
              못난이 파는 곳
            </SaleButton>
            <SaleButton
              value="upcycling"
              active={saleType === 'upcycling'}
              onClick={onClickSaleButton}
            >
              못난이의 재탄생
            </SaleButton>
          </ButtonContainer>

          <SaleContainer>
            <SaleText>못난이 {QUOTE[resultType].type}의 판매처에요</SaleText>
            <SaleSubText>다양한 못난이 제품을 만나보세요</SaleSubText>

            {result?.sales
              .filter(
                (sale) =>
                  sale.type ===
                  (saleType === 'origin' ? '원물판매자' : '업사이클링'),
              )
              .map((sale) => (
                <SaleBox key={sale.id} to={sale.site} target="_blank">
                  <SaleImage src={sale.image} alt="sale-image" />
                  <SaleTextBox>
                    <div>
                      <SalePlace>{sale.place}</SalePlace>
                      <SaleName>{sale.name}</SaleName>
                    </div>
                    <SalePrice>{sale.price}원</SalePrice>
                  </SaleTextBox>
                </SaleBox>
              ))}
          </SaleContainer>

          <SaveShareButtonContainer>
            <SaveShareButton
              bgColor="#379100"
              onClick={() =>
                handleImageDownload({
                  src: `${getProductImage()}`,
                  fileName: 'ddokdarman.png',
                })
              }
            >
              저장하기
            </SaveShareButton>
            <SaveShareButton
              bgColor="#379100"
              onClick={() =>
                handleKaKaoShareBtn({
                  title: '못나니 근육 당근',
                  description:
                    '나와 닮은꼴인 제주 못난이 농작물을 찾아보세요!!!!!',
                  imageUrl: 'https://ifh.cc/g/NzSxkR.png',
                })
              }
            >
              공유하기
            </SaveShareButton>
          </SaveShareButtonContainer>
        </div>
      )}
    </>
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

const SaleButton = styled.button<{ value: string; active: boolean }>`
  font-size: 18px;
  font-weight: 600;
  padding: 14px 32px;
  background: ${(props) => (props.active ? 'var(--grey)' : 'var(--primary)')};
  color: ${(props) => (props.active ? 'var(--black)' : 'var(--white)')};
  cursor: pointer;
  border-style: none;
  ${(props) => props.value === 'origin' && 'border-top-left-radius: 10px'};
  ${(props) => props.value === 'upcycling' && 'border-top-right-radius: 10px'};
`;

const SaleContainer = styled.div`
  padding: 32px 20px;
  background: var(--grey);
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
  background: var(--white);
  border: 1px solid #f0f0f0;
  color: inherit;
  text-decoration: none;
  &:hover {
    border: 2px solid var(--primary);
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
  color: var(--white);
  opacity: 0.8;
  cursor: pointer;
`;
