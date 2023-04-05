interface ImageProps {
  src: string;
  fileName: string;
}
/**
 * @param src 다운로드받을 이미지의 경로 입력 (string)
 * @param fileName src param을 로컬에 저장할 때 사용될 파일명 (string) ex) carrot.png
 */
const ImgDownloadBtn = ({ src, fileName }: ImageProps) => {
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
      <button onClick={handleDownload}>이미지 저장</button>
    </>
  );
};

export default ImgDownloadBtn;
