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
              <LinkNavigation href="/">Inicio</LinkNavigation>

              {userType !== USER_TYPES.PROFESSIONAL && (
              <LinkNavigation href="#" onClick={() => comingSoon()}>Buscar profesional</LinkNavigation>
              )}

              {
                userType === USER_TYPES.PROFESSIONAL && (
                  <>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Nuevo estudio">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/audiometria/nueva">AUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/logoaudiometria/nueva">LOGOAUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/timpanometria/nueva">TIMPANOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/impedanciometria/nueva">IMPEDANCIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/potenciales-evocados/nueva">POTENCIALES EVOCADOS</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/estudios/otoemision/nueva">OTOEMISIÓN</NavDropdown.Item>
                    </DropdownNavigation>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Nuevo formulario">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/cuestionarios/peach/nuevo">PEACH</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/cuestionarios/sp-ssq12/nuevo">Sp-SSQ12</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/seleccionar/cuestionarios/venderbilt/nuevo">Vanderbilt</NavDropdown.Item>
                    </DropdownNavigation>
                    <LinkNavigation href="/profesional/pacientes#nuevo">Nuevo paciente</LinkNavigation>

                  </>
                )
              }

              {
                userType === USER_TYPES.PROFESSIONAL ? (
                  <DropdownNavigation
                    align="end"
                    title={<img src="/img/web/n_perfil_usuario.svg" alt="Icono del perfil" />}
                  >
                    <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/perfil">Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item className="btn btn-primary mb-1" href="/profesional/pacientes">Mis pacientes</NavDropdown.Item>
                    <NavDropdown.Item className="btn btn-primary mb-1" onClick={() => logOut()}>Cerrar sesión</NavDropdown.Item>
                  </DropdownNavigation>
                ) : null
              }
              {
                userType === USER_TYPES.PATIENT ? (
                  <>
                    <DropdownNavigation className="btn btn-primary p-0" align="end" title="Estudios">
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/audiometria">AUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/logoaudiometria">LOGOAUDIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/timpanometria">TIMPANOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/impedanciometria">IMPEDANCIOMETRÍA</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/potenciales-evocados">POTENCIALES EVOCADOS</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-primary mb-1" href="/info/estudios/otoemision">OTOEMISIÓN</NavDropdown.Item>
                    </DropdownNavigation>

                    <LinkNavigation href="/perfil">Mis estudios</LinkNavigation>
                    <DropdownNavigation
                      align="end"
                      title={<img src="/img/web/n_perfil_usuario.svg" alt="Icono del perfil" />}
                    >
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/perfil">Mi perfil</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/perfil#estudios">Mis estudios</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" href="/professional-conect">Compartir estudios</NavDropdown.Item>
                      <NavDropdown.Item className="btn btn-secondary mb-1" onClick={() => logOut()}>Cerrar sesión</NavDropdown.Item>
                    </DropdownNavigation>
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
