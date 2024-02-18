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

const Navigation = () => {
    return (
        <Area>
            <Navbar expand="lg" className="" sticky="top" >
            <Container>
                <Navbar.Brand href="#home" className="mr-auto">+Audigital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/home">
                        <Button className="">INICIO</Button>
                    </Link>
                    <Link href="/ver-mas">
                        <Button className="btn btn-secondary" style={{marginLeft: '5px'}}>VER MAS</Button>
                    </Link>
                    <NavDropdown style={{padding: '0 12px', marginLeft: '5px'}} className="btn btn-secondary" title="ESTUDIOS" id="basic-nav-dropdown">
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">AUDIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">LOGOAUDIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">TIMPANOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">IMPEDANCIOMETRÍA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">POTENCIALES EVOCADOS</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">OTOEMISIONES</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{padding: '0 12px', marginLeft: '5px'}} className="btn btn-secondary" title="CUESTIONARIOS" id="basic-nav-dropdown">
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">PEACH</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">Sp-SSQ12</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">Vanderbilt</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{padding: '0 12px', marginLeft: '5px'}} className="btn btn-secondary" title={<img src={'/img/web/n_perfil_usuario.svg'} alt="Icono del perfil"  />} id="basic-nav-dropdown">
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">MIS PACIENTES</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">MI CUENTA</NavDropdown.Item>
                        <NavDropdown.Item className='btn btn-secondary mb-1' href="/audiometria">CERRAR SESIÓN</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Area>
    );
}
 
export default Navigation;