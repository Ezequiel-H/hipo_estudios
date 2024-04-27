'use client';

import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import AudiogramCompleto from '@/app/components/studies/audiogram/AudiogramCompleto';

function VerAudiometria() {
  const [separar, setSeparar] = useState(true);

  return (
    <Layout>
      {/* <h1 className="title text-center">Audiometria de Lucas Adlerstein</h1> */}
      <Container>
        <Row>
          <Col>
            <p className="sub-title this-section mb-0 pb-2">Audiometría</p>
            <button
              onClick={() => setSeparar(!separar)}
              type="button"
              className="btn btn-secondary"
            >
              {separar ? 'Ver audiograma completo' : 'Separar oídos'}
            </button>
          </Col>
          <Col className="pt-4">
            <div className="pt-4 text-right" style={{ backgroundColor: 'white', textAlign: 'right' }}>
              <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p>
              <p className="mb-0">
                <strong>Gomez, Jorge </strong>
                <br />
                25/02/1976 (55 años)
              </p>
            </div>
          </Col>
        </Row>

        {
          (separar) ? (
            <Row>
              <Col>
                <AudiogramCompleto modo="izquierdo" />
              </Col>
              <Col>
                <AudiogramCompleto modo="derecho" />
              </Col>
            </Row>
          ) : (
            <AudiogramCompleto modo="todo" />
          )
        }
        <div key={4} className="col-estudio-info">
          <div>
            <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
            <p>
              Estudio realizado en cabina sonoamortiguada.
            </p>
          </div>
        </div>
      </Container>

    </Layout>
  );
}

export default VerAudiometria;
