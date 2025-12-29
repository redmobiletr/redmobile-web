import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface ContactFormContextType {
  setMessage: (message: string) => void;
  message: string;
  messageKey: number;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessageState] = useState("");
  const [messageKey, setMessageKey] = useState(0);

  const setMessage = useCallback((newMessage: string) => {
    setMessageState(newMessage);
    // Update key to force useEffect to trigger even if message is the same
    setMessageKey(prev => prev + 1);
  }, []);

  return (
    <ContactFormContext.Provider value={{ message, setMessage, messageKey }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within ContactFormProvider");
  }
  return context;
};

