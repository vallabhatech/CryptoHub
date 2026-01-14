import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CoinContextProvider } from "./context/CoinContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LeaderboardProvider } from "./context/LeaderboardContext";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider>
        <AuthProvider>
          <LeaderboardProvider>
            <CoinContextProvider>
              {/* Added HelmetProvider here */}
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </CoinContextProvider>
          </LeaderboardProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);