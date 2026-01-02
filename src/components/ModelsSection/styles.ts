import styled from "styled-components";

export const Section = styled("section")`
  padding: 10rem 0;
  background: #fff;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
  }
`;

export const SectionTitle = styled("h2")`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 1024px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SectionSubtitle = styled("p")`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 64px 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

export const ModelsContainer = styled("div")`
  margin: 0 0 64px 0;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 56px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 48px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const ModelCard = styled("div")`
  padding: 56px 48px;
  border-radius: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border: 2px solid #f0f0f0;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #D90416 0%, #ff4757 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(217, 4, 22, 0.08);
    border-color: #D90416;
    
    &::before {
      transform: scaleX(1);
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 48px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 32px;
    border-radius: 20px;
  }

  @media only screen and (max-width: 480px) {
    padding: 32px 24px;
    border-radius: 16px;
  }
`;

export const ModelTitle = styled("h3")`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px 0;
  font-family: Montserrat, sans-serif;
  color: #101726;
  letter-spacing: -0.01em;

  @media only screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 14px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 12px;
  }
`;

export const ModelSubtitle = styled("p")`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0 0 32px 0;
  font-family: Montserrat, sans-serif;
  color: #666;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 28px;
    padding-bottom: 16px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 24px;
    padding-bottom: 14px;
  }
`;

export const ModelDescription = styled("p")`
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 32px 0;
  font-family: Montserrat, sans-serif;
  color: #333;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const ModelFeatures = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

export const ModelFeatureItem = styled("li")`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 12px 0;
  padding-left: 28px;
  position: relative;
  font-family: Montserrat, sans-serif;
  color: #333;
  transition: color 0.2s ease;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #D90416 0%, #ff4757 100%);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(217, 4, 22, 0.2);
    flex-shrink: 0;
  }

  strong {
    font-weight: 600;
    color: #101726;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1024px) {
    line-height: 1.6;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 26px;
    line-height: 1.5;

    &::before {
      width: 18px;
      height: 18px;
      font-size: 10px;
      top: 2px;
      transform: none;
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
    padding-left: 24px;

    &::before {
      width: 16px;
      height: 16px;
      font-size: 9px;
    }
  }
`;

export const ModelMicroText = styled("p")`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  margin: 32px 0 0 0;
  padding-top: 24px;
  border-top: 2px solid #f0f0f0;
  font-family: Montserrat, sans-serif;
  color: #666;
  font-style: italic;
  text-align: center;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  padding: 20px;
  border-radius: 12px;
  margin-top: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 28px;
    padding: 18px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin-top: 24px;
    padding: 16px;
  }
`;

export const ScrollIndicator = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  padding: 0;

  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const ScrollArrow = styled("div")`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #D90416;
  border: 1px solid #D90416;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(217, 4, 22, 0.15);

  &:hover {
    background: #D90416;
    border-color: #D90416;
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(217, 4, 22, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

