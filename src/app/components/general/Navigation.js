import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
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
    color: var(--primaryColor);
    font-size: 18px;
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
    margin: auto 8px;

`;

const DropdownNavigation = styled(NavDropdown)`
    margin: auto 0;
    a {
        color: var(--primaryColor)!important;
        font-size: 18px!important;
        text-align: right;
    }

`;

const Navigation = () => {
    return (
        <Area>
            <Navbar expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand href="#home" className="mr-auto">+Audigital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkNavigation href="/home">INICIO</LinkNavigation>
                    <LinkNavigation href="/ver-mas">VER MAS</LinkNavigation>
                    <DropdownNavigation align="end" title="ESTUDIOS">
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria/nueva">AUDIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/logoaudiometria">LOGOAUDIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/timpanometria">TIMPANOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/impedanciometria">IMPEDANCIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/potenciales-evocados">POTENCIALES EVOCADOS</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/otoemisiones">OTOEMISIONES</NavDropdown.Item>
                    </DropdownNavigation>
                    <DropdownNavigation align="end" title="CUESTIONARIOS">
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/peach">PEACH</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/sp-ssq12">Sp-SSQ12</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/venderbilt">Vanderbilt</NavDropdown.Item>
                    </DropdownNavigation>
                    <DropdownNavigation
                        align="end"
                        title={<img src={'/img/web/n_perfil_usuario.svg'} alt="Icono del perfil"  />}
                    >
                            <NavDropdown.Item className='btn btn-secondary mb-1' href="/mis-pacientes">MIS PACIENTES</NavDropdown.Item>
                            <NavDropdown.Item className='btn btn-secondary mb-1' href="/mi-cuenta">MI CUENTA</NavDropdown.Item>
                            <NavDropdown.Item className='btn btn-secondary mb-1' href="/cerrar-sesion">CERRAR SESIÓN</NavDropdown.Item>
                    </DropdownNavigation>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Area>
    );
}
 
export default Navigation;