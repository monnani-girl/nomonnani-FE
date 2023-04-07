import styled from 'styled-components';
import { useState } from 'react';
import { Line } from 'rc-progress';
import headerLogo from '../assets/header.png';
import ImageFileUpload from '../components/ImageUpload';
import { SelectedProps } from '../api/types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SelectItem from '../components/SelectItem';
import { useRecoilValue } from 'recoil';
import { selectedAtom } from '../atoms';

const TOTAL_STEPS = 5;
const PERCENTAGE = 100 / TOTAL_STEPS;
const SELECTED_STEPS = ['season', 'weather', 'feel', 'travel', 'photo'];

const Select = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [curStep, setCurStep] = useState(Number(step));
  const selectedState = useRecoilValue(selectedAtom);

  const [curPercent, setCurPercent] = useState(PERCENTAGE);

  const handlePrevStep = () => {
    setCurStep((prev) => (prev === 1 ? 1 : prev - 1));
    setCurPercent(
      curPercent > PERCENTAGE ? curPercent - PERCENTAGE : curPercent,
    );
  };

  const handleNextStep = () => {
    setCurStep((prev) => (prev === TOTAL_STEPS ? TOTAL_STEPS : prev + 1));
    setCurPercent(curPercent < 100 ? curPercent + PERCENTAGE : curPercent);
  };

  return (
    <Container>
      <HeaderLogo src={headerLogo} onClick={() => navigate('/')} />
      <Line
        percent={curPercent}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="var(--primary)"
        trailColor="var(--progress-trail)"
        style={{ width: '333px', marginTop: '46px' }}
      />
      {step === '1' && <SelectItem step={1} />}
      {step === '2' && <SelectItem step={2} />}
      {step === '3' && <SelectItem step={3} />}
      {step === '4' && <SelectItem step={4} />}
      {step === '5' && (
        <>
          <StepTitle>나와 닮은 못난이 캐릭터를 찾아보세요</StepTitle>
          <StepSubText>얼굴이 잘리지 않은 사진을 업로드해주세요</StepSubText>
          <ImageFileUpload />
        </>
      )}
      <BtnContainer>
        <Button
          to={`/select/${curStep === 1 ? 1 : curStep - 1}`}
          onClick={handlePrevStep}
          prev={true.toString()}
          disabled={step === '1'}
        >
          이전
        </Button>
        <Button
          to={`/select/${curStep === TOTAL_STEPS ? TOTAL_STEPS : curStep + 1}`}
          onClick={handleNextStep}
          disabled={
            step === String(TOTAL_STEPS) ||
            !Boolean(
              selectedState[SELECTED_STEPS[curStep - 1] as keyof SelectedProps],
            )
          }
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
  cursor: pointer;
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
  margin: 59px 0 125px 0;
`;

const Button = styled(Link)<{ prev?: string; disabled: boolean }>`
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
      : 'var(--primary)'};
  border: ${(props) =>
    props.prev
      ? 'none'
      : props.disabled
      ? ButtonType.bgcolor.next
      : '1px solid var(--primary)'};
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  border-radius: 48px;
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
  color: var(--darkgrey);
`;

const UploadButton = styled.button`
  width: 136px;
  height: 136px;
  border: 1px solid #e1e1e1;
  border-radius: 90px;
  background: var(--white);
  color: var(--secondary);
  cursor: pointer;
  font-size: 18px;
  &:hover {
    border: 2px solid var(--primary);
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
