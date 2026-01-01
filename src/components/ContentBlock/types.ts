import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  textSecondary?: string;
  textTertiary?: string;
  subtitle?: string;
  microText?: string;
  ctaSupport?: string;
  trustAnchors?: string[];
  imageCaption?: string;
  secondaryLink?: {
    title: string;
    scrollTo: string;
  };
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
