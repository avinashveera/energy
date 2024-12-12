import React from 'react';
import {  Container, Typography, Grid, Paper } from '@mui/material';
import About from '../../component/home/About'

const VisionMission = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5,mb:4 }}>
    
     <About />
        

      <Grid container spacing={4}>
        {/* Vision Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'secondary.main' }}
            >
              Our Vision
            </Typography>
            <Typography variant="body1">
              To be the most trusted and reliable online platform for booking
              moving services in India, providing seamless and hassle-free
              relocation experiences across all cities, big and small.
            </Typography>
          </Paper>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'secondary.main' }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1">
              To simplify the process of finding dependable packers and movers
              in India by offering a comprehensive, resourceful, and trustworthy
              online database. Our mission is to connect users with service
              providers in cities like Patna, Mumbai, Delhi NCR, Bangalore,
              Hyderabad, and beyond, ensuring quality and reliability.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VisionMission;
