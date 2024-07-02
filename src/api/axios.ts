import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { ErrorResponse } from '../utils/error-response-model';
import Cookies from 'js-cookie';

interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers?: any
}



const apiConfig: ApiConfig = {
  baseURL: `https://fakestoreapi.com/products` || "",
  timeout: Number(process.env.API_TIMEOUT) || 10000
};

const axiosInstance: AxiosInstance = axios.create(apiConfig);

axiosInstance.interceptors.request.use((req: any) => {
  try {

    const accessToken = Cookies.get('accessToken') || localStorage.getItem('accessToken');
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
  } catch (error) {
    console.error("error", error);
  }
});

// Error handling interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const errorResponse: ErrorResponse = {};
      

    if (error.response) {
      // The request was made and the server responded with a status code
      errorResponse.status = error.response.status;
      errorResponse.message = error.message;
      errorResponse.data = error.response.data as any;
    } else if (error.request) {
      // The request was made but no response was received
      errorResponse.message = 'Request Error';
    } else {
      // Something happened in setting up the request
      errorResponse.message = error.message;
    }

    console.error(errorResponse);
    return Promise.reject(errorResponse);
  }
);

// API methods
const api = {
  // GET request
  get: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.get<T>(url),

  // POST request
  post: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.post<T>(url, data),

  // PUT request
  put: <T>(url: string, data: any): Promise<AxiosResponse<T>> =>
    axiosInstance.put<T>(url, data),

  // DELETE request
  delete: <T>(url: string): Promise<AxiosResponse<T>> => axiosInstance.delete<T>(url),
};

export default api;







// export const generatePassCode = (data) => axios.post(`${process.env.REACT_APP_API_BASE_URL}`, data)
// export const forgotPassword = (data) => axios.post(`${process.env.REACT_APP_API_BASE_URL}`, data)
//export const arboristResetPassword = (data) => API.post("arborist/resetpassword", data)

