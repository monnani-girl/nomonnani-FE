import styled from "styled-components";
import React, { ReactNode } from "react"

interface ButtonProps {
    text: ReactNode
    style?: React.CSSProperties
}

const Button = ({text, style}: ButtonProps) => {
    return (
        <BtnContainer style={style}>{text}</BtnContainer>
    );
}

export default Button;

const BtnContainer = styled.button`
    width: 159px;
    height: 80px;
    padding: 28px 56px;
    background: #FFFFFF;
    border: none;
    outline: none;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
    border-radius: 40px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #001358;

    &:active {
        border: 2px solid #4AE7A4;
    }
`;