import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getResult } from '../api';
import { selectedAtom } from '../atoms';

const videoConstraints = {
  width: 198,
  height: 198,
  facingMode: 'user',
};

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
      <WebCamContainer>
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
              파일 업로드
            </FileSelctButton>
          )}
        </label>
      </WebCamContainer>
      <FindButton onClick={handleCapture} disabled={disableButton}>
        캐릭터 찾기
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

const FileSelctButton = styled.button`
  width: 198px;
  height: 198px;
  background-color: #f5f2f0;
  color: #001358;
  border: none;
  margin-bottom: 24px;
  cursor: pointer;
`;

const FindButton = styled.button<{ disabled: boolean }>`
  width: 284px;
  height: 72px;
  font-size: 24px;
  color: #fff;
  background-color: #379100;
  border-radius: 100px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Image = styled.img`
  width: 198px;
  height: 198px;
`;
