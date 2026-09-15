import { AppBar, Box, Button, Container, Drawer, IconButton, Toolbar, Typography, MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import { UseThemeMode } from "../../Theme/ThemeContext";
import { UseLanguage } from "../../Theme/LanguageContext";

export default function Navbar() {
    const { language, toggleLanguage, t } = UseLanguage()
    const { mode, toggleMode } = UseThemeMode()
    const [openMobile, setOpenMobile] = useState(false)

    const navigation = [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/about-me' },
        { title: 'Contact Me', path: '/contact-me' },
        { title: 'Projects', path: '/projects' }
    ]

    const handleDrawerToggle = () => {
        setOpenMobile((prev) => {
            return !prev
        })
    }

    const handleLanguageChange = (e) => {
        const value = e.target.value

        if (value !== language) {
            toggleLanguage();
        }
    };

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "rgba(11, 15, 25, 0.5)" : "rgba(248, 250, 252, 0.5)",

                    backdropFilter: "blur(14px)",
                    borderBottom: "1px solid",
                    borderColor: "rgba(16, 185, 129, 0.12)",
                    boxShadow: "0 4px 20px rgba(16, 185, 129, 0.04)",
                }}>

                <Container maxWidth='lg'>
                    <Toolbar disableGutters
                        sx={{
                            minHeight: "72px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}>

                        {/* Logo */}
                        <Typography
                            component={NavLink}
                            to="/"
                            sx={{
                                textDecoration: "none",
                                color: "text.primary",
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                letterSpacing: "-0.5px",
                                direction: "ltr",
                            }}
                        >
                            Elias
                            <Box
                                component="span"
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                .dev
                            </Box>
                        </Typography>

                        {/* Navigation */}
                        <Box
                            component={'nav'}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 1
                            }}>

                            {navigation.map((e, index) => (
                                <Button
                                    key={index}
                                    component={NavLink}
                                    to={e.path}
                                    sx={{
                                        color: "text.secondary",
                                        borderRadius: 2,
                                        px: 2,
                                        py: 1,
                                        transition: "all 0.2s ease",

                                        "&.active": {
                                            color: "primary.main",
                                            backgroundColor: "rgba(16, 185, 129, 0.1)",
                                        },

                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor: "rgba(16, 185, 129, 0.06)",
                                        },
                                    }}
                                >

                                    {t(e.title)}
                                </Button>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,

                            }}>

                            {/* Language toggle */}
                            <FormControl sx={{ m: 1, minWidth: 120, display: { xs: "none", md: "inline-flex" } }} size="small">
                                <InputLabel id="demo-select-small-label">Language</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    label="Language"
                                    value={language}
                                    onChange={handleLanguageChange}
                                >
                                    <MenuItem value="en">English</MenuItem>
                                    <MenuItem value="fa">فارسی</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Theme toggle */}
                            <IconButton
                                color="inherit"
                                aria-label="toggle dark and light mode"
                                onClick={toggleMode}
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    width: 42,
                                    height: 42,
                                    color: "text.secondary",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        color: "primary.main",
                                        borderColor: "primary.main",
                                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                                        transform: "translateY(-1px)",
                                    },
                                }}>

                                {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                            </IconButton>

                            {/* CV */}
                            <Button
                                component='a'
                                variant="contained"
                                href="/Elias_Resume.pdf"
                                download={'Elias_Resume.pdf'}
                                sx={{
                                    display: { xs: "none", md: "inline-flex" },
                                    px: 2.5,
                                    py: 1,
                                    boxShadow: "none",
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-1px)",
                                        boxShadow: "0 6px 18px rgba(16, 185, 129, 0.25)",
                                    },
                                }}
                            >
                                {t("Download CV")}
                            </Button>

                            <IconButton
                                aria-label="open navigation menu"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { xs: "inline-flex", md: "none" },
                                    color: "text.primary",
                                    width: 42,
                                    height: 42,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    transition: "all 0.2s ease",

                                    "&:hover": {
                                        color: "primary.main",
                                        borderColor: "primary.main",
                                        backgroundColor: "rgba(16, 185, 129, 0.08)",
                                    },
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </Container >
            </AppBar >

            {/* Mobile Header */}
            <Drawer
                anchor={language === "fa" ? "left" : "right"}
                open={openMobile}
                onClose={handleDrawerToggle}
                slotProps={{
                    transition: {
                        direction: language === "fa" ? "right" : "left",
                    },
                }}
            >

                <Box
                    sx={{
                        width: 280, p: 3, display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        bgcolor: "background.paper",
                    }}
                    role="presentation">

                    {navigation.map((e, index) => (
                        <Button
                            key={index}
                            component={NavLink}
                            to={e.path}
                            onClick={handleDrawerToggle}
                            sx={{
                                justifyContent: 'flex-start',
                                color: "text.secondary",
                                borderRadius: 2,
                                px: 2,
                                py: 1.2,
                                transition: 'all 0.2s ease',

                                "&.active": {
                                    color: "primary.main",
                                    backgroundColor: "rgba(16, 185, 129, 0.10)",
                                },

                                "&:hover": {
                                    color: "primary.main",
                                    backgroundColor: "rgba(16, 185, 129, 0.06)",
                                },
                            }}>

                            {t(e.title)}
                        </Button>
                    ))}

                    <Button
                        component='a'
                        variant="contained"
                        href="/Elias_Resume.pdf"
                        download={'Elias_Resume.pdf'}
                        sx={{ mt: 2 }}>

                        {t("Download CV")}
                    </Button>

                    <Button
                        onClick={toggleMode}
                        startIcon={mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                        sx={{
                            justifyContent: "flex-start",
                            color: "text.secondary",
                            borderRadius: 2,
                            px: 2,
                            py: 1.2,
                            mt: 1,
                            transition: "all 0.2s ease",

                            "&:hover": {
                                color: "primary.main",
                                backgroundColor: "rgba(16, 185, 129, 0.06)",
                            },
                        }}>

                        {mode === 'dark' ? t("Light Mode") : t("Dark Mode")}
                    </Button>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Language</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Language"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="fa">فارسی</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Drawer >
        </>
    )
}
