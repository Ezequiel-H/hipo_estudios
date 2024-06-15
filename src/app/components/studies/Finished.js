/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */

import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Modal, Form,
} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  const [emailsToShare, setEmailsToShare] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  function finishAndShareStudy(e) {
    e.preventDefault();
    // TODO DB: post guardar estudio
    // compartirPorEmailAlPaciente();
    // setCronJobEnXTiempoConRecordatorioDeVolverAlControl();

    // Aca dejo un ejemplo de funcion para el back para enviar el email:
    // https://github.com/lucasadlerstein/Latam-Hospitals-Platform-Back/blob/main/helpers/funciones.js

    // Si te parece mas comodo, podes dejar puesto en el back
    // enviarEmail() ponele y yo hago la plantilla, lo redacto y eso.
  }

  // TODO LUCAS: Una vez que este listo para ver estudio desde DB, ir a esa vista y exportar

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="color-black">
          El estudio fue guardado con éxito
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="color-black">Agregar recordatorio para nuevo control</p>
        <Form.Select
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          aria-label="Recordar control en..."
        >
          <option value="0" selected>Recordar control en...</option>
          <option value="3">3 meses</option>
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
          <option value="60">5 años</option>
          <option value="120">10 años</option>
        </Form.Select>

        <p className="color-black mt-4">Compartir estudio</p>
        <Row>
          <Col>

            <Form.Control
              value={emailsToShare}
              onChange={(e) => setEmailsToShare(e.target.value)}
              type="email"
              placeholder="Ingresar emails separados por coma"
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={(e) => finishAndShareStudy(e)}>
              Compartir y copiar enlace
            </Button>
          </Col>
        </Row>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
        <Button onClick={props.onHide}>Exportar informe a PDF</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Finished(modal) {
  const [modalShow, setModalShow] = useState(modal);

  return (
    <Container style={{ maxWidth: '450px' }}>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Compartir o exportar
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Finished;
