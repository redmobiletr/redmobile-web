import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Container from "../../common/Container";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  ModelsContainer,
  ModelCard,
  ModelTitle,
  ModelSubtitle,
  ModelDescription,
  ModelFeatures,
  ModelFeatureItem,
  ModelMicroText,
  CTASection,
} from "./styles";
import ProductContent from "../../content/ProductContent.json";

interface ModelsSectionProps {
  t: TFunction;
}

const ModelsSection = ({ t }: ModelsSectionProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="product">
      <Container>
        <Fade direction="up" triggerOnce>
          <Row justify="center">
            <Col lg={20} md={22} sm={24} xs={24}>
              <SectionTitle>{ProductContent.title}</SectionTitle>
              {ProductContent.text && (
                <SectionSubtitle>{ProductContent.text}</SectionSubtitle>
              )}
            </Col>
          </Row>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <ModelsContainer>
            <Row gutter={[32, 32]} justify="center">
              <Col lg={12} md={12} sm={24} xs={24}>
                <ModelCard>
                  <ModelTitle>{ProductContent.models.korumali.title}</ModelTitle>
                  {ProductContent.models.korumali.subtitle && (
                    <ModelSubtitle>{ProductContent.models.korumali.subtitle}</ModelSubtitle>
                  )}
                  {ProductContent.models.korumali.description && (
                    <ModelDescription>{ProductContent.models.korumali.description}</ModelDescription>
                  )}
                  <ModelFeatures>
                    {ProductContent.models.korumali.features.map((feature, index) => (
                      <ModelFeatureItem key={index}>– {feature}</ModelFeatureItem>
                    ))}
                  </ModelFeatures>
                  <ModelMicroText>{ProductContent.models.korumali.microText}</ModelMicroText>
                </ModelCard>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <ModelCard>
                  <ModelTitle>{ProductContent.models.esnek.title}</ModelTitle>
                  {ProductContent.models.esnek.subtitle && (
                    <ModelSubtitle>{ProductContent.models.esnek.subtitle}</ModelSubtitle>
                  )}
                  {ProductContent.models.esnek.description && (
                    <ModelDescription>{ProductContent.models.esnek.description}</ModelDescription>
                  )}
                  <ModelFeatures>
                    {ProductContent.models.esnek.features.map((feature, index) => (
                      <ModelFeatureItem key={index}>– {feature}</ModelFeatureItem>
                    ))}
                  </ModelFeatures>
                  <ModelMicroText>{ProductContent.models.esnek.microText}</ModelMicroText>
                </ModelCard>
              </Col>
            </Row>
          </ModelsContainer>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <CTASection>
            <Button onClick={() => scrollTo("phone-sale-form")}>
              Cihazını Sat
            </Button>
          </CTASection>
        </Fade>
      </Container>
    </Section>
  );
};

export default withTranslation()(ModelsSection);

