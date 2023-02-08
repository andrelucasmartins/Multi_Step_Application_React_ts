import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 250px;

  input {
    height: 44px;
    width: 100%;

    background: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 4px;
    border: 0;

    margin-top: 0.6875rem;
    padding: 4px 15px;

    transition: all 0.3s;
    border: 2px solid ${({ theme }) => theme.colors.gray[100]};
    outline: none;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.purple};
    }
  }
`;
