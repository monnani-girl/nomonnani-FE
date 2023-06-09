import { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
}

const useCountUp = ({ end, start = 0, duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60; //전환 속도
  const totalFrame = Math.round(duration / frameRate); //총 전환 횟수

  const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = easeOutExpo(currentNumber++ / totalFrame);
      setCount(Math.round(progress * end));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

export default useCountUp;
