import { StyledTextArea, StyledContainer } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, value }: InputProps) => (
  <StyledContainer>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value || ""}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
