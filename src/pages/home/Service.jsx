import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ServiceCard from "../../component/ServiceCard";
import {
  Home as HomeIcon,
  Business as OfficeIcon,
  DirectionsCar as CarIcon,
  TwoWheeler as BikeIcon,
  Storage as StorageIcon,
  Public as InternationalIcon,
} from "@mui/icons-material";

const ServicesPage = () => {
  const services = [
    {
      icon: <HomeIcon />,
      title: "Home Relocation",
      description:
        "Plan a hassle-free and safe household move anywhere in the country with our packers and movers.",
    },
    {
      icon: <OfficeIcon />,
      title: "Office Relocation",
      description:
        "Office packers and movers companies will safely pack and move your expensive office items within time.",
    },
    {
      icon: <CarIcon />,
      title: "Car Transport",
      description:
        "Safely relocate your four-wheeler in specialized car carriers of our car transportation companies.",
    },
    {
      icon: <BikeIcon />,
      title: "Bike Transport",
      description:
        "Let our reliable bike shifting companies handle your two-wheeler relocation in a hassle-free manner.",
    },
    {
      icon: <StorageIcon />,
      title: "Storage Services",
      description:
        "Our top movers and packers offer safe storage services to store your goods with insurance cover.",
    },
    {
      icon: <InternationalIcon />,
      title: "International Relocation",
      description:
        "International moving companies will relocate your goods or vehicles safely fulfilling all cargo formalities.",
    },
  ];

  return (
    <Box
      sx={{
        padding: "30px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" gutterBottom color="text.secondary">
        Discover the wide range of relocation services we offer to ensure a hassle-free experience.
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        {services.map((service, index) => (
          <Grid item key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
