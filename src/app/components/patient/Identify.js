import React, { useState } from 'react';
import {
  Button, Form, Row, Col, Container, ListGroup, Modal
} from 'react-bootstrap';
import styled from '@emotion/styled';

const PatientForm = styled(Form)`
    background-color: var(--slowYellow);
    margin: 0;
    padding: 15px;
`;

function Identify() {
  const [userData, setUserData] = useState({
    apellido: '',
    nombre: '',
    nacimiento: ''
  });
  const [observation, setObservation] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  function onChangeInput(e) {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

    return (
      <>
        <Container>
          <p className="sub-title this-section mb-0 pb-0">Seleccionar paciente</p>
          <Row>
            <Col style={{maxWidth: '85vw', width: 'fit-content'}}>
              <Form.Control className="form-field" type="text" placeholder="Buscar por apellido, nombre o DNI" name="apellido" onChange={(e) => onChangeInput(e)} />
              {
                (userData.apellido.toString().toLowerCase().includes('go'.toLowerCase())) ? (
                  <ListGroup>
                    <ListGroup.Item action href="?apellido=Gomez&nombre=Juan&nacimiento=10-10-2000">
                      Gomez, Juan
                    </ListGroup.Item>
                    <ListGroup.Item action href="?apellido=Gomez&nombre=Franco&nacimiento=24-10-1992">
                      Gomez, Franco
                    </ListGroup.Item>
                    <ListGroup.Item action href="?apellido=Gomez&nombre=Patricia&nacimiento=09-10-1989">
                      Gomez, Patricia
                    </ListGroup.Item>
                  </ListGroup>
                ) : null
              }
            </Col>
            <Col>
              <Button className="btn btn-secondary form-btn"
                onClick={handleShow}
              >Registrar paciente nuevo</Button>
            </Col>
          </Row>
          {
            (showModal) ? (
              <div>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-black">Registrar paciente</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <PatientForm className="this-section">
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="Apellido" name="apellido" onChange={(e) => onChangeInput(e)} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="Nombre" name="nombre" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="DNI" name="dni" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="Fecha de nacimiento" name="nacimiento" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="email" placeholder="Correo electrónico" name="email" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="number" placeholder="Teléfono" name="telefono" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="Obra social" name="os" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Form.Control className="form-field" type="text" placeholder="Número de O.S." name="osnumero" />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Button className="btn btn-secondary form-btn">Registrar paciente</Button>
                        </Col>
                      </Row>
                  </PatientForm>
                  </Modal.Body>
                </Modal>
              </div>
            ) : null
          }
        </Container>
      </>
    )
      
}

export default Identify;
