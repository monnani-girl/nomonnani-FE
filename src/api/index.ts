import axios from 'axios';

export interface ResultProps {
  type: string;
  sales: {
    id: number;
    product: string;
    type: string;
    name: string;
    price: number;
    place: string;
    image: string;
    site: string;
  };
}

export interface BodyProps {
  season: string;
  weather: string;
  feel: string;
  travel: string;
  photo: string;
}

const localUrl = `http://172.20.10.7:8001/result/product`;
const prdUrl = `http://k8s-monnani-aialb-7c65cd5e8f-996929609.ap-northeast-2.elb.amazonaws.com/result/product`;

export const getResult = async (data: BodyProps) => {
  try {
    const res = await axios.post(localUrl, data);
    return res;
  } catch (e) {
    console.log(e);
  }
};
