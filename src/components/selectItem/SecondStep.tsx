import styled from 'styled-components';
import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../../atoms';

const SecondStep = () => {
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const handleSelectItem = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setSelectedState((prev) => {
      const newObj = { ...prev, weather: value };
      return newObj;
    });
  };

  return (
    <>
      <SubTitle>난 햇빛을 받으면 ... 기분이 좋아지곤 해 ...</SubTitle>
      <Title>가장 좋아하는 날씨가 있다면?</Title>
      <SelectContainer>
        <SelectItem
          id="1"
          value="normal"
          onClick={handleSelectItem}
          selected={selectedState['weather'] === 'normal'}
        >
          바람 한 점 없는 고요한 날씨
        </SelectItem>
        <SelectItem
          id="2"
          value="sunny"
          onClick={handleSelectItem}
          selected={selectedState['weather'] === 'sunny'}
        >
          햇빛이 잘 드는 따뜻한 날씨
        </SelectItem>
        <SelectItem
          id="3"
          value="rainny"
          onClick={handleSelectItem}
          selected={selectedState['weather'] === 'rainny'}
        >
          비가 내리는 센치한 날씨
        </SelectItem>
        <SelectItem
          id="4"
          value="snowy"
          onClick={handleSelectItem}
          selected={selectedState['weather'] === 'snowy'}
        >
          눈이 펑펑오는 낭만적인 날씨
        </SelectItem>
      </SelectContainer>
    </>
  );
};

export default SecondStep;

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
  margin: 10px 0 59px 0;

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
  background: ${(props) => (props.selected ? 'var(--primary)' : 'var(--white)')};
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--secondary)')};
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
    border: 2px solid var(--primary);
  }
`;