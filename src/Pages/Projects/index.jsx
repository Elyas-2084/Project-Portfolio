import { Box, Container, Typography, Button, Grid, Chip } from "@mui/material";
import bootStrap from "../../assets/images/bootstrap.png";
import react from "../../assets/images/react.png";
import javaScript from "../../assets/images/javascript.png";
import html from "../../assets/images/html-css.png";
import { ArrowForward, GitHub } from "@mui/icons-material";
import { useState } from "react";
import { UseLanguage } from "../../Theme/LanguageContext";

export default function Projects() {
  const { language, t } = UseLanguage();

  const projects = [
    {
      title: "Project One",
      description: "A modern and responsive web application built with modern front-end technologies.",
      technologies: ["React", "JavaScript", "MUI"],
      githubUrl: "https://github.com/Elyas-2084/Project-React",
      demoUrl: 'https://react-project-elyas.vercel.app/',
      image: react,
    },

    {
      title: "Project Two",
      description: "A clean and responsive website focused on usability, performance and modern UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Elyas-2084/Project-JavaScript",
      demoUrl: 'https://javascript-project-elyas.vercel.app/',
      image: javaScript,
    },

    {
      title: "Project Three",
      description: "A practical web project built to improve my front-end development skills.",
      technologies: ["HTML", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Elyas-2084/Project-BootStrap",
      demoUrl: 'https://bootstrap-project-elyas.vercel.app/',
      image: bootStrap,
    },

    {
      title: "Project Four",
      description: "A practical web project built to improve my front-end development skills.",
      technologies: ["Html", "Css"],
      githubUrl: "https://github.com/Elyas-2084/Project-Html-Css",
      demoUrl: 'https://htmlcss-project-elyas.vercel.app/',
      image: html,
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === 'All' ? projects : projects.filter((e) => e.technologies.includes(filter))


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
            {t("Projects")}
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
            {t("A collection of projects I've built while learning and improving my skills.")}
          </Typography>
        </Box>

        {/* Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mt: 3,
          }}
        >
          <Button
            variant={filter === "All" ? "contained" : "outlined"}
            onClick={() => setFilter("All")}
          >
            {t("All")}
          </Button>

          <Button
            variant={filter === "React" ? "contained" : "outlined"}

            onClick={() => setFilter('React')}
          >
            React
          </Button>

          <Button
            variant={filter === "JavaScript" ? "contained" : "outlined"}
            onClick={() => setFilter("JavaScript")}
          >
            JavaScript
          </Button>

          <Button
            variant={filter === "Bootstrap" ? "contained" : "outlined"}
            onClick={() => setFilter("Bootstrap")}
          >
            BootStrap
          </Button>

          <Button
            variant={filter === "Html" ? "contained" : "outlined"}
            onClick={() => setFilter("Html")}
          >
            HTML
          </Button>

          <Button
            variant={filter === "Css" ? "contained" : "outlined"}
            onClick={() => setFilter("Css")}
          >
            CSS
          </Button>
        </Box>

        {/* Projects */}
        <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={3}>
            {filteredProjects.map((project, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 6 }}
              >
                <Box
                  className="project-card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 4,
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                >

                  {/* Project Preview */}
                  {project.image ? (
                    <Box
                      sx={{
                        position: "relative",
                        height: 220,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={t(project.title)}
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",

                          ".project-card:hover &": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />

                      {/* Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,.45), transparent 60%)",
                          pointerEvents: "none",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        height: 220,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "background.default",
                        color: "text.secondary",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography variant="body2">
                        {t("Project Preview")}
                      </Typography>
                    </Box>
                  )}

                  {/* Project Content */}
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {t(project.title)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        mb: 2.5,
                      }}
                    >
                      {t(project.description)}
                    </Typography>

                    {/* Technologies */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 3,
                      }}
                    >
                      {project.technologies.map((technology) => (
                        <Chip
                          key={technology}
                          label={technology}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "divider",
                            borderRadius: 2,
                            px: 0.5,
                            transition: "all 0.25s ease",

                            "&:hover": {
                              borderColor: "primary.main",
                              backgroundColor:
                                "rgba(16, 185, 129, 0.08)",
                              boxShadow:
                                "0 0 15px rgba(16, 185, 129, 0.12)",
                              transform: "translateY(-2px)",
                              cursor: "pointer",
                            },
                          }}
                        />
                      ))}
                    </Box>

                    {/* Buttons */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        mt: "auto",
                      }}
                    >
                      <Button
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        sx={{
                          whiteSpace: "nowrap",
                          px: 2.5,
                          py: 1,
                          transition: "all 0.2s ease",

                          "&:hover": {
                            transform: "translateY(-2px)",
                            borderColor: "primary.main",
                            backgroundColor:
                              "rgba(16, 185, 129, 0.06)",
                            boxShadow:
                              "0 8px 20px rgba(16, 185, 129, 0.12)",
                          },

                          "& .MuiButton-startIcon": {
                            marginLeft: language === "fa" ? '8px' : 0,
                            marginRight: language === "fa" ? 0 : '8px',
                          },

                        }}
                      >
                        {t("GitHub")}
                      </Button>

                      <Button
                        component="a"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="small"
                        startIcon={<ArrowForward />}
                        sx={{
                          whiteSpace: "nowrap",
                          px: 2.5,
                          py: 1,
                          transition: "all 0.2s ease",
                          color: 'white',

                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 20px rgba(16, 185, 129, 0.12)",
                          },

                          "& .MuiButton-startIcon": {
                            marginLeft: language === "fa" ? '8px' : 0,
                            marginRight: language === "fa" ? 0 : '8px',
                          },
                        }}
                      >
                        {t("Demo")}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}
