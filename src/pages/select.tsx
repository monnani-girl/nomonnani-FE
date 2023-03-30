import styled from "styled-components";
import { useState } from 'react';
import { Line } from 'rc-progress';
import headerLogo from '../assets/header.png';

interface ButtonProps {
    label?: string;
    prev?: boolean;
    onClick?: () => void;
}

const Select = ({label, prev, onClick}: ButtonProps) => {
    const [currentStep, setCurrentStep] = useState<number>(20);

    const handlePrevStep = () => {
        setCurrentStep(currentStep > 20 ? currentStep - 20 : currentStep);
    }

    const handleNextStep = () => {
        setCurrentStep(currentStep < 100 ? currentStep + 20 : currentStep);
    };

    return (
        <Container>
            <HeaderLogo src={headerLogo} />
            <div>
                <Line 
                    percent={currentStep} 
                    strokeWidth={3} 
                    trailWidth={3} 
                    strokeColor="#4AE7A4" 
                    trailColor='#e3f2ff' 
                    style={{"width":"333px", "marginTop":"46px"}}
                />
                <Title>제주와 어울리는 날씨는?</Title>
            </div>
            <SelectContainer>
                <SelectItem id="1" value="warm">바다 가기 좋은 햇살 좋은 따뜻한 날</SelectItem>
                <SelectItem id="2" value="cool">에너지가 넘치는 여름의 제주</SelectItem>
                <SelectItem id="3" value="hot">감성 넘치는 단풍이 있는 가을의 제주</SelectItem>
                <SelectItem id="4" value="cold">한 해를 마무리하는 연말 겨울의 제주</SelectItem>
            </SelectContainer>
            <BtnContainer>
                <Button label="Prev Step" prev onClick={handlePrevStep}>이전</Button>
                <Button label="Next Step" onClick={handleNextStep}>다음</Button>
            </BtnContainer>
        </Container>
    );
}

export default Select;

const HeaderLogo = styled.img`
    width: 17px;
`;

const ButtonType = {
    bgcolor: {
        prev: '#FF8D4D',
        next: '#F8F8F8',
    },
    color: {
        prev: '#ffffff',
        next: '#818181',
    }
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-family: Gmarket Sans;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin: 76px 0 59px 0;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectItem = styled.button`
    width: 332px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 16px 0;
    color: #001358;
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;


    &:active {
        background-color: #f9f9f9;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    min-width: 486px;
    max-width: 486px;
    justify-content: space-around;
    margin: 59px 0 125px 0;
`;

const Button = styled.button<ButtonProps>`
    width: 79px;
    height: 52px;
    background-color: ${(props) =>
        props.prev ? ButtonType.bgcolor.prev : ButtonType.bgcolor.next};
    color: ${(props) =>
        props.prev ? ButtonType.color.prev : ButtonType.color.next};
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 52px;
    text-align: center;
    border-radius: 48px;
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
`;
