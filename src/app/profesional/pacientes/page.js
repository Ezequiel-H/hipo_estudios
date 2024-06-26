'use client';

import React, {
  useEffect,
  useState,
} from 'react';
import {
  Table, Container, Form, Button, Row, Col,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import PatientActions from '@/app/components/professional/profile/PatientActions';
import { createPatientFromProfessional, getListOfPatients } from '@/app/db/professional';
import swalAlert from '@/app/helpers';

const Area = styled.div`
    border: 7px solid var(--quartyColor);
    padding: 30px;
    border-radius: 30px;
`;

const Area2 = styled(Area)`
    border: 7px solid var(--tertiaryColor);
    margin: 30px 0 60px 0;

    .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

function Pacientes() {
  const [myPatients, setMyPatients] = useState([]);
  const [newPatient, setNewPatient] = useState();
  const [search, setSearch] = useState('');

  async function fetchPatients() {
    const result = await getListOfPatients(localStorage.getItem('userId'));
    setMyPatients(result.data);
  }

  useEffect(() => {
    fetchPatients();
    // eslint-disable-next-line
  }, [])

  async function newPatientFormSubmit(e) {
    e.preventDefault();
    if (newPatient.name === '') {
      swalAlert('Importante', 'El nombre es obligatorio', 'warning', '2500', false);
    } else if (newPatient.surname === '') {
      swalAlert('Importante', 'El apellido es obligatorio', 'warning', '2500', false);
    } else if (newPatient.email === '') {
      swalAlert('Importante', 'El email es obligatorio', 'warning', '2500', false);
    } else if (newPatient.birthdate === '') {
      swalAlert('Importante', 'La fecha de nacimiento es obligatoria', 'warning', '2500', false);
    } else if (newPatient.phone === '') {
      swalAlert('Importante', 'El teléfono es obligatorio', 'warning', '2500', false);
    } else {
      const professionalId = localStorage.getItem('userId');
      await createPatientFromProfessional(professionalId, newPatient)
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleChange(e) {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1">Mis pacientes</h1>
        <Area>
          <Form.Control
            type="text"
            id="identifier"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscá por nombre, apellido o número de afiliado..."
            className="mb-3"
          />
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Obra Social</th>
                <th>Número de Afiliado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                myPatients.map((one, index) => {
                  if (one.surname.toLowerCase().includes(search.toLowerCase())
                    || one.name.toLowerCase().includes(search.toLowerCase())
                    || one.numeroAfiliado.toLowerCase().includes(search.toLowerCase())
                    || one.os.toLowerCase().includes(search.toLowerCase())) {
                    return (
                      <tr key={one._id}>
                        <td>{index + 1}</td>
                        <td>{one.surname}</td>
                        <td>{one.name}</td>
                        <td>{one.os}</td>
                        <td>{one.numeroAfiliado}</td>
                        <PatientActions patientID={one._id} />
                      </tr>
                    );
                  }
                  return null;
                })
              }
            </tbody>
          </Table>
        </Area>

        <Area2>
          <h3 className="text-center color-black" id="nuevo">Paciente nuevo</h3>
          <Form onSubmit={(e) => newPatientFormSubmit(e)}>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control required onChange={(e) => handleChange(e)} name="name" placeholder="Nombre" type="text" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control required onChange={(e) => handleChange(e)} name="surname" placeholder="Apellido" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control required onChange={(e) => handleChange(e)} name="birthdate" placeholder="Fecha de nacimiento" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control onChange={(e) => handleChange(e)} name="os" placeholder="Obra social" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control onChange={(e) => handleChange(e)} name="numeroAfiliado" type="number" placeholder="Numero de afiliado" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control required onChange={(e) => handleChange(e)} name="email" type="email" placeholder="Email" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control required onChange={(e) => handleChange(e)} name="phone" type="number" placeholder="Celular" className="input" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={2}>
                <Button type="submit" className="btn btn-primary input" style={{ backgroundColor: 'var(--primaryColor)' }}>Registrar</Button>
              </Col>
            </Row>
          </Form>
        </Area2>

      </Container>
    </Layout>
  );
}

export default Pacientes;
