import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useEffect, useRef } from "react";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { 
  ContactContainer, 
  FormGroup, 
  Span, 
  ButtonContainer, 
  FormField,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  CheckboxText,
  CheckboxError
} from "./styles";
import { useContactForm } from "../../context/ContactFormContext";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, setMessageValue, isSubmitting } = useForm(validate);
  const { message: contextMessage, messageKey } = useContactForm();

  // Track last message key to prevent unnecessary updates
  const lastMessageKeyRef = useRef(0);
  
  // Update message when context message or key changes
  useEffect(() => {
    // Only update if message key changed (new message) or message content changed
    if (contextMessage && contextMessage.trim() !== "" && messageKey !== lastMessageKeyRef.current) {
      // Set the message value directly
      setMessageValue(contextMessage);
      lastMessageKeyRef.current = messageKey;
    }
  }, [contextMessage, messageKey, setMessageValue]);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <FormField>
                <Input
                  type="text"
                  name="name"
                  placeholder="Adın Soyadın"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <ValidationType type="name" />}
              </FormField>

              <FormField>
                <Input
                  type="text"
                  name="email"
                  placeholder="E-posta adresin"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                {errors.email && <ValidationType type="email" />}
              </FormField>

              <FormField>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefon numaran (opsiyonel)"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                {errors.phone && <ValidationType type="phone" />}
              </FormField>

              <FormField>
                {contextMessage && contextMessage.trim() !== "" && (
                  <div style={{ 
                    fontSize: "12px", 
                    color: "#666", 
                    marginBottom: "8px", 
                    padding: "8px 12px", 
                    background: "#f0f7ff", 
                    borderRadius: "6px",
                    border: "1px solid #d0e7ff",
                    fontFamily: "Montserrat, sans-serif"
                  }}>
                    ℹ️ Seçtiğiniz paket ve cihaz bilgileri otomatik olarak eklenmiştir.
                  </div>
                )}
                <TextArea
                  placeholder="Mesajın"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                {errors.message && <ValidationType type="message" />}
              </FormField>

              <FormField>
                <CheckboxContainer>
                  <CheckboxLabel>
                    <CheckboxInput
                      type="checkbox"
                      name="kvkkConsent"
                      checked={values.kvkkConsent || false}
                      onChange={handleChange}
                    />
                    <CheckboxText>
                      Kişisel verilerin işlenmesine ilişkin <a href="/aydinlatma-metni" target="_blank" rel="noopener noreferrer" style={{ color: "#D90404", textDecoration: "underline" }}>Aydınlatma Metni</a>'ni okudum ve onaylıyorum.
                    </CheckboxText>
                  </CheckboxLabel>
                  {!values.kvkkConsent && errors.kvkkConsent === false && (
                    <CheckboxError>
                      <Span>Kişisel verilerin işlenmesine ilişkin Aydınlatma Metni'ni okudum ve onaylıyorum.</Span>
                    </CheckboxError>
                  )}
                </CheckboxContainer>
              </FormField>

              <ButtonContainer>
                <Button 
                  name="submit" 
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !values.name || 
                    !values.email || 
                    !values.message ||
                    !values.kvkkConsent ||
                    !!errors.name ||
                    !!errors.email ||
                    !!errors.phone ||
                    !!errors.message
                  }
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
