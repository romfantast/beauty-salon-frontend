import axios from 'axios';

const updateImage = async file => {
  return await axios.patch('/profile/avatar', file);
};
const getImage = async () => {
  return await axios.get('/profile/avatar');
};

export const profileAPI = {
  updateImage,
  getImage,
};
