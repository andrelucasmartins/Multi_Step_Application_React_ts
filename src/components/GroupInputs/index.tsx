import { Container } from "./styles";

interface GroupInputsProps {
  children: JSX.Element | JSX.Element[];
  share?: number;
  gap?: number;
}

export const GroupInputs = ({
  children,
  share = 1,
  gap = 1,
}: GroupInputsProps) => {
  return (
    <Container gap={gap} share={share}>
      {children}
    </Container>
  );
};
