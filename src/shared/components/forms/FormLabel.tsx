import { cn } from "@/shared/utils/cn.util";
import { LabelHTMLAttributes } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel = (props: Props) => {
  const { className, children, htmlFor } = props;

  return (
    <label className={cn("block", className)} {...props}>
      {children}
    </label>
  );
};

export default FormLabel;
