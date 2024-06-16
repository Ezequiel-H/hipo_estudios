import axiosInstance from './config';

export const getListOfPatients = async (professionalId) => {
  let response;

  try {
    response = await axiosInstance.post(`/professional/${professionalId}/patients`);
  } catch (error) {
    // Handle error
    console.log(error);
  }

  return response;
};

export const a = 2;
