'use client';

import React, { useState } from 'react';
import {
  Container, Button, Row, Col, Form, Table,
} from 'react-bootstrap';
import styled from '@emotion/styled';
import Layout from '@/app/components/general/Layout';
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

const Boton = styled(Button)`
    padding: 5px;
    margin-right: 10px;
    background-color: transparent;
    &:hover {
        transform: scale(1.3);
    }
`;

const QuestionBox = styled(Row)`
    border-bottom: 1px solid var(--tertiaryColor);
    padding: 10px 0;
    margin: 10px 0;
    font-size: 18px;
`;

function PeachForm() {
  const [answers, setAnswers] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
  });
  return (
    <Form>
      <Area>

        {PEACHdata[0].map((question, index) => (
          <QuestionBox key={index}>
            <Col xs={12} sm={12} md={9} lg={10}>
              <label>{question}</label>
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
              <label>{question}</label>
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

    </Form>
  );
}

export default PeachForm;
