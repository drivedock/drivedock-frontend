import axios from "axios";
import { API_URL } from "../constants";

export const getProfessionalProfiles = async (offset) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/professionals?offset=${offset}&limit=${9}`
  );
  return response.data;
};

export const getTotalProfilesCount = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/professionals/count`);
  return response.data;
};

export const getIndividualProfile = async (email) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/professionals/${email}`);
  return response.data;
};

export const createInteractionRequest = async (body) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(`${API_URL}/professionals/request`, body);
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

export const getAllResearchProjects = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/research?offset=${0}&limit=${25}`
  );
  return response.data;
};

export const applyForProject = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(`${API_URL}/research/register`, dataToSend);
  return response.data;
};

export const dropYourIdea = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(`${API_URL}/ideadropbox`, dataToSend);
  return response.data;
};
