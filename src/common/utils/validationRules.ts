import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name || values.name.trim() === "") {
    errors.name = "Ad Soyad gereklidir";
  }
  if (!values.email || values.email.trim() === "") {
    errors.email = "E-posta adresi gereklidir";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz";
  }
  // Phone is optional, but if provided, validate format
  if (values.phone && values.phone.trim() !== "" && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(values.phone)) {
    errors.phone = "Geçerli bir telefon numarası giriniz";
  }
  if (!values.message || values.message.trim() === "") {
    errors.message = "Mesaj gereklidir";
  }
  // KVKK consent is required
  // Note: We use a workaround for boolean error field - store error message in a way that can be checked
  if (!values.kvkkConsent) {
    // For boolean fields, we'll check this separately in the form
    errors.kvkkConsent = false; // This will be checked as !values.kvkkConsent in the form
  }
  return errors;
}
