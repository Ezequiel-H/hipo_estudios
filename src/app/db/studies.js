/* eslint-disable no-console */
import axiosInstance from './config';

export const getStudyById = async (studyId) => {
  let response;
  try {
    response = await axiosInstance.get(`/study/${studyId}`);
  } catch (error) {
    // Handle error
    console.error('Error fetching study:', error);
  }
  return response?.data;
};

export const addStudyForUser = async (userId, studyData) => {
  let response;
  try {
    response = await axiosInstance.post(`/study/${userId}`, studyData);
  } catch (error) {
    // Handle error
    console.error('Error adding study:', error);
  }
  return response?.data;
};
