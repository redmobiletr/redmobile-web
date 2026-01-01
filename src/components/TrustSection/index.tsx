import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  Section,
  SectionTitle,
  TrustItemsContainer,
  TrustItem,
  TrustItemTitle,
  TrustItemDescription,
  MicroText,
} from "./styles";
import TrustContent from "../../content/TrustContent.json";

interface TrustSectionProps {
  t: TFunction;
}

const TrustSection = ({ t }: TrustSectionProps) => {
  return (
    <Section id="trust">
      <Container>
        <Fade direction="up" triggerOnce>
          <Row justify="center">
            <Col lg={20} md={22} sm={24} xs={24}>
              <SectionTitle>{TrustContent.title}</SectionTitle>
            </Col>
          </Row>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <TrustItemsContainer>
            <Row gutter={[48, 48]} justify="center">
              {TrustContent.items.map((item, index) => (
                <Col key={index} lg={8} md={8} sm={24} xs={24}>
                  <TrustItem>
                    <TrustItemTitle>{item.title}</TrustItemTitle>
                    <TrustItemDescription>{item.description}</TrustItemDescription>
                  </TrustItem>
                </Col>
              ))}
            </Row>
          </TrustItemsContainer>
        </Fade>

        {TrustContent.microText && (
          <Fade direction="up" triggerOnce delay={200}>
            <Row justify="center">
              <Col lg={20} md={22} sm={24} xs={24}>
                <MicroText>{TrustContent.microText}</MicroText>
              </Col>
            </Row>
          </Fade>
        )}
      </Container>
    </Section>
  );
};

export default withTranslation()(TrustSection);

