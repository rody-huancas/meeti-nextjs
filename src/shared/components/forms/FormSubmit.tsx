import { cn } from "@/shared/utils/cn.util";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormSubmit = (props: Props) => {
  const { className } = props;

  return (
    <input
      type="submit"
      className={cn(
        "bg-pink-600 w-full uppercase font-black text-white cursor-pointer mt-5 p-2",
        className,
      )}
      {...props}
    />
  );
};

export default FormSubmit;
