'use client';

import React, { useState } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import HipoAlert from '../elements/HipoAlert';

import { SPSSQ12 } from './formsData';

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

function SpSSQ12Form() {
  const [answers, setAnswers] = useState({
    usingAids: '',
    oi: {
      years: '',
      months: '',
      weeks: '',
    },
    od: {
      years: '',
      months: '',
      weeks: '',
    },
  });

  setAnswers(...answers);
  return (
    <Form>
      <HipoAlert
        title="Información importante a la hora de completar el formulario"
        message="Esperamos que todas las preguntas estén relacionadas con su experiencia diaria, pero si alguna describe una situación no habitual para usted, marque con una cruz la casilla “NO aplica”. Rogamos escriba una nota junto a dicha pregunta explicando por qué no procede en su caso.."
        variant="secondary"
      />
      <Area>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} style={{ display: 'inline-grid' }}>
            <p>Seleccione una de las siguientes opciones:</p>
            <Form.Check
              inline
              label="NO uso audífono(s)"
              name="group-aids"
              type="radio"
              id="inline-radio-aids-0"
            />
            <Form.Check
              inline
              label="Uso solo un audífono (Oído izquierdo)"
              name="group-aids"
              type="radio"
              id="inline-radio-aids-1"
            />
            <Form.Check
              inline
              label="Uso solo un audífono (Oído derecho)"
              name="group-aids"
              type="radio"
              id="inline-radio-aids-2"
            />
            <Form.Check
              inline
              label="Uso dos audífonos (en ambos oídos)"
              name="group-aids"
              type="radio"
              id="inline-radio-aids-3"
            />
          </Col>
          {
                (answers.usingAids === '1' && answers.usingAids === '3') ? (
                  <Col xs={12} sm={6} md={6} lg={3}>
                    <p>
                      Oido
                      <strong>izquierdo</strong>
                      , ¿hace cuanto tiempo?
                    </p>
                    <div>
                      <Form.Control type="number" placeholder="años" />
                      <Form.Control type="number" placeholder="meses" />
                      <Form.Control type="number" placeholder="semanas" />
                    </div>
                  </Col>
                ) : null
            }
          {
                (answers.usingAids === '2' && answers.usingAids === '3') ? (
                  <Col xs={12} sm={6} md={6} lg={3}>
                    <p>
                      Oido
                      <strong>derecho</strong>
                      , ¿hace cuanto tiempo?
                    </p>
                    <div>
                      <Form.Control type="number" placeholder="años" />
                      <Form.Control type="number" placeholder="meses" />
                      <Form.Control type="number" placeholder="semanas" />
                    </div>
                  </Col>
                ) : null
            }
        </Row>
      </Area>
      <Area2>
        {SPSSQ12.sec3.map((question, index) => (
          <QuestionBox key={index}>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Form.Label>{question}</Form.Label>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Form.Check
                inline
                label="Si"
                name={`group-${index}`}
                type="radio"
                id={`inline-radio-${index}-yes`}
              />
              <Form.Check
                inline
                name={`group-${index}`}
                label="No"
                type="radio"
                id={`inline-radio-${index}-no`}
              />
            </Col>
          </QuestionBox>
        ))}
      </Area2>

      <Area>
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
      </Area>

    </Form>
  );
}

export default SpSSQ12Form;
