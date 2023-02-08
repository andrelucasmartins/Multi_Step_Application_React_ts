import styled from "styled-components";

export const Form = styled.main`
  width: clamp(20rem, 100vw, 54.6875rem);
  background: ${({ theme }) => theme.colors.white};

  border: 0.125rem solid #f0f2f6;
  box-shadow: 0 0.25rem 1.9375rem #eef1f5;
  border-radius: 0.5rem;
  /* padding: 3.3125rem 5rem 1.625rem 5rem;
  padding: 2.8125rem 1.875rem; */
  margin: 1.625rem 1.8125rem;
  padding: 0;
  margin-top: 8.8125rem;
  margin-left: auto;

  h1 {
    margin: 3.5rem auto 0 3.75rem;
  }

  .breadcrumb {
    padding: 2.9375rem 3.75rem;
  }

  form {
    width: clamp(21.25rem, 100vw, 100%);
    display: grid;
    align-items: center;
    gap: 1.625rem;

    padding: 0 3.75rem;

    /* padding: 3.3125rem 5rem 1.625rem 5rem; */
  }

  @media (width <= 920px) {
    width: clamp(21.25rem, calc(100vw - 5rem), 100%);
    margin-left: auto;
  }

  @media (width <= 630px) {
    width: clamp(21.25rem, calc(100vw - 1.5px), 100%);
    margin-left: auto;
  }
`;
