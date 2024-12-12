import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import packingImage from '../../img/about.jpeg';
import loadingImage from '../../img/bike.jpeg';
import transportationImage from '../../img/car.jpeg';
import unpackingImage from '../../img/home.jpeg';
import storageImage from '../../img/international.jpeg';
import relocationImage from '../../img/office.jpeg';

const galleryItems = [
  {
    title: 'Packing Services',
    image: packingImage,
  },
  {
    title: 'Loading Services',
    image: loadingImage,
  },
  {
    title: 'Transportation',
    image: transportationImage,
  },
  {
    title: 'Unpacking Services',
    image: unpackingImage,
  },
  {
    title: 'Storage Facilities',
    image: storageImage,
  },
  {
    title: 'Relocation Support',
    image: relocationImage,
  },
];

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Gallery
      </Typography>
      <Grid container spacing={4}>
        {galleryItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: 'bold' }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
