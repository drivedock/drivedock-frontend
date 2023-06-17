import axios from "axios";
import { API_URL } from "../constants";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getOTPToResetPassword = async (userData) => {
  const response = await axios.post(`${API_URL}/forgotpassword`, userData);
  return response.data;
};

export const resetPassword = async (passwordData) => {
  const response = await axios.post(
    `${API_URL}/forgotpassword/resetpassword`,
    passwordData
  );
  return response.data;
};
