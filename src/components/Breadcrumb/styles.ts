import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.0625rem;

  @media (width <= 700px) {
    justify-content: space-between;
  }
`;
