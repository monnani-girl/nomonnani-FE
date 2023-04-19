interface ImageProps {
    src: string;
    fileName: string;
    title: string;
    text: string;
}

export const handleImageDownload = ({ src, fileName, title, text }: ImageProps) => {
    const canvas = document.createElement('canvas');
    const img = new Image();

    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = function() {
      canvas.width = img.width + 50;
      canvas.height = img.height + 50;

      // 반환 객체의 null 값 여부 확인
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('결과 이미지 저장을 실패했어요.');
        return;
      }
      ctx.fillStyle = '#fffbf8'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      ctx.font = 'bold 16px GmarketSansMedium'; 
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(title, canvas.width / 2, img.height + 25);

      ctx.font = '14px Noto Sans KR'; 
      ctx.fillStyle = 'gray';
      ctx.fillText(text, canvas.width / 2, img.height + 45);
      
      const link = document.createElement('a');
      link.download = fileName;
      link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
};
