import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styled from '@emotion/styled';
import Link from 'next/link';

const Area = styled.div`
    background-image: url('/img/web/header-bg.png');
    background-attachment: fixed;
`;

const LinkNavigation = styled(Link)`
    color: var(--slowYellow);
    font-size: 18px;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    text-align:right;
    padding: 8px 0;

`;

const DropdownNavigation = styled(NavDropdown)`
    margin: auto 0;
    a {
        color: var(--slowYellow)!important;
        font-size: 18px!important;
        text-align: right;
    }

`;

function Navigation() {
  return (
    <Area>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto">Decibele</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkNavigation href="/">INICIO</LinkNavigation>
              <LinkNavigation href="/ver-mas">VER MAS</LinkNavigation>
              <DropdownNavigation align="end" title="ESTUDIOS">
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/audiometria/nueva">AUDIOMETRÍA</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/logoaudiometria/nueva">LOGOAUDIOMETRÍA</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/timpanometria/nueva">TIMPANOMETRÍA</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/impedanciometria/nueva">IMPEDANCIOMETRÍA</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/potenciales-evocados/nueva">POTENCIALES EVOCADOS</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/estudios/otoemision/nueva">OTOEMISIÓN</NavDropdown.Item>
              </DropdownNavigation>
              <DropdownNavigation align="end" title="CUESTIONARIOS">
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/cuestionarios/peach/nuevo">PEACH</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/cuestionarios/sp-ssq12/nuevo">Sp-SSQ12</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/idDeEzequiel123123/cuestionarios/venderbilt/nuevo">Vanderbilt</NavDropdown.Item>
              </DropdownNavigation>
              <DropdownNavigation
                align="end"
                title={<img src="/img/web/n_perfil_usuario.svg" alt="Icono del perfil" />}
              >
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/profesional/pacientes">MIS PACIENTES</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/profesional/perfil/122">MI CUENTA</NavDropdown.Item>
                <NavDropdown.Item className="btn btn-secondary mb-1" href="/cerrar-sesion">CERRAR SESIÓN</NavDropdown.Item>
              </DropdownNavigation>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Area>
  );
}

export default Navigation;
