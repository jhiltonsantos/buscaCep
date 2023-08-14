import axios from 'axios';

const apiFido = axios.create({
  baseURL: 'https://64d4f66fb592423e4694f420.mockapi.io/api/v1',
});

export default apiFido;
