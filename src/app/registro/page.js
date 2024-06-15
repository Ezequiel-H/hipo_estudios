'use client';

import React, { useState } from 'react';
import {
  Container, Button, Col, Row, Form,
} from 'react-bootstrap';
import Link from 'next/link';
// import { swalAlert } from '../helpers';
// import { signUp } from '../db/user';
import Layout from '@/app/components/general/Layout';

function registrarse() {
  const [error, setError] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    email: '',
    email_verif: '',
    password: '',
    password_verif: '',
    rol: '',
  });
  async function signUpClick(e) {
    e.preventDefault();
    if (newUser.name === '' || newUser.surname === '' || newUser.email === '' || newUser.email_verif === '' || newUser.password === '' || newUser.password_verif === '' || newUser.rol === '') {
      setError('Todos los campos son obligatorios.');
    } else if (newUser.password !== newUser.password_verif) {
      setError('Las contraseñas no coinciden.');
    } else if (newUser.email !== newUser.email_verif) {
      setError('Los emails no coinciden.');
    // } else if (newUser.password.length < 6) {
    //   setError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setError('');
      // TODO: DB: Registrar en db a la persona
    }
  }
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSelect = (e) => {
    setNewUser({
      ...newUser,
      rol: e.target.value,
    });
  };
  return (
    <Layout>
      <Container>
        <div className="login-area">
          <Row>
            <Col xs={12} sm={12} md={5} lg={4} className="d-none d-sm-none d-md-none d-lg-block">
              <img style={{ maxWidth: '100%' }} src="img/freedom/vertical/02.jpg" alt="Pajaro que simboliza la libertad de escuchar" />
            </Col>
            <Col xs={12} sm={12} md={7} lg={8} className="text-center login-col">
              <h1>Registrarme</h1>
              <div className="login-form">
                <Form>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Form.Control
                        placeholder="Nombre"
                        type="text"
                        name="name"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Apellido"
                        name="surname"
                        type="text"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Confirmar el email"
                        type="email"
                        name="email_verif"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        name="password"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Control
                        placeholder="Confirmar contraseña"
                        type="password"
                        name="password_verif"
                        className="text-input"
                        required
                        style={{ width: '97%' }}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Form.Select
                        name="rol"
                        aria-label="Seleccioná tu rol"
                        className="text-input"
                        required
                        onChange={(e) => handleChangeSelect(e)}
                        style={{ width: '97%' }}
                      >
                        <option selected disabled>Soy...</option>
                        <option value="aud">Audiólogo/a</option>
                        <option value="orl">Otorrinolaringólogo/a</option>
                        <option value="pac">Paciente</option>
                      </Form.Select>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                      <Button type="submit" onClick={(e) => signUpClick(e)} style={{ width: '97%' }} className="btn btn-secondary login-btn">Crear cuenta</Button>
                    </Col>
                  </Row>

                  <div>
                    <Link href="/iniciar-sesion" style={{ color: 'var(--primaryColor)' }}>
                      Ya tengo cuenta, quiero iniciar sesión
                    </Link>
                    <p style={{ color: 'red!important', textAlign: 'center', fontWeight: 'bold' }}>
                      {error}
                    </p>
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

export default registrarse;
