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
        strokeColor="#379100"
        trailColor="#e3f2ff"
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
          {uploadType === 'upload' && <ImageFileUpload />}
          {uploadType === 'capture' && <WebcamCapture />}

          {!uploadType && (
            <UploadBtnContainer>
              <UploadButton value="upload" onClick={handleUploadBtn}>
                사진 업로드
              </UploadButton>
              <UploadButton
                value="capture"
                onClick={() =>
                  alert(
                    'HTTPS 보안 문제로 현재 기기에서 사용할 수 없는 기능입니다. \n업데이트 예정입니다 :)',
                  )
                }
              >
                사진 촬영
              </UploadButton>
            </UploadBtnContainer>
          )}

          {/* <FindButton>캐릭터 찾기</FindButton> */}
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
    prev: '#F5F2F0',
    next: 'rgba(245,242,240,0.5)',
  },
  color: {
    prev: '#525463',
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
  margin: 59px 0 125px 0;
`;

const Button = styled.button<ButtonProps>`
  width: 79px;
  height: 52px;
  background-color: ${(props) =>
    props.prev
      ? ButtonType.bgcolor.prev
      : props.disabled
      ? ButtonType.bgcolor.next
      : 'rgba(55,145,0,0.08)'};
  color: ${(props) =>
    props.prev
      ? ButtonType.color.prev
      : props.disabled
      ? ButtonType.color.next
      : '#379100'};
  border: ${(props) =>
    props.prev
      ? 'none'
      : props.disabled
      ? ButtonType.bgcolor.next
      : '1px solid #379100'};
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  border-radius: 48px;
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 400;
`;

const StepTitle = styled.div`
  font-size: 24px;
  margin-top: 77px;
`;

const StepSubText = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: #818181;
`;

const UploadButton = styled.button`
  width: 136px;
  height: 136px;
  border: 1px solid #e1e1e1;
  border-radius: 90px;
  background: #ffffff;
  color: #001358;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    border: 2px solid #379100;
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
  background-color: #f5f2f0;
  opacity: 0.5;
  border-radius: 100px;
  color: #525463;
  font-size: 24px;
  border: none;
  cursor: not-allowed;
`;
