import { ButtonBreadcrumb } from "@components/Breadcrumb/ButtonBreadcrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { RiFileTextFill, RiUser5Fill } from "react-icons/ri";

import { Container } from "./styles";

interface BreadcrumbProps {
  activeStep: number;
}

export function Breadcrumb({ activeStep }: BreadcrumbProps) {
  return (
    <Container className="breadcrumb">
      <ButtonBreadcrumb
        activeStep={activeStep}
        active={1}
        icon={<RiUser5Fill />}
        text="Identificação do Usuário"
      />
      <ButtonBreadcrumb
        activeStep={activeStep}
        active={2}
        icon={<AiTwotoneHome />}
        text="Endereço do usuário"
      />
      <ButtonBreadcrumb
        activeStep={activeStep}
        active={3}
        icon={<RiFileTextFill />}
        text="Sobre você"
      />
    </Container>
  );
}
