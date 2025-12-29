import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
`;

export const FormField = styled("div")`
  margin-bottom: 1.5rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #d90404;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  line-height: 1.4;
  font-family: 'Montserrat', sans-serif;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  margin-top: 2rem;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
    text-align: center;
  }
`;

export const CheckboxContainer = styled("div")`
  margin-top: 1rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;

  &:hover {
    border-color: #d90404;
    background: #fff5f5;
  }
`;

export const CheckboxLabel = styled("label")`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin: 0;
  user-select: none;
`;

export const CheckboxInput = styled("input")`
  margin-right: 0.75rem;
  margin-top: 0.125rem;
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: #d90404;
  flex-shrink: 0;

  &:focus {
    outline: 2px solid #d90404;
    outline-offset: 2px;
  }
`;

export const CheckboxText = styled("span")`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  flex: 1;
`;

export const CheckboxError = styled("div")`
  margin-top: 0.5rem;
  padding-left: 1.75rem;
`;
