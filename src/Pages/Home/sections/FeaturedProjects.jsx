import { ArrowBack, ArrowForward, GitHub } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bootStrap from '../../../assets/images/bootstrap.png';
import react from '../../../assets/images/react.png';
import javaScript from '../../../assets/images/javascript.png'
import { UseLanguage } from "../../../Theme/LanguageContext";

export default function FeaturedProjects() {
    const { language, t } = UseLanguage()

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
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">

                {/*Section Header*/}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 5, md: 7 },
                    }}
                >
                    <Typography variant="h2"
                        sx={{
                            mb: 2,
                        }}
                    >
                        {t("Featured Projects")}
                    </Typography>

                    <Typography variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 600,
                            mx: "auto",
                            lineHeight: 1.8,
                        }}
                    >
                        {t("Some of the projects I've built while learning and improving my front-end development skills.")}
                    </Typography>
                </Box>

                {/*Projects*/}
                <Grid
                    container
                    spacing={{ xs: 3, md: 3 }}
                >
                    {projects.map((e, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>

                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 4,
                                    bgcolor: "background.paper",
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                                    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "rgba(16, 185, 129, 0.45)",
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(16,185,129,0.06)",
                                    },

                                    "&:hover .project-image": {
                                        transform: "scale(1.05)",
                                    },

                                    "&:hover .project-overlay": {
                                        opacity: 1,
                                    },
                                }}
                            >

                                {/* Project Image*/}
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: { xs: 210, sm: 220 },
                                        overflow: "hidden",
                                        bgcolor: "action.hover",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        className="project-image"
                                        src={e.image}
                                        alt={`${t(e.title)} preview`}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            objectFit: "cover",
                                            transition: "transform 0.5s ease",
                                        }}
                                    />

                                    {/* Image Overlay */}
                                    <Box className="project-overlay"
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            alignItems: "flex-end",
                                            p: 2,
                                            background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05) 70%)",
                                            opacity: 0.75,
                                            transition: "opacity 0.3s ease",
                                            pointerEvents: "none",
                                        }}
                                    >
                                    </Box>
                                </Box>

                                {/* Content*/}
                                <CardContent
                                    sx={{
                                        p: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        flexGrow: 1,
                                    }}
                                >

                                    {/* Title */}
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5, }}>
                                        {t(e.title)}
                                    </Typography>

                                    {/* Description */}
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                                        {t(e.description)}
                                    </Typography>

                                    {/*Technologies*/}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                            mb: 3,
                                        }}
                                    >
                                        {e.technologies.map(
                                            (e, index) => (
                                                <Chip
                                                    key={index}
                                                    label={e}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        color: "text.secondary",
                                                        borderColor: "divider",
                                                        fontSize: "0.72rem",
                                                        transition: "all 0.2s ease",

                                                        "&:hover": {
                                                            color: "primary.main",
                                                            borderColor: "primary.main",
                                                            backgroundColor: "rgba(16,185,129,0.05)",
                                                        },
                                                    }}
                                                />
                                            )
                                        )}
                                    </Box>

                                    {/*Buttons*/}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1.5,
                                            mt: "auto",
                                        }}
                                    >

                                        {/* GitHub */}
                                        <Button
                                            component="a"
                                            href={e.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="outlined"
                                            size="small"
                                            startIcon={<GitHub />}
                                            sx={{
                                                px: 2,
                                                py: 0.9,
                                                borderRadius: 2,
                                                whiteSpace: "nowrap",
                                                transition: "all 0.2s ease",

                                                "& .MuiButton-startIcon": {
                                                    marginRight: language === "fa" ? 0 : "8px",
                                                    marginLeft: language === "fa" ? "8px" : 0,
                                                },

                                                "&:hover": {
                                                    transform: "translateY(-2px)",
                                                    borderColor: "primary.main",
                                                    backgroundColor: "rgba(16,185,129,0.05)",
                                                },
                                            }}
                                        >
                                            {t("GitHub")}
                                        </Button>

                                        {/* Demo */}
                                        <Button
                                            component="a"
                                            href={e.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
                                            size="small"
                                            startIcon={<ArrowForward />}
                                            sx={{
                                                px: 2,
                                                py: 0.9,
                                                borderRadius: 2,
                                                whiteSpace: "nowrap",
                                                transition: "all 0.2s ease",
                                                color: 'white',

                                                "& .MuiButton-startIcon": {
                                                    marginRight: language === "fa" ? 0 : "8px",
                                                    marginLeft: language === "fa" ? "8px" : 0,
                                                },

                                                "&:hover": {
                                                    transform: "translateY(-2px)",
                                                    borderColor: "primary.main",
                                                },
                                            }}
                                        >
                                            {t("Demo")}
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/*View All Projects*/}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: { xs: 5, md: 6 },
                    }}
                >
                    <Button
                        component={Link}
                        to="/projects"
                        variant="outlined"
                        size="large"
                        endIcon={language === 'fa' ? <ArrowBack /> : <ArrowForward />}
                        sx={{
                            px: 3,
                            py: 1.2,
                            borderRadius: 2,
                            transition: "all 0.2s ease",

                            "& .MuiButton-endIcon": {
                                marginLeft: language === "fa" ? 0 : "8px",
                                marginRight: language === "fa" ? "8px" : 0,
                            },
                            
                            "&:hover": {
                                transform: "translateY(-2px)",
                                backgroundColor: "rgba(16,185,129,0.06)",
                            },
                        }}
                    >
                        {t("View All Projects")}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}       