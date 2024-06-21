import axiosInstance from './config';

export const professionalConenct = async (patientId, professionalEmail) => {
  let response;

  try {
    response = await axiosInstance.post(
      `/patient/${patientId}/addProfessional`,
      { professionalEmail },
    );
  } catch (error) {
    // Handle error
    console.log(error);
  }

  console.log(response);
};

export const getAllStudiesForPatient = async (patientId) => {
  let response;
  try {
    response = await axiosInstance.get(`/patient/${patientId}/studies`);
  } catch (error) {
    // Handle error
    console.error(`Error fetching studies for user: ${patientId}`, error);
    throw error;
  }

  return response?.data;
};

export const getPatientByIdWithStudies = async (patientId) => {
  let response;
  try {
    response = await axiosInstance.get(`/patient/${patientId}/infoWithStudies`);
  } catch (error) {
    // Handle error
    console.error(`Error fetching user info: ${patientId}`, error);
    throw error;
  }

  return response?.data;
};
