import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { Line } from 'rc-progress';
import { selectedAtom } from '../atoms';
import { getResult } from '../api';
import ImageFileUpload from '../components/ImageUpload';
import SelectItems from '../components/SelectItems';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Error from '../components/Error';

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
  const [openModal, setOpenModal] = useState(false);

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
        setOpenModal(true);
        //TODO: 에러 메시지 전달은?
        // alert(resultData.message);
      }
    }
  }, [resultSuccess]);

  if (openModal)
    return (
      <Modal
        contentText={`앗, 얼굴이 인식되지 않았어요!\n 정면에서 촬영한 사진을 올려주세요.`}
        buttonText={`다시 올리기`}
        onClick={() => setOpenModal(false)}
      />
    );

  if (resultLoading) return <Loading />;
  if (resultError) return <Error />;

  return (
    <Container>
      <Header />
      <Line
        percent={Number(step) * PERCENTAGE}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="var(--primary)"
        trailColor="var(--progress-trail)"
        style={{ maxWidth: '333px', marginTop: '30px' }}
      />

      {step &&
        (step !== String(TOTAL_STEPS) ? (
          <SelectItems step={+step} />
        ) : (
          <>
            <StepTitle>나와 닮은 못난이 캐릭터를 찾아보세요</StepTitle>
            <NotiText>걱정마세요! 사진은 별도로 저장되지 않습니다.</NotiText>
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
          visibled={disabledPrevBtn}
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
  margin-top: 30px;
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
  visibility: ${(props) => (props.visibled ? 'hidden' : 'visible')};
  outline: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  text-align: center;
  border-radius: 48px;
`;

const StepTitle = styled.div`
  font-size: 20px;
  margin-top: 50px;
`;

const NotiText = styled.div`
  color: var(--sub-black);
  font-size: 14px;
  margin-top: 18px;
`;
