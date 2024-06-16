/* eslint-disable no-console */

'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import AudiogramCompleto from '@/app/components/studies/audiogram/AudiogramCompleto';
import { getPatientById } from '@/app/db/user';
import { getStudyById } from '@/app/db/studies';
import DatosDelPaciente from '@/app/components/patient/DatosDelPaciente';

function VerAudiometria({ params }) {
  const { userId, studyId } = params;
  const [separar, setSeparar] = useState(true);
  const [user, setUser] = useState();
  const [study, setStudy] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUser = await getPatientById(userId);
        setUser(newUser);

        const newStudy = await getStudyById(studyId);
        setStudy(newStudy);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId, studyId]);

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
          {user && <DatosDelPaciente user={user} />}
        </Row>

        {
          study && study?.results?.iAerea?.length > 2 && (separar) ? (
            <Row>
              <Col>
                <AudiogramCompleto modo="izquierdo" data={study} />
              </Col>
              <Col>
                <AudiogramCompleto modo="derecho" data={study} />
              </Col>
            </Row>
          ) : (
            <AudiogramCompleto modo="todo" data={study} />
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
