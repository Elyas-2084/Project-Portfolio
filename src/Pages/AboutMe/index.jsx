import { Box, Button, Chip, Container, Grid, Typography, } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.png";
import SectionDivider from "../../Components/SectionDivider";
import { UseLanguage } from "../../Theme/LanguageContext";
import { ArrowBack } from "@mui/icons-material";

export default function AboutMe() {
  const { language, t } = UseLanguage();

  return (
    <Box component="section">
      <Container maxWidth="lg">

        {/* Header */}
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
            {t("About Me")}
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
            {t("Get to know me, my skills, and my journey as a Front-End Developer.")}
          </Typography>
        </Box>

        {/* Image View */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">

            {/* Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 400,
                  mx: "auto",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "70%",
                    height: "70%",
                    top: "15%",
                    left: "15%",
                    backgroundColor: "primary.main",
                    opacity: 0.35,
                    filter: "blur(100px)",
                    borderRadius: "50%",
                    zIndex: 0,
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "35%",
                    height: "35%",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "primary.main",
                    opacity: 0.25,
                    filter: "blur(70px)",
                    borderRadius: "50%",
                    zIndex: 0,
                  },
                }}
              >

                {/* Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: 6,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "rgba(16, 185, 129, 0.35)",
                    boxShadow: `0 25px 60px rgba(0, 0, 0, 0.45),0 0 40px rgba(16, 185, 129, 0.12)`,
                    zIndex: 1,
                    transition: "all 0.3s ease",
                    animation: "float 3s ease-in-out infinite",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 30px 65px rgba(0, 0, 0, 0.45), 0 0 45px rgba(16, 185, 129, 0.16)",
                    },

                    "@keyframes float": {
                      "0%": {
                        transform: "translateY(0)",
                      },
                      "50%": {
                        transform: "translateY(-8px)",
                      },
                      "100%": {
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={profileImage}
                    alt={t("Elias - Front-End Developer")}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                }}
              >
                {t("Who I Am")}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {t("Hi, I'm Elias, a Front-End Developer focused on building modern, responsive and user-friendly web experiences.")}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                {t("I enjoy turning ideas into clean and functional interfaces. I'm continuously improving my skills through hands-on projects and learning modern front-end technologies.")}
              </Typography>

              {/* Skills */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 4,
                }}
              >
                <Chip label="React" />
                <Chip label="JavaScript" />
                <Chip label="MUI" />
                <Chip label={t("Responsive Design")} />
              </Box>

              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
                endIcon={language === 'fa' ? <ArrowBack /> : <ArrowForwardIcon />}
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: "none",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
                  },

                  "& .MuiButton-endIcon": {
                    marginLeft: language === "fa" ? 0 : "8px",
                    marginRight: language === "fa" ? "8px" : 0,
                  },
                }}
              >
                {t("View My Projects")}
              </Button>
            </Grid>

          </Grid>
        </Box>
        <SectionDivider />

        {/* Skills & Tools */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
              }}
            >
              {t("Skills & Tools")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {t("Technologies and tools I use to build modern and responsive web experiences.")}
            </Typography>
          </Box>

          <Grid container spacing={3}>

            {/* Front-End */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(16, 185, 129, 0.45)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  {t("Front-End")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  <Chip label="HTML"
                    variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="CSS" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="JavaScript" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="React" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="Bootstrap" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="MUI" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                </Box>
              </Box>
            </Grid>

            {/* Tools */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(16, 185, 129, 0.45)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  {t("Tools & Workflow")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  <Chip label="Git"
                    variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="GitHub"
                    variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                  <Chip label="VS Code" variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />

                  <Chip label={t("Responsive Design")} variant="outlined"
                    sx={{
                      borderColor: "divider",
                      borderRadius: 2,
                      px: 0.5,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.12)",
                        cursor: 'pointer'
                      },
                    }} />
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
        <SectionDivider />

        {/* Learning Journey */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          {/* Section Header */}
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 5, md: 7 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
              }}
            >
              {t("Learning Journey")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {t("A continuous journey of learning, building projects, and improving my front-end development skills.")}
            </Typography>
          </Box>

          {/* Timeline */}
          <Box
            sx={{
              maxWidth: 800,
              mx: "auto",
            }}
          >
            {/* Journey Item 1 */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                position: "relative",
                pb: 5,
              }}
            >
              {/* Timeline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 20,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                    position: "relative",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(16, 185, 129, 0.35)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "1px",
                    flex: 1,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {t("Front-End Foundations")}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {t("Started building a strong foundation in HTML and CSS and learned how to create structured and responsive web pages.")}
                </Typography>
              </Box>
            </Box>

            {/* Journey Item 2 */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                position: "relative",
                pb: 5,
              }}
            >
              {/* Timeline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 20,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                    position: "relative",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(16, 185, 129, 0.35)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "1px",
                    flex: 1,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {t("JavaScript")}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {t("Continued learning JavaScript and focused on creating interactive and functional web experiences.")}
                </Typography>
              </Box>
            </Box>

            {/* Journey Item 3 */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                position: "relative",
                pb: 5,
              }}
            >
              {/* Timeline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 20,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                    position: "relative",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(16, 185, 129, 0.35)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "1px",
                    flex: 1,
                    backgroundColor: "rgba(16, 185, 129, 0.25)",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {t("Modern UI Development")}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {t("Started working with Bootstrap, React and MUI to build modern, reusable and responsive user interfaces.")}
                </Typography>
              </Box>
            </Box>

            {/* Last Journey Item */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              {/* Timeline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 20,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                    position: "relative",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(16, 185, 129, 0.35)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {t("Development Workflow")}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {t("Learning Git and GitHub while building hands-on projects and continuously improving my development workflow.")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <SectionDivider />

        {/* Interested in working */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
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
              variant="h3"
              sx={{
                position: "relative",
                mb: 2,
              }}
            >
              {t("Interested in working together?")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                position: "relative",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {t("I'm always interested in learning, building new projects, and exploring opportunities to create great web experiences.")}
            </Typography>

            <Button
              component={Link}
              to="/contact-me"
              variant="contained"
              size="large"
              endIcon={language === 'fa' ? <ArrowBack /> : <ArrowForwardIcon />}
              sx={{
                position: "relative",
                px: 3,
                py: 1.2,
                boxShadow: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
                },

                "& .MuiButton-endIcon": {
                  marginLeft: language === "fa" ? 0 : "8px",
                  marginRight: language === "fa" ? "8px" : 0,
                },
              }}
            >
              {t("Contact Me")}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
