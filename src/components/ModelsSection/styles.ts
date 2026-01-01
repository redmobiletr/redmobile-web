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

  @media only screen and (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const ModelCard = styled("div")`
  padding: 48px 40px;
  border-radius: 16px;
  background: #fafafa;
  border: 1px solid #e8e8e8;
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: #d0d0d0;
  }

  @media only screen and (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const ModelTitle = styled("h3")`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 12px 0;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const ModelSubtitle = styled("p")`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 24px 0;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
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
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 16px 0;
  padding-left: 0;
  font-family: Montserrat, sans-serif;
  color: #333;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 14px;
  }
`;

export const ModelMicroText = styled("p")`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin: 24px 0 0 0;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
    padding-top: 20px;
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

