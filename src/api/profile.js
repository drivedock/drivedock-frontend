import axios from "axios";
import { API_URL } from "../constants";

export const getProfileStatus = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/profile/profilestatus`);
  return response.data;
};

export const updateProfileStatus = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(`${API_URL}/profile/additionalinfo`);
  return response.data;
};
