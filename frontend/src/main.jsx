import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/styles.scss";

import { AuthProvider } from "./Context/AuthContext.jsx";
import App from "./App.jsx";
import { DonorsProvider } from "./Context/ListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DonorsProvider>
        <Router>
          <App />
        </Router>
      </DonorsProvider>
    </AuthProvider>
  </StrictMode>
);
