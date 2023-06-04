import { ChangeEvent, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedAtom } from '../atoms';
import camera from '../assets/camera.png';
import styled from 'styled-components';

interface ImageFileUploadProps {
  onClickButton: () => void;
}

const ImageFileUpload = ({ onClickButton }: ImageFileUploadProps) => {
  const [imageSrc, setImageSrc] = useState('');
  const setSelectedState = useSetRecoilState(selectedAtom);
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    if (inputRef.current) {
      (inputRef.current as any).click();
    }
  };

  //TODO: utils로 빼기
  const encodeFileToBase64 = (fileObj: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      setImageSrc(reader.result as string);
      const encoded = (reader.result as string).split(',')[1];
      setSelectedState((prev) => ({ ...prev, photo: encoded }));
    };
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { files },
    } = e;

    if (files) {
      encodeFileToBase64(files[0]);
    }
  };

  return (
    <>
      <Label htmlFor="image">
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          name="file"
          ref={inputRef}
          onChange={handleImageChange}
        />
        {imageSrc ? (
          <Image src={imageSrc} alt="uploaded-file" />
        ) : (
          <FileSelctButton onClick={handleUploadClick}>
            <CameraImg src={camera} alt="camera" />
            <br />
            얼굴이 잘리지 않은 <br />
            사진을 올려주세요
            <PointText>click!</PointText>
          </FileSelctButton>
        )}
      </Label>
      <FindButton onClick={onClickButton} disabled={Boolean(!imageSrc)}>
        닮은꼴 찾기
      </FindButton>
    </>
  );
};

export default ImageFileUpload;

const Label = styled.label`
  height: 252px;
`;

const FileInput = styled.input`
  display: none;
`;

const CameraImg = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 14px;
`;

const FileSelctButton = styled.button`
  width: 198px;
  height: 198px;
  margin-top: 54px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--darkgrey);
  line-height: 21px;
  font-family: 'Noto Sank KR';
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const FindButton = styled.button<{ disabled: boolean }>`
  width: 284px;
  height: 72px;
  font-family: 'GmarketSansMedium';
  font-size: 24px;
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
  border-radius: 20px;
  margin-top: 54px;
  border: 1px solid #e1e1e1;
  object-fit: cover;
  object-position: center;
`;

const PointText = styled.p`
  color: #ff8d4d;
  font-size: 16px;
  font-family: 'Noto Sans KR';
`;
