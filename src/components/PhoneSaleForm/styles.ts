import styled from "styled-components";

export const FormContainer = styled("div")`
  padding: 0;
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0;
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
  margin-top: 0;
  padding: 32px 24px;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
  border: 2px solid #D90404;
  border-radius: 16px;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(217, 4, 4, 0.1);

  @media only screen and (max-width: 768px) {
    padding: 24px 20px;
    margin-top: 0;
  }
`;

export const OfferLabel = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #D90404;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const OfferPrice = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #D90404;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const OfferDescription = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #666;
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.7;
  font-weight: 400;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(217, 4, 4, 0.2);

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
    padding-top: 16px;
  }
`;

export const OfferSubtext = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #666;
  margin-top: 0;
  line-height: 1.6;
  text-align: center;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ModelSelectionContainer = styled("div")`
  margin-top: 0;
  padding: 24px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  transition: all 0.2s ease;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-top: 0;
  }
`;

export const ModelSelectionTitle = styled("div")`
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #101726;
  margin-bottom: 20px;
  line-height: 1.4;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const RadioGroupWrapper = styled("div")`
  .ant-radio-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ant-radio-wrapper {
    font-family: 'Montserrat', sans-serif;
    padding: 16px;
    border-radius: 12px;
    transition: all 0.2s ease;
    margin-bottom: 0;
    border: 1px solid transparent;
    display: flex;
    align-items: flex-start;
    width: 100%;
    line-height: 1.5;
    
    &:hover {
      background-color: #fafafa;
      border-color: #e8e8e8;
    }
    
    &.ant-radio-wrapper-checked {
      background-color: #fafafa;
      border-color: #e8e8e8;
    }
    
    .ant-radio {
      margin-right: 12px;
      margin-top: 0;
      flex-shrink: 0;
      align-self: flex-start;
      line-height: 1.5;
      vertical-align: top;
      
      .ant-radio-inner {
        width: 18px;
        height: 18px;
        border-color: #d0d0d0;
        top: 0;
        margin-top: 0;
        vertical-align: top;
      }
      
      &.ant-radio-checked .ant-radio-inner {
        border-color: #D90404;
        
        &::after {
          width: 10px;
          height: 10px;
          background-color: #D90404;
          top: 4px;
          left: 4px;
        }
      }
    }
    
    > span:last-child {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      line-height: 1.5;
      vertical-align: top;
    }
  }
`;

export const PriceAnimationWrapper = styled("div")`
  transition: all 0.3s ease;
  
  &.animate {
    animation: priceChange 0.4s ease;
  }
  
  @keyframes priceChange {
    0% {
      opacity: 0.5;
      transform: translateY(4px);
    }
    50% {
      opacity: 0.8;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1.5rem;
`;

export const FormFieldsContainer = styled("div")`
  transition: opacity 0.4s ease, transform 0.4s ease, max-height 0.4s ease;
  opacity: 1;
  transform: translateY(0);
  max-height: 2000px;
  overflow: hidden;
  display: block;

  &.hidden {
    opacity: 0;
    transform: translateY(-20px);
    max-height: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
    display: none;
  }
`;

export const ModelSelectionWrapper = styled("div")`
  transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
  opacity: 0;
  transform: translateY(20px);
  max-height: 0;
  overflow: hidden;
  pointer-events: none;
  display: none;
  margin-top: 0;
  padding-top: 0;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    max-height: 2000px;
    pointer-events: all;
    display: block;
    margin-top: 0;
    padding-top: 0;
  }
`;

export const ButtonsRow = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 2rem;
  align-items: stretch;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  /* Button component wrapper - override margin-top */
  > button,
  > * {
    flex: 1;
    max-width: 180px;
    margin-top: 0 !important;
    
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

export const ResetButton = styled("button")`
  padding: 13px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #666;
  background: transparent;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  width: 100%;
  max-width: 180px;
  margin-top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  opacity: 1;

  &:hover {
    background: #fafafa;
    border-color: #d0d0d0;
    color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 13px 0;
  }
`;

export const PriceDisplayContainer = styled("div")`
  position: sticky;
  top: 100px;
  padding: 32px 24px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  align-self: flex-start;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: 0;
    margin-top: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 24px 20px;
    margin-top: 0;
  }
`;

export const PriceDisplayTitle = styled("h3")`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #101726;
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

export const PriceDisplayDescription = styled("p")`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #333;
  margin: 0 0 12px 0;
  line-height: 1.7;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const PriceDisplaySubtext = styled("p")`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #666;
  margin: 0;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

