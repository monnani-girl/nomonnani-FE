import styled from "styled-components";
import { FormEvent, useState } from 'react';

const SecondStep = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const handleSelectItem = (e: FormEvent<HTMLButtonElement>) => {
        const {
          currentTarget: { value },
        } = e;
        setSelectedItem(value);
        console.log(value);
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
            selected={selectedItem === 'normal'}
          >
            바람 한 점 없는 고요한 날씨
          </SelectItem>
          <SelectItem
            id="2"
            value="sunny"
            onClick={handleSelectItem}
            selected={selectedItem === 'sunny'}
          >
            햇빛이 잘 드는 따뜻한 날씨
          </SelectItem>
          <SelectItem
            id="3"
            value="rainny"
            onClick={handleSelectItem}
            selected={selectedItem === 'rainny'}
          >
            비가 내리는 센치한 날씨
          </SelectItem>
          <SelectItem
            id="4"
            value="snowy"
            onClick={handleSelectItem}
            selected={selectedItem === 'snowy'}
          >
            눈이 펑펑오는 낭만적인 날씨
          </SelectItem>
        </SelectContainer>
        </>
    );
}

export default SecondStep;

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
