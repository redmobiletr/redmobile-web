import styled from "styled-components";

export const FormContainer = styled("div")`
  padding: 3rem 0;
  max-width: 500px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0;
    max-width: 100%;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
`;

export const Label = styled("label")`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #101726;
  margin-bottom: 8px;
`;

export const SelectWrapper = styled("div")`
  .ant-select {
    width: 100%;
    
    .ant-select-selector {
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      height: 48px;
      font-family: 'Montserrat', sans-serif;
      
      &:hover {
        border-color: #d90404;
      }
    }
    
    &.ant-select-focused .ant-select-selector {
      border-color: #d90404;
      box-shadow: 0 0 0 2px rgba(217, 4, 4, 0.1);
    }
  }
`;

export const InfoBox = styled("div")`
  background: #e3f2fd;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
`;

export const InfoIcon = styled("span")`
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const InfoText = styled("p")`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #101726;
  margin: 0;
  line-height: 1.5;
`;

export const OfferPriceContainer = styled("div")`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
  border: 2px solid #d90404;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(217, 4, 4, 0.15);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(217, 4, 4, 0.2);
  }
`;

export const OfferLabel = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const OfferPrice = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #d90404;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const OfferSubtext = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #999;
  margin-top: 8px;
  font-style: italic;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

