import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  Section,
  SectionTitle,
  StepsContainer,
  StepCard,
  StepTitle,
  StepDescription,
  StepTagline,
  ScrollIndicator,
  ScrollArrow,
} from "./styles";
import HowItWorksContent from "../../content/HowItWorksContent.json";

interface HowItWorksProps {
  t: TFunction;
}

const HowItWorks = ({ t }: HowItWorksProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="how-it-works">
      <Container>
        <Fade direction="up" triggerOnce>
          <Row justify="center">
            <Col lg={20} md={22} sm={24} xs={24}>
              <SectionTitle>{HowItWorksContent.title}</SectionTitle>
            </Col>
          </Row>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <StepsContainer>
            <Row gutter={[48, 48]} justify="center">
              {HowItWorksContent.steps.map((step, index) => (
                <Col key={index} lg={8} md={8} sm={24} xs={24}>
                  <StepCard>
                    <StepTitle>{step.number}. {step.title}</StepTitle>
                    {step.description && (
                      <StepDescription>{step.description}</StepDescription>
                    )}
                    {step.tagline && (
                      <StepTagline>{step.tagline}</StepTagline>
                    )}
                  </StepCard>
                </Col>
              ))}
            </Row>
          </StepsContainer>
        </Fade>

        <Fade direction="up" triggerOnce delay={300}>
          <ScrollIndicator>
            <ScrollArrow 
              onClick={() => {
                const nextSection = document.getElementById("product");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ScrollArrow>
          </ScrollIndicator>
        </Fade>
      </Container>
    </Section>
  );
};

export default withTranslation()(HowItWorks);

