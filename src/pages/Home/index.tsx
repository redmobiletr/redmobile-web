import { lazy } from "react";
import { Row, Col } from "antd";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HowItWorks = lazy(() => import("../../components/HowItWorks"));
const ModelsSection = lazy(() => import("../../components/ModelsSection"));
const TrustSection = lazy(() => import("../../components/TrustSection"));
const FAQSection = lazy(() => import("../../components/FAQSection"));
const PhoneSaleForm = lazy(() => import("../../components/PhoneSaleForm"));
const PriceDisplay = lazy(() => import("../../components/PhoneSaleForm/PriceDisplay"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        textSecondary={IntroContent.textSecondary}
        textTertiary={IntroContent.textTertiary}
        button={IntroContent.button}
        ctaSupport={IntroContent.ctaSupport}
        trustAnchors={IntroContent.trustAnchors}
        imageCaption={IntroContent.imageCaption}
        icon="iphone1.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        microText={AboutContent.microText}
        icon="iphone3.png"
        id="about"
      />
      <ModelsSection />
      <HowItWorks />
      <Row id="phone-sale-form" gutter={[48, 48]} style={{ padding: "5rem 0", display: "flex", alignItems: "flex-start" }}>
        <Col lg={10} md={10} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-start" }}>
          <PriceDisplay />
        </Col>
        <Col lg={14} md={14} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-start" }}>
          <PhoneSaleForm />
        </Col>
      </Row>
      <TrustSection />
      <FAQSection />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
