import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getTest } from '../api/test';
import { testAtom } from '../atoms/test';

interface Itest {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Test() {
  const testRecoil = useRecoilValue(testAtom);
  const { isLoading, data } = useQuery<Itest[]>('test', getTest);
  return (
    <>
      <div>{testRecoil}</div>
      {isLoading
        ? 'Loading...'
        : data?.map((testData) => <div>{testData.title}</div>)}
    </>
  );
}

export default Test;
