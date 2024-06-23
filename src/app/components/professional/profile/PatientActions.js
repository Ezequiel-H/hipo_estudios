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
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/audiometria`}>

              Audiometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/logoaudiometria`}>
              Logoaudiometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/timpanometria`}>
              Timpanometría
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/impedanciometria`}>
              Impedanciometria
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/potenciales-evocados`}>
              Potenciales Evocados
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/nuevo/otoemision`}>
              Otoemisión
            </NavDropdown.Item>
          </TheNavDropdown2>
          <TheNavDropdown2
            title="Formularios"
            className="dropdown-item"
          >
            <NavDropdown.Item href={`pacientes/${patientID}/peach/nuevo`}>
              PEACH
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/sp-ssq12/nuevo`}>
              SP-SSQ12
            </NavDropdown.Item>
            <NavDropdown.Item href={`pacientes/${patientID}/vanderbilt/nuevo`}>
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
