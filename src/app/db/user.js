/* eslint-disable no-console */

import { USER_TYPES } from '../constants/users';
import axiosInstance from './config';

const getUserById = (type) => async (userId) => {
  try {
    const response = await axiosInstance.get(`/${type}/${userId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getPatientById = getUserById(USER_TYPES.PATIENT);
export const getProfessionalById = getUserById(USER_TYPES.PROFESSIONAL);
export const getCenterById = getUserById(USER_TYPES.CENTER);

export const signIn = async (email, password) => {
  try {
    const response = await axiosInstance.post('/sign_in/', { email, password });
    localStorage.setItem('token', response.data._id);
    localStorage.setItem('userId', response.data._id);
    localStorage.setItem('userType', response.data.userType);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching user:', error);
    throw error;
  }
};
