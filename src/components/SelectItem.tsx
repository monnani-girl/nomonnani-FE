import styled from 'styled-components';
import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../atoms';
import { SELECT_OPTIONS } from '../static/select';
import { SelectedProps } from '../api/types';

interface SelectItemProps {
  step: number;
}

const SelectItem = ({ step }: SelectItemProps) => {
  const stepName = SELECT_OPTIONS[step - 1].name as keyof SelectedProps;

  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const handleSelectItem = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setSelectedState((prev) => {
      const newObj = { ...prev, [stepName]: value };
      return newObj;
    });
  };

  return (
    <>
      <SubTitle>{SELECT_OPTIONS[step - 1].subTitle}</SubTitle>
      <Title>{SELECT_OPTIONS[step - 1].title}</Title>
      <SelectContainer>
        <Item
          id="1"
          value={SELECT_OPTIONS[step - 1].item1.value}
          onClick={handleSelectItem}
          selected={
            selectedState[stepName] === SELECT_OPTIONS[step - 1].item1.value
          }
        >
          {SELECT_OPTIONS[step - 1].item1.text}
        </Item>
        <Item
          id="2"
          value={SELECT_OPTIONS[step - 1].item2.value}
          onClick={handleSelectItem}
          selected={
            selectedState[stepName] === SELECT_OPTIONS[step - 1].item2.value
          }
        >
          {SELECT_OPTIONS[step - 1].item2.text}
        </Item>
        <Item
          id="3"
          value={SELECT_OPTIONS[step - 1].item3.value}
          onClick={handleSelectItem}
          selected={
            selectedState[stepName] === SELECT_OPTIONS[step - 1].item3.value
          }
        >
          {SELECT_OPTIONS[step - 1].item3.text}
        </Item>
        <Item
          id="4"
          value={SELECT_OPTIONS[step - 1].item4.value}
          onClick={handleSelectItem}
          selected={
            selectedState[stepName] === SELECT_OPTIONS[step - 1].item4.value
          }
        >
          {SELECT_OPTIONS[step - 1].item4.text}
        </Item>
      </SelectContainer>
    </>
  );
};

export default SelectItem;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--sub-black);

  font-style: normal;
  font-size: 16px;
  line-height: 24px;

  margin-top: 48px;
`;

const Title = styled.div`
  font-size: 24px;
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

const Item = styled.button<{ selected: boolean }>`
  width: 332px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.selected ? 'var(--primary-opacity)' : 'var(--white)'};
  color: ${(props) => (props.selected ? 'var(--primary)' : 'var(--secondary)')};
  border: ${(props) => (props.selected ? '1px solid var(--primary)' : 'none')};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  margin: 8px 0;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border: 1px solid var(--primary);
    transition: 0.3s ease;
  }
`;
