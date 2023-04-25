import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../atoms';
import { SelectedProps } from '../api/types';
import { SELECT_OPTIONS } from '../static/select';
import SelectItem from './SelectItem';
import styled from 'styled-components';

interface SelectItemsProps {
  step: number;
}

const SelectItems = ({ step }: SelectItemsProps) => {
  const stepName = SELECT_OPTIONS[step - 1].name as keyof SelectedProps;

  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const handleSelectItems = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setSelectedState((prev) => ({ ...prev, [stepName]: value }));
  };

  return (
    <>
      <SubTitle>{SELECT_OPTIONS[step - 1].subTitle}</SubTitle>
      <Title>{SELECT_OPTIONS[step - 1].title}</Title>
      <SelectContainer>
        {SELECT_OPTIONS[step - 1].items.map((item, index) => (
          <SelectItem
            key={item.text}
            id={index + '1'}
            value={item.value}
            onClick={handleSelectItems}
            selected={selectedState[stepName] === item.value}
            text={item.text}
          />
        ))}
      </SelectContainer>
    </>
  );
};

export default SelectItems;

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
