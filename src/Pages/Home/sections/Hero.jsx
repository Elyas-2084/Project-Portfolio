import { Box, Button, Container, Grid, Typography } from "@mui/material";
import profileImage from '../../../assets/images/profile.png'
import { UseLanguage } from "../../../Theme/LanguageContext";

export default function Hero() {
    const { t } = UseLanguage();

    return (
        <Box component={'section'}
            sx={{
                minHeight: '90vh',
                display: "flex",
                alignItems: "center",
                py: { xs: 2, md: 12 }
            }}
        >
            <Container maxWidth='lg'>
                <Grid
                    container
                    spacing={6}
                    alignItems='center'>

                    {/* Text */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="body1"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                mb: 2
                            }}>
                            {t("Hi, I'm Elias 👋")}
                        </Typography>

                        <Typography variant="h1"
                            sx={{
                                 fontSize: { xs: '1.5rem', sm: '3rem', md: '4.5rem' },
                                lineHeight: 1.1,
                                mb: 2,
                            }}
                        >
                            {t("Front-End Developer")}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                fontWeight: 400,
                                maxWidth: 600,
                                lineHeight: 1.8,
                                mb: 4,
                            }}
                        >
                            {t("I build modern, responsive and user-friendly web experiences with React and modern front-end technologies.")}
                        </Typography>

                        {/* Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: { xs: 1.5, sm: 2 },
                                flexWrap: "wrap",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                href="/projects"
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
                                }}
                            >
                                {t("View My Projects")}
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                href="/contact-me"
                                sx={{
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: 2,
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        backgroundColor: "rgba(16, 185, 129, 0.06)",
                                    },
                                }}
                            >
                                {t("Contact Me")}
                            </Button>
                        </Box>
                    </Grid>

                    {/* Visual */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: {
                                    xs: 280,
                                    sm: 340,
                                    md: 400,
                                },
                                aspectRatio: "4 / 5",
                                margin: "0 auto",

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
                            }}>

                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 6,
                                    overflow: "hidden",
                                    border: "1px solid",
                                    borderColor: "rgba(16, 185, 129, 0.35)",
                                    boxShadow: `0 25px 60px rgba(0, 0, 0, 0.45),0 0 40px rgba(16, 185, 129, 0.12)`,
                                    zIndex: 1,
                                    transition: "all 0.3s ease",
                                    animation: "float 3s ease-in-out infinite",

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
                </Grid>
            </Container>

        </Box>
    )
}
