import axios from 'axios';
import {MAX_API_TIMEOUT} from './env';
import {apiKey, baseUrl} from './constant';

export const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: MAX_API_TIMEOUT,
});

apiClient.interceptors.request.use(
  config => {
    if (!config.params) {
      config.params = {};
    }

    config.params['api_key'] = apiKey;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default apiClient;
