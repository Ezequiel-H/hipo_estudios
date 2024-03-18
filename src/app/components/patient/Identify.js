import React from 'react';
import {
  Button, Form, Row, Col, Container,
} from 'react-bootstrap';
import styled from '@emotion/styled';

const PatientForm = styled(Form)`
    background-color: var(--slowYellow);
`;

function Identify() {
  return (
    <PatientForm className="this-section">
      <Container>
        <p className="sub-title">Datos del paciente</p>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="Apellido" name="surname" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="Nombre" name="name" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="DNI" name="dni" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="Fecha de nacimiento" name="birthday" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="email" placeholder="Correo electrónico" name="email" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="number" placeholder="Teléfono" name="phone" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="Obra social" name="os" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Form.Control className="form-field" type="text" placeholder="Número de O.S." name="osnumber" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Button className="btn btn-secondary form-btn">Registrar paciente</Button>
          </Col>
        </Row>
      </Container>
    </PatientForm>
  );
}

export default Identify;
