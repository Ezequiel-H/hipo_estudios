/* eslint-disable no-console */
import axiosInstance from './config';

export const getStudyById = async (studyId) => {
  try {
    const response = await axiosInstance.get(`/study/${studyId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching study:', error);
    throw error;
  }
};

export const addStudyForUser = async (userId, studyData) => {
  try {
    const response = await axiosInstance.post(`/study/${userId}`, studyData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error adding study:', error);
    throw error;
  }
};
