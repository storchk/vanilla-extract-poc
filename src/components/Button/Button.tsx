import type { FC } from "react";
import type { ButtonProps } from "./Button.types";
import { colors } from "./Button.styled";

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
}) => {
  return (
    <button onClick={onClick} className={colors[variant]}>
      {label}
    </button>
  );
};
