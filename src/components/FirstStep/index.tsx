import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { StepContext } from "@contexts/StepContext";

import { Button } from "@components/Button";
import { GroupButtons } from "@components/GroupButtons";
import { GroupInputs } from "@components/GroupInputs";
import { Input } from "@components/Input";

import { Form } from "./styles";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Preenche seu nome completo." }),
    password: z
      .string()
      .min(1, { message: "Cadastre uma senha." })
      .length(8, { message: "A senha deve ter exatamente 8 caracteres" }),
    confirmPassword: z.string().min(1, { message: "Confirme a senha." }),
    email: z
      .string()
      .min(1, { message: "Email é obrigatório" })
      .email({ message: "Este email não é válido." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function FirstStep() {
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
    setCurrentStep(2);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Input
        name="name"
        label="Nome"
        value={userData["name"]}
        errors={errors}
        register={register}
      />
      <GroupInputs share={2} gap={60}>
        <Input
          type="password"
          name="password"
          label="Senha"
          value={userData["password"]}
          errors={errors}
          register={register}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirmar Senha"
          value={userData["confirmPassword"]}
          errors={errors}
          register={register}
        />
      </GroupInputs>
      <GroupInputs share={2} gap={60}>
        <Input
          type="email"
          name="email"
          label="Email"
          value={userData["email"]}
          errors={errors}
          register={register}
        />
        <Input
          name="dateOfBirth"
          label="Data de nascimento"
          value={userData["dateOfBirth"]}
          errors={errors}
          register={register}
        />
      </GroupInputs>
      <GroupButtons>
        <Button type="submit">Próxima passo</Button>
      </GroupButtons>
    </Form>
  );
}
