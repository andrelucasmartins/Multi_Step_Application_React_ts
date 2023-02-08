import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@components/Button";
import { GroupButtons } from "@components/GroupButtons";
import { GroupInputs } from "@components/GroupInputs";

import { Input } from "@components/Input";
import { StepContext } from "@contexts/StepContext";
import { Form } from "./styles";

const formSchema = z.object({
  zipcode: z.string().min(1, { message: "Preencha seu cep" }),
  street: z.string().min(1, { message: "Insira seu (Rua/Av/Logradouro)." }),
  number: z.string().min(1, { message: "Número é obrigatório" }),
  city: z.string(),
  neighborhood: z.string(),
  referencePoint: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SecondStep() {
  const { setCurrentStep, userData, setUserData } = useContext(StepContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onFormSubmit = (data: FormValues) => {
    setUserData({ ...userData, ...data });
    setCurrentStep(3);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <GroupInputs gap={60} share={2}>
        <Input
          name="zipcode"
          label="Cep"
          value={userData["zipcode"]}
          errors={errors}
          register={register}
        />
        <Input
          name="street"
          label="Rua"
          value={userData["street"]}
          errors={errors}
          register={register}
        />
      </GroupInputs>
      <GroupInputs gap={60} share={2}>
        <GroupInputs gap={8} share={2}>
          <Input
            name="number"
            label="Número"
            value={userData["number"]}
            errors={errors}
            register={register}
          />

          <Input
            name="city"
            label="Cidade"
            value={userData["city"]}
            errors={errors}
            register={register}
          />
        </GroupInputs>
        <Input
          name="neighborhood"
          label="Bairro"
          value={userData["neighborhood"]}
          errors={errors}
          register={register}
        />
      </GroupInputs>
      <Input
        name="referencePoint"
        label="Ponto de referência"
        value={userData["referencePoint"]}
        errors={errors}
        register={register}
      />
      <GroupButtons>
        <Button secondary onClick={() => setCurrentStep(1)}>
          Anterior
        </Button>
        <Button type="submit">Próxima passo</Button>
      </GroupButtons>
    </Form>
  );
}
