import { useState, useMemo } from "react";
import { Row, Col, Select, Checkbox } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Button } from "../../common/Button";
import { useContactForm } from "../../context/ContactFormContext";
import {
  FormContainer,
  FormGroup,
  Label,
  InfoBox,
  InfoIcon,
  InfoText,
  SelectWrapper,
  OfferPriceContainer,
  OfferLabel,
  OfferPrice,
  OfferSubtext,
  ButtonWrapper,
} from "./styles";
import phonePricesData from "../../data/phonePrices.json";

const { Option } = Select;

interface PhoneSaleFormProps {
  t: TFunction;
}

interface PhonePrice {
  brand: string;
  model: string;
  capacity: string;
  offer: string;
}

const PhoneSaleForm = ({ t }: PhoneSaleFormProps) => {
  const { setMessage } = useContactForm();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    capacity: "",
    hasBox: false,
  });

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get offer price based on selections
  const offerPrice = useMemo(() => {
    if (!formData.brand || !formData.model || !formData.capacity) {
      return null;
    }

    const brandMap: { [key: string]: string } = {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      huawei: "Huawei",
      oppo: "Oppo",
      vivo: "Vivo",
      realme: "Realme",
      oneplus: "OnePlus",
    };

    const brand = brandMap[formData.brand] || formData.brand;

    const price = (phonePricesData as PhonePrice[]).find(
      (p) =>
        p.brand.toLowerCase() === brand.toLowerCase() &&
        p.model.toLowerCase() === formData.model.toLowerCase() &&
        p.capacity === formData.capacity
    );

    return price ? price.offer : null;
  }, [formData.brand, formData.model, formData.capacity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that required fields are filled
    if (!formData.brand || !formData.model || !formData.capacity) {
      return;
    }
    
    // Build message with form data
    const brandMap: { [key: string]: string } = {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      huawei: "Huawei",
      oppo: "Oppo",
      vivo: "Vivo",
      realme: "Realme",
      oneplus: "OnePlus",
    };

    const brand = brandMap[formData.brand] || formData.brand;
    const boxText = formData.hasBox ? "Evet" : "Hayır";
    
    const messageText = `Telefon Satış Talebi:

Marka: ${brand}
Model: ${formData.model}
Kapasite: ${formData.capacity}
Kutu/Fatura: ${boxText}
Tahmini Teklif: ${offerPrice || "Belirlenemedi"}`;

    // Set message in context (no logging of user data)
    // Set message in context (this will trigger ContactForm to update)
    setMessage(messageText);
    
    // Scroll to contact form after a short delay
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  // Get available models for selected brand
  const availableModels = useMemo(() => {
    if (!formData.brand) return [];
    
    const brandMap: { [key: string]: string } = {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      huawei: "Huawei",
      oppo: "Oppo",
      vivo: "Vivo",
      realme: "Realme",
      oneplus: "OnePlus",
    };

    const brand = brandMap[formData.brand] || formData.brand;
    const models = (phonePricesData as PhonePrice[])
      .filter((p) => p.brand.toLowerCase() === brand.toLowerCase())
      .map((p) => p.model)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();

    return models;
  }, [formData.brand]);

  // Get available capacities for selected model
  const availableCapacities = useMemo(() => {
    if (!formData.brand || !formData.model) return [];

    const brandMap: { [key: string]: string } = {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      huawei: "Huawei",
      oppo: "Oppo",
      vivo: "Vivo",
      realme: "Realme",
      oneplus: "OnePlus",
    };

    const brand = brandMap[formData.brand] || formData.brand;
    const capacities = (phonePricesData as PhonePrice[])
      .filter(
        (p) =>
          p.brand.toLowerCase() === brand.toLowerCase() &&
          p.model.toLowerCase() === formData.model.toLowerCase()
      )
      .map((p) => p.capacity)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => {
        const aNum = parseInt(a.replace(/[^0-9]/g, "")) || 0;
        const bNum = parseInt(b.replace(/[^0-9]/g, "")) || 0;
        return aNum - bNum;
      });

    return capacities;
  }, [formData.brand, formData.model]);

  return (
    <FormContainer>
      <FormGroup onSubmit={handleSubmit}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Label>Marka</Label>
            <SelectWrapper>
              <Select
                placeholder="Seçiniz"
                value={formData.brand || undefined}
                onChange={(value) => handleChange("brand", value)}
                style={{ width: "100%" }}
                size="large"
              >
                <Option value="apple">Apple</Option>
                <Option value="samsung">Samsung</Option>
                <Option value="xiaomi">Xiaomi</Option>
                <Option value="huawei">Huawei</Option>
                <Option value="oppo">Oppo</Option>
                <Option value="vivo">Vivo</Option>
                <Option value="realme">Realme</Option>
                <Option value="oneplus">OnePlus</Option>
              </Select>
            </SelectWrapper>
          </Col>

          <Col span={24}>
            <InfoBox>
              <InfoIcon>ℹ️</InfoIcon>
              <InfoText>
                Modelinizi ve depolama kapasitesini bulun. Ayarlar → Genel →
                Hakkında menüsüne gidin.
              </InfoText>
            </InfoBox>
          </Col>

          <Col span={24}>
            <Label>Model</Label>
            <SelectWrapper>
              <Select
                placeholder="Model"
                value={formData.model || undefined}
                onChange={(value) => {
                  handleChange("model", value);
                  handleChange("capacity", ""); // Reset capacity when model changes
                }}
                style={{ width: "100%" }}
                size="large"
                disabled={!formData.brand}
              >
                {availableModels.map((model) => (
                  <Option key={model} value={model}>
                    {model}
                  </Option>
                ))}
              </Select>
            </SelectWrapper>
          </Col>

          <Col span={24}>
            <Label>Kapasite</Label>
            <SelectWrapper>
              <Select
                placeholder="Seçiniz"
                value={formData.capacity || undefined}
                onChange={(value) => handleChange("capacity", value)}
                style={{ width: "100%" }}
                size="large"
                disabled={!formData.model}
              >
                {availableCapacities.map((capacity) => (
                  <Option key={capacity} value={capacity}>
                    {capacity}
                  </Option>
                ))}
              </Select>
            </SelectWrapper>
          </Col>

          <Col span={24}>
            <Checkbox
              checked={formData.hasBox}
              onChange={(e) => handleChange("hasBox", e.target.checked)}
            >
              Kutu / Fatura var mı?
            </Checkbox>
          </Col>

          {offerPrice && (
            <Col span={24}>
              <OfferPriceContainer>
                <OfferLabel>Tahmini Teklif</OfferLabel>
                <OfferPrice>{offerPrice}</OfferPrice>
                <OfferSubtext>* Fiyat cihaz durumuna göre değişebilir</OfferSubtext>
              </OfferPriceContainer>
            </Col>
          )}

          <Col span={24}>
            <ButtonWrapper>
              <Button type="submit">Devam</Button>
            </ButtonWrapper>
          </Col>
        </Row>
      </FormGroup>
    </FormContainer>
  );
};

export default withTranslation()(PhoneSaleForm);

