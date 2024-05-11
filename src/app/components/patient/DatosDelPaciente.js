'use client';

import React from 'react';
import {
  Container,
} from 'react-bootstrap';

function DatosDelPaciente({ user }) {
  const {
    name,
    surname,
    birthdate,
    os,
    numeroAfiliado,
  } = user;
  const parseNumeroAfiliado = (numero) => numero.replace(/(.{4})/g, '$1 ').trim();
  return (
    <Container>
      <div className="pt-4" style={{ backgroundColor: 'white', textAlign: 'center' }}>
        {/* <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p> */}
        <p className="mb-0">
          <strong>{`${name}, ${surname}`}</strong>
          <br />
          Nacimiento:
          <strong>{` ${birthdate}`}</strong>
          <br />
          Obra Social:
          <strong>{` ${os}`}</strong>
          <br />
          Afiliado:
          <strong>{` ${parseNumeroAfiliado(numeroAfiliado)}`}</strong>
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
