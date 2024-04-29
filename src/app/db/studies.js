/* eslint-disable max-len */
import db from './db.json';

export const getStudyById = (studyId) => db.flatMap((usuario) => usuario.studies).find((estudio) => estudio.id.toString() === studyId.toString());

export const getUserByI = (userId) => {
  const datos = JSON.parse(db);
  return datos.find((user) => user.id.toString() === userId.toString());
};
