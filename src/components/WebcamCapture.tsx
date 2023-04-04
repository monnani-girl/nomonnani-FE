import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedAtom } from '../atoms';

const videoConstraints = {
  width: 198,
  height: 198,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);

  const webcamRef = useRef<Webcam>(null);

  const navigate = useNavigate();

  const handleCapture = useCallback(() => {
    if (webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();

      setSelectedState((prev) => {
        const newObj = { ...prev, photo: imageSrc?.split(',')[1] ?? '' };
        return newObj;
      });
      navigate('/result');
    }
  }, [webcamRef]);

  return (
    <>
      <WebCamContainer>
        <Webcam
          audio={false}
          width={198}
          height={198}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </WebCamContainer>
      <FindButton onClick={handleCapture}>캐릭터 찾기</FindButton>
    </>
  );
};

export default WebcamCapture;

const WebCamContainer = styled.div`
  margin: 39px 0 15px 0;
`;

const FindButton = styled.button`
  width: 284px;
  height: 72px;
  font-size: 24px;
  color: #fff;
  background-color: #379100;
  border-radius: 100px;
  border: none;
  cursor: pointer;
`;
