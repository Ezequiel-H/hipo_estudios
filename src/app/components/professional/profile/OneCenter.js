import React from 'react';
import { Col } from 'react-bootstrap';
import styled from '@emotion/styled';

const Center = styled(Col)`
    background-color: var(--slowBackground);
    border: 1px solid var(--primaryColor);
    padding: 30px;
    margin: 10px!important;
    border-radius: 20px;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 20px;

`;

const Address = styled.p``;

const Actions = styled.div``;

function OneCenter({ center }) {
  return (
    <Center className="mx-auto text-center">
      <Title>{center.title}</Title>
      <Address>{center.address}</Address>
      <Actions>
        <p>Editar</p>
        <p>Eliminar</p>
      </Actions>
    </Center>
  );
}

export default OneCenter;
