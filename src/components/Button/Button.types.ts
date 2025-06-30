export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "extraSmall" | "small" | "medium" | "large";
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
