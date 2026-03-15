import { cn } from "@/shared/utils/cn.util";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormInput = (props: Props) => {
  const { className } = props;

  return (
    <input
      {...props}
      className={cn("border border-slate-200 w-full p-2", className)}
    />
  );
};

export default FormInput;
