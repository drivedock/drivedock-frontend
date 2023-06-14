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

export const updateProfileResume = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(`${API_URL}/profile/upload`, dataToSend);
  return response.data;
};

export const getProfileDetails = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/profile`);
  return response.data;
};

export const getProjectsApplied = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/profile/projects`);
  return response.data;
};
