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
  const [patientList, setPatientList] = useState([]);
  const professionalId = localStorage.getItem('userId');

  async function getListOfPatientsFromProfessional(profId) {
    await getListOfPatients(profId)
      .then((resp) => {
        setPatientList(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getListOfPatientsFromProfessional(professionalId);
  }, [professionalId]);

  const [patient, setPatient] = useState('');
  const [newPatient, setNewPatient] = useState({});
  const [search, setSearch] = useState('');
  function createStudy(e) {
    e.preventDefault();
    window.location.href = window.location.href.replace('seleccionar', patient);
  }
  function handleChange(e) {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  }
  function createNewPatient(e) {
    e.preventDefault(e);
    // TODO LUCAS: Como resolvemos?
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
              <option defaultValue selected disabled>Seleccionar paciente</option>
              {
                patientList.length > 0
                && patientList.map((pat, index) => {
                  if (pat.name.toLowerCase().includes(search.toLowerCase())
                        || pat.surname.toLowerCase().includes(search.toLowerCase())) {
                    return (
                      <option key={index} value={pat._id}>
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
          <hr />
          Dar de alta
          {' '}
          <strong>paciente nuevo</strong>

          <Form onSubmit={createNewPatient}>
            <Form.Control onChange={handleChange} className="mt-3" type="text" placeholder="Nombre" name="name" required value={newPatient.name} />
            <Form.Control onChange={handleChange} className="mt-2" type="text" placeholder="Apellido" name="surname" required value={newPatient.surname} />
            <Form.Control onChange={handleChange} className="mt-2" type="email" placeholder="Email" name="email" required value={newPatient.email} />
            <Button type="submit" variant="primary" className="mt-2">
              Dar de alta
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {
            patient !== '' ? (
              <Button variant="primary" onClick={(e) => createStudy(e)}>
                Crear estudio
              </Button>
            ) : null
          }
        </Modal.Footer>
      </ModalP>

    </Container>
  );
}

export default SelectPatient;
