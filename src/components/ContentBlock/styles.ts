import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")<{ isHero?: boolean }>`
  position: relative;
  padding: ${({ isHero }) => (isHero ? "8rem 0 6rem" : "10rem 0 8rem")};

  @media only screen and (max-width: 1024px) {
    padding: ${({ isHero }) => (isHero ? "4rem 0 3rem" : "4rem 0 4rem")};
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const Subtitle = styled("p")`
  font-size: 18px;
  font-weight: 600;
  color: #D90404;
  margin: 1.5rem 0 0 0;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")<{ isHero?: boolean }>`
  position: relative;
  max-width: ${({ isHero }) => (isHero ? "680px" : "540px")};

  @media only screen and (max-width: 1024px) {
    max-width: ${({ isHero }) => (isHero ? "580px" : "540px")};
  }

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
    max-width: 100%;
  }
`;

// Hero Typography Styles
export const HeroTitle = styled("h1")`
  font-size: 37px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0px 0px 32px;
  max-width: 680px;
  font-family: Montserrat, sans-serif;
  color: inherit;
  white-space: pre-line;

  @media only screen and (max-width: 1024px) {
    font-size: 32px;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0px 0px 28px;
    max-width: 580px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0px 0px 24px;
    max-width: 100%;
  }
`;

export const HeroBodyLarge = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.65;
  margin: 0px 0px 20px;
  max-width: 650px;
  font-family: Montserrat, sans-serif;
  white-space: pre-line;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.65;
    margin: 0px 0px 18px;
    max-width: 580px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.65;
    margin: 0px 0px 16px;
    max-width: 100%;
  }
`;

export const HeroBody = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.65;
  margin: 0px 0px 20px;
  max-width: 650px;
  font-family: Montserrat, sans-serif;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.65;
    margin: 0px 0px 18px;
    max-width: 580px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.65;
    margin: 0px 0px 16px;
    max-width: 100%;
  }
`;

export const HeroBodyTertiary = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.65;
  margin: 0px 0px 32px;
  max-width: 650px;
  font-family: Montserrat, sans-serif;
  white-space: pre-line;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.65;
    margin: 0px 0px 28px;
    max-width: 580px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.65;
    margin: 0px 0px 24px;
    max-width: 100%;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #8c1031;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  margin-left: -8px;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }

  button:last-child {
    margin-left: 0;
  }
`;

export const MicroText = styled("p")`
  font-size: 13px;
  color: #666;
  margin: 1rem 0 0 0;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SecondaryLink = styled("a")`
  font-size: 15px;
  color: #666;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #D90404;
    text-decoration: underline;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 1rem;
  }
`;

export const CTASupport = styled("p")`
  font-size: 13px;
  color: #666;
  margin: 8px 0 0 0;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  line-height: 1.4;
  white-space: pre-line;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin: 6px 0 0 0;
  }
`;

export const TrustAnchors = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin: 16px 0px 0px;
  font-size: 10px;
  color: rgb(102, 102, 102);
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  line-height: 1.5;
  
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px 16px;
    font-size: 10px;
    margin: 14px 0px 0px;
  }
`;

export const TrustAnchorItem = styled("span")`
  display: flex;
  align-items: center;
  
  &::before {
    content: "✓";
    margin-right: 6px;
    color: #4CAF50;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ImageCaption = styled("p")`
  font-size: 13px;
  color: #666;
  margin: 16px 0 0 0;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  line-height: 1.4;
  text-align: center;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin: 12px 0 0 0;
  }
`;

export const StaticScrollIndicator = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  padding: 0;

  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const StaticScrollArrow = styled("div")`
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
