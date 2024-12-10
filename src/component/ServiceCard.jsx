import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 300,
        margin: "10px",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%", // Optional, for circular images
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
