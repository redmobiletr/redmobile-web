import { useState, useEffect } from "react";
import styled from "styled-components";

const HighlightContainer = styled.div`
  position: relative;
  min-height: 60px;
  height: 60px;
  margin: 20px 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #D90404;
  font-family: Montserrat, sans-serif;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    font-size: 17px;
    min-height: 56px;
    height: 56px;
    margin: 18px 0 18px 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    min-height: 52px;
    height: 52px;
    margin: 16px 0 16px 0;
  }
`;

const RotatingText = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0px" : "6px")});
  transition: opacity 300ms ease-out, transform 300ms ease-out;
  white-space: pre-line;
  pointer-events: none;
  will-change: opacity, transform;
`;

interface RotatingHighlightProps {
  className?: string;
}

const RotatingHighlight = ({ className }: RotatingHighlightProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const texts = [
    "Red Back ile %100 geri alma garantisi.",
    "Red Go ile maksimum nakit.",
    "Pişmanlık duymadan satış özgürlüğü.",
  ];

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Animation cycle
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show only first text statically
      setCurrentTextIndex(0);
      setIsVisible(true);
      return;
    }

    let timeouts: NodeJS.Timeout[] = [];
    let isMounted = true;

    const runCycle = (textIndex: number) => {
      if (!isMounted) return;

      // Show current text
      setIsVisible(true);

      // Visible duration: 1800ms
      const visibleTimeout = setTimeout(() => {
        if (!isMounted) return;

        // Cross-fade: Switch to next text (new text fades in while old fades out)
        const nextIndex = (textIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        // Note: isVisible stays true during cross-fade, only currentTextIndex changes
        // This creates the cross-fade effect as both texts transition opacity simultaneously

        // After cross-fade completes (300ms), continue with next cycle
        const crossFadeCompleteTimeout = setTimeout(() => {
          if (!isMounted) return;

          // Next text visible duration: 1800ms
          const nextVisibleTimeout = setTimeout(() => {
            if (!isMounted) return;

            // Start next cycle (will cross-fade back to first text)
            runCycle(nextIndex);
          }, 1800);
          timeouts.push(nextVisibleTimeout);
        }, 300);
        timeouts.push(crossFadeCompleteTimeout);
      }, 1800);
      timeouts.push(visibleTimeout);
    };

    // Start animation immediately
    setIsVisible(true);
    runCycle(0);

    return () => {
      isMounted = false;
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [prefersReducedMotion, texts.length]);

  return (
    <HighlightContainer className={className} data-gtm="hero_value_proposition">
      {texts.map((text, index) => (
        <RotatingText key={index} isVisible={isVisible && currentTextIndex === index}>
          {text}
        </RotatingText>
      ))}
    </HighlightContainer>
  );
};

export default RotatingHighlight;

