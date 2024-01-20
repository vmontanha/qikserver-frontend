import axios from 'axios';

const BASE_URL = 'https://frontend-challenge.free.beeceptor.com';

export const fetchRestaurantData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/venue/9`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMenuData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
