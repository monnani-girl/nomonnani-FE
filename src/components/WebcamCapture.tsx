import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 198,
  height: 198,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imgSrc, setImgSrc] = useState('');

  const handleCapture = useCallback(() => {
    if (webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc ?? '');
    }
  }, [webcamRef]);

  //파일 업로드
  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      console.log(e.currentTarget.files[0].name);
    }
  };

  const handleUploadClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  return (
    <>
      <h2>촬영 하기</h2>
      <Webcam
        audio={false}
        width={198}
        height={198}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      {imgSrc}
      <button onClick={handleCapture}>Capture photo</button>
      <hr />
      <h2>업로드 하기</h2>

      <label htmlFor="uploadImage">
        <input
          id="uploadImage"
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={handleUploadChange}
        />
      </label>
      <button onClick={handleUploadClick} style={{ width: '100px' }}>
        업로드
      </button>
    </>
  );
};

export default WebcamCapture;
