import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import about from '../../img/about.jpeg'

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
                lineHeight: "1.2",
                color: "#333",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "16px" },
                lineHeight: "1.6",
                color: "#555",
              }}
            >
              Maa Geeta (maageetamovers.com) is one of India’s leading
              reputed online moving companies booking platforms that started its
              journey in 2024 with an objective to make the search for dependable
              packers and movers in India a hassle-free one for the people. This
              website is a resourceful online database where people can find a
              list of packer and mover service providers available in Patna , Mumbai,
              Delhi NCR, Bangalore, Hyderabad, and other big and small cities.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={about} // Replace with your image URL
              alt="About Company"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
