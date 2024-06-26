/* eslint-disable max-len */

'use client';

import React, { useState, useEffect } from 'react';
import {
  Container, Button, Row, Col, Form,
} from 'react-bootstrap';
// import Select from 'react-select';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
import { getProfessionalInfo } from '@/app/db/professional';
// import OneCenter from '@/app/components/professional/profile/OneCenter';

const Area = styled.div`
  border: 7px solid var(--quartyColor);
  padding: 30px;
  border-radius: 30px;
  margin-top: 35px;
  .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

// const Area2 = styled(Area)`
//     border: 7px solid var(--tertiaryColor);
//     margin-top: 30px;
// `;

// const obrasSociales = [
//   { value: 'SwissMedical', label: 'Swiss Medical' },
//   { value: 'OSDE', label: 'OSDE' },
//   { value: 'Galeno', label: 'Galeno' },
// ];

function Perfil() {
  // const [selectedOS, setSelectedOS] = useState([]);
  const [professionalInfo, setProfessionalInfo] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    matriculas: [
      {
        type: 'nacional',
        matricula: '1111',
      },
      {
        type: 'provincial',
        matricula: '2222',
      },
    ],
    country: '',

  });
  const [updatedProfessionalInfo, setUpdatedProfessionalInfo] = useState({});

  async function loadProfessionalInfo() {
    await getProfessionalInfo(localStorage.getItem('userId'))
      .then((response) => {
        setProfessionalInfo(response.data);
        setUpdatedProfessionalInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadProfessionalInfo();
  }, []);

  function handleChange(e) {
    setUpdatedProfessionalInfo({
      ...updatedProfessionalInfo,
      [e.target.name]: e.target.value,
    });
  }
  async function updateProfessionalInfo(e) {
    e.preventDefault();
    await updateProfessionalInfo(updatedProfessionalInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Layout>
      <Container>
        <h1 className="title text-center section1 mb-3 pb-3">Mi perfil</h1>
        <div style={{ color: 'black', textAlign: 'center' }}>
          <a className="visita-item" href="/test">
            Datos personales
          </a>
          {/* <a className="visita-item" href="/test">
            Consultorio
          </a> */}
        </div>

        <Area>
          <h3 className="text-center color-black mb-4">Datos personales</h3>
          <Form onSubmit={updateProfessionalInfo}>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control name="name" onChange={handleChange} placeholder="Nombre" type="text" className="input" value={updatedProfessionalInfo.name} />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control name="surname" onChange={handleChange} placeholder="Apellido" className="input" value={updatedProfessionalInfo.surname} />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  name="matriculaNacional"
                  onChange={handleChange}
                  placeholder="Matricula nacional"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control
                  name="matriculaProvincial"
                  onChange={handleChange}
                  placeholder="Matricula provincial"
                  className="input"
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control name="email" onChange={handleChange} placeholder="Email" type="email" className="input" value={updatedProfessionalInfo.email} />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control name="phone" onChange={handleChange} type="number" placeholder="Celular" className="input" value={updatedProfessionalInfo.phone} />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Control name="country" onChange={handleChange} type="text" placeholder="Pais" className="input" value={updatedProfessionalInfo.country} />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Button
                  className="btn btn-primary input"
                  style={{ backgroundColor: 'var(--primaryColor)' }}
                  type="submit"
                  disabled={updatedProfessionalInfo === professionalInfo}
                >
                  Actualizar
                </Button>
              </Col>
            </Row>
          </Form>
        </Area>

        {/* <Area2>
          <h3 className="text-center color-black">Consultorios</h3>
          <Row>
            <OneCenter center={{ title:'Centro de Implantes', address: 'Dorrego 123',
            email: 'centro@implantes.com' }} />
            <OneCenter center={{ title: 'Centro de Implantes', address: 'Dorrego 123',
            email: 'centro@implantes.com' }} />
            <OneCenter center={{ title: 'Centro de Implantes', address: 'Dorrego 123',
            email: 'centro@implantes.com' }} />
            <OneCenter center={{ title: 'Centro de Implantes', address: 'Dorrego 123',
            email: 'centro@implantes.com' }} />
            <OneCenter center={{ title: 'Centro de Implantes', address: 'Dorrego 123',
            email: 'centro@implantes.com' }} />
          </Row>
        </Area2> */}

        {/* <Area>
          <h3 className="text-center color-black">Dar de alta un nuevo consultorio</h3>
          <Form>
            <Row>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control placeholder="Nombre" type="text" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control placeholder="Dirección" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control placeholder="Piso y depto" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control placeholder="Ciudad" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control placeholder="Pais" className="input" />
              </Col>

              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control type="email" placeholder="Email" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control type="number" placeholder="Teléfono" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control type="number" placeholder="WhatsApp" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Form.Control type="number" placeholder="Link para turnos" className="input" />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <Form.Control type="number" placeholder="Descripción para los informes" className="input" />
              </Col>
              <Col xs={12} sm={6} md={3} lg={3}>
                <Button className="btn btn-primary input" style={{ backgroundColor: 'var(--primaryColor)' }}>Crear consultorio</Button>
              </Col>
            </Row>
          </Form>
        </Area> */}
      </Container>
    </Layout>
  );
}

export default Perfil;
