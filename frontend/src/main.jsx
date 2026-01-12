import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/styles.scss";

import { AuthProvider } from "./Context/AuthContext.jsx";
import App from "./App.jsx";
import { DonorsProvider } from "./Context/ListContext.jsx";
import { UserDataProvider } from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DonorsProvider>

        <UserDataProvider>
          <Router>
            <App />
          </Router>
        </UserDataProvider>
      </DonorsProvider>
    </AuthProvider>
  </StrictMode>
);
