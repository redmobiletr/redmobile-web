import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
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
  ScrollIndicator,
  ScrollArrow,
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
            <Row gutter={[40, 40]} justify="center">
              <Col lg={12} md={12} sm={24} xs={24}>
                <ModelCard>
                  <ModelTitle>{ProductContent.models.redback.title}</ModelTitle>
                  {ProductContent.models.redback.subtitle && (
                    <ModelSubtitle>{ProductContent.models.redback.subtitle}</ModelSubtitle>
                  )}
                  {ProductContent.models.redback.description && (
                    <ModelDescription>{ProductContent.models.redback.description}</ModelDescription>
                  )}
                  <ModelFeatures>
                    {ProductContent.models.redback.features.map((feature, index) => (
                      <ModelFeatureItem key={index}>{feature}</ModelFeatureItem>
                    ))}
                  </ModelFeatures>
                  <ModelMicroText>{ProductContent.models.redback.microText}</ModelMicroText>
                </ModelCard>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <ModelCard>
                  <ModelTitle>{ProductContent.models.redgo.title}</ModelTitle>
                  {ProductContent.models.redgo.subtitle && (
                    <ModelSubtitle>{ProductContent.models.redgo.subtitle}</ModelSubtitle>
                  )}
                  {ProductContent.models.redgo.description && (
                    <ModelDescription>{ProductContent.models.redgo.description}</ModelDescription>
                  )}
                  <ModelFeatures>
                    {ProductContent.models.redgo.features.map((feature, index) => (
                      <ModelFeatureItem key={index}>{feature}</ModelFeatureItem>
                    ))}
                  </ModelFeatures>
                  <ModelMicroText>{ProductContent.models.redgo.microText}</ModelMicroText>
                </ModelCard>
              </Col>
            </Row>
          </ModelsContainer>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <ScrollIndicator>
            <ScrollArrow 
              onClick={() => {
                const nextSection = document.getElementById("how-it-works");
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

export default withTranslation()(ModelsSection);

