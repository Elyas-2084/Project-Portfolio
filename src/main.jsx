import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./Theme/ThemeContext.jsx";
import { LanguageProvider } from "./Theme/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
