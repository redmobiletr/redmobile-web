import { lazy } from "react";
import { Row, Col } from "antd";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const PhoneSaleForm = lazy(() => import("../../components/PhoneSaleForm"));
const Block = lazy(() => import("../../components/Block"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="iphone1.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="iphone3.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="iphone4.png"
        id="mission"
      />
      <Row id="product" style={{ padding: "5rem 0" }}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Block title={ProductContent.title} content={ProductContent.text} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <PhoneSaleForm />
        </Col>
      </Row>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
