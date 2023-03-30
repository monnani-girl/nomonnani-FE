import React from "react";
interface ImageProps {
    src: string,
    fileName: string,
}

const ImgDownloadBtn = ({src, fileName}: ImageProps) => {
    const handleDownload = () => {
        const link = document.createElement("a");
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

// Usage : <ImgDownloadBtn src={testImg} fileName="carrot.png" />
