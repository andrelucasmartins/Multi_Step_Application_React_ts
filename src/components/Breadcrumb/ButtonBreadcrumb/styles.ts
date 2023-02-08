import styled from "styled-components";

interface ButtonProps {
  activeStep: number;
  active: number;
}

export const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.0625rem;

  p {
    font-size: clamp(0.75rem, 0.5vw, 1rem);
  }

  @media (width <= 700px) {
    p {
      display: none;
    }
  }
`;

export const Button = styled.div<ButtonProps>`
  width: 50px;
  height: 50px;
  padding: 15px;

  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 50%;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    fill: ${({ theme, activeStep, active }) => {
      if (activeStep === active) {
        return theme.colors.purple;
      }

      if (active < activeStep) {
        return theme.colors.success[500];
      }

      return theme.colors.gray[400];
    }};
  }
`;
