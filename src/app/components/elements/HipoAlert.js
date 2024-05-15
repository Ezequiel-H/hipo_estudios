'use client';

import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import styled from '@emotion/styled';

function HipoAlert({ title, message, variant }) {
  const [show, setShow] = useState(true);

  const PersonalizedAlert = styled(Alert)`
        background-color: ${variant === 'primary' ? 'var(--primaryColor)!important' : 'var(--quartyColor)!important'};
        color: ${variant === 'primary' ? 'white!important' : 'var(--primaryColor)!important'};
        border: ${variant === 'primary' ? '1px solid var(--primaryColor)!important' : '1px solid var(--quartyColor)!important'};
        border-radius: 20px;
        padding: 20px;
        margin: 30px 0 20px 0;
        `;

  if (show) {
    return (
      <PersonalizedAlert variant="dark" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{message}</p>
      </PersonalizedAlert>
    );
  }
  return null;
}

export default HipoAlert;
