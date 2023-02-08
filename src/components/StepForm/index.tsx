import { FormHTMLAttributes, useContext } from "react";
import { Form } from "./styles";

import { Breadcrumb } from "@components/Breadcrumb";

import FirstStep from "@components/FirstStep";
import SecondStep from "@components/SecondStep";
import ThirdStep from "@components/ThirdStep";

import { ResultStep } from "@components/ResultStep";
import { StepContext } from "@contexts/StepContext";

interface StepFormProps extends FormHTMLAttributes<HTMLFormElement> {
  // children: ReactNode;
}

export function StepForm({ ...props }: StepFormProps) {
  const { currentStep, finalData } = useContext(StepContext);

  function showStep(step: number) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }

  return currentStep !== 4 ? (
    <Form>
      <h1>Criação de usuário</h1>
      <Breadcrumb activeStep={currentStep} />
      {showStep(currentStep)}
    </Form>
  ) : (
    <ResultStep />
  );
}
