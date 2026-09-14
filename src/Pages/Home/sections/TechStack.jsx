import { Box, Container, Grid, Typography, useTheme } from "@mui/material"
import { SiHtml5, SiCss, SiJavascript, SiBootstrap, SiMui, SiReact, SiGit, SiGithub, } from "react-icons/si"
import { UseLanguage } from "../../../Theme/LanguageContext";

export default function TechStack() {

    const theme = useTheme()
    const { t } = UseLanguage();

    const technologies = [
        {
            name: 'HTML',
            icon: SiHtml5,
            color: '#E34F26'
        },
        {
            name: 'CSS',
            icon: SiCss,
            color: '#1572B6'
        },
        {
            name: 'JavaScript',
            icon: SiJavascript,
            color: '#F7DF1E'
        },
        {
            name: 'Bootstrap',
            icon: SiBootstrap,
            color: '#7952B3'
        },
        {
            name: 'MUI',
            icon: SiMui,
            color: '#007FFF'
        },
        {
            name: 'React',
            icon: SiReact,
            color: '#61DAFB'
        },
        {
            name: 'Git',
            icon: SiGit,
            color: '#F05032'
        },
        {
            name: 'GitHub',
            icon: SiGithub,
            color: theme.palette.mode === 'dark' ? '#F0F0F0' : '#181717'
        },
    ]

    return (
        <Box component={'section'}
            sx={{
                py: { xs: 6, md: 8 },
            }}>

            <Container maxWidth='lg'>

                {/* Section Title */}
                <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 4 }}>
                    {t("Technologies I Work With")}
                </Typography>

                {/* Technologies */}
                <Grid container spacing={2} justifyContent="center">

                    {technologies.map((e, index) => {
                        const Icon = e.icon;

                        return (
                            < Grid
                                key={index}
                                size={{ xs: 6, sm: 3, md: 1.5 }}>

                                <Box
                                    sx={{
                                        height: 90,
                                        display: "flex",
                                        flexDirection: { xs: 'row', md: 'column' },
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 1,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        borderRadius: 3,
                                        bgcolor: "background.paper",
                                        transition: "all 0.2s ease",

                                        "&:hover": {
                                            borderColor: e.color,
                                            backgroundColor: "rgba(16, 185, 129, 0.04)",
                                            transform: "translateY(-4px)",
                                            boxShadow: `0 8px 20px ${e.color}22`,
                                            cursor: 'pointer'
                                        },

                                        // "&:hover .tech-icon": {
                                        //     color: e.color,
                                        // },
                                    }}
                                >
                                    {/* Icon */}
                                    <Box className="tech-icon"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "text.secondary",
                                            transition: "color 0.2s ease",
                                        }}>

                                        <Icon size={26} color={e.color} />
                                    </Box>

                                    {/* Name */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "text.primary",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {e.name}
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box >
    )
}



