import { ReactNode } from "react";

interface ButtonBreadcrumbProps {
  icon?: ReactNode;
  text: string;
  active: number;
  activeStep: number;
}

import { Button, Container } from "./styles";

export function ButtonBreadcrumb({
  icon,
  text,
  active,
  activeStep,
}: ButtonBreadcrumbProps) {
  return (
    <Container>
      <Button active={active} activeStep={activeStep}>
        {icon}
      </Button>
      <p>{text}</p>
    </Container>
  );
}
