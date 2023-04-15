import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';
import { getResult } from '../api';
import { selectedAtom } from '../atoms';
import Loading from '../components/Loading';
import { handleKaKaoShareBtn } from '../utils/kakaoShare';
import { handleImageDownload } from '../utils/ImageDownload';
import headerLogo from '../assets/header.png';
import introductionImg from '../assets/introduction.svg';
import { QUOTE } from '../static/quote';
import { IMAGE_URLS, PRODUCT_IMAGES } from '../static/image';
import styled from 'styled-components';

import type { ResultProps } from '../api/types';

function Result() {
  const navigate = useNavigate();
  const selected = useRecoilValue(selectedAtom);
  const [result, setResult] = useState<ResultProps>();
  const [resultType, setResultType] = useState('');
  const [saleType, setSaleType] = useState('origin');

  const {
    mutate: resultMutation,
    isLoading: resultLoading,
    isSuccess: resultSuccess,
  } = useMutation(getResult, {
    onSuccess: (data) => {
      if (data.result) {
        setResult(data.result);
        setResultType(data.result.type);
      } else {
        //TODO: 에러 모달 띄우기
        alert(data.message);
        navigate('/select/5');
      }
    },
    onError: (error) => {
      navigate('/');
    },
  });

  useEffect(() => {
    resultMutation(selected);
  }, []);

  const onClickSaleButton = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSaleType(value);
  };

  return (
    <>
      {resultLoading ? (
        <Loading />
      ) : (
        <>
          {resultSuccess && (
            <FlexBox>
              <HeaderLogo src={headerLogo} />
              <ResultImage
                src={PRODUCT_IMAGES[resultType]}
                alt="result-image"
              />

              <ResultSubName>나는 못난이</ResultSubName>
              <ResultName>{QUOTE[resultType].name}</ResultName>
              <ResultDescription>{QUOTE[resultType].quote}</ResultDescription>
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
                    못난이 '{QUOTE[resultType].type}'의 판매처에요
                  </SaleText>
                  <SaleSubText>다양한 못난이 제품을 만나보세요!</SaleSubText>

                  {result?.products
                    .filter(
                      (product) =>
                        product.type ===
                        (saleType === 'origin' ? '원물판매자' : '업사이클링'),
                    )
                    .map((product) => (
                      <SaleBox
                        key={product.id}
                        to={product.site}
                        target="_blank"
                      >
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
                      src: `${PRODUCT_IMAGES[resultType]}`,
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
                      title: QUOTE[resultType].name,
                      description:
                        '나와 닮은꼴인 제주 못난이 농작물을 찾아보세요!',
                      imageUrl: IMAGE_URLS[resultType],
                    })
                  }
                >
                  공유하기
                </SaveShareButton>
              </SaveShareButtonContainer>
            </FlexBox>
          )}
        </>
      )}
    </>
  );
}

export default Result;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 17px;
  margin: 0 auto;
`;

const ResultImage = styled.img`
  width: 100%;
  display: block;
  align-self: center;
  margin-top: 30px;
`;

const ResultSubName = styled.div`
  font-size: 16px;
  color: var(--darkgrey);
`;

const ResultName = styled.div`
  font-size: 24px;
  font-weight: 700;
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
  font-size: 16px;
  padding: 12px auto;
  font-family: 'Gmarket Sans';
  font-weight: ${(props) => (props.active ? '600' : '400')};
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
  font-weight: 600;
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
  font-family: 'Gmarket Sans';
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
  font-family: 'Gmarket Sans';
  font-size: 18px;
  padding: 24px 30px;
  border: 1px solid #e1e1e1;
  border-radius: 65px;
  background-color: var(--background);
  color: var(--darkgrey);
  opacity: 0.8;
  cursor: pointer;
`;
