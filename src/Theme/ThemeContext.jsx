import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createAppTheme } from "./index";
import { UseLanguage } from "./LanguageContext";

const STORAGE_KEY = "theme-mode";

const ThemeModeContext = createContext({
    mode: "dark",
    toggleMode: () => { },
});

export function UseThemeMode() {
    return useContext(ThemeModeContext);
}

function getInitialMode() {
    if (typeof window === "undefined") return "dark";

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;

    const prefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;

    return prefersLight ? "light" : "dark";
}

export function AppThemeProvider({ children }) {
    const [mode, setMode] = useState(getInitialMode);
    const { language } = UseLanguage();

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const theme = useMemo(() => createAppTheme(mode, language), [mode, language]);

    const contextValue = useMemo(
        () => ({ mode, toggleMode }),
        [mode]
    );

    return (
        <ThemeModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}
