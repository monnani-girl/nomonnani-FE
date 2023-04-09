import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedAtom } from '../atoms';
import camera from '../assets/camera.png';

const ImageFileUpload = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState('');
  const [selectedState, setSelectedState] = useRecoilState(selectedAtom);
  const inputRef = useRef(null);

  const disableButton = Boolean(!imageSrc);

  const handleUploadClick = () => {
    if (inputRef.current) {
      (inputRef.current as any).click();
    }
  };

  const handleCapture = () => {
    navigate('/result', { state: { imageSrc } });
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise<void>((resolve) => {
      reader.onload = async () => {
        setImageSrc(reader.result as any);
        const imageBytes = (reader.result as string).split(',')[1];
        setSelectedState((prev) => {
          const newObj = { ...prev, photo: imageBytes };
          return newObj;
        });
      };
    });
  };

  return (
    <>
      <label htmlFor="image">
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          name="file"
          ref={inputRef}
          onChange={(e) => encodeFileToBase64(e.target.files![0])}
        />
        {imageSrc ? (
          <Image src={imageSrc} alt="uploaded-file" />
        ) : (
          <FileSelctButton onClick={handleUploadClick}>
            <CameraImg src={camera} alt='camera' /><br />
            얼굴이 잘리지 않은 <br />사진을 올려주세요
          </FileSelctButton>
        )}
      </label>
      <FindButton onClick={handleCapture} disabled={disableButton}>
        닮은꼴 찾기
      </FindButton>
    </>
  );
};

export default ImageFileUpload;

const WebCamContainer = styled.div`
  margin: 39px 0 15px 0;
`;

const FileInput = styled.input`
  display: none;
`;

const CameraImg = styled.img`
  width: 32px;
  margin-bottom: 14px;
`;

const FileSelctButton = styled.button`
  width: 198px;
  height: 198px;
  background-color: var(--white);
  color: var(--darkgrey);
  line-height: 21px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  box-shadow: 3px 3px 5px #e1e1e1;
  font-family: 'Noto Sank KR';
  font-size: 16px;
  font-weight: 400;
  margin-top: 96px;
  cursor: pointer;
`;

const FindButton = styled.button<{ disabled: boolean }>`
  width: 284px;
  height: 72px;
  font-size: 24px;
  font-family: 'Gmarket Sans';
  font-weight: 400;
  margin-top: 40px;
  color: var(--white);
  background-color: var(--primary);
  border-radius: 100px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Image = styled.img`
  width: 198px;
  height: 198px;
`;
