import { useMemo } from "react";
import { Row, Col, Select, Radio } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Button } from "../../common/Button";
import { useContactForm } from "../../context/ContactFormContext";
import { usePhoneSaleForm } from "../../context/PhoneSaleFormContext";
import {
  FormContainer,
  FormGroup,
  Label,
  InfoBox,
  InfoIcon,
  InfoText,
  SelectWrapper,
  ButtonWrapper,
  FormFieldsContainer,
  ModelSelectionWrapper,
  ResetButton,
  ButtonsRow,
  ModelSelectionContainer,
  ModelSelectionTitle,
  RadioGroupWrapper,
  OfferPriceContainer,
  OfferLabel,
  OfferPrice,
  OfferDescription,
  OfferSubtext,
  PriceAnimationWrapper,
} from "./styles";
import phonePricesData from "../../data/phonePrices.json";

const { Option } = Select;
const RadioGroup = Radio.Group;

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
  const { formData, setFormData, priceAnimation, setPriceAnimation } = usePhoneSaleForm();

  const handleChange = (name: string, value: any) => {
    if (name === "brand") {
      // Marka değiştiğinde model ve kapasite seçimlerini sıfırla
      setFormData((prev) => ({
        ...prev,
        brand: value,
        model: "",
        capacity: "",
        saleModel: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleModelChange = (model: "korumali" | "esnek" | "") => {
    setFormData((prev) => ({
      ...prev,
      saleModel: model,
    }));
    setPriceAnimation(true);
    setTimeout(() => setPriceAnimation(false), 500);
  };

  // Get base estimated value
  const baseEstimatedValue = useMemo(() => {
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

  // Calculate final price based on sale model
  const finalPrice = useMemo(() => {
    if (!baseEstimatedValue) return null;

    const cleanPrice = baseEstimatedValue.replace(/[^\d,.]/g, "");
    const numericValue = parseFloat(cleanPrice.replace(/\./g, "").replace(",", "."));

    if (isNaN(numericValue)) return baseEstimatedValue;

    if (formData.saleModel === "korumali") {
      const reducedValue = numericValue * 0.885;
      return reducedValue.toLocaleString("tr-TR", {
        maximumFractionDigits: 0,
      }) + " TL";
    } else if (formData.saleModel === "esnek") {
      return baseEstimatedValue;
    }

    return baseEstimatedValue;
  }, [baseEstimatedValue, formData.saleModel]);

  // Get price description
  const priceDescription = useMemo(() => {
    if (!formData.saleModel) {
      return "Bu değer, cihazın genel durumuna göre hesaplanan tahmini satış bedelidir.";
    }
    
    if (formData.saleModel === "korumali") {
      return "Cihaz belirli süre boyunca sana ayrıldığı için fiyatlandırma daha düşük tutulur.";
    }
    
    return "Cihaz satılana kadar geri alım hakkın bulunur.";
  }, [formData.saleModel]);


  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Validate that required fields are filled
    if (!formData.brand || !formData.model || !formData.capacity) {
      return;
    }
    
    // Show model selection and hide form
    setFormData((prev) => ({
      ...prev,
      showModelSelection: true,
    }));
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      showModelSelection: false,
      saleModel: "",
    }));
  };

  const handleFinalSubmit = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Double check that sale model is selected - CRITICAL VALIDATION
    if (!formData.saleModel) {
      // Prevent any further action if sale model is not selected
      return;
    }
    
    // Additional validation: ensure we have all required data
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
    
    const saleModelText = formData.saleModel === "korumali" ? "Korumalı Satış" : "Esnek Satış";
    
    // Get price for message
    const price = (phonePricesData as PhonePrice[]).find(
      (p) =>
        p.brand.toLowerCase() === brand.toLowerCase() &&
        p.model.toLowerCase() === formData.model.toLowerCase() &&
        p.capacity === formData.capacity
    );
    
    const basePrice = price ? price.offer : "Belirlenemedi";
    
    const messageText = `Telefon Satış Talebi:

Marka: ${brand}
Model: ${formData.model}
Kapasite: ${formData.capacity}
Satış Modeli: ${saleModelText}
Tahmini Değer: ${basePrice}`;

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
      <FormGroup 
        onSubmit={handleContinue}
        onKeyDown={(e) => {
          // Prevent form submission on Enter key if sale model is not selected
          if (e.key === "Enter" && formData.showModelSelection && !formData.saleModel) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <FormFieldsContainer className={formData.showModelSelection ? "hidden" : ""}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Label>Marka</Label>
              <SelectWrapper>
                <Select
                  placeholder="Marka seç"
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
                  Model ve kapasite bilgisi için: Ayarlar → Genel → Hakkında
                </InfoText>
              </InfoBox>
            </Col>

            <Col span={24}>
              <Label>Model</Label>
              <SelectWrapper>
                <Select
                  placeholder="Model seç"
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
                  placeholder="Kapasite seç"
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
              <ButtonWrapper>
                <Button 
                  type="submit" 
                  disabled={
                    !formData.brand || 
                    !formData.model || 
                    !formData.capacity ||
                    formData.brand === "" ||
                    formData.model === "" ||
                    formData.capacity === ""
                  }
                >
                  Sonraki Adım
                </Button>
              </ButtonWrapper>
            </Col>
          </Row>
        </FormFieldsContainer>

        <ModelSelectionWrapper className={formData.showModelSelection ? "visible" : ""}>
          {baseEstimatedValue && (
            <>
              {!formData.saleModel ? (
                <ModelSelectionContainer>
                  <ModelSelectionTitle>Satış Modeli Seç</ModelSelectionTitle>
                  <RadioGroupWrapper>
                    <RadioGroup
                      value={formData.saleModel}
                      onChange={(e) => handleModelChange(e.target.value)}
                      style={{ width: "100%" }}
                    >
                      <Radio value="korumali" style={{ display: "block", width: "100%", marginBottom: "0", padding: "0" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                          <div style={{ fontWeight: 600, marginBottom: "4px", lineHeight: "1.4", fontSize: "16px", color: "#101726" }}>Güvenceli Satış</div>
                          <div style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>
                            Cihazınız sizin için rezerve edilir, satışa çıkmaz. Risk sıfır.
                          </div>
                        </div>
                      </Radio>
                      <Radio value="esnek" style={{ display: "block", width: "100%", marginBottom: "0", padding: "0" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                          <div style={{ fontWeight: 600, marginBottom: "4px", lineHeight: "1.4", fontSize: "16px", color: "#101726" }}>Maksimum Kazanç</div>
                          <div style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>
                            Piyasa değerinde en yüksek ödeme ve cihaz satılana kadar geri alma opsiyonu.
                          </div>
                        </div>
                      </Radio>
                    </RadioGroup>
                  </RadioGroupWrapper>
                </ModelSelectionContainer>
              ) : (
                <OfferPriceContainer>
                  <OfferLabel>Tahmini Değer</OfferLabel>
                  <PriceAnimationWrapper className={priceAnimation ? "animate" : ""}>
                    <OfferPrice>{finalPrice}</OfferPrice>
                  </PriceAnimationWrapper>
                  <OfferDescription>{priceDescription}</OfferDescription>
                  <OfferSubtext>Sunulan fiyat ön tekliftir. Nihai değerleme, teknik inceleme sonrası cihaz kondisyonuna göre netleşir.</OfferSubtext>
                </OfferPriceContainer>
              )}
            </>
          )}
          <ButtonsRow>
            {formData.saleModel && (
              <ResetButton onClick={handleReset}>
                Tekrar Değerle
              </ResetButton>
            )}
            <Button 
              onClick={(e) => {
                if (e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
                handleFinalSubmit(e);
              }}
              disabled={!formData.saleModel}
            >
              İletişime Geç
            </Button>
          </ButtonsRow>
        </ModelSelectionWrapper>
      </FormGroup>
    </FormContainer>
  );
};

export default withTranslation()(PhoneSaleForm);

