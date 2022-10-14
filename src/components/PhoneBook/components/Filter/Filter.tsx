import React from 'react';
import styled from 'styled-components';

import { Input, Label } from 'components/Elements';

const Container = styled.div`
  margin-top: 30px;
`;

export const Filter = () => {
  return (
    <Container>
      <Label>
        Find contact by name
        <Input />
      </Label>
    </Container>
  );
};
