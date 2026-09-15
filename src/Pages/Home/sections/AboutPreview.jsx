import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/images/profile.png";
import { ArrowBack, ArrowForward, Terminal } from "@mui/icons-material";
import { UseLanguage } from "../../../Theme/LanguageContext";

export default function AboutPreview() {
    const { language, t } = UseLanguage()

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                {/* ================= Section Header ================= */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 5, md: 7 },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{}}
                    >
                        {t("About Me")}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        {t("A little bit about me and what I do.")}
                    </Typography>
                </Box>

                {/* ================= Main Content ================= */}
                <Grid
                    container
                    spacing={{ xs: 6, md: 8 }}
                    alignItems="center"
                >

                    {/* ================= Developer Card ================= */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 420,
                                mx: "auto",

                                // Main Glow
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    width: "70%",
                                    height: "70%",
                                    top: "15%",
                                    left: "15%",
                                    backgroundColor: "primary.main",
                                    opacity: 0.16,
                                    filter: "blur(90px)",
                                    borderRadius: "50%",
                                },
                            }}
                        >

                            {/* ================= Card ================= */}
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 4,
                                    bgcolor: "background.paper",
                                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                                    transition: "all 0.3s ease",

                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "rgba(16, 185, 129, 0.45)",
                                        boxShadow: "0 30px 70px rgba(0,0,0,0.3), 0 0 40px rgba(16,185,129,0.1)",
                                    },
                                }}
                            >

                                {/* ================= Card Header ================= */}
                                <Box
                                    sx={{
                                        height: 48,
                                        px: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        borderBottom: "1px solid",
                                        borderColor: "divider",
                                        bgcolor: "rgba(16, 185, 129, 0.025)",
                                    }}
                                >

                                    {/* Window Dots */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 0.7,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                bgcolor: "text.secondary",
                                                opacity: 0.4,
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                bgcolor: "text.secondary",
                                                opacity: 0.3,
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                bgcolor: "text.secondary",
                                                opacity: 0.2,
                                            }}
                                        />
                                    </Box>

                                    {/* File Name */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.7,
                                        }}
                                    >
                                        <Terminal
                                            sx={{
                                                fontSize: 16,
                                                color: "text.secondary",
                                            }}
                                        />

                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "text.secondary",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            about.tsx
                                        </Typography>
                                    </Box>

                                </Box>

                                {/* ================= Card Body ================= */}
                                <Box
                                    sx={{
                                        p: { xs: 3, sm: 4 },
                                    }}
                                >

                                    {/* ================= Profile ================= */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}
                                    >

                                        {/* =============  PROFILE IMAGE ============== */}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                width: 90,
                                                height: 90,
                                                mb: 2.5,
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                border: "2px solid",
                                                borderColor: "rgba(16, 185, 129, 0.4)",
                                                boxShadow: "0 0 30px rgba(16,185,129,0.18)",
                                                transition: "all 0.3s ease",

                                                "&:hover": {
                                                    transform: "scale(1.04)",
                                                    boxShadow: "0 0 35px rgba(16,185,129,0.25)",
                                                },
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={profileImage}
                                                alt={t("Elias")}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "block",
                                                    objectFit: "cover",
                                                    objectPosition: "center top",
                                                }}
                                            />
                                        </Box>

                                        {/* Name */}
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 0.5,
                                            }}
                                        >
                                            {t("Elias")}
                                        </Typography>

                                        {/* Role */}
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                mb: 2,
                                            }}
                                        >
                                            {t("Front-End Developer")}
                                        </Typography>

                                    </Box>

                                    {/* ================= Divider ================= */}
                                    <Box
                                        sx={{
                                            height: "1px",
                                            width: "100%",
                                            bgcolor: "divider",
                                            mb: 3,
                                        }}
                                    />

                                    {/* ================= Stats ================= */}
                                    <Grid
                                        container
                                        spacing={2}
                                        sx={{
                                            mb: 3,
                                        }}
                                    >

                                        {/* Projects */}
                                        <Grid size={6}>
                                            <Box
                                                sx={{
                                                    textAlign: "center",
                                                    p: 1.5,
                                                    border: "1px solid",
                                                    borderColor: "divider",
                                                    borderRadius: 2,
                                                    transition: "all 0.2s ease",

                                                    "&:hover": {
                                                        borderColor: "rgba(16, 185, 129, 0.35)",
                                                        backgroundColor: "rgba(16, 185, 129, 0.04)",
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    4+
                                                </Typography>

                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {t("Projects")}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        {/* Focus */}

                                        <Grid size={6}>
                                            <Box
                                                sx={{
                                                    textAlign: "center",
                                                    p: 1.5,

                                                    border: "1px solid",
                                                    borderColor: "divider",
                                                    borderRadius: 2,
                                                    transition: "all 0.2s ease",

                                                    "&:hover": {
                                                        borderColor: "rgba(16, 185, 129, 0.35)",
                                                        backgroundColor: "rgba(16, 185, 129, 0.04)",
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    React
                                                </Typography>

                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {t("Main Focus")}
                                                </Typography>
                                            </Box>
                                        </Grid>

                                    </Grid>

                                    {/* ================= Current Focus ================= */}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "text.secondary",
                                            display: "block",
                                            mb: 1,
                                        }}
                                    >
                                        {t("Currently focused on")}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                            mb: 3,
                                        }}
                                    >
                                        {["React", "JavaScript", "MUI"].map(
                                            (tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
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
                                                            backgroundColor: "rgba(16, 185, 129, 0.05)",
                                                        },
                                                    }}
                                                />
                                            )
                                        )}
                                    </Box>

                                    {/* ================= Code Line ================= */}
                                    <Box
                                        sx={{
                                            px: 1.5,
                                            py: 1.2,
                                            borderRadius: 2,
                                            bgcolor: "rgba(16, 185, 129, 0.04)",
                                            border: "1px solid",
                                            borderColor: "rgba(16, 185, 129, 0.08)",
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "text.secondary",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            {"<build />  <learn />  <create />"}
                                        </Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* ================= Text Content ================= */}
                    <Grid size={{ xs: 12, md: 7 }}>

                        <Typography
                            variant="h3"
                            sx={{
                                mb: 3,
                            }}
                        >
                            {t("I'm a Front-End Developer")}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                lineHeight: 1.9,
                                mb: 3,
                            }}
                        >
                            {t("I'm focused on building modern, responsive and user-friendly web experiences. I enjoy turning ideas into clean and functional interfaces.")}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                lineHeight: 1.9,
                                mb: 4,
                            }}
                        >
                            {t("I'm continuously improving my skills through hands-on projects and learning modern front-end technologies.")}
                        </Typography>

                        {/* More About Me */}
                        <Button
                            component={Link}
                            variant="outlined"
                            size="large"
                            endIcon={language === "fa" ? <ArrowBack /> : <ArrowForward />}
                            to="/about-me"
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
                            {t("More About Me")}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}   