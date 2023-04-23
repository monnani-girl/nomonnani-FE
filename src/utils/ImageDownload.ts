interface ImageProps {
  src: string;
  fileName: string;
}

export const handleImageDownload = ({src, fileName}: ImageProps) => {
  const link = document.createElement('a');
  link.href = src;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
