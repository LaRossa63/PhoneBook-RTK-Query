import styled, { css } from 'styled-components';

export const Button = styled.button<{ isLoading?: boolean }>`
  font-size: 20px;

  padding: 5px;

  border: 1px solid #000;
  border-radius: 5px;

  ${(props) =>
    props.isLoading &&
    css`
      background: repeating-linear-gradient(
          -45deg,
          #fff,
          #fff 25px,
          #e2edc1 25px,
          #e2edc1 50px
        )
        fixed;
    `}
`;
