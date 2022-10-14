import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const MyLabel = styled.label`
  font-size: 20px;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Label: FC<Props> = ({ children }) => {
  return (
    <>
      <MyLabel>{children}</MyLabel>
    </>
  );
};
