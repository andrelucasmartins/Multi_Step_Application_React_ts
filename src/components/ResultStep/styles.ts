import styled from "styled-components";

export const Container = styled.div`
  width: clamp(20rem, 100vw, 34.0625rem);
  background: ${({ theme }) => theme.colors.white};

  border: 2px solid #f0f2f6;
  box-shadow: 0px 4px 31px #eef1f5;
  border-radius: 8px;

  margin-top: 8.8125rem;
  padding: 2.375rem 2.5rem;

  display: grid;
  grid-gap: 1.6875rem;

  h1 {
    width: 100%;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 1rem;
    line-height: 1.5rem;

    h3 {
      color: ${({ theme }) => theme.colors.black};
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }

  hr {
    height: 1px;
    color: #f0f2f6;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12.125rem;
  }

  button {
    margin-top: 8.625rem;
    width: 100%;
  }
`;
