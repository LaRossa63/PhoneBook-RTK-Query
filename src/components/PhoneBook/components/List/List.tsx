import React from 'react';
import styled from 'styled-components';

const MyList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 30px 0 15px 5px;
  gap: 20px;
`;

const MyListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
`;

export const List = () => {
  return (
    <MyList>
      <MyListItem>1</MyListItem>
      <MyListItem>2</MyListItem>
      <MyListItem>3</MyListItem>
    </MyList>
  );
};
