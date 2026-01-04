import { Collapse } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  Section,
  SectionTitle,
  FAQContainer,
  QuestionText,
  AnswerText,
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
            >
              {FAQContent.questions.map((item, index) => (
                <Panel
                  header={<QuestionText>{item.question}</QuestionText>}
                  key={index}
                >
                  <AnswerText>{item.answer}</AnswerText>
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

