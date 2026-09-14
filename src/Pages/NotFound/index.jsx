import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { UseLanguage } from "../../Theme/LanguageContext";

export default function NotFound() {
  const { t } = UseLanguage();

  return (
    <Box
      component="section"
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            p: { xs: 4, md: 7 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 5,
            bgcolor: "background.paper",
            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-4px)",
              borderColor: "rgba(16, 185, 129, 0.35)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
            },

            "&::before": {
              content: '""',
              position: "absolute",
              width: 300,
              height: 300,
              top: -180,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "primary.main",
              opacity: 0.12,
              filter: "blur(90px)",
              borderRadius: "50%",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "relative",
              fontSize: { xs: "5rem", sm: "7rem", md: "9rem" },
              fontWeight: 700,
              lineHeight: 1,
              color: "primary.main",
              mb: 2,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h3"
            sx={{
              position: "relative",
              mb: 2,
            }}
          >
            {t("Page Not Found")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              position: "relative",
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            {t("Sorry, the page you're looking for doesn't exist or may have been moved.")}
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<ArrowBackIcon />}
            sx={{
              position: "relative",
              px: 3,
              py: 1.2,
              transition: "all 0.2s ease",

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
              },
            }}
          >
            {t("Back to Home")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
