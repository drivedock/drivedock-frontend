import axios from "axios";
import { API_URL } from "../constants";

export const getWorkshops = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(
    `${API_URL}/admin/workshops?offset=0&limit=20`
  );
  return response.data;
};

export const createWorkshop = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(
    `${API_URL}/admin/createWorkShops`,
    dataToSend
  );
  return response.data;
};

export const createProfessionalProfile = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(
    `${API_URL}/admin/createprofessional`,
    dataToSend
  );
  return response.data;
};

export const createRandDProject = async (dataToSend) => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.post(
    `${API_URL}/admin/createRandDProjects`,
    dataToSend
  );
  return response.data;
};
