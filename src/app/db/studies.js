/* eslint-disable max-len */

const axios = require('axios');

const baseURL = 'http://localhost:8080';

export const getStudyById = async (studyId) => {
  try {
    const response = await axios.get(`/study/${studyId}`, { baseURL });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching study:', error);
    throw error;
  }
};

export const addStudyForUser = async (userId, studyData) => {
  try {
    const response = await axios.post(`/study/${userId}`, { study: studyData }, { baseURL });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error adding study:', error);
    throw error;
  }
};
