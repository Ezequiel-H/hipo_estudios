/* eslint-disable no-console */

import { USER_TYPES } from '../constants/users';
import axiosInstance from './config';

const getUserById = (type) => async (userId) => {
  let response;
  try {
    response = await axiosInstance.get(`/${type}/${userId}`);
  } catch (error) {
    // Handle error
    console.error('Error fetching user:', error);
    throw error;
  }

  return response?.data;
};

export const getPatientById = getUserById(USER_TYPES.PATIENT);
export const getProfessionalById = getUserById(USER_TYPES.PROFESSIONAL);
export const getCenterById = getUserById(USER_TYPES.CENTER);

// TODO - DB: updateUser(); // para profesionales y pacientes (cambiar email, celular, etc.).

export const signIn = async (email, password) => {
  let response;

  try {
    response = await axiosInstance.post('/sign_in/', { email, password });
    if (response) {
      localStorage.setItem('token', response.data._id);
      localStorage.setItem('userId', response.data._id);
      localStorage.setItem('userType', response.data.userType);
      return response.data;
    }
  } catch (error) {
    // Handle error
    console.error('Error fetching user:', error);
    throw error;
  }

  return undefined;
};

export const signUp = async (user) => {
  let response;

  try {
    response = await axiosInstance.post('/sign_up/', { ...user });
    if (response) {
      localStorage.setItem('token', response.data._id);
      localStorage.setItem('userId', response.data._id);
      localStorage.setItem('userType', response.data.userType);
      return response.data;
    }
  } catch (error) {
    // Handle error
    console.error('Error creating user:', error);
    throw error;
  }

  return undefined;
};

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('userType');
  window.location.href = '/';
};
