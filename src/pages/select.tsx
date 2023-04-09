import styled from 'styled-components';
import { FormEvent, useState } from 'react';
import { Line } from 'rc-progress';
import headerLogo from '../assets/header.png';
import FirstStep from '../components/selectItem/FirstStep';
import SecondStep from '../components/selectItem/SecondStep';
import ThirdStep from '../components/selectItem/ThirdStep';
import FourthStep from '../components/selectItem/FourthStep';
import { useRecoilState } from 'recoil';
import { selectedAtom } from '../atoms';
import WebcamCapture from '../components/WebcamCapture';
import ImageFileUpload from '../components/ImageUpload';
import { SelectedProps } from '../api/types';

interface ButtonProps {
  label?: string;
  prev?: boolean;
  onClick?: () => void;
}

const STEP = 5;
const PERCENTAGE = 100 / STEP;

const steps = ['season', 'weather', 'feel', 'travel', 'photo'];

const Select = () => {
  const [currentStep, setCurrentStep] = useState<number>(PERCENTAGE);
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);
  const [uploadType, setUploadType] = useState('');

  const isActivePrevBtn = currentStep !== PERCENTAGE;
  //TODO: 다음 버튼 활성화 로직 수정 필요
  const isActiveNextBtn = currentStep !== 100;
  // Boolean(
  //   selectedState[steps[currentStep / PERCENTAGE - 1] as SelectedProps],
  // );

  const handlePrevStep = () => {
    setCurrentStep(
      currentStep > PERCENTAGE ? currentStep - PERCENTAGE : currentStep,
    );
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep < 100 ? currentStep + PERCENTAGE : currentStep);
  };

  const handleUploadBtn = (e: FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUploadType(value);
  };

  return (
    <Container>
      <HeaderLogo src={headerLogo} />
      <Line
        percent={currentStep}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="var(--primary)"
        trailColor="var(--progress-trail)"
        style={{ width: '333px', marginTop: '46px' }}
      />
      {currentStep === 20 && <FirstStep />}
      {currentStep === 40 && <SecondStep />}
      {currentStep === 60 && <ThirdStep />}
      {currentStep === 80 && <FourthStep />}
      {currentStep === 100 && (
        <>
          <StepTitle>나와 닮은 못난이 캐릭터를 찾아보세요</StepTitle>
          <StepSubText>얼굴이 잘리지 않은 사진을 업로드해주세요</StepSubText>
          <ImageFileUpload />
        </>
      )}
      <BtnContainer>
        <Button
          label="Prev Step"
          prev
          onClick={handlePrevStep}
          disabled={!isActivePrevBtn}
        >
          이전
        </Button>
        <Button
          label="Next Step"
          onClick={handleNextStep}
          disabled={!isActiveNextBtn}
        >
          다음
        </Button>
      </BtnContainer>
    </Container>
  );
};

export default Select;

const HeaderLogo = styled.img`
  width: 17px;
`;

const ButtonType = {
  bgcolor: {
    prev: 'var(--background)',
    next: 'rgba(245,242,240,0.5)',
  },
  color: {
    prev: 'var(--sub-black)',
    next: 'rgba(82,84,99,0.5)',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  min-width: 486px;
  max-width: 486px;
  justify-content: space-around;
  margin: 60px 0 125px 0;
`;

const Button = styled.button<ButtonProps>`
  width: 79px;
  height: 52px;
  background-color: ${(props) =>
    props.prev
      ? ButtonType.bgcolor.prev
      : props.disabled
      ? ButtonType.bgcolor.next
      : 'var(--primary)'};
  color: ${(props) =>
    props.prev
      ? ButtonType.color.prev
      : props.disabled
      ? ButtonType.color.next
      : 'var(--white)'};
  border: ${(props) =>
    props.prev
      ? 'none'
      : props.disabled
      ? ButtonType.bgcolor.next
      : '1px solid var(--primary)'};
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Gmarket Sans';
  font-size: 14px;
  text-align: center;
  border-radius: 48px;
  font-weight: 400;
`;

const StepTitle = styled.div`
  font-size: 20px;
  margin-top: 77px;
`;

const StepSubText = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: var(--darkgrey);
`;

// const UploadButton = styled.button`
//   width: 136px;
//   height: 136px;
//   border: 1px solid #e1e1e1;
//   border-radius: 90px;
//   font-size: 18px;
//   font-weight: 400;
//   font-family: 'Gmarket Sans';
//   background: var(--white);
//   color: var(--secondary);
//   cursor: pointer;
//   &:hover {
//     border: 2px solid var(--primary);
//   }
// `;

const UploadButton = styled.button`
  width: 198px;
  height: 198px;
  border: 1px solid #e1e1e1;
  margin-top: 96px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  font-family: 'Noto Sans KR';
  background: var(--white);
  color: var(--darkgrey);
  cursor: pointer;
  &:hover {
    border: 2px solid var(--primary);
    transition: 0.3s ease;
  }
`;

const UploadBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin: 80px 0 66px 0;
`;

const FindButton = styled.button`
  width: 284px;
  height: 72px;
  background-color: var(--background);
  opacity: 0.5;
  border-radius: 100px;
  color: var(--secondary);
  font-size: 24px;
  border: none;
  cursor: not-allowed;
`;
