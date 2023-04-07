import axios from 'axios';
import { SelectedProps } from './types';

const baseURL = `https://api.ddokdarman.site`;

export const getResult = async (data: SelectedProps) => {
  try {
    const res = await axios.post(`${baseURL}/crop/products`, data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
