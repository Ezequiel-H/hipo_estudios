import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';

const Area = styled.div`
    background-color: var(--slowBackground);
    color: var(--primaryColor);
    border-top: 3px solid var(--primaryColor);
`;

const Box = styled.div`
    max-width: 90%;
    text-align: center;
    margin: 10px auto;
    p {
        transition: all .3s ease;
        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }

`;

function Estudios() {
  return (
    <Area>
      <Container className="pb-5">
        <p className="title text-center pt-5 mb-5" style={{ fontSize: '40px' }}>
          Estudios
        </p>
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={2} md={4} xs={6}>
            <Box>
              <p>Audiometria</p>
            </Box>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <Box>
              <p>Logoaudiometria</p>
            </Box>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <Box>
              <p>Impedanciometria</p>
            </Box>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <Box>
              <p>Timpanometria</p>
            </Box>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <Box>
              <p>Potenciales evocados</p>
            </Box>
          </Col>
        </Row>
        <p className="title text-center pt-5 mb-5" style={{ fontSize: '40px' }}>
          Formularios
        </p>
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={4} md={4} xs={12}>
            <Box>
              <p>
                PEACH
                <br />
                Escala de Evaluación de los Padres sobre el Desempeño Auditivo/Oral Infantil
              </p>
            </Box>
          </Col>
          <Col lg={4} md={4} xs={6}>
            <Box>
              <p>
                Sp-SSQ12
                <br />
                Habla, Audición Espacial y Cualidades Auditivas
              </p>
            </Box>
          </Col>
          <Col lg={4} md={4} xs={6}>
            <Box>
              <p>
                Vanderbilt
                <br />
                Fatiga pediátrica
              </p>
            </Box>
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default Estudios;
