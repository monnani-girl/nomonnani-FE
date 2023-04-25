import { FormEvent } from 'react';
import styled from 'styled-components';

interface SelectItemProps {
  id: string;
  value: string;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  selected: boolean;
  text: string;
}

const SelectItem = ({
  id,
  value,
  onClick,
  selected,
  text,
}: SelectItemProps) => {
  return (
    <Item id={id} value={value} onClick={onClick} selected={selected}>
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
