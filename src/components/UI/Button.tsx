import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    return (
      <a
        {...props}
        className="bg-green-200 px-8 py-2.5 rounded-md text-gray-800 hover:shadow-lg"
      ></a>
    );
  }

  return (
    <button
      {...props}
      className="bg-[#277B90] px-8 py-2 rounded-md text-[#FEFEFF] hover:shadow-lg"
    ></button>
  );
};

export default Button;
