import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, Input, Label, ErrorText } from 'components/Elements';
import { useAddContactMutation } from 'api';
import { Contact } from 'types/types';
import { nanoid } from 'nanoid';

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  padding-bottom: 30px;
  gap: 20px;

  border-bottom: 2px solid brown;
`;

export const Form = () => {
  const [addContact, { isLoading, isError }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const clearInput = () => {
    setName('');
    setNumber('');
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newContact: Contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    await addContact(newContact);

    if (!isError) {
      clearInput();
    }
  };

  return (
    <MyForm onSubmit={handleSubmitForm}>
      <Label>
        Name:
        <Input value={name} onChange={handleChangeTitle} />
      </Label>

      <Label>
        Number:
        <Input value={number} onChange={handleChangeNumber} />
      </Label>

      <Button isLoading={isLoading}>create</Button>

      {isError && <ErrorText>Ошибка при добавление!</ErrorText>}
    </MyForm>
  );
};
