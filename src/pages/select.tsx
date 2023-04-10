import styled from 'styled-components';
import { Line } from 'rc-progress';
import headerLogo from '../assets/header.png';
import ImageFileUpload from '../components/ImageUpload';
import { SelectedProps } from '../api/types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SelectItem from '../components/SelectItem';
import { useRecoilValue } from 'recoil';
import { selectedAtom } from '../atoms';

//TODO: static으로 빼기
const TOTAL_STEPS = 5;
const PERCENTAGE = 100 / TOTAL_STEPS;
const SELECTED_STEPS = ['season', 'weather', 'feel', 'travel', 'photo'];

const Select = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const selectedState = useRecoilValue(selectedAtom);

  const disabledPrevBtn = step === '1';
  const disabledNextBtn =
    step === String(TOTAL_STEPS) ||
    !Boolean(
      selectedState[SELECTED_STEPS[Number(step) - 1] as keyof SelectedProps],
    );

  return (
    <Container>
      <HeaderLogo src={headerLogo} onClick={() => navigate('/')} />
      <Line
        percent={Number(step) * PERCENTAGE}
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
          <ImageFileUpload />
        </>
      )}
      <BtnContainer>
        <Button
          to={
            disabledPrevBtn ? `/select/${step}` : `/select/${Number(step) - 1}`
          }
          prev={true.toString()}
          disabled={disabledPrevBtn}
        >
          이전
        </Button>
        <Button
          to={
            disabledNextBtn ? `/select/${step}` : `/select/${Number(step) + 1}`
          }
          disabled={disabledNextBtn}
          visibled={step === String(TOTAL_STEPS)}
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
  margin: 60px 0 125px 0;
`;

const Button = styled(Link)<{ prev?: string; disabled: boolean, visibled?: boolean }>`
  width: 75px;
  height: 52px;
  padding: 15px;
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
  visibility: ${(props) =>
    props.prev
      ? 'visible'
      : props.visibled
      ? 'hidden'
      : 'visible'};
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  text-align: center;
  border-radius: 48px;
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

const UploadButton = styled.button`
  width: 198px;
  height: 198px;
  border: 1px solid #e1e1e1;
  margin-top: 96px;
  border-radius: 20px;
  font-size: 16px;
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
