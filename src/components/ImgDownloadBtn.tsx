import React from 'react';
import styled from 'styled-components';
interface ImageProps {
  src: string;
  fileName: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
/**
 * @param src 다운로드받을 이미지의 경로 입력 (string)
 * @param fileName src param을 로컬에 저장할 때 사용될 파일명 (string) ex) carrot.png
 */
const ImgDownloadBtn = ({ src, fileName, style, children }: ImageProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <DownloadBtn onClick={handleDownload} style={style}>{children}</DownloadBtn>
    </>
  );
};

export default ImgDownloadBtn;

const DownloadBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 24px 36px;
  border: none;
  border-radius: 65px;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
`;