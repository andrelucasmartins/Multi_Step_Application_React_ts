import { TextareaHTMLAttributes } from "react";
import { TextAreaStyled } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value?: string;
  name: string;
  register: any;
}

export function Textarea({
  label,
  value,
  name,
  register,
  ...props
}: TextAreaProps) {
  return (
    <TextAreaStyled htmlFor={name}>
      {label}
      <textarea id={label} {...props} value={value} {...register(name)} />
    </TextAreaStyled>
  );
}
