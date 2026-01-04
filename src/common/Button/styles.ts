import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string; disabled?: boolean }>`
  background: ${(p) => (p.disabled ? "#cccccc" : p.color || "#D90416")};
  color: ${(p) => (p.disabled ? "#666666" : p.color ? "#D90416" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  border: 1px solid ${(p) => (p.disabled ? "#cccccc" : "#edf3f5")};
  border-radius: 4px;
  padding: 13px 0;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(p) => (p.disabled ? "none" : "0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(217, 4, 22, 0.15)")};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 11px 0;
    max-width: 160px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px 0;
    max-width: 140px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 0.8rem;
    padding: 9px 0;
    max-width: 130px;
  }

  &:hover,
  &:active,
  &:focus {
    ${(p) =>
      !p.disabled &&
      `
      color: #fff;
      border: 1px solid #D90416;
      background-color: #D90416;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(217, 4, 22, 0.2);
      transform: translateY(-1px);
    `}
  }
`;
