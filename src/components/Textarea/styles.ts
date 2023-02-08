import styled from "styled-components";

export const TextAreaStyled = styled.label`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 15.625rem;

  textarea {
    background: ${({ theme }) => theme.colors.gray[100]};
    height: 14.5rem;
    width: 100%;

    border-radius: 4px;
    border: 0;

    margin-top: 0.6875rem;
    padding: 0.25rem 0.9375rem;

    resize: none;
  }
`;
