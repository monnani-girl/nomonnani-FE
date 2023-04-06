import axios from 'axios';
import { SelectedProps } from './types';

const baseURL = `http://k8s-monnani-aialb3-106f5dfdcf-870420322.ap-northeast-2.elb.amazonaws.com`;

export const getResult = async (data: SelectedProps) => {
  try {
    const res = await axios.post(`${baseURL}/result/product`, data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
