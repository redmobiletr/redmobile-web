import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useState, useEffect } from "react";

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
  HeroAnimatedHighlight,
  HeroAnimatedText,
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

  // Hero section animated highlight state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const animatedTexts = [
    "Telefonunu sat.",
    "30 gün içinde geri alma hakkın kalsın.",
  ];

  useEffect(() => {
    if (id !== "intro") return;

    let timeouts: NodeJS.Timeout[] = [];
    let isMounted = true;

    const runCycle = (textIndex: number) => {
      if (!isMounted) return;

      // Fade in + slide up
      setIsVisible(true);
      
      // Visible duration: 1500ms
      const visibleTimeout = setTimeout(() => {
        if (!isMounted) return;
        
        // Fade out: 300ms
        const fadeOutTimeout = setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false);
          
          // Wait: 200ms
          const waitTimeout = setTimeout(() => {
            if (!isMounted) return;
            // Switch to next text
            const nextIndex = (textIndex + 1) % animatedTexts.length;
            setCurrentTextIndex(nextIndex);
            
            // Start next cycle
            runCycle(nextIndex);
          }, 200);
          timeouts.push(waitTimeout);
        }, 300);
        timeouts.push(fadeOutTimeout);
      }, 1500);
      timeouts.push(visibleTimeout);
    };

    // Initial delay: 600ms
    const initialTimeout = setTimeout(() => {
      if (isMounted) {
        runCycle(0);
      }
    }, 600);
    timeouts.push(initialTimeout);

    return () => {
      isMounted = false;
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [id, animatedTexts.length]);

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
                  <HeroAnimatedHighlight
                    isVisible={isVisible}
                    isAnimating={false}
                    data-gtm="hero_value_proposition"
                  >
                    {animatedTexts.map((text, index) => (
                      <HeroAnimatedText
                        key={index}
                        isVisible={isVisible && currentTextIndex === index}
                        isAnimating={isVisible && currentTextIndex === index}
                      >
                        {text}
                      </HeroAnimatedText>
                    ))}
                  </HeroAnimatedHighlight>
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
                          index: number
                        ) => {
                          // Hero section'daki "Hemen Başla" butonu için data attribute
                          const isHeroStartButton = id === "intro" && item.title === "Hemen Başla";
                          return (
                      <Button
                        key={index}
                        color={item.color}
                        onClick={() => scrollTo("product")}
                        {...(isHeroStartButton ? { "data-gtm": "cta_start_now", "data-cta": "hemen_basla" } : {})}
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
                              index: number
                            ) => {
                              // Hero section'daki "Hemen Başla" butonu için data attribute
                              const isHeroStartButton = id === "intro" && item.title === "Hemen Başla";
                              return (
                      <Button
                        key={index}
                        color={item.color}
                        onClick={() => scrollTo("product")}
                        {...(isHeroStartButton ? { "data-gtm": "cta_start_now", "data-cta": "hemen_basla" } : {})}
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
            <StaticScrollArrow
              onClick={() => {
                const nextSection = document.getElementById("product");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
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
