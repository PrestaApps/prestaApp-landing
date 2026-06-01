import React from "react";
import ReactDOM from "react-dom/client";
import LegalPage from "./pages/LegalPage.jsx";
import { legalDocuments } from "./legalData.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LegalPage
      document={legalDocuments.terms}
      eyebrow="Marco legal"
      pageTitle="PrestaApp | Términos y condiciones"
    />
  </React.StrictMode>
);
