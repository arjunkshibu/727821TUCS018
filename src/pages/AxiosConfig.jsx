import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://20.244.56.144'; 

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('authToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;