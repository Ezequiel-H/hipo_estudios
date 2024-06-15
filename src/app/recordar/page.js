'use client';

import React, { useState, useEffect } from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';
import Link from 'next/link';

import Layout from '@/app/components/general/Layout';
// import { signIn } from '../db/user';

function Recordar() {
  const [password, setPassword] = useState('');
  const [verification, setVerification] = useState(false);

  useEffect(() => {
    // verifyTokenInDB() and get data

    // eslint-disable-next-line
  }, []);

  const verifyPassword = async () => {
    // TODO: DB guardar en la db un token que tenga fecha y el email,
    // para poder enviarselo por email y que la persona entre a esta pantalla con un parametro get
    // de ese token y se decodifica para restablecer la contrasena.
    // Asi lo hacia yo, podemos usar otras maneras y
    // tambien usar Auth0 si puede estar bueno, nunca lo sue.

    // if(password === verification) { checkTokenAndChangePassword() sendToLogin() }
  };

  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col className="text-center login-col">
              <h1>Cambiar contraseña</h1>
              <div className="login-form">
                <Form>

                  <Form.Control
                    placeholder="Contraseña"
                    type="password"
                    className="text-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control
                    placeholder="Repetir contraseña"
                    type="password_verif"
                    className="text-input"
                    value={verification}
                    onChange={(e) => setVerification(e.target.value)}
                  />
                  <Button onClick={verifyPassword} className="btn btn-secondary login-btn">
                    Cambiar contraseña
                  </Button>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <Link href="/registro" style={{ color: 'var(--primaryColor)' }}>
                      Crear cuenta
                    </Link>
                    <Link href="/iniciar-sesion" style={{ color: 'var(--primaryColor)' }}>
                      Iniciar sesión
                    </Link>

                  </div>
                </Form>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} className="d-none d-sm-none d-lg-block">
              <img style={{ maxWidth: '100%' }} src="img/freedom/vertical/01.jpg" alt="Pajaro en el cielo" />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default Recordar;
