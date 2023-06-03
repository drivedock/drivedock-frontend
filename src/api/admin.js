import axios from "axios";
import { API_URL } from "../constants";

export const createWorkshop = async () => {
  const token = localStorage.getItem("isAuthenticated");
  axios.defaults.headers.common = { token: token };
  const response = await axios.get(`${API_URL}/admin/createWorkShops`);
  return response.data;
};
