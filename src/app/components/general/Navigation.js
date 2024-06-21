import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styled from '@emotion/styled';
import Link from 'next/link';
import { logOut } from '@/app/db/user';
import { USER_TYPES } from '@/app/constants/users';

const Area = styled.div`
  background-image: url('/img/web/header-bg.png');
  background-attachment: fixed;
`;

const LinkNavigation = styled(Link)`
  color: var(--slowYellow);
  font-size: 18px;
  margin-left: 25px;
  margin-top: auto;
  margin-bottom: auto;
  text-align:right;
  padding: 8px 0;
`;

const DropdownNavigation = styled(NavDropdown)`
  margin: auto 0;
      margin-left: 25px;

  a {
      color: var(--slowYellow)!important;
      font-size: 18px!important;
      text-align: right;
  }
`;

function Navigation({ userType }) {
  function comingSoon() {
    // eslint-disable-next-line no-alert
    alert('Función disponible próximamente.');
  }
  return (
    <Area>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto">Decibele</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userType !== USER_TYPES.PROFESSIONAL && (
              <LinkNavigation href="#" onClick={() => comingSoon()}>Buscar profesional</LinkNavigation>
              )}

              {
                userType === USER_TYPES.PROFESSIONAL && (
                  <>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Nuevo estudio">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/audiometria">AUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/logoaudiometria">LOGOAUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/timpanometria">TIMPANOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/impedanciometria">IMPEDANCIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/potenciales-evocados">POTENCIALES EVOCADOS</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/otoemision">OTOEMISIÓN</NavDropdown.Item>
                    </DropdownNavigation>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Nuevo formulario">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/peach">PEACH</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/SPSSQ12">Sp-SSQ12</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes/seleccionar/nuevo/vanderbilt">Vanderbilt</NavDropdown.Item>
                    </DropdownNavigation>
                    <LinkNavigation href="/profesional/pacientes#nuevo">Nuevo paciente</LinkNavigation>
                    <DropdownNavigation
                      align="end"
                      title={<img src="/img/web/n_perfil_usuario.svg" alt="Icono del perfil" />}
                    >
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/perfil">Mi perfil</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes">Mis pacientes</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" onClick={() => logOut()}>Cerrar sesión</NavDropdown.Item>
                    </DropdownNavigation>
                  </>
                )
              }
              {
                userType === USER_TYPES.PATIENT ? (
                  <>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Estudios">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/audiometria">AUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/logoaudiometria">LOGOAUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/timpanometria">TIMPANOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/impedanciometria">IMPEDANCIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/potenciales-evocados">POTENCIALES EVOCADOS</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/otoemision">OTOEMISIÓN</NavDropdown.Item>
                    </DropdownNavigation>

                    <LinkNavigation href="/paciente/perfil#estudios">Mis estudios</LinkNavigation>
                    <DropdownNavigation
                      align="end"
                      title={<img src="/img/web/n_perfil_usuario.svg" alt="Icono del perfil" />}
                    >
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/paciente/perfil">Mi perfil</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/paciente/perfil#estudios">Mis estudios</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/paciente/compartir">Compartir estudios</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" onClick={() => logOut()}>Cerrar sesión</NavDropdown.Item>
                    </DropdownNavigation>
                  </>
                ) : null
              }
              {
                userType === '' ? (
                  <>
                    <LinkNavigation href="/iniciar-sesion">Iniciar sesión</LinkNavigation>
                    <LinkNavigation href="/registro">Registrarme</LinkNavigation>
                  </>
                ) : null
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Area>
  );
}

export default Navigation;
