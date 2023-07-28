import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#1A1A19",
        color: "white",
        padding: "24px 0",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& .MuiSvgIcon-root": {
                fontSize: "40px",
                cursor: "pointer",
                margin: "0 8px",
                transition: "all 0.3s ease-in-out",
                color: "#fff",
                "&:hover": {
                  color: "goldenrod",
                  transform: "scale(1.2)",
                },
              },
            }}
          >
            {/* icons */}
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mt: { xs: 2, sm: 0 },
            }}
          >
            All Rights Reserved 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
