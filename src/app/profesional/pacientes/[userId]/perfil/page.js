'use client';

import React from 'react';
import {
  Container, Table,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';

const Area = styled.div`
  border: 7px solid var(--quartyColor);
  padding: 30px;
  border-radius: 30px;
  margin-top: 35px;
`;

function Perfil() {
  return (
    <Layout>
      <Container>
        <h1 className="title section1 pb-3">Marta Gomez</h1>
        <div>
          <p className="mb-0">
            Fecha de nacimiento:
            <strong>20/04/2000</strong>
            <br />
            Edad:
            <strong>23 años</strong>
            <br />
            Obra social:
            <strong>Swiss Medical</strong>
            (600006 029334 044 0010)
            <br />
            Email:
            <strong>marta@gomez.com</strong>
            <br />
            Celular:
            <strong>+549244434444</strong>
            <br />
          </p>
        </div>

        <Area>
          <h3 className="text-center color-black">Visitas</h3>

          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Estudios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>15/04/2022</td>
                <td>
                  <a className="visita-item" href="#logoaudiometria">
                    Audiometria
                  </a>
                  <a className="visita-item" href="#logoaudiometria">
                    Logoaudiometria
                  </a>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>15/04/2019</td>
                <td>
                  <a className="visita-item" href="/test">
                    Audiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Selección de audífonos
                  </a>
                  <a className="visita-item" href="/test">
                    PEACH
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>15/04/2018</td>
                <td>
                  <a className="visita-item" href="/test">
                    Audiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Logoaudiometria
                  </a>
                  <a className="visita-item" href="/test">
                    Timpanometría
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>15/04/2001</td>
                <td>
                  <a className="visita-item" href="/test">
                    Selección de audífonos
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Area>
      </Container>
    </Layout>
  );
}

export default Perfil;
