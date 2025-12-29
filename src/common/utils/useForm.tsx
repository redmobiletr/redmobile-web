import { useState, useCallback, useRef } from "react";
import { notification } from "antd";
import { submitToFormspree } from "../../utils/formspreeService";

interface IValues {
  name: string;
  email: string;
  message: string;
  phone: string;
  kvkkConsent: boolean;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
  kvkkConsent: false,
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
    isSubmitting: boolean;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
    isSubmitting: false,
  });

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    // Eğer hata varsa submit etme
    // Check string errors (empty string means no error)
    const hasStringErrors = Object.entries(errors).some(([key, value]) => {
      if (key === 'kvkkConsent') return false; // Handle boolean separately
      return typeof value === 'string' && value !== '';
    });
    
    // Check boolean kvkkConsent error
    const hasKvkkError = !values.kvkkConsent;
    
    if (hasStringErrors || hasKvkkError) {
      return;
    }

    // Loading state'i aktif et
    setFormState((prevState) => ({ ...prevState, isSubmitting: true }));

    try {
      // Get honeypot value (should be empty)
      const form = event.target as HTMLFormElement;
      const honeypot = (form.querySelector('input[name="_gotcha"]') as HTMLInputElement)?.value || '';

      // If honeypot is filled, it's spam - silently fail
      if (honeypot) {
        // Silently reject spam - don't log user data
        setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
        return;
      }

      // Submit to Formspree
      const result = await submitToFormspree({
        name: values.name,
        email: values.email,
        phone: values.phone || undefined,
        message: values.message,
        subject: `Yeni Satış Talebi - ${values.name}`,
        _gotcha: '', // Honeypot field
      });

      if (result.success) {
        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
          isSubmitting: false,
        }));

        notification["success"]({
          message: "Başarılı",
          description: "Talebiniz alındı. En kısa sürede dönüş yapacağız.",
          duration: 5,
        });
      } else {
        setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
        throw new Error(result.message || 'Form gönderilemedi');
      }
    } catch (error: any) {
      // Log error without exposing user data
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submit error:', error);
      }
      setFormState((prevState) => ({ ...prevState, isSubmitting: false }));
      notification["error"]({
        message: "Hata",
        description: "Gönderim sırasında sorun oluştu. Lütfen tekrar deneyin.",
        duration: 5,
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;

    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: type === 'checkbox' ? checked : value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  const setMessageValue = useCallback((message: string) => {
    setFormState((prevState) => {
      // Only update if message actually changed
      if (prevState.values.message === message) {
        return prevState;
      }
      return {
        ...prevState,
        values: {
          ...prevState.values,
          message: message,
        },
        errors: {
          ...prevState.errors,
          message: "",
        },
      };
    });
  }, []);

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    setMessageValue,
  };
};
