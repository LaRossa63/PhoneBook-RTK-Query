import React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Elements';
import { Filter, Form, List } from './components';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Border = styled.div`
  width: fit-content;
  height: fit-content;

  margin-top: 100px;
  padding: 10px;

  border: 1px solid #000;
  border-radius: 5px;
`;

export const PhoneBook = () => {
  return (
    <Container>
      <Border>
        <Title>PhoneBook</Title>

        <Form />

        <Filter />

        <List />
      </Border>
    </Container>
  );
};
