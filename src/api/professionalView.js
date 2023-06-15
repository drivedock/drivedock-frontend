import axios from "axios";
import { API_URL } from "../constants";

export const getInteractions = async (type) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/professionals/interations?filter=${type}`
  );
  return response.data;
};

export const acceptORRejectRequest = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(
    `${API_URL}/professionals/interations`,
    dataToSend
  );
  return response.data;
};
