import axios from 'axios';
import { SelectedProps } from './types';

const baseURL = `https://api.ddokdarman.site`;

export const getResult = async (data: SelectedProps) => {
  const res = await axios.post(`${baseURL}/crop/products`, data);
  return res.data;
};

export const getVisitors = async () => {
  const res = await axios.get(`${baseURL}/analytics/sessions`);
  return res.data;
};
