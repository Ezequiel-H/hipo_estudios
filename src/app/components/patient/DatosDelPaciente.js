'use client';

import React from 'react';
import {
  Container,
} from 'react-bootstrap';

function DatosDelPaciente() {
  return (
    <Container>
      <div className="pt-4" style={{ backgroundColor: 'white', textAlign: 'center' }}>
        {/* <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p> */}
        <p className="mb-0">
          <strong>Gomez, Jorge </strong>
          <br />
          Nacimiento:
          <strong>25/02/1976</strong>
          <br />
          Edad:
          <strong>55 años</strong>
          <br />
          Obra Social:
          <strong>Swiss Medical Group</strong>
          <br />
          Afiliado:
          <strong>2993334 40044 0044 001</strong>
        </p>
      </div>
      <div
        style={{
          border: '3px solid #a7b5fe', width: '70%', margin: '20px auto',
        }}
      />
    </Container>
  );
}

export default DatosDelPaciente;
