import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  Section,
  SectionTitle,
  StepsContainer,
  StepCard,
  StepTitle,
  StepNumber,
  StepDescription,
  StepTagline,
  CTASection,
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
            <Row gutter={[24, 24]} justify="center">
              {HowItWorksContent.steps.map((step, index) => (
                <Col key={index} lg={6} md={6} sm={12} xs={24}>
                  <StepCard>
                    <StepTitle>
                      <StepNumber>{step.number}.</StepNumber> {step.title}
                    </StepTitle>
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
          <CTASection>
            <Button onClick={() => scrollTo("phone-sale-form")} data-gtm="cta_device_sell" data-cta="cihaz_sat">
              Nakite Çevir
            </Button>
          </CTASection>
        </Fade>
      </Container>
    </Section>
  );
};

export default withTranslation()(HowItWorks);

