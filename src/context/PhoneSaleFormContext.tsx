import { createContext, useContext, useState, ReactNode } from "react";

interface PhoneSaleFormData {
  brand: string;
  model: string;
  capacity: string;
  hasBox: boolean;
  saleModel: "redback" | "redgo" | "";
  showModelSelection: boolean;
}

interface PhoneSaleFormContextType {
  formData: PhoneSaleFormData;
  setFormData: (data: PhoneSaleFormData | ((prev: PhoneSaleFormData) => PhoneSaleFormData)) => void;
  priceAnimation: boolean;
  setPriceAnimation: (value: boolean) => void;
}

const PhoneSaleFormContext = createContext<PhoneSaleFormContextType | undefined>(undefined);

export const PhoneSaleFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<PhoneSaleFormData>({
    brand: "",
    model: "",
    capacity: "",
    hasBox: false,
    saleModel: "",
    showModelSelection: false,
  });
  const [priceAnimation, setPriceAnimation] = useState(false);

  return (
    <PhoneSaleFormContext.Provider value={{ formData, setFormData, priceAnimation, setPriceAnimation }}>
      {children}
    </PhoneSaleFormContext.Provider>
  );
};

export const usePhoneSaleForm = () => {
  const context = useContext(PhoneSaleFormContext);
  if (!context) {
    throw new Error("usePhoneSaleForm must be used within PhoneSaleFormProvider");
  }
  return context;
};

