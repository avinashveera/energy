import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ServiceCard from "../../component/ServiceCard";
import homimg from '../../img/home.jpeg'
import office from '../../img/office.jpeg'
import car from '../../img/car.jpeg'
import bike from '../../img/bike.jpeg'
import storage from '../../img/storage.jpeg'
import international from '../../img/international.jpeg'
import packmoveimg from '../../img/loading.jpeg'


const ServicesPage = () => {
  const services = [
    {
      imgUrl: homimg,
      title: "Home Relocation",
      description:
        "Plan a hassle-free and safe household move anywhere in the country with our packers and movers.",
    },
    {
      imgUrl: office,
      title: "Office Relocation",
      description:
        "Office packers and movers companies will safely pack and move your expensive office items within time.",
    },
    {
      imgUrl:car,
      title: "Car Transport",
      description:
        "Safely relocate your four-wheeler in specialized car carriers of our car transportation companies.",
    },
    {
      imgUrl: bike,
      title: "Bike Transport",
      description:
        "Let our reliable bike shifting companies handle your two-wheeler relocation in a hassle-free manner.",
    },
    {
      imgUrl: storage,
      title: "Storage Services",
      description:
        "Our top movers and packers offer safe storage services to store your goods with insurance cover.",
    },
    {
      imgUrl: international,
      title: "International Relocation",
      description:
        "International moving companies will relocate your goods or vehicles safely fulfilling all cargo formalities.",
    },
    {
      imgUrl: packmoveimg,
      title: "Packing and Moving",
      description: "Efficient and secure packing and moving services to ensure the safe transport of your belongings."
    },
    {
      imgUrl: office,
      title: "Loading and Unloading",
      description: "Professional loading and unloading services to handle your goods with care and precision."
    }
    
    
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
              image={service.imgUrl}
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
