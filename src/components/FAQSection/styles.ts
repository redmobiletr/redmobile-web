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

export const FAQContainer = styled("div")`
  max-width: 900px;
  margin: 0 auto 48px auto;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
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

