import fs from 'fs';
import path from 'path';

const datosJsonPath = path.resolve('pages', 'db.json');

export const getUserById = (userId) => {
  const datos = JSON.parse(fs.readFileSync(datosJsonPath, 'utf-8'));
  return datos.find((user) => user.id.toString() === userId.toString());
};

export const getUserByI = (userId) => {
  const datos = JSON.parse(fs.readFileSync(datosJsonPath, 'utf-8'));
  return datos.find((user) => user.id.toString() === userId.toString());
};
