import React from 'react';
import styled from 'styled-components';

import { useDeleteContactMutation, useGetAllContactsQuery } from 'api';
import { Title, ErrorText, Button } from 'components/Elements';

const MyList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 30px 0 15px 5px;
  gap: 20px;
`;

const MyListItem = styled.li`
  font-size: 20px;
  font-weight: 500;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = () => {
  const {
    data,
    isLoading: isLoadingList,
    isError,
  } = useGetAllContactsQuery(undefined);

  const [deleteContact, { isLoading: isLoadingDelete }] =
    useDeleteContactMutation();

  const handleClickDelete = (id: string) => {
    deleteContact(id);
  };

  return (
    <>
      <MyList>
        {isLoadingList && <Title>Идёт загрузка...</Title>}
        {isError && <ErrorText>Ошибка!</ErrorText>}

        {data &&
          data.map((element) => (
            <MyListItem key={element.id}>
              <span>
                {element.name} : {element.number}
              </span>

              <Button
                isLoading={isLoadingDelete}
                onClick={() => handleClickDelete(element.id)}
              >
                X
              </Button>
            </MyListItem>
          ))}
      </MyList>
    </>
  );
};
