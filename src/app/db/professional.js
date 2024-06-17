import axiosInstance from './config';

export const getListOfPatients = async (professionalId) => {
  let response;

  try {
    response = await axiosInstance.get(`/professional/${professionalId}/patients`);
  } catch (error) {
    // Handle error
    console.log(error);
  }

  return response;
};

// export const postNewPatient = async (newPatient) => {
//   // TODO - DB: poner en la base de datos y deberia asociarse directo al profesional que lo crea.
// }

export const a = 2;
