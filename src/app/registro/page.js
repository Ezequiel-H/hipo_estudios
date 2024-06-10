'use client';

import React from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/app/components/general/Layout';

function Registrarse() {
  const createUser = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col xs={12} sm={12} md={5} lg={4} className="d-none d-sm-none d-lg-block">
              <img style={{ maxWidth: '100%' }} src="img/freedom/vertical/02.jpg" alt="Pajaro que simboliza la libertad de escuchar" />
            </Col>
            <Col className="text-center login-col">
              <h1>Registrarme</h1>
              <div className="login-form">
                <Form>
                  <Row>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Nombre"
                        type="text"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Apellido"
                        type="text"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Confirmar el email"
                        type="email"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Confirmar contraseña"
                        type="password"
                        className="text-input"
                        style={{ width: '97%' }}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Select aria-label="Seleccioná tu rol" className="text-input" style={{ width: '97%' }}>
                        <option selected disabled>Soy...</option>
                        <option value="aud">Audiólogo/a</option>
                        <option value="orl">Otorrinolaringólogo/a</option>
                        <option value="pac">Paciente</option>
                      </Form.Select>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Button type="submit" onClick={(e) => createUser(e)} style={{ width: '97%' }} className="btn btn-secondary login-btn">Crear cuenta</Button>
                    </Col>
                  </Row>

                  <div>
                    <Link href="/iniciar-sesion" style={{ color: 'var(--primaryColor)' }}>
                      Ya tengo cuenta, quiero iniciar sesión
                    </Link>
                  </div>
                </Form>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default Registrarse;
