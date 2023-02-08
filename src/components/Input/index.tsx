import { ErrorMessages } from "@components/ErrorMessage";
import { InputControl } from "@components/InputControl";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  name: string;
  value?: string;
  errors: {};
  register: any;
}

export function Input({
  label,
  type = "text",
  name,
  value,
  errors,
  register,
}: InputProps) {
  return (
    <InputControl>
      <label htmlFor={name}>{label}</label>
      <input type={type} value={value} {...register(name)} />
      <ErrorMessages errors={errors} name={name} />
    </InputControl>
  );
}
