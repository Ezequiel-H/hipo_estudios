'use client';

import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import HipoAlert from '../elements/HipoAlert';

import { PEACHdata } from './formsData';

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

function PeachForm() {
  // const [answers, setAnswers] = useState({
  //   q1: false,
  //   q2: false,
  //   q3: false,
  //   q4: '',
  //   q5: '',
  //   q6: '',
  //   q7: '',
  //   q8: '',
  //   q9: '',
  //   q10: '',
  //   q11: '',
  //   q12: '',
  //   q13: '',
  //   q14: '',
  //   q15: '',
  // });
  return (
    <Form>
      <HipoAlert
        title="Información importante a la hora de completar el PEACH"
        message="El siguiente formulario NO es una prueba, está diseñado para documentar la comunicación y escucha en niños. Al contestar cada una de las preguntas, tome en consideración la conducta de su hijo(a) durante la última semana."
        variant="secondary"
      />
      <Area>
        {PEACHdata[0].map((question, index) => (
          <QuestionBox key={index}>
            <Col xs={12} sm={12} md={9} lg={10}>
              <Form.Label>{question}</Form.Label>
            </Col>
            <Col xs={12} sm={12} md={3} lg={2}>
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
      </Area>

      <Area2>
        {PEACHdata[1].map((question, index) => (
          <QuestionBox key={index}>
            <Col xs={12} sm={12} md={9} lg={10}>
              <Form.Label>{question}</Form.Label>
            </Col>
            <Col xs={12} sm={12} md={3} lg={2} className="text-right">
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

export default PeachForm;
