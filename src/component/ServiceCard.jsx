import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ServiceCard = ({ icon, title, description }) => {
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
          fontSize: "40px",
          color: "#4CAF50",
          marginBottom: "10px",
        }}
      >
        {icon}
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
