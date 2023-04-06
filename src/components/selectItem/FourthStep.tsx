import styled from 'styled-components';
import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../../atoms';

const FourthStep = () => {
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const handleSelectItem = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setSelectedState((prev) => {
      const newObj = { ...prev, travel: value };
      return newObj;
    });
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
          selected={selectedState['travel'] === 'shopping'}
        >
          소비가 최고! 쇼핑을 즐기자
        </SelectItem>
        <SelectItem
          id="2"
          value="running"
          onClick={handleSelectItem}
          selected={selectedState['travel'] === 'running'}
        >
          바다앞에서 러닝하는 건강루틴 실천
        </SelectItem>
        <SelectItem
          id="3"
          value="coffee"
          onClick={handleSelectItem}
          selected={selectedState['travel'] === 'coffee'}
        >
          분위기 좋은 카페에서 커피 한 잔!
        </SelectItem>
        <SelectItem
          id="4"
          value="eating"
          onClick={handleSelectItem}
          selected={selectedState['travel'] === 'eating'}
        >
          맛집이 최고지~ 맛집 코스 여행
        </SelectItem>
      </SelectContainer>
    </>
  );
};

export default FourthStep;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--sub-black);

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-top: 48px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin: 10px 0 34px 0;

  color: var(--black);
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
  background-color: ${(props) => (props.selected ? 'var(--primary-opacity)' : 'var(--white)')};
  color: ${(props) => (props.selected ? 'var(--primary)' : 'var(--secondary)')};
  border: ${(props) => props.selected ? '1px solid var(--primary)' : 'none'};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  margin: 8px 0;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border: 1px solid var(--primary);
    transition: 0.3s ease;
  }
`;
