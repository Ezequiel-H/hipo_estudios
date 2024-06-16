import React, { useState, useEffect } from 'react';
import {
  Container, Modal, Button, Form,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import { getListOfPatients } from '@/app/db/professional';

const ModalP = styled(Modal)`
  color: var(--primaryColor);S
`;

function SelectPatient() {
  const [patientList, setPatientList] = useState([
    {
      name: 'Juan',
      surname: 'Cruz',
      id: '123',
    },
    {
      name: 'Marta',
      surname: 'Gomez',
      id: '1223',
    },
    {
      name: 'Juana',
      surname: 'Gutierrez',
      id: '1111',
    },
  ]);

  const professionalId = localStorage.getItem('userId');

  useEffect(async () => {
    const getNewPatientList = async () => getListOfPatients(professionalId);
    const newPatientList = await getNewPatientList();

    setPatientList(newPatientList);
  }, [professionalId]);

  const [patient, setPatient] = useState('');
  const [search, setSearch] = useState('');
  function createStudy(e) {
    e.preventDefault();
    window.location.href = window.location.href.replace('seleccionar', patient);
  }
  return (
    <Container>
      <ModalP show>
        <Modal.Header
          closeButton={false}
        >
          <Modal.Title>Seleccionar paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Para crear el estudio, seleccioná primero el paciente.
          <Form className="mt-3">
            <Form.Control onChange={(e) => setSearch(e.target.value)} className="mt-3" type="text" placeholder="Buscá por nombre, apellido o DNI." />
            <Form.Select onChange={(e) => setPatient(e.target.value)} className="mt-1" aria-label="Seleccionar paciente">
              <option selected disabled>Seleccionar paciente</option>
              {
                patientList.map((pat) => {
                  if (pat.name.toLowerCase().includes(search.toLowerCase())
                        || pat.surname.toLowerCase().includes(search.toLowerCase())) {
                    return (
                      <option key={pat.id} value={pat.id}>
                        {pat.surname}
                        ,
                        {pat.name}
                      </option>
                    );
                  } return null;
                })
            }
            </Form.Select>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          {
            patient !== '' ? (
              <Button variant="primary" onClick={(e) => createStudy(e)}>
                Crear
              </Button>
            ) : null
          }
        </Modal.Footer>
      </ModalP>

    </Container>
  );
}

export default SelectPatient;
