import { Container, StyledInput } from "./styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, type = "text", value }: InputProps) => (
  <Container>
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      value={value || ""}
      onChange={onChange}
    />
  </Container>
);

export default Input;
