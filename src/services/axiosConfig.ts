import axios from "axios";
import { getFromLocalStorage } from "../utils/storage";

const { token } = getFromLocalStorage("user_data");

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error?.response?.data?.message || error?.message;
    if (message?.includes("unauthenticated")) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      console.log(message);
    }

    return Promise.reject(error);
  },
);

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json, text/plain, */*",
//   },
// });

// const onRequest = (request: AxiosRequestConfig) => {
//   const token = getFromLocalStorage("access_token");
//   if (request.headers) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
//   return request;
// };

// const onRequestError = (error: AxiosError): Promise<AxiosError> => {
//   return Promise.reject(error);
// };

// const onResponse = (response: AxiosResponse): AxiosResponse => {
//   return response;
// };

// const onResponseError = async (error: AxiosError) => {
//   const statusCode = error.response?.status;
//   if (statusCode === 401) {
//     localStorage.clear();
//     window.location.href = "/";
//   }
// };

// axiosInstance.interceptors.response.use(onResponse, onResponseError);
// axiosInstance.interceptors.request.use(onRequest, onRequestError);

export { axiosInstance };
