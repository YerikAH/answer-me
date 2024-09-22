import { API } from "@/config";
import axios from "axios";

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  try {
    const res = await axios.post(`${API}/users/login`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

interface RegisterParams {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
export const register = async ({
  name,
  lastName,
  email,
  password,
}: RegisterParams) => {
  try {
    const res = await axios.post(`${API}/users`, {
      name,
      lastName,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
