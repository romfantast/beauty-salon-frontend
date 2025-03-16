import axios from 'axios';

const getAllServices = async () => {
  return await axios.get('/services/allServices');
};

export const servicesAPI = {
  getAllServices,
};
