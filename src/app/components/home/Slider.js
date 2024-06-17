import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';

const Area = styled.div`
  background-color: var(--slowBackground);
  h2 {
    margin: 20px 0 40px 0;
    font-size:40px;
    text-align:center;
  }
`;

const Info = styled.div`
  text-align: left;
  padding: 50px 0;
`;

const Cuadro = styled(Col)`
  div {
    // border: 3px solid var(--tertiaryColor);
    background-color: white;
    padding: 50px;
    border-radius: 30px;
    margin: 10px 0;
    max-width: 90%;
    transition: all .3s ease;
    &:hover {
      // background-color: var(--tertiaryColor);
    }
  }
  p.icon {
    font-size: 50px;
  }
  h5 {
    font-weight: bold;
    font-size: 25px;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`;

function Slider() {
  return (
    <Area>
      <Container>
        <Info>
          <h2>Los beneficios de digitalizar</h2>
          <Row style={{ marginTop: '40px' }}>
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Estudios ♾️</h5>
                <p>
                  No se rompen, pierden ni arrugan.
                  <br />
                  Siempre en tu computadora y celular.
                  <br />
                  Con o sin internet.
                </p>
              </div>
            </Cuadro>
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Historial clínico detallado</h5>
                <p>
                  Estudios, formularios, calibraciones, intervenciones,
                  informes de rehabilitación y demás.
                </p>
              </div>
            </Cuadro>
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Accesible para todos</h5>
                <p>
                  La información del paciente, compartida con él y todo su equipo profesional.
                </p>
              </div>
            </Cuadro>
            {/* <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Informes al instante</h5>
                <p>
                  Exportá los informes en PDF directo desde la plataforma.
                </p>
              </div>
            </Cuadro> */}
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Recordatorios al paciente</h5>
                <p>
                  Al terminar la visita podes registrar en cuanto tiempo el paciente
                  deberá volver al control y nosotros le avisamos.
                </p>
              </div>
            </Cuadro>
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Formularios digitales</h5>
                <p>
                  Los PDFs que hay que escanear y hacer malabares ahora digiales e interactivos.
                </p>
              </div>
            </Cuadro>
            <Cuadro xs={12} sm={12} md={6} lg={4}>
              <div>
                <h5>Cartilla de profesionales</h5>
                <p>
                  Pertenecé a la cartilla de profesionales, aumentando tu visibilidad.
                </p>
              </div>
            </Cuadro>
          </Row>
        </Info>
      </Container>
    </Area>
  );
}

export default Slider;
