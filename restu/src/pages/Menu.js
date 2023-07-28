import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          padding: "20px", // Adjust padding for a more compact look
        }}
      >
        {MenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{
              maxWidth: "390px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Add a box-shadow for a 3D effect
              borderRadius: "8px", // Rounded corners
              overflow: "hidden", // Hide any content overflowing due to box-shadow
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)", // Scale up on hover for a more interactive feel
              },
              py: 2, // Add padding from top and bottom
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }} // Adjust the height of the image as needed
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
