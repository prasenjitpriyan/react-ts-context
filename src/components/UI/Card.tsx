// Example: A Card component that has multiple "slots" for content
// Main slot => children prop
// Actions slot => actions prop

import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  // "actions" is like an extra "slot" of this component
  // It's the same type as the children prop, since we expect JSX code as a prop value
  actions: ReactNode;
};

export const Card = ({ title, children, actions }: CardProps) => {
  return (
    <section className="bg-blue-200 p-5 w-[70%] flex flex-col justify-center items-center gap-2 rounded-xl">
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
};

// Example Usage:
export const Demo = () => {
  return (
    <Card
      title="My Card"
      actions={
        <button
          className="bg-red-200 px-8 py-2 rounded-md text-gray-800 hover:shadow-lg"
          onClick={() => console.log("Button clicked!")}
        >
          Click Me!
        </button>
      }
    >
      <p>Some content</p>
    </Card>
  );
};
