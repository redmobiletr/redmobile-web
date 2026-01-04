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

export const FAQContainer = styled("div")`
  max-width: 900px;
  margin: 0 auto 48px auto;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }

  .ant-collapse {
    background: #fff;
    border: none;
    border-radius: 16px;
  }

  .ant-collapse-item {
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      border-color: #D90404;
      box-shadow: 0 4px 12px rgba(217, 4, 4, 0.08);
    }

    &.ant-collapse-item-active {
      border-color: #D90404;
      box-shadow: 0 4px 16px rgba(217, 4, 4, 0.12);
    }
  }

  .ant-collapse-header {
    padding: 20px 24px !important;
    background: #fff;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: #fff5f5;
    }

    .ant-collapse-arrow {
      color: #D90404;
      font-size: 16px;
      transition: transform 0.3s ease;
    }
  }

  .ant-collapse-content {
    border-top: 1px solid #f0f0f0;
    background: #fff;
    border-radius: 0 0 12px 12px;
  }

  .ant-collapse-content-box {
    padding: 20px 24px 24px 24px !important;
  }
`;

export const QuestionText = styled("span")`
  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  color: #101726;
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AnswerText = styled("div")`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  font-family: Montserrat, sans-serif;
  padding: 0;

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

