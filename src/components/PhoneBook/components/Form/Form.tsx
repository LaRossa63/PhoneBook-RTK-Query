import React from 'react';
import styled from 'styled-components';

import { Button, Input, Label } from 'components/Elements';
import { ErrorText } from 'components/Elements/ErrorText';

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  padding-bottom: 30px;
  gap: 20px;

  border-bottom: 2px solid brown;
`;

export const Form = () => {
  return (
    <MyForm>
      <Label>
        Name:
        <Input />
      </Label>

      <Label>
        Number:
        <Input />
      </Label>

      <Button>create</Button>

      <ErrorText>Какой контакт уже есть!</ErrorText>
    </MyForm>
  );
};
