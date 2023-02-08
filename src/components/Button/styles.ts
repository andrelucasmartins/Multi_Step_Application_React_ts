import styled from "styled-components";

interface ButtonProps {
  secondary?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${({ theme, secondary }) =>
    !secondary ? theme.colors.purple : theme.colors.gray[400]};
  width: 14.125rem;
  height: 3.375rem;

  border: 0;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.white};

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(1.2);
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
