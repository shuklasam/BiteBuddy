import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  // Replace the lorem ipsum text with actual content about the restaurant
  const restaurantDescription = `
    Welcome to our restaurant! We are dedicated to serving you the most delicious and mouth-watering dishes that will tantalize your taste buds. Our team of talented chefs prepares each meal with passion and love, using only the freshest and finest ingredients.

    At our restaurant, we believe in creating a warm and inviting ambiance, where our guests can enjoy a delightful dining experience. Whether you're visiting us for a romantic dinner or a casual lunch with friends, we strive to provide exceptional service and an unforgettable culinary journey.

    Our menu features a diverse selection of dishes, from traditional favorites to innovative creations, all made to perfection. We take pride in offering a wide range of options to cater to different preferences and dietary requirements.

    We source our ingredients locally and work closely with trusted suppliers to ensure the highest quality in every dish we serve. Your satisfaction is our top priority, and we are committed to exceeding your expectations with every visit.

    Thank you for choosing our restaurant. We look forward to serving you and creating wonderful memories together. Come join us and embark on a culinary adventure like no other!
  `;

  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">About Our Restaurant</Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          {restaurantDescription}
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
