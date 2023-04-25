import { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../atoms';
import { SelectedProps } from '../api/types';
import styled from 'styled-components';

interface SelectItemProps {
  value: string;
  text: string;
  stepName: keyof SelectedProps;
}

const SelectItem = ({ value, text, stepName }: SelectItemProps) => {
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const handleSelectItems = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setSelectedState((prev) => ({ ...prev, [stepName]: value }));
  };

  return (
    <Item
      value={value}
      onClick={handleSelectItems}
      selected={selectedState[stepName] === value}
    >
      {text}
    </Item>
  );
};

export default SelectItem;

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
