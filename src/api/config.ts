import axios from 'axios';

const URL = 'https://api.lenzaos.com/';

export const config = axios.create({
  baseURL: URL,
  headers: {
    accept: 'application/json',
    version: '0.0',
  },
});
