'use client';

import React, { useEffect, useState } from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';

import Layout from '@/app/components/general/Layout';
import { professionalConenct } from '@/app/db/patient';

function Login() {
  const [email, setEmail] = useState('');
  const [patientId, setPatientId] = useState();

  useEffect(() => {
    const newPatientId = localStorage.getItem('userId');
    setPatientId(newPatientId);
  }, []);

  const connectWithProfessional = async (e) => {
    e.preventDefault();
    await professionalConenct(patientId, email);
  };

  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col className="text-center login-col">
              <h1>Compartí tus estudios</h1>
              <p>con tus profesionales.</p>
              <div className="login-form">
                <Form>
                  <Form.Control
                    placeholder="Email del profesional"
                    type="email"
                    className="text-input text-center"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    onClick={(e) => connectWithProfessional(e)}
                    className="btn btn-secondary login-btn"
                  >
                    Compartir estudios
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default Login;
