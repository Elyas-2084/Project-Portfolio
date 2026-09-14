import { Box, Container, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import { Copyright, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { UseLanguage } from "../../Theme/LanguageContext";

export default function Footer() {
  const { t } = UseLanguage();

  const navLinks = [
    { title: "Home", link: "/" },

    { title: "About", link: "/about-me" },

    { title: "Projects", link: "/projects" },

    { title: "Contact", link: "/contact-me" },
  ];

  const iconSocials = [
    { icon: <GitHub />, url: 'https://github.com/Elyas-2084' },

    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/elyas-pourramezan' },

    { icon: <Email />, url: 'mailto:elyas.pour.2020@gmail.com' },
  ]

  return (
    <Box component="footer"
      sx={{
        mt: 10,
        py: 6,
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid",
        borderColor: "divider",

        "&::before": {
          content: '""',
          position: "absolute",
          width: 400,
          height: 200,
          left: "50%",
          top: -150,
          transform: "translateX(-50%)",
          backgroundColor: "primary.main",
          opacity: 0.08,
          filter: "blur(100px)",
          borderRadius: "50%",
        },
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Brand */}
          <Grid
            size={{ xs: 12, md: 5, }}>

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, direction: "ltr", textAlign: { xs: "center", md: "start" } }}>
              Elias<span style={{ color: "#10B981" }}>.dev</span>
            </Typography>


            <Typography color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 350, mx: { xs: "auto", md: 0 }, textAlign: { xs: "center", md: "start" } }}>
              {t("Front-End Developer building modern, responsive and user-friendly web experiences with React.")}
            </Typography>
          </Grid>


          {/* Navigation */}
          <Grid size={{ xs: 12, sm: 6, md: 3, }}>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, }}>
              {t("Navigation")}
            </Typography>


            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >

              {navLinks.map((e, index) => (
                <Link
                  component={RouterLink}
                  key={index}
                  to={e.link}
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    width: "fit-content",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {t(e.title)}
                </Link>
              ))
              }
            </Box>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, sm: 6, md: 4, }}>

            <Typography variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
              }}>

              {t("Connect")}
            </Typography>

            <Box>
              {iconSocials.map((e, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  component="a"
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    border: "1px solid",
                    borderColor: "divider",
                    mr: 1,
                    transition: "all 0.25s ease",

                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                      backgroundColor: "rgba(16, 185, 129, 0.05)",
                      boxShadow: "0 8px 20px rgba(16, 185, 129, 0.12)",
                    },


                  }}>
                  {e.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />


        {/* Copyright */}
        <Typography variant="body2" textAlign="center" color="text.secondary"
          sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5
          }}>

          <Copyright /> 2026 Elias. {t("All rights reserved.")}
        </Typography>
      </Container>
    </Box>
  )
}
