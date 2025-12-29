import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const isPng = src.endsWith('.png');
  const imagePath = isPng ? `/img/${src}` : `/img/svg/${src}`;
  return <img src={imagePath} alt={src} width={width} height={height} />;
};
