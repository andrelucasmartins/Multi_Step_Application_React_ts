import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@components/Button";
import { ErrorMessages } from "@components/ErrorMessage";
import { GroupButtons } from "@components/GroupButtons";
import { GroupInputs } from "@components/GroupInputs";
import { Textarea } from "@components/Textarea";

import { StepContext } from "@contexts/StepContext";

import { Form } from "./styles";

const formSchema = z.object({
  aboutYou: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ThirdStep() {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(StepContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onFormSubmit = (data: FormValues) => {
    setUserData({ ...userData, ...data });
    submitData();
    setCurrentStep(4);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <GroupInputs>
        <Textarea
          name="aboutYou"
          label="Nos conte mais sobre você"
          value={userData["aboutYou"]}
          register={register}
        />
        <ErrorMessages errors={errors} name="aboutYou" />
      </GroupInputs>
      <GroupButtons>
        <Button secondary onClick={() => setCurrentStep(2)}>
          Anterior
        </Button>

        <Button type="submit">Próxima passo</Button>
      </GroupButtons>
    </Form>
  );
}
