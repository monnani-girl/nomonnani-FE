import styled from "styled-components";
import { FormEvent } from 'react';
import { useRecoilState } from "recoil";
import { fourthState } from "../../atoms";

const FourthStep = () => {
    const [fourthSelected, setFourthSelected] = useRecoilState<string>(fourthState);
    const handleSelectItem = (e: FormEvent<HTMLButtonElement>) => {
        const {
          currentTarget: { value },
        } = e;
        setFourthSelected(value);
    };

    return (
        <>
        <SubTitle>제주 여행을 가게 된 당신!</SubTitle>
        <Title>제주 여행의 테마를 골라주세요!</Title>
        <SelectContainer>
          <SelectItem
            id="1"
            value="shopping"
            onClick={handleSelectItem}
            selected={fourthSelected === 'shopping'}
          >
            소비가 최고! 쇼핑을 즐기자
          </SelectItem>
          <SelectItem
            id="2"
            value="running"
            onClick={handleSelectItem}
            selected={fourthSelected === 'running'}
          >
            바다앞에서 러닝하는 건강루틴 실천
          </SelectItem>
          <SelectItem
            id="3"
            value="coffee"
            onClick={handleSelectItem}
            selected={fourthSelected === 'coffee'}
          >
            분위기 좋은 카페에서 커피 한 잔!
          </SelectItem>
          <SelectItem
            id="4"
            value="eating"
            onClick={handleSelectItem}
            selected={fourthSelected === 'eating'}
          >
            맛집이 최고지~ 맛집 코스 여행
          </SelectItem>
        </SelectContainer>
        </>
    );
}

export default FourthStep;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #525463;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-top: 48px;
`;

const Title = styled.div`
  font-family: Gmarket Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin: 10px 0 59px 0;

  color: #000000;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectItem = styled.button<{ selected: boolean }>`
  width: 332px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? '#379100' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#001358')};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 16px 0;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border: 2px solid #379100;
  }
`;
