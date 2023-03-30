import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 198,
  height: 198,
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState('');

  const handleCapture = useCallback(() => {
    if (webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc ?? '');
    }
  }, [webcamRef]);

  return (
    <>
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
    </>
  );
};

export default WebcamCapture;
