import { LabelHTMLAttributes, ReactNode } from "react";
import { LabelStyled } from "./styles";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
  return <LabelStyled {...props}>{children}</LabelStyled>;
}
