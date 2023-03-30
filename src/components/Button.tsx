import styled, {css} from "styled-components";
import React, { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    size: 'big' | 'medium' | 'small';
    fill: boolean;
}

interface BtnContainerProps {
    size: 'big' | 'medium' | 'small';
    fill: boolean;
}

const Button = ({children, size, fill}: ButtonProps) => {
    return (
        <BtnContainer size={size} fill={fill}>
            {children}
        </BtnContainer>
    );
}

export default Button;

const BtnContainer = styled.button<BtnContainerProps>`
    border: none;
    outline: none;
    color: #001358;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);

    ${({ size }) => {
        switch (size) {
            case "big":
                return `
                    width: 250px;
                    height: 72px;
                    font-size: 24px;
                    border-radius: 100px;
                    padding: 24px 114px;
                `;
            case "medium":
                return `
                    width: 332px;
                    height: 64px;
                    font-size: 18px;
                    border-radius: 40px;
                    padding: 20px 40px;
                `;
            case "small":
                return `
                    width: 159px;
                    height: 80px;
                    font-size: 14px;
                    border-radius: 40px;
                    padding: 28px 56px;
                `;
        }
    }}
    
    ${props =>
        props.fill &&
        css`
            background: #4AE7A4;
            box-shadow: none;
        `}
    
    &:active {
        border: 2px solid #4ae7a4;
    }
    `;