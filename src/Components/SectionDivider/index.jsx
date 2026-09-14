import { Box } from "@mui/material";
import { Code} from "@mui/icons-material";

export default function SectionDivider() {
    return (
        <Box
            aria-hidden="true"
            sx={{
                position: "relative",
                height: "1px",
                width: "100%",
                background: (theme) =>
                    `linear-gradient(90deg, transparent, ${theme.palette.divider} 20%, ${theme.palette.divider} 80%, transparent)`,
            }}
        >
            {/* Ring that "cuts" the line so it doesn't pass through the badge */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "background.default",
                }}
            />

            {/* Icon badge */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.main",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark"
                            ? "rgba(16, 185, 129, 0.12)"
                            : "rgba(16, 185, 129, 0.08)",
                            
                    border: "1px solid",
                    borderColor: "primary.main",
                    animation: "dividerPulse 3s ease-in-out infinite",

                    "@keyframes dividerPulse": {
                        "0%, 100%": {
                            boxShadow: "0 0 0px rgba(16, 185, 129, 0)",
                        },
                        "50%": {
                            boxShadow: "0 0 18px rgba(16, 185, 129, 0.45)",
                        },
                    },
                }}
            >
                <Code sx={{ fontSize: 17 }} />
            </Box>
        </Box>
    );
}
