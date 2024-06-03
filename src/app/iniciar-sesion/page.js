'use client';

import React from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/app/components/general/Layout';

function login() {
  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col className="text-center login-col">
              <h1>Iniciar sesión</h1>
              <div className="login-form">
                <Form>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    className="text-input"
                  />
                  <Form.Control
                    placeholder="Contraseña"
                    type="password"
                    className="text-input"
                  />
                  <Form.Check
                    type="checkbox"
                    id="remember"
                    label="Recordar sesión por 30 días"
                    style={{ textAlign: 'left' }}
                  />
                  <Button className="btn btn-secondary login-btn">Iniciar sesión</Button>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link href="/registro" style={{ color: 'var(--primaryColor)' }}>
                      Crear cuenta
                    </Link>
                    <button
                      style={{ color: 'var(--primaryColor)', backgroundColor: 'transparent', border: 'none' }}
                      // onClick={() => console.log('recuperar pass')}
                      type="button"
                    >
                      Olvidé mi contraseña
                    </button>
                  </div>
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
