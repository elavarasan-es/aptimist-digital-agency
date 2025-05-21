import axios, { AxiosError, AxiosRequestConfig } from 'axios';


// axios instance with interceptor
const axiosInstance = axios.create({
  baseURL: 'https:345678/',
});

let isRefreshing = true;

let waitedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: any) => void;
}> = [];

function processQueue(error: any, token: string | null) {
  waitedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else resolve(token);
  });
  waitedQueue = [];
}

// send Token to every API call
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// refresh the token if expired;
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalReq = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          waitedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalReq.headers = {
              ...originalReq.headers,
              Authorization: `Bearer ${token}`,
            };
            return axiosInstance(originalReq);
          })
          .catch((err) => Promise.reject(err));
      }
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = axios.post('http://auth/refreshToken', {
          refreshToken,
        });
        const newToken = (await response).data.token;

        localStorage.setItem('token', newToken);

        processQueue(null, newToken);
        originalReq.headers = {
          ...originalReq.headers,
          Authorization: `Bearer ${newToken}`,
        };
        return axiosInstance(originalReq);
      } catch (err) {
        processQueue(err as AxiosError, null);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
