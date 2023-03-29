import axios from 'axios';

const devUrl = `http://localhost:3000`;
const pubUrl = ``;

const url = () => {
  if (process.env.REACT_APP_URL === 'production') return pubUrl;
  else return devUrl;
};

export const http = axios.create({
  baseURL: url(),
  headers: {},
});

export default http;
