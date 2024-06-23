'use client';

import React from 'react';
import {
  Container, Button, NavDropdown
} from 'react-bootstrap';
import styled from '@emotion/styled';
import { formatDate } from '@/utils/date';

const Boton = styled(Button)`
    padding: 5px;
    margin-right: 10px;
    background-color: transparent;
    &:hover {
        transform: scale(1.3);
    }
`;

const TheNavDropdown = styled(NavDropdown)`
    .dropdown-menu {
      background-color: var(--secondaryColor);
    }
    background-color: var(--secondaryColor);
    border: 1px solid transparent;
    color: black;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 0 10px;
    transition: all .3s ease;
    &:hover {
      color: black;
      border: 1px solid black;
    }

`;

const TheNavDropdown2 = styled(TheNavDropdown)`
    color: white;
    .dropdown-menu {
      background-color: var(--primaryColor);
      color: white;
    }
      background-color: var(--primaryColor);
    .dropdown-item {
      color: var(--slowBackground);
    }
    .dropdown-item:hover {
      color: var(--primaryColor);
    }
`;

function DatosDelPaciente({ user, alignLeft, create, patientId }) {
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
          {alignLeft ? <strong style={{ fontSize: '30px' }}>{`${name} ${surname}`}</strong> : <strong>{`${name}, ${surname}`}</strong>}
          <br />
          Nacimiento:
          <strong>{` ${formatDate(birthdate)}`}</strong>
          <br />
          Obra Social:
          <strong>{` ${os}`}</strong>
          <br />
          Afiliado:
          <strong>{` ${parseNumeroAfiliado(numeroAfiliado)}`}</strong>
        </p>
          {create ? (
          <div style={{ display: 'flex', justifyContent: "center"}} className='mt-4'>
            <TheNavDropdown
              title="Nuevo estudio"
              className="dropdown-item"
            >
              <NavDropdown.Item href={`${patientId}/nuevo/audiometria`}>

                Audiometria
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/nuevo/logoaudiometria`}>
                Logoaudiometria
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/nuevo/timpanometria`}>
                Timpanometría
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/nuevo/impedanciometria`}>
                Impedanciometria
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/nuevo/potenciales-evocados`}>
                Potenciales Evocados
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/nuevo/otoemision`}>
                Otoemisión
              </NavDropdown.Item>
            </TheNavDropdown>
            <TheNavDropdown2
              title="Formulario nuevo"
              className="dropdown-item"
            >
              <NavDropdown.Item href={`${patientId}/peach/nuevo`}>
                PEACH
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/sp-ssq12/nuevo`}>
                SP-SSQ12
              </NavDropdown.Item>
              <NavDropdown.Item href={`${patientId}/vanderbilt/nuevo`}>
                VANDERBILT
              </NavDropdown.Item>
            </TheNavDropdown2>
          </div>
        ) : null }
      </div>
      {alignLeft ? null : (
        <div
          style={{
            border: '3px solid #a7b5fe', width: '70%', margin: '20px auto',
          }}
        />
      )}
    </Container>
  );
}

export default DatosDelPaciente;
