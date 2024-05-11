import db from './db.json';

export const getUserById = (userId) => db.find((user) => user.id.toString() === userId.toString());

export const getUserByI = (userId) => {
  const datos = JSON.parse(db);
  return datos.find((user) => user.id.toString() === userId.toString());
};