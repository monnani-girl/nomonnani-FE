import { SelectedProps } from '../api/types';
import { SELECT_OPTIONS } from '../static/select';
import SelectItem from './SelectItem';
import styled from 'styled-components';

interface SelectItemsProps {
  step: number;
}

const SelectItems = ({ step }: SelectItemsProps) => {
  const stepName = SELECT_OPTIONS[step - 1].name as keyof SelectedProps;

  return (
    <>
      <SubTitle>{SELECT_OPTIONS[step - 1].subTitle}</SubTitle>
      <Title>{SELECT_OPTIONS[step - 1].title}</Title>
      <SelectContainer>
        {SELECT_OPTIONS[step - 1].items.map((item, index) => (
          <SelectItem
            key={`${item.text}-${index}`}
            value={item.value}
            text={item.text}
            stepName={stepName}
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
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin: 10px 0 20px 0;
  color: var(--black);
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
