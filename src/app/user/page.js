'use client';

import React, { useState } from 'react';

function UserProfile() {
  const studies = [
    {
      id: 1, type: 'audiogram', date: '2024-02-02', title: 'Audiometria sin audifono',
    },
    {
      id: 2, type: 'audiogram', date: '2024-04-03', title: 'Audiometria con audifono',
    }];

  const user = {
    id: 1, name: 'Ezequiel', surname: 'Horowitz', birthdate: '18/09/2000',
  };
  const [filterType, setFilterType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filteredStudies = studies.filter((study) => {
    if (filterType && study.type !== filterType) return false;
    if (fromDate && study.date < fromDate) return false;
    if (toDate && study.date > toDate) return false;
    return true;
  });

  return (
    <div className="user-profile">
      <h2>Perfil</h2>
      <div className="mt-4">
        <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p>
        <p className="mb-0">
          Apellido:
          <strong>
            {user.surname}
          </strong>
        </p>
        <p className="mb-0">
          Nombre:
          <strong>
            {user.name}
          </strong>
        </p>
        <p className="mb-0">
          Fecha de nacimiento:
          <strong>
            {user.birthdate}
          </strong>
        </p>
      </div>
      <div className="study-filter">
        <h3>Mis Estudios</h3>
        <label>
          Tipo:
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="">Todos</option>
            <option value="audiogram">Audiometría</option>
            <option value="logoaudiogram">Logoaudiometría</option>
          </select>
        </label>
        <label>
          Desde:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </label>
        <label>
          Hasta:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </label>
      </div>
      <div className="study-list">
        <h3>Studies</h3>
        {filteredStudies.length === 0 ? (
          <p>No studies match the filter criteria.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudies.map((study) => (
                <tr key={study.id}>
                  <td>{study.title}</td>
                  <td>{study.type}</td>
                  <td>{study.date}</td>
                  <td><a href={`http://localhost:3000/${user.id}/estudios/${study.id}`} target="_blank" rel="noopener noreferrer">Link</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
