import { Button } from "@components/Button";
import { StepContext } from "@contexts/StepContext";
import { useContext } from "react";
import { Container } from "./styles";

export const ResultStep = () => {
  const { finalData, setCurrentStep } = useContext(StepContext);

  const { name, email, street, number, zipcode } =
    finalData[finalData.length - 1];

  return (
    <Container>
      <h1>Usuário criado!</h1>

      <span>
        Name
        <h3>{name}</h3>
      </span>
      <span>
        Email
        <h3>{email}</h3>
      </span>
      <hr />
      <div>
        <span>
          Rua
          <h3>{street} </h3>
        </span>
        <span>
          Número
          <h3>{number}</h3>
        </span>
      </div>
      <span>
        Cep
        <h3>{zipcode}</h3>
      </span>

      <Button onClick={() => setCurrentStep(1)}>Novo usuário</Button>
    </Container>
  );
};
