'use client';

import React, { useState } from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';
import Link from 'next/link';

import Layout from '@/app/components/general/Layout';
import { signIn } from '../db/user';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const logInClick = async () => {
    const user = await signIn(email, password);
    // TODO: navegar dependiendo del user.type
    window.location.href = '/';
  };

  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col className="text-center login-col">
              <h1>Comparte estudios con un profesional</h1>
              <div className="login-form">
                <Form>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    className="text-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={logInClick} className="btn btn-secondary login-btn">
                    Compartir Estudios
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} className="d-none d-sm-none d-lg-block">
              <img style={{ maxWidth: '100%' }} src="img/freedom/vertical/04.jpg" alt="Pez en el mar" />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default login;
