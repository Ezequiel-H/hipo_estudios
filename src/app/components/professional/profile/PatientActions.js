import React from 'react';
import {
  Button, NavDropdown,
} from 'react-bootstrap';
import styled from '@emotion/styled';

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
`;

const TheNavDropdown2 = styled(TheNavDropdown)`
    .dropdown-menu {
      background-color: var(--primaryColor);
      color: white;
    }
    .dropdown-item {
      color: var(--slowBackground);
    }
    .dropdown-item:hover {
      color: var(--primaryColor);
    }
`;

function PatientActions({ patientID }) {
  return (
    <td>
      <div style={{ display: 'flex' }}>
        <Boton href={`pacientes/${patientID}`}>
          <img src="/img/estudios/markers/eye.png" alt="Ver paciente" width="35px" />
        </Boton>
        <Boton href={`pacientes/${patientID}?mode=edit`}>
          <img src="/img/estudios/markers/edit.png" alt="Editar paciente" width="35px" />
        </Boton>

        <TheNavDropdown
          title={(
            <Boton>
              <img src="/img/estudios/markers/new-file.png" alt="Nuevo estudio" width="35px" />
            </Boton>
          )}
          id="basic-nav-dropdown"
        >
          <TheNavDropdown2
            title="Estudios"
            className="dropdown-item"
          >
            <NavDropdown.Item href={`/${patientID}/estudios/audiometria/nueva`}>
              Audiometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/logoaudiometria/nueva`}>
              Logoaudiometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/timpanometria/nueva`}>
              Timpanometría
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/impedanciometria/nueva`}>
              Impedanciometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/potenciales-evocados/nueva`}>
              Potenciales Evocados
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/otoemision/nueva`}>
              Otoemisión
            </NavDropdown.Item>
          </TheNavDropdown2>
          <TheNavDropdown2
            title="Formularios"
            className="dropdown-item"
          >
            <NavDropdown.Item href={`/${patientID}/cuestionario/peach/nuevo`}>
              PEACH
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/cuestionario/sp-ssq12/nuevo`}>
              SP-SSQ12
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/cuestionario/vanderbilt/nuevo`}>
              VANDERBILT
            </NavDropdown.Item>
          </TheNavDropdown2>
          <TheNavDropdown2
            title="Hito"
            className="dropdown-item"
          >
            <NavDropdown.Item href={`/${patientID}/estudios/audiometria/nueva`}>
              Selección de equipamiento
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/audiometria/nueva`}>
              Alta de equipamiento
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/audiometria/nueva`}>
              Calibración o control
            </NavDropdown.Item>
            <NavDropdown.Item href={`/${patientID}/estudios/logoaudiometria/nueva`}>
              Otro
            </NavDropdown.Item>
          </TheNavDropdown2>
        </TheNavDropdown>
      </div>
    </td>
  );
}

export default PatientActions;
