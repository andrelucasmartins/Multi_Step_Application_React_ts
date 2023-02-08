import styled from "styled-components";

type ContainerProps = {
  share?: number;
  gap: number;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ share }) => share}, 1fr);
  gap: ${({ gap }) => gap / 16}rem;

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row dense;
    gap: 1.25rem;
  }
`;
