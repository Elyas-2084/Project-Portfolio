import { Box, Container, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { Email, GitHub, LinkedIn, Send } from "@mui/icons-material";
import { UseLanguage } from "../../Theme/LanguageContext";

export default function ContactMe() {
  const { language, t } = UseLanguage();
  const isFa = language === 'fa';

  // TextField's label is anchored to the left by default and doesn't
  // flip on its own in RTL. If Persian, just swap which side it's anchored to.
  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      transition: "all 0.2s ease",

      "&:hover fieldset": {
        borderColor: "rgba(16, 185, 129, 0.45)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
        borderWidth: 2,
      },
    },

    ...(isFa && {
      "& .MuiInputLabel-root": {
        right: 30,
        left: "auto",
        transformOrigin: "right",
      },

      "& .MuiInputLabel-root.MuiInputLabel-shrink": {
        right: 30,
      },

      "& .MuiOutlinedInput-input, & .MuiInputBase-inputMultiline, & legend": {
        textAlign: "right",
      },
    }),
  };

  return (
    <Box component="section">
      <Container maxWidth="lg">

        {/* Page Header */}
        <Box
          sx={{
            py: { xs: 3, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t("Contact Me")}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              maxWidth: 650,
              lineHeight: 1.7,
            }}
          >
            {t("Have a project in mind or just want to say hello? Feel free to get in touch.")}
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                }}
              >
                {t("Let's Talk")}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {t("Have a question, a project idea, or an opportunity? I'd be happy to hear from you.")}
              </Typography>

              {/* Contact Items */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                {/* Email */}
                <Box
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      transform: "translateX(5px)",
                      borderColor: "rgba(16, 185, 129, 0.35)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, md: 44 },
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      color: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    <Email />
                  </Box>

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {t("Email")}
                    </Typography>

                    <Link
                      href="mailto:elyas.pour.2020@gmail.com"
                      underline="none"
                      color="inherit"
                      sx={{
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        direction: "ltr",
                        display: "inline-block",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      elyas.pour.2020@gmail.com
                    </Link>
                  </Box>
                </Box>

                {/* GitHub */}
                <Box
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      transform: "translateX(5px)",
                      borderColor: "rgba(16, 185, 129, 0.35)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      color: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    <GitHub />
                  </Box>

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {t("GitHub")}
                    </Typography>

                    <Link
                      href="https://github.com/Elyas-2084"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                      sx={{
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        direction: "ltr",
                        display: "inline-block",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      github.com/Elyas-2084
                    </Link>
                  </Box>
                </Box>

                {/* LinkedIn */}
                <Box
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      transform: "translateX(5px)",
                      borderColor: "rgba(16, 185, 129, 0.35)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      color: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    <LinkedIn />
                  </Box>

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {t("LinkedIn")}
                    </Typography>

                    <Link
                      href="https://www.linkedin.com/in/elyas-pourramezan"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                      sx={{
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        direction: "ltr",
                        display: "inline-block",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      linkedin.com/in/elyas-pourramezan
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderColor: "rgba(16, 185, 129, 0.35)",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                  }}
                >
                  {t("Send Me a Message")}
                </Typography>


                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                  }}
                >
                  <TextField
                    label={t("Name")}
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField
                    label={t("Email")}
                    type="email"
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField
                    label={t("Subject")}
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField
                    label={t("Message")}
                    multiline
                    rows={5}
                    fullWidth
                    sx={fieldSx}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      alignSelf: "flex-start",
                      px: 3,
                      py: 1.2,
                      transition: "all 0.2s ease",

                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow:
                          "0 8px 20px rgba(16, 185, 129, 0.25)",
                      },

                      "& .MuiButton-endIcon": {
                        transform: language === 'fa' && 'rotate(180deg)'
                      },
                    }}
                  >
                    {t("Send Message")}
                  </Button>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
