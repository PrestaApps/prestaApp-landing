import React from "react";
import ReactDOM from "react-dom/client";
import LegalPage from "./pages/LegalPage.jsx";
import { legalDocuments } from "./legalData.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LegalPage
      document={legalDocuments.privacy}
      eyebrow="Privacidad"
      pageTitle="PrestaApp | Politica de privacidad"
    />
  </React.StrictMode>
);
