import styled from "styled-components";

export const Section = styled("section")`
  padding: 10rem 0;
  background: #fafafa;

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
  margin: 0 0 64px 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const TrustItemsContainer = styled("div")`
  margin: 0 0 48px 0;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const TrustItem = styled("div")`
  padding: 40px 32px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #f0f0f0;
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  @media only screen and (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const TrustItemTitle = styled("h3")`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 16px 0;
  font-family: Montserrat, sans-serif;
  color: inherit;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

export const TrustItemDescription = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const MicroText = styled("p")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  margin: 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  color: #666;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

