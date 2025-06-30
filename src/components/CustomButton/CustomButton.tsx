import type { FC } from "react";
import type { CustomButtonProps } from "./CustomButton.types";
import { Button } from "../Button/Button";
import { customButtonStyle } from "./CustomButton.css";

export const CustomButton: FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="secondary"
      size="small"
      onClick={onClick}
      label={label}
      className={customButtonStyle}
    />
  );
};
