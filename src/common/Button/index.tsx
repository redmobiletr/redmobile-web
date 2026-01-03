import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, type = "button", disabled = false, ...props }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} type={type} disabled={disabled} {...props}>
    {children}
  </StyledButton>
);
