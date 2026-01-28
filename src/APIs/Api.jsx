import axios from "axios";

const BASE_URL = "http://localhost:8080/todos"; 

export const getApi = async () => {
  return await axios.get(BASE_URL);
};

export const postApi = async (data) => {
  return await axios.post(BASE_URL, data);
};

export const deleteApi = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};





