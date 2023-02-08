import { ErrorMessage } from "@hookform/error-message";
import { MessageStyled } from "./styles";

interface ErrorMessageProps {
  errors: {};
  name: string;
}

export const ErrorMessages = ({ errors, name }: ErrorMessageProps) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <MessageStyled>{message}</MessageStyled>}
    />
  );
};
