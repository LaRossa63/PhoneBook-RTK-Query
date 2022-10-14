import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BaseStyle } from 'theme/BaseStyle';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <BaseStyle>{children}</BaseStyle>
      </Provider>
    </>
  );
};
