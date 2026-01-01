import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';

import Router from "./router";
import i18n from "./translation";
import { ContactFormProvider } from "./context/ContactFormContext";
import { PhoneSaleFormProvider } from "./context/PhoneSaleFormContext";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ContactFormProvider>
        <PhoneSaleFormProvider>
          <Router />
        </PhoneSaleFormProvider>
      </ContactFormProvider>
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
