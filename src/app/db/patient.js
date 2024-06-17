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

// TODO - DB: get de los estudios + datos del paciente
// - Estudio: Fecha, Tipo de estudio, Profesional que lo hizo (extra), idEstudio

export const a = 2;
