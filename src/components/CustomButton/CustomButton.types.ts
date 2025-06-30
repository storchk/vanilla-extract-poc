import type { ButtonProps } from "../Button/Button.types";
export type CustomButtonProps = Omit<ButtonProps, "variant" | "size">;
