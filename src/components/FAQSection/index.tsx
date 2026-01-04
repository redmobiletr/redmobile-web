import { Collapse } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  Section,
  SectionTitle,
  FAQContainer,
  MicroText,
} from "./styles";
import FAQContent from "../../content/FAQContent.json";

const { Panel } = Collapse;

interface FAQSectionProps {
  t: TFunction;
}

const FAQSection = ({ t }: FAQSectionProps) => {
  return (
    <Section id="faq">
      <Container>
        <Fade direction="up" triggerOnce>
          <SectionTitle>{FAQContent.title}</SectionTitle>
        </Fade>

        <Fade direction="up" triggerOnce delay={100}>
          <FAQContainer>
            <Collapse
              accordion
              expandIconPosition="end"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "16px",
              }}
            >
              {FAQContent.questions.map((item, index) => (
                <Panel
                  header={
                    <span style={{ 
                      fontSize: "18px", 
                      fontWeight: 600,
                      fontFamily: "Montserrat, sans-serif",
                      color: "#101726"
                    }}>
                      {item.question}
                    </span>
                  }
                  key={index}
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "1.7",
                    color: "#666",
                    fontFamily: "Montserrat, sans-serif",
                    padding: "8px 0",
                  }}>
                    {item.answer}
                  </div>
                </Panel>
              ))}
            </Collapse>
          </FAQContainer>
        </Fade>

        {FAQContent.microText && (
          <Fade direction="up" triggerOnce delay={200}>
            <MicroText>{FAQContent.microText}</MicroText>
          </Fade>
        )}
      </Container>
    </Section>
  );
};

export default withTranslation()(FAQSection);

