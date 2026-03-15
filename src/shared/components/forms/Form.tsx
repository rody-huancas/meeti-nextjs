import { cn } from "@/shared/utils/cn.util";
import { FormHTMLAttributes } from "react";

type Props = FormHTMLAttributes<HTMLFormElement>;

const Form = (props: Props) => {
  const { className, children } = props;

  return (
    <form {...props} className={cn("mt-10 space-y-3", className)}>
      {children}
    </form>
  );
};

export default Form;
