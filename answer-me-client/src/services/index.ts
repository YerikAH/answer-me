/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, TOKEN } from "@/config";
import axios, { AxiosError, AxiosResponse } from "axios";

interface LoginParams {
  email: string;
  password: string;
}
interface RegisterParams {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

type ApiResult<T> = AxiosResponse<T> | AxiosError;

type ApiFunction<T = any> = (...args: any[]) => Promise<ApiResult<T>>;

function withErrorHandling<T>(
  apiFunc: (...args: any[]) => Promise<AxiosResponse<T>>
): ApiFunction<T> {
  return async (...args: any[]): Promise<ApiResult<T>> => {
    try {
      return await apiFunc(...args);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error;
      }
      return new AxiosError("An unexpected error occurred");
    }
  };
}

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = withErrorHandling(({ email, password }: LoginParams) =>
  axios.post(`${API}/users/login`, { email, password })
);

export const register = withErrorHandling(
  ({ email, password }: RegisterParams) => {
    const body = {
      email: email,
      password: password,
      role: "usuario",
      active: true,
    };
    return axios.post(`${API}/users`, body);
  }
);

export const getCases = withErrorHandling(() => axios.get(`${API}/cases`));
export const getLawyers = withErrorHandling(() => axios.get(`${API}/lawyers`));
export const getQuestions = withErrorHandling(() =>
  axios.get(`${API}/questions`)
);
export const getCustomers = withErrorHandling(() =>
  axios.get(`${API}/customer`)
);
