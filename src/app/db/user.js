/* eslint-disable no-console */

const axios = require('axios');

const baseURL = 'http://192.168.0.53:8080';
// const baseURL = 'localhost:8080';

// Function to get user by ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`/user/${userId}`, { baseURL });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getUserByI = (userId) => {
  const datos = JSON.parse('db'); // TODO: Correct db
  return datos.find((user) => user.id.toString() === userId.toString());
};
