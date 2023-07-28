import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box
        className="home"
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          height: "calc(100vh - 64px)", // Adjust height to fit the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          className="headerContainer"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Add a semi-transparent background for better contrast
            padding: "24px", // Add padding for better spacing
            borderRadius: "8px", // Rounded corners
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Add a box-shadow for a 3D effect
          }}
        >
          <Typography variant="h2" component="h1" sx={{ color: "#FFF", mb: 2 }}>
            Food Website
          </Typography>
          <Typography variant="h5" component="p" sx={{ color: "#FFF", mb: 4 }}>
            Best Food In India
          </Typography>
          <Link to="/menu">
            <Button variant="contained" sx={{ backgroundColor: "goldenrod", color: "#FFF" }}>
              ORDER NOW
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
