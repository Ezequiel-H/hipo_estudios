'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import AudiogramCompleto from '@/app/components/studies/audiogram/AudiogramCompleto';
import { getUserById } from '@/app/db/user';
import { getStudyById } from '@/app/db/studies';

function VerAudiometria({ params }) {
  const { userId, studyId } = params;
  const [separar, setSeparar] = useState(true);
  const [user, setUser] = useState();
  const [study, setStudy] = useState();
  
  useEffect(() => {
    const newUser = getUserById(userId);
    setUser(newUser);

    const newStudy = getStudyById(studyId);
    setStudy(newStudy);
  }, []);

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
                <AudiogramCompleto modo="izquierdo" data="study" />
              </Col>
              <Col>
                <AudiogramCompleto modo="derecho" data="study" />
              </Col>
            </Row>
          ) : (
            <AudiogramCompleto modo="todo" data="study" />
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
