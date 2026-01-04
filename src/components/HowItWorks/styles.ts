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
  margin: 0 0 80px 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 64px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 48px;
  }
`;

export const StepsContainer = styled("div")`
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const StepCard = styled("div")`
  padding: 40px 28px;
  border-radius: 16px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  @media only screen and (max-width: 1024px) {
    padding: 36px 24px;
    min-height: 180px;
  }

  @media only screen and (max-width: 768px) {
    padding: 32px 24px;
    min-height: auto;
  }
`;

export const StepNumber = styled("span")`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: #D90404;
  font-family: Montserrat, sans-serif;
  margin-right: 4px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StepTitle = styled("h3")`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 16px 0;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 14px;
  }
`;

export const StepTitleCenter = styled("h3")`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 48px 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: inherit;

  &::first-line {
    color: #D90404;
  }

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
`;

export const StepCardSpecial = styled("div")`
  padding: 0;
  background: transparent;
  border: none;
  height: auto;
`;

export const StepDescription = styled("p")`
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 12px 0;
  font-family: Montserrat, sans-serif;
  color: #333;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const StepTagline = styled("p")`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ModelsContainer = styled("div")`
  margin: 0;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const ModelCard = styled("div")`
  padding: 48px 40px;
  border-radius: 16px;
  background: #fff;
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
  margin: 0 0 20px 0;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 18px;
  }
`;

export const ModelDescription = styled("p")`
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 12px 0;
  font-family: Montserrat, sans-serif;
  color: #333;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ModelSubDescription = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0 0 32px 0;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
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

export const CTASection = styled("div")`
  text-align: center;
  margin: 4rem 0 0 0;

  @media only screen and (max-width: 768px) {
    margin: 3rem 0 0 0;
  }
`;


