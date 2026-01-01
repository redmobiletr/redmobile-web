import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  Subtitle,
  MicroText,
  SecondaryLink,
  HeroTitle,
  HeroBodyLarge,
  HeroBody,
  HeroBodyTertiary,
  CTASupport,
  TrustAnchors,
  TrustAnchorItem,
  ImageCaption,
  StaticScrollIndicator,
  StaticScrollArrow,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  textSecondary,
  textTertiary,
  subtitle,
  microText,
  ctaSupport,
  trustAnchors,
  imageCaption,
  secondaryLink,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection isHero={id === "intro"}>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={13} md={13} sm={12} xs={24}>
            <div>
              <SvgIcon src={icon} width="100%" height="100%" />
              {id === "intro" && imageCaption && (
                <ImageCaption>{imageCaption}</ImageCaption>
              )}
            </div>
          </Col>
          <Col lg={9} md={9} sm={11} xs={24}>
            <ContentWrapper isHero={id === "intro"}>
              {id === "intro" ? (
                <>
                  <HeroTitle>{t(title)}</HeroTitle>
                  <HeroBodyLarge>{t(content)}</HeroBodyLarge>
                  {textSecondary && (
                    <HeroBody>{t(textSecondary)}</HeroBody>
                  )}
                  {textTertiary && (
                    <HeroBodyTertiary>{t(textTertiary)}</HeroBodyTertiary>
                  )}
                  {subtitle && (
                    <Subtitle>{subtitle}</Subtitle>
                  )}
                  <ButtonWrapper>
                    {typeof button === "object" &&
                      button.map(
                        (
                          item: {
                            color?: string;
                            title: string;
                          },
                          id: number
                        ) => {
                          return (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo("how-it-works")}
                      >
                        {t(item.title)}
                      </Button>
                          );
                        }
                      )}
                    {secondaryLink && (
                      <SecondaryLink
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(secondaryLink.scrollTo);
                        }}
                      >
                        {secondaryLink.title}
                      </SecondaryLink>
                    )}
                  </ButtonWrapper>
                  {ctaSupport && (
                    <CTASupport>{ctaSupport}</CTASupport>
                  )}
                  {trustAnchors && trustAnchors.length > 0 && (
                    <TrustAnchors>
                      {trustAnchors.map((anchor, index) => (
                        <TrustAnchorItem key={index}>{anchor}</TrustAnchorItem>
                      ))}
                    </TrustAnchors>
                  )}
                  {microText && (
                    <MicroText>{microText}</MicroText>
                  )}
                </>
              ) : (
                <>
                  <h6 style={{ 
                    color: id === "about" ? "#d90404" : "inherit",
                    whiteSpace: "pre-line"
                  }}>{t(title)}</h6>
                  <Content>{t(content)}</Content>
                  {subtitle && (
                    <Subtitle>{subtitle}</Subtitle>
                  )}
                  {direction === "right" ? (
                    <>
                      <ButtonWrapper>
                        {typeof button === "object" &&
                          button.map(
                            (
                              item: {
                                color?: string;
                                title: string;
                              },
                              id: number
                            ) => {
                              return (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo("how-it-works")}
                      >
                        {t(item.title)}
                      </Button>
                              );
                            }
                          )}
                        {secondaryLink && (
                          <SecondaryLink
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(secondaryLink.scrollTo);
                            }}
                          >
                            {secondaryLink.title}
                          </SecondaryLink>
                        )}
                      </ButtonWrapper>
                      {microText && (
                        <MicroText>{microText}</MicroText>
                      )}
                    </>
                  ) : (
                    <>
                      <ServiceWrapper>
                        <Row justify="space-between">
                          {typeof section === "object" &&
                            section.map(
                              (
                                item: {
                                  title: string;
                                  content: string;
                                  icon: string;
                                },
                                index: number
                              ) => {
                                return (
                                  <Col key={index} span={11}>
                                    {id !== "about" && (
                                      <SvgIcon
                                        src={item.icon}
                                        width="60px"
                                        height="60px"
                                      />
                                    )}
                                    <MinTitle>{t(item.title)}</MinTitle>
                                    <MinPara>{t(item.content)}</MinPara>
                                  </Col>
                                );
                              }
                            )}
                        </Row>
                      </ServiceWrapper>
                      {microText && (
                        <MicroText>{microText}</MicroText>
                      )}
                    </>
                  )}
                </>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
      {id === "about" && (
        <Fade direction="up" triggerOnce delay={200}>
          <StaticScrollIndicator>
            <StaticScrollArrow>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </StaticScrollArrow>
          </StaticScrollIndicator>
        </Fade>
      )}
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
