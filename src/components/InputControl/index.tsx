import { Container } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const InputControl = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};
