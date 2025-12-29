import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
`;

export const StyledTextArea = styled("textarea")`
  width: 100%;
  min-height: 120px;
  padding: 0.875rem 1rem;
  font-size: 0.9375rem;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  background: #ffffff;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  outline: none;
  resize: vertical;
  line-height: 1.6;

  &::placeholder {
    color: #999;
    font-weight: 400;
  }

  &:focus {
    border-color: #d90404;
    box-shadow: 0 0 0 3px rgba(217, 4, 4, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #c0c0c0;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
