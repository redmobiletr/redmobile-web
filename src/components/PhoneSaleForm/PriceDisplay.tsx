import { withTranslation, TFunction } from "react-i18next";
import {
  PriceDisplayContainer,
  PriceDisplayTitle,
  PriceDisplayDescription,
  PriceDisplaySubtext,
} from "./styles";

interface PhonePrice {
  brand: string;
  model: string;
  capacity: string;
  offer: string;
}

interface PriceDisplayProps {
  t: TFunction;
}

const PriceDisplay = ({ t }: PriceDisplayProps) => {
  // Always show the description text on the left
  // Price and sale model selection will be shown on the right (in PhoneSaleForm)
  return (
    <PriceDisplayContainer>
      <PriceDisplayTitle>Tahmini Değerini Gör</PriceDisplayTitle>
      <PriceDisplayDescription>
        Bu bir teklif değildir. Cihaz durumuna göre değişebilir.
      </PriceDisplayDescription>
      <PriceDisplaySubtext>
        Nihai fiyat, cihazın fiziksel kontrolü sonrasında netleşir.
      </PriceDisplaySubtext>
    </PriceDisplayContainer>
  );
};

export default withTranslation()(PriceDisplay);

