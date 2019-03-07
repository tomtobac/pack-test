import * as React from "react";
import "./button.css";

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => (
  <button className="c-button" {...props}>
    {children}
  </button>
);
