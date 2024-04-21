import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p className="flex flex-col justify-center items-center">
      <label htmlFor={id} className="text-[#FEFEFF] text-sm">
        {label}
      </label>
      <input id={id} {...props} ref={ref} name={id} />
    </p>
  );
});

export default Input;
