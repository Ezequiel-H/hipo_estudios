import axiosInstance from './config';

export const getListOfPatients = async (professionalId) => {
  let response;

  try {
    response = await axiosInstance.get(`/professional/${professionalId}/patientsInfo`);
  } catch (error) {
    // Handle error
    console.log(error);
  }

  return response;
};

export const getProfessionalInfo = async (professionalId) => {
  let response;

  try {
    response = await axiosInstance.get(`/professional/${professionalId}`);
  } catch (error) {
    // Handle error
    console.log(error);
  }

  return response;
};

export const createPatientFromProfessional = async (professionalId, patientData) => {
  // TODO - DB: Me tira password required, pero no tiene.. que decis?
  let response;
  try {
    response = await axiosInstance.post(`/professional/${professionalId}/createPatient`, patientData);
  } catch (error) {
    // Handle error
    console.error('Error creating patient from professional:', error);
  }
  return response?.data;
};

export const updateProfessionalInfo = async (professionalId, updatedData) => {
  // TODO - DB: Create route
  let response;
  try {
    response = await axiosInstance.put(`/professional/${professionalId}/updateInformation`, updatedData);
  } catch (error) {
    // Handle error
    console.error('Error updating professional data:', error);
  }
  return response?.data;
};

export const a = 2;
