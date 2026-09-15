import { ArrowBack, ArrowForward, Download } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UseLanguage } from "../../../Theme/LanguageContext";

export default function CTA() {
    const { language, t } = UseLanguage();

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">

                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        textAlign: "center",
                        p: { xs: 4, md: 6 },
                        borderRadius: 5,
                        border: "1px solid",
                        borderColor: "divider",
                        background: (theme) =>
                            theme.palette.mode === 'dark' ? "linear-gradient(145deg, rgba(16,185,129,0.08), rgba(17,24,39,0.8))"
                                : "linear-gradient(135deg, #ffffff, rgba(16,185,129,0.08))",


                        boxShadow: (theme) =>
                            theme.palette.mode === 'dark' ? "0 25px 60px rgba(0,0,0,0.25)"
                                : "0 20px 50px rgba(0,0,0,0.08)",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            width: 250,
                            height: 250,
                            top: -100,
                            right: -100,
                            backgroundColor: "primary.main",
                            opacity: (theme) =>
                                theme.palette.mode === "dark"
                                    ? 0.18
                                    : 0.15,
                            filter: "blur(90px)",
                        },

                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 250,
                            height: 250,
                            bottom: -100,
                            left: -100,
                            backgroundColor: "primary.main",
                            opacity: 0.18,
                            filter: "blur(90px)",
                        }
                    }}
                >

                    <Typography
                        variant="h3"
                        sx={{
                            position: "relative",
                            fontWeight: 700,
                            mb: 2,

                            "& .icon-test": {
                                display: 'inline-block',
                                padding: '10px',
                                animation: 'ani 3s ease-in-out infinite'
                            },

                            '@keyframes ani': {
                                "0%": {
                                    transform: "translateY(0) translateX(0)",
                                },
                                "50%": {
                                    transform: "translateY(-10px) translateX(10px)",
                                },
                                "100%": {
                                    transform: "translateY(0px) translateX(0)",
                                },
                            }
                        }}
                    >
                        {t("Let's build something amazing together")}<span className="icon-test">🚀</span>
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            position: "relative",
                            maxWidth: 600,
                            mx: "auto",
                            lineHeight: 1.9,

                            mb: 4
                        }}
                    >
                        {t("I'm open to new projects, collaborations and opportunities. Feel free to reach out and let's create something great.")}
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            flexWrap: "wrap"
                        }}
                    >

                        <Button
                            component={Link}
                            to="/contact-me"
                            variant="contained"
                            size="large"
                            endIcon={language === 'fa' ? <ArrowBack /> : <ArrowForward />}
                            sx={{
                                px: 3.5,
                                py: 1.3,
                                borderRadius: 3,
                                boxShadow: "none",
                                transition: "all .25s ease",

                                "&:hover": {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 12px 25px rgba(16,185,129,.25)"
                                }
                            }}
                        >
                            {t("Contact Me")}
                        </Button>

                        <Button
                            component='a'
                            variant="outlined"
                            href="/Elias_Resume.pdf"
                            download={'Elias_Resume.pdf'}
                            size="large"
                            startIcon={<Download />}
                            sx={{
                                px: 3.5,
                                py: 1.3,
                                borderRadius: 3,
                                transition: "all .25s ease",

                                "&:hover": {
                                    transform: "translateY(-3px)",
                                    borderColor: "primary.main",
                                    backgroundColor: "rgba(16,185,129,.05)"
                                }

                            }}
                        >
                            {t("Download CV")}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}