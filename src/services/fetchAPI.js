import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v4/';

export const dragon = async () => {
  const response = await axios.get(`dragons/5e9d058759b1ff74a7ad5f8f`);
  return response.data;
};

export const allDetailsDragon = async () => {
  const response = await axios.get(`dragons`);

  return response.data;
};

export const getDragonsById = async id => {
  const response = await axios.get(`dragons/${id}`);
  return response;
};
