import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { Line } from 'rc-progress';
import { getResult } from '../api';
import { selectedAtom } from '../atoms';
import ImageFileUpload from '../components/ImageUpload';
import SelectItems from '../components/SelectItems';
import Loading from '../components/Loading';
import Header from '../components/Header';
import styled from 'styled-components';

import type { SelectedProps } from '../api/types';

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

  const {
    data: resultData,
    mutate: resultMutation,
    isLoading: resultLoading,
    isSuccess: resultSuccess,
    isError: resultError,
  } = useMutation(getResult);

  const handleCaptureClick = () => {
    resultMutation(selectedState);
  };

  useEffect(() => {
    if (resultSuccess) {
      if (resultData.result) navigate('/result', { state: resultData.result });
      else {
        //TODO: 에러 모달 처리
        alert(resultData.message);
        navigate('/select/5');
      }
    }
  }, [resultSuccess]);

  if (resultLoading) return <Loading />;
  // if (resultError) return <div>에러가 발생했습니다</div>; //TODO: 에러 노드 처리

  return (
    <Container>
      <Header />
      <Line
        percent={Number(step) * PERCENTAGE}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="var(--primary)"
        trailColor="var(--progress-trail)"
        style={{ maxWidth: '333px', marginTop: '46px' }}
      />

      {step &&
        (step !== String(TOTAL_STEPS) ? (
          <SelectItems step={+step} />
        ) : (
          <>
            <StepTitle>나와 닮은 못난이 캐릭터를 찾아보세요</StepTitle>
            <ImageFileUpload onClickButton={handleCaptureClick} />
          </>
        ))}

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

const Button = styled(Link)<{
  prev?: string;
  disabled: boolean;
  visibled?: boolean;
}>`
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
    props.prev ? 'visible' : props.visibled ? 'hidden' : 'visible'};
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
