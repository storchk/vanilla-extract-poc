import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import { buttonStyle } from "./Button.css";

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={[buttonStyle({ variant, size }), className]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </button>
  );
};
