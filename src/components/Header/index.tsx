import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  MobileButtonContainer,
  MobileRightContainer,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("how-it-works")}>
          <Span>Nasıl Çalışır</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>Geri Alım Opsiyonları</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("faq")}>
          <Span>Sık Sorulan Sorular</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>İletişim</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "160px", flexShrink: 0 }}
          onClick={() => scrollTo("product")}
        >
          <Span>
            <Button data-gtm="cta_device_sell" data-cta="cihaz_sat">Nakite Çevir</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  const MobileMenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("how-it-works")}>
          <Span>Nasıl Çalışır</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>Geri Alım Opsiyonları</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("faq")}>
          <Span>Sık Sorulan Sorular</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>İletişim</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle" wrap={false}>
          <Col flex="0 0 auto">
            <LogoContainer 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              aria-label="homepage"
            >
              <div className="logo-text">redmobile</div>
            </LogoContainer>
          </Col>
          <Col flex="1 1 auto" style={{ minWidth: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <NotHidden>
              <MenuItem />
            </NotHidden>
          </Col>
          <Col flex="0 0 auto">
            <MobileRightContainer>
              <MobileButtonContainer>
                <Button onClick={() => scrollTo("product")} data-gtm="cta_device_sell" data-cta="cihaz_sat">
                  Nakite Çevir
                </Button>
              </MobileButtonContainer>
              <Burger onClick={toggleButton}>
                <Outline />
              </Burger>
            </MobileRightContainer>
          </Col>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MobileMenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
