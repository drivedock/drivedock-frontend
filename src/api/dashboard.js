import axios from "axios";
import { API_URL } from "../constants";

export const getProfessionalProfiles = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/professionals?offset=${0}&limit=${25}`
  );
  return response.data;
};

export const getIndividualProfile = async (email) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/professionals/${email}`);
  return response.data;
};

export const getAllWorkshops = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/workshops?offset=${0}&limit=${25}`
  );
  return response.data;
};

export const registerForWorkshop = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(
    `${API_URL}/workshops/register`,
    dataToSend
  );
  return response.data;
};

export const getTaskStatus = async (taskType) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/profile/status/${taskType}`);
  return response.data;
};
