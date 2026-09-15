import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const createAppTheme = (mode, language = "en") => {
  const isFa = language === "fa";

  const theme = createTheme({
    direction: isFa ? "rtl" : "ltr",

    palette: {
      mode,

      primary: {
        main: "#10B981",
      },

      background:
        mode === "dark"
          ? {
            default: "#0B0F19",
            paper: "#111827",
          }
          : {
            default: "#F8FAFC",
            paper: "#FFFFFF",
          },

      text:
        mode === "dark"
          ? {
            primary: "#F8FAFC",
            secondary: "#94A3B8",
          }
          : {
            primary: "#0F172A",
            secondary: "#64748B",
          },

      divider: mode === "dark" ? "#1E293B" : "#E2E8F0",
    },

    typography: {
      fontFamily: isFa
        ? "Vazirmatn, Inter, sans-serif"
        : "Inter, sans-serif",

      h1: {
        fontWeight: 700,
        fontSize: "3.25rem",
        lineHeight: 1.15,
      },

      h2: {
        fontWeight: 700,
        fontSize: "2.375rem",
        lineHeight: 1.2,
      },

      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: 1.3,
      },

      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.35,
      },

      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },

      h6: {
        fontWeight: 600,
        fontSize: "1.1rem",
        lineHeight: 1.4,
      },

      subtitle1: {
        fontSize: "1.1rem",
        lineHeight: 1.6,
      },

      body1: {
        fontSize: "1rem",
        lineHeight: 1.7,
      },

      body2: {
        fontSize: "0.925rem",
        lineHeight: 1.7,
      },

      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          startIcon: {
            marginRight: 0,
            marginLeft: 0,
            marginInlineEnd: 8,
            marginInlineStart: -4,
          },

          endIcon: {
            marginRight: 0,
            marginLeft: 0,
            marginInlineStart: 8,
            marginInlineEnd: -4,
          }
        }
      }
    }
  });

  // Smoothly scales headings down on smaller screens instead of
  // relying on ad-hoc per-component breakpoint overrides.
  return responsiveFontSizes(theme, { breakpoints: ["sm", "md"], factor: 3 });
};