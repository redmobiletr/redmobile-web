import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  EmailLink,
  FooterContainer,
  ContactInfo,
  ContactItem,
  Copyright,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" gutter={[24, 24]}>
            <Col lg={8} md={8} sm={12} xs={24}>
              <Title>İletişim</Title>
              <ContactInfo>
                <ContactItem>
                  <EmailLink href="mailto:info@redmobile.com.tr">
                    info@redmobile.com.tr
                  </EmailLink>
                </ContactItem>
                <ContactItem>
                  <Para>İstanbul, Türkiye</Para>
                </ContactItem>
                <ContactItem>
                  <Para>Red Mobile Merkez</Para>
                </ContactItem>
              </ContactInfo>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Title>Hizmetler</Title>
              <Large to="/" onClick={() => scrollTo("about")}>
                Geri Alım Opsiyonu
              </Large>
              <Large to="/" onClick={() => scrollTo("product")}>
                Telefon Satış
              </Large>
              <Large to="/" onClick={() => scrollTo("contact")}>
                Müşteri Desteği
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <Title>Şirket</Title>
              <Large to="/" onClick={() => scrollTo("about")}>
                {t("About")}
              </Large>
              <Large to="/">Gizlilik Politikası</Large>
              <Large to="/">Kullanım Şartları</Large>
            </Col>
            <Col lg={4} md={4} sm={12} xs={24}>
              <Title>Sosyal Medya</Title>
              <FooterContainer>
                <SocialLink
                  href="https://instagram.com/redmobil"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/redmobil"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/redmobil"
                  src="linkedin.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
            <Col>
              <NavLink to="/">
                <LogoContainer>
                  <div className="logo-text">redmobile</div>
                </LogoContainer>
              </NavLink>
            </Col>
            <Col>
              <Copyright>
                © {new Date().getFullYear()} Red Mobile. Tüm hakları saklıdır.
              </Copyright>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
