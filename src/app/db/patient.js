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

export const a = 2;
