import axios from 'axios';

const { token } = JSON.parse(localStorage.getItem('user'));

export const axiosClient = axios.create({
  baseURL: `http://localhost:5000/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);
