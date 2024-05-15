'use client';

import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import HipoAlert from '../elements/HipoAlert';

import { VANDERBILTdata } from './formsData';

const Area = styled.div`
  border: 7px solid var(--tertiaryColor);
  padding: 30px;
  border-radius: 30px;
  margin-top: 35px;
`;

const Area2 = styled(Area)`
    border: 7px solid var(--quartyColor);
    margin-top: 30px;
    .input {
        margin: 10px;
        max-width: 95%;
        border: 1px solid transparent;
        background-color:  var(--tertiaryColor);
        border-radius: 25px;
        padding: 10px 15px;
    }
`;

const QuestionBox = styled(Row)`
    border-bottom: 1px solid var(--tertiaryColor);
    padding: 15px;
    margin: 15px;
    font-size: 18px;
    border-radius: 20px;
    transition: all .3s ease;
    &:hover {
      background-color: var(--slowBackground);
    }

    label {
      margin: 0;
      max-width: 90%;
    }
`;

function VanderbiltTeachersForm() {
  return (
    <Form>
      <HipoAlert
        title="Información importante a la hora de completar el formulario"
        message="A veces las personas se cansan de escuchar e intentar comprender. Nos gustaría saber cómo te sientes cuando escuchas en diferentes lugares. Lee cada frase y rodea con un círculo UNA respuesta, la que mejor describa la frecuencia con la que te sientes o actúas de esa manera en una SEMANA normal."
        variant="secondary"
      />

      <Area>
        {VANDERBILTdata.profesores.map((question, index) => (
          <QuestionBox key={index}>
            <Col xs={12} sm={12} md={8} lg={9}>
              <Form.Label>{question}</Form.Label>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Form.Select aria-label="Seleccionar escala del 0 a 4" required>
                <option disabled selected>Seleccionar</option>
                <option value="0">(0): Nunca</option>
                <option value="1">(1): Pocas veces</option>
                <option value="2">(2): A veces</option>
                <option value="3">(3): A menudo</option>
                <option value="4">(4): Casi siempre</option>
              </Form.Select>

            </Col>
          </QuestionBox>
        ))}
      </Area>
      <Area2>
        <p className="m-0 mb-2" style={{ fontSize: '22px' }}>Comentarios</p>
        <Row>
          <Col>
            <Form.Control type="textarea" placeholder="Por favor provea comentarios sobre cualquiera de las premisas anteriores" />
          </Col>
          <Col>
            <Button
              className="btn btn-secondary mx-3"
            >
              Enviar formulario
            </Button>
          </Col>
        </Row>
      </Area2>

    </Form>
  );
}

export default VanderbiltTeachersForm;
